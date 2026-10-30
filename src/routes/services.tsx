import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import litigationImage from "@/assets/business-litigation.jpg";
import commercialImage from "@/assets/hero-law-office.jpg";
import corporateImage from "@/assets/office-building.jpg";
import realEstateImage from "@/assets/real-estate-law.jpg";
import labourImage from "@/assets/labour-litigation-law.jpg";
import { Reveal } from "@/components/reveal";
import { FIRM, SERVICES } from "@/lib/firm-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Practice Areas | Business Litigation, Commercial & Corporate Law — Santa Ana, CA",
      },
      {
        name: "description",
        content:
          "Business litigation, commercial law, corporate law, real estate law, and labour litigation services from Jerome D. Stark, PC in Santa Ana, California. Call 714-558-8014.",
      },
      { property: "og:title", content: "Practice Areas | Jerome D. Stark, PC" },
      {
        property: "og:description",
        content:
          "Business litigation, commercial law, and corporate law services in Santa Ana, California.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const SERVICE_IMAGES: Record<string, string> = {
  "business-litigation": litigationImage,
  "commercial-law": commercialImage,
  "corporate-law": corporateImage,
  "real-estate-law": realEstateImage,
  "labour-litigation-law": labourImage,
};

const SERVICE_ALTS: Record<string, string> = {
  "business-litigation": "Business professionals signing a formal legal agreement",
  "commercial-law": "The firm's conference room with shelves of legal volumes",
  "corporate-law": "The firm's office building in Santa Ana, California",
  "real-estate-law": "A modern commercial office building in California at golden hour",
  "labour-litigation-law": "A serious negotiation between parties over a workplace dispute",
};

function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-deep py-16 text-background lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal from="right">
            <p className="eyebrow">Practice Areas</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Focused legal services for business
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              Five core areas of law, handled with the same standard: practical advice, careful
              preparation, and personal attention.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Each service: image enters from the left, text enters from the right */}
      {SERVICES.map((service, i) => (
        <section key={service.slug} className={`py-16 lg:py-24 ${i % 2 === 1 ? "bg-secondary/60" : ""}`}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <Reveal from="left" className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <img
                src={SERVICE_IMAGES[service.slug]}
                alt={SERVICE_ALTS[service.slug]}
                loading="lazy"
                width={1536}
                height={1024}
                className="aspect-[3/2] w-full rounded-xl object-cover shadow-xl"
              />
            </Reveal>
            <Reveal from="right" className={i % 2 === 1 ? "lg:order-1" : undefined}>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-steel">
                <service.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="eyebrow-muted mt-6">0{i + 1}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{service.title}</h2>
              <p className="mt-3 text-sm font-semibold text-steel">{service.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-7 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={FIRM.phoneHref}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Discuss Your Matter
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Call to action */}
      <section className="bg-navy-deep py-20 text-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal from="right">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Not sure which area fits your situation?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-background/75">
              Call the office and describe your situation — the firm will tell you plainly how it
              can help.
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
                Contact Details
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
