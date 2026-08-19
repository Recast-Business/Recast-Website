// ─────────────────────────────────────────────────────────────────────────────
// Dead-man's-switch heartbeat for the scheduled functions.
//
// WHY A HEARTBEAT AND NOT A HEALTH CHECK
//   The Supabase project has paused twice, and on both occasions everything
//   looked fine. The GitHub Actions cron that was supposed to prevent it
//   reported itself "active" and simply never ran. Nothing failed, so nothing
//   alerted. A monitor that runs inside the same cron cannot catch that: if
//   the cron stops firing, the monitor stops firing with it, and silence is
//   indistinguishable from health.
//
//   The fix is to invert it. The cron reports IN to an external service on
//   every run, and that service alerts when a report does not arrive. Silence
//   then becomes the alarm rather than the failure mode.
//
// CONFIGURATION
//   HEALTHCHECK_URL   The ping URL for this job, from healthchecks.io (or any
//                     service using the same /ping, /ping/fail convention).
//                     Unset means this is a no-op, so nothing here can break a
//                     deployment that has not been configured yet.
//
// GUARANTEES
//   This never changes the outcome of the job it is attached to. Every failure
//   is caught and logged. The monitoring cannot take down the thing it
//   monitors.
// ─────────────────────────────────────────────────────────────────────────────

const PING_TIMEOUT_MS = 5_000;

/**
 * Report the outcome of a scheduled run.
 *
 * @param {"ok"|"fail"} outcome
 *   "ok" resets the timer. "fail" alerts immediately rather than waiting for
 *   the grace period to lapse, which matters when the database is already down.
 * @param {string} [detail]
 *   Short context attached to the ping, visible in the monitor's event log.
 */
export async function heartbeat(outcome, detail) {
  const base = (process.env.HEALTHCHECK_URL ?? "").trim().replace(/\/+$/, "");
  if (!base) return;

  const url = outcome === "ok" ? base : `${base}/fail`;

  try {
    // Awaited rather than fired and forgotten: a serverless function can be
    // frozen the moment it returns a response, which would drop an in-flight
    // request and leave the monitor thinking the run never happened.
    const res = await fetch(url, {
      method: "POST",
      body: (detail ?? "").slice(0, 1000),
      signal: AbortSignal.timeout(PING_TIMEOUT_MS),
    });
    if (!res.ok) {
      console.error(`heartbeat: monitor returned HTTP ${res.status}`);
    }
  } catch (error) {
    // Deliberately swallowed. A monitoring outage is not a job failure, and
    // the log line is enough to notice it.
    const message = error instanceof Error ? error.message : String(error);
    console.error(`heartbeat: could not reach the monitor: ${message}`);
  }
}
