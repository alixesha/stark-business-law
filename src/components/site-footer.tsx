import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { FIRM, NAV_LINKS, SERVICES } from "@/lib/firm-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl">Jerome D. Stark, PC</p>
          <div className="mt-3 h-px w-14 bg-gold" />
          <p className="mt-4 text-sm leading-relaxed text-background/75">
            Business litigation, commercial law, and corporate law counsel for companies and
            business owners in Santa Ana and throughout Orange County, California.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Site</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-background/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Practice Areas
          </p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services"
                  className="text-sm text-background/80 transition-colors hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</p>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a
                href={FIRM.phoneHref}
                className="flex items-start gap-3 text-background/80 transition-colors hover:text-gold"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                {FIRM.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={FIRM.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-background/80 transition-colors hover:text-gold"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                {FIRM.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-background/60">
            The information on this website is for general information purposes only. Nothing on
            this site should be taken as legal advice for any individual case or situation. This
            information is not intended to create, and receipt or viewing does not constitute, an
            attorney-client relationship.
          </p>
          <p className="mt-3 text-xs text-background/60">
            &copy; {new Date().getFullYear()} Jerome D. Stark, PC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
