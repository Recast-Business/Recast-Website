// ─────────────────────────────────────────────────────────────────────────────
// Supabase free-tier keepalive, invoked by Vercel Cron.
//
// WHY THIS EXISTS
//   Supabase free-tier projects pause after ~7 days without database activity.
//   A paused project stops answering, which silently breaks the recast.gg
//   application form (submissions are not saved and no notification emails
//   fire). This endpoint sends one tiny, harmless read query so the project
//   never crosses that threshold. The schedule lives in vercel.json ("crons").
//
// WHY NOT GITHUB ACTIONS
//   This replaces a GitHub Actions cron that failed twice. GitHub ties a
//   scheduled workflow to the account that last committed it; after the July
//   2026 ownership handover that account lost access and the schedule stopped
//   firing silently, while still reporting itself as "active". GitHub sends no
//   alert in that situation because nothing fails, the runs simply never start.
//   The database paused twice as a result. Vercel Cron is tied to the project
//   rather than to a person, so it does not have that failure mode.
//
// CONFIGURATION
//   Reads two env vars that already exist on the Vercel project:
//     VITE_SUPABASE_URL              e.g. https://<ref>.supabase.co
//     VITE_SUPABASE_PUBLISHABLE_KEY  the anon/public key (never service_role)
//   The VITE_ prefix only affects what Vite inlines into the browser bundle;
//   the values are still readable here at runtime. No new secrets required.
//
//   Optional hardening: set a CRON_SECRET env var and Vercel will attach it as
//   an Authorization header on cron invocations, which this endpoint then
//   requires. Left unset, the endpoint is open, which is acceptable because the
//   only thing it can do is perform the exact read it is meant to perform.
//
// VERIFYING
//   Manual check:  curl -i https://recast.gg/api/keepalive   -> expect 200
//   Real proof:    Vercel dashboard > project > Logs, and look for an
//                  invocation nobody triggered by hand. A successful manual
//                  call proves the endpoint works, NOT that the cron is firing.
//                  That distinction is exactly what hid the previous outages.
// ─────────────────────────────────────────────────────────────────────────────

const TABLE = "applications";
const UPSTREAM_TIMEOUT_MS = 20_000;

export default {
  async fetch(request) {
    // 1. Optional shared-secret check. Enforced only when CRON_SECRET is set,
    //    so the default configuration cannot break by omission.
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const auth = request.headers.get("authorization");
      if (auth !== `Bearer ${cronSecret}`) {
        return Response.json(
          { ok: false, error: "Unauthorized" },
          { status: 401 },
        );
      }
    }

    // 2. Read and validate configuration.
    const rawUrl = (process.env.VITE_SUPABASE_URL ?? "").trim();
    const anonKey = (process.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "").trim();

    if (!rawUrl || !anonKey) {
      const missing = [
        !rawUrl && "VITE_SUPABASE_URL",
        !anonKey && "VITE_SUPABASE_PUBLISHABLE_KEY",
      ].filter(Boolean).join(", ");
      console.error(`keepalive: missing env var(s): ${missing}`);
      return Response.json(
        { ok: false, error: `Missing env var(s): ${missing}` },
        { status: 500 },
      );
    }

    // 3. Normalise the URL down to its origin. A pasted value carrying a
    //    trailing slash, a path, or stray whitespace previously produced an
    //    opaque PGRST125 "Invalid path specified in request URL" error.
    const origin = rawUrl.match(/^https?:\/\/[A-Za-z0-9.-]+/)?.[0];
    if (!origin) {
      console.error(`keepalive: VITE_SUPABASE_URL is not a URL: ${rawUrl}`);
      return Response.json(
        { ok: false, error: "VITE_SUPABASE_URL is not a valid URL" },
        { status: 500 },
      );
    }

    const endpoint = `${origin}/rest/v1/${TABLE}?select=id&limit=1`;

    // 4. Perform the ping. A 200 with an empty array is the expected healthy
    //    response: row-level security hides the rows from the anon key, but the
    //    request still counts as database activity, which is the whole point.
    try {
      const upstream = await fetch(endpoint, {
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
        },
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      });

      const body = (await upstream.text()).slice(0, 300);

      if (!upstream.ok) {
        console.error(
          `keepalive FAILED: HTTP ${upstream.status} from ${origin} :: ${body}`,
        );
        return Response.json(
          { ok: false, upstreamStatus: upstream.status, body },
          { status: 502 },
        );
      }

      console.log(`keepalive OK: HTTP 200 from ${origin}`);
      return Response.json({
        ok: true,
        pinged: origin,
        at: new Date().toISOString(),
      });
    } catch (error) {
      // Node's fetch reports almost everything as a bare "fetch failed" and
      // hides the real reason on .cause, so surface both. A DNS failure
      // (ENOTFOUND / EAI_AGAIN) against a *.supabase.co host almost always
      // means the project is paused, which is the exact condition this
      // endpoint exists to prevent.
      const message = error instanceof Error ? error.message : String(error);
      const cause = error?.cause?.code ?? error?.cause?.message ?? null;
      const looksPaused = cause === "ENOTFOUND" || cause === "EAI_AGAIN";

      console.error(
        `keepalive ERROR reaching ${origin}: ${message}` +
          (cause ? ` (cause: ${cause})` : "") +
          (looksPaused ? " -- host does not resolve, the Supabase project is most likely PAUSED" : ""),
      );

      return Response.json(
        {
          ok: false,
          target: origin,
          error: message,
          cause,
          hint: looksPaused
            ? "Host does not resolve. The Supabase project is most likely paused; restore it from the Supabase dashboard."
            : undefined,
        },
        { status: 502 },
      );
    }
  },
};
