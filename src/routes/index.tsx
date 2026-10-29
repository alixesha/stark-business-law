import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Landmark,
  MapPin,
  Phone,
  Scale,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";
import attorneyImage from "@/assets/attorney-portrait.jpg";
import { Reveal } from "@/components/reveal";
import { FIRM, SERVICES } from "@/lib/firm-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Jerome D. Stark, PC | Business Litigation & Corporate Law — Santa Ana, CA",
      },
      {
        name: "description",
        content:
          "Business litigation, commercial law, and corporate law attorney in Santa Ana, California. Jerome D. Stark, PC — call 714-558-8014 for a consultation.",
      },
      { property: "og:title", content: "Jerome D. Stark, PC" },
      {
        property: "og:description",
        content:
          "Business litigation, commercial law, and corporate law attorney in Santa Ana, California.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TRUST_ITEMS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Scale,
    title: "Trial-ready litigation",
    text: "Prepared to take your dispute from demand letter to verdict.",
  },
  {
    icon: UserCheck,
    title: "Direct attorney access",
    text: "Work personally with your attorney, not a case manager.",
  },
  {
    icon: Landmark,
    title: "Full-service counsel",
    text: "Litigation, commercial transactions, and corporate matters.",
  },
  {
    icon: MapPin,
    title: "Santa Ana based",
    text: "Serving businesses throughout Orange County, California.",
  },
];

function Index() {
  return (
    <>
      {/* Hero — image enters from the left, text enters from the right */}
      <section className="bg-navy-deep text-background">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <Reveal from="left" className="relative min-h-[300px] overflow-hidden lg:min-h-[600px]">
            <img
              src={heroImage}
              alt="The firm's law office conference room overlooking the city at dusk"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/20 via-navy-deep/40 to-navy-deep lg:to-navy-deep" />
          </Reveal>
          <div className="relative flex items-center px-6 py-16 sm:px-10 lg:py-24 xl:px-16">
            <Reveal from="right">
              <p className="eyebrow">Jerome D. Stark, PC &middot; Santa Ana, California</p>
              <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.4rem]">
                Resolute counsel for California businesses
              </h1>
              <div className="mt-6 h-px w-20 bg-gold" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
                Jerome D. Stark, PC represents companies and business owners in business
                litigation, commercial law, and corporate law &mdash; with personal attention from
                your attorney at every step.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={FIRM.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {FIRM.phoneDisplay}
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:border-gold hover:text-gold"
                >
                  View Practice Areas
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal key={item.title} from="right" delay={i * 120}>
              <div className="flex items-start gap-4">
                <item.icon className="mt-1 h-8 w-8 shrink-0 text-steel" strokeWidth={1.5} aria-hidden />
                <div>
                  <p className="font-serif text-base font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal from="right" className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-muted">Practice Areas</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Focused legal services for business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Three core areas of law, handled with the same standard: practical advice, careful
              preparation, and personal attention.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} from="right" delay={i * 150}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-steel/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-steel transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                    <service.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-6 font-serif text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm font-medium text-steel">{service.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-3 shrink-0 bg-gold" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-navy"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser — portrait enters from the left, text from the right */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-xl border border-gold/50" aria-hidden />
              <img
                src={attorneyImage}
                alt="Portrait of attorney Jerome D. Stark"
                loading="lazy"
                width={1024}
                height={1280}
                className="relative aspect-[4/5] w-full max-w-md rounded-xl object-cover shadow-xl"
              />
            </div>
          </Reveal>
          <Reveal from="right">
            <p className="eyebrow-muted">Meet Your Attorney</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Jerome D. Stark</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Jerome D. Stark, PC is a Santa Ana law practice devoted to the legal needs of
              businesses and the people who run them. Clients come to the firm for clear judgment
              in disputes and dependable guidance in their transactions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether your company is facing a lawsuit, negotiating an important agreement, or
              planning its next step, you receive counsel tailored to your business &mdash; not a
              one-size-fits-all approach.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Personal attention from your attorney",
                "Practical, business-minded advice",
                "Courtroom experience when it counts",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
            >
              More About the Firm
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-navy-deep py-20 text-background lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal from="right">
            <p className="eyebrow">Get Started</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Discuss your business with an experienced attorney
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-background/75">
              Call the office to schedule a consultation about your dispute, transaction, or
              corporate matter.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href={FIRM.phoneHref}
                className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-base font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {FIRM.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-background/30 px-7 py-3.5 text-base font-semibold text-background transition-colors hover:border-gold hover:text-gold"
              >
                <MapPin className="h-5 w-5" aria-hidden />
                Contact Details
              </Link>
            </div>
            <p className="mt-7 flex items-center justify-center gap-2 text-sm text-background/70">
              <MapPin className="h-4 w-4 text-gold" aria-hidden />
              {FIRM.address}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
