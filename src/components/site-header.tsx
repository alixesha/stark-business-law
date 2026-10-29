import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { FIRM, NAV_LINKS } from "@/lib/firm-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy-deep text-background backdrop-blur transition-shadow ${
        scrolled ? "shadow-lg shadow-navy-deep/40" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center border border-gold/70 font-serif text-lg text-gold">
            JS
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg tracking-wide">Jerome D. Stark, PC</span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-gold/80">
              Attorney at Law
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-background/85"
                }`
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FIRM.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {FIRM.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-background transition-colors hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-deep px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block border-b border-white/10 py-3 text-base text-background/90 transition-colors hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={FIRM.phoneHref}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-navy-deep"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {FIRM.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
