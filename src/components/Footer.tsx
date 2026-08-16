import { Link } from "react-router-dom";
import recastIcon from "@/assets/recast-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 md:px-12 py-8 md:py-10 flex flex-col items-center gap-6 md:gap-8" role="contentinfo">
      <div className="w-full flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Link to="/" className="flex items-center">
          <img src={recastIcon} alt="Recast" className="h-12" />
        </Link>
        <ul className="flex flex-wrap justify-center gap-8">
          <li><Link to="/brands" className="text-muted-foreground text-[11px] tracking-[0.08em] uppercase font-medium hover:text-foreground transition-colors">For Brands</Link></li>
          <li><Link to="/creators" className="text-muted-foreground text-[11px] tracking-[0.08em] uppercase font-medium hover:text-foreground transition-colors">For Creators</Link></li>
          <li><a href="/#how" className="text-muted-foreground text-[11px] tracking-[0.08em] uppercase font-medium hover:text-foreground transition-colors">How It Works</a></li>
          <li><Link to="/blog" className="text-muted-foreground text-[11px] tracking-[0.08em] uppercase font-medium hover:text-foreground transition-colors">Blog</Link></li>
          <li><Link to="/privacy" className="text-muted-foreground text-[11px] tracking-[0.08em] uppercase font-medium hover:text-foreground transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="text-muted-foreground text-[11px] tracking-[0.08em] uppercase font-medium hover:text-foreground transition-colors">Terms of Use</Link></li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between border-t border-border pt-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Recast. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/50">
            Recast LLC · Las Vegas, Nevada
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:sign@recast.gg" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email us">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
          {/*
            Instagram link removed August 2026: the recast Instagram account is
            currently down, so the icon pointed visitors at a dead page. Restore
            this block when the account is back rather than rebuilding it.
            <a href="https://www.instagram.com/recast/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
