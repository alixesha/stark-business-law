import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import officeImage from "@/assets/office-building.jpg";
import { Reveal } from "@/components/reveal";
import { FIRM } from "@/lib/firm-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact | Jerome D. Stark, PC — Santa Ana, CA | 714-558-8014",
      },
      {
        name: "description",
        content:
          "Contact Jerome D. Stark, PC — 540 N Golden Cir Dr #203, Santa Ana, CA 92705. Call 714-558-8014 to schedule a consultation.",
      },
      { property: "og:title", content: "Contact Jerome D. Stark, PC" },
      {
        property: "og:description",
        content:
          "Call 714-558-8014 or visit the Santa Ana office to schedule a consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-deep py-16 text-background lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal from="right">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Get in touch</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              Call the office to schedule a consultation about your business dispute, transaction,
              or corporate matter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Office image enters from the left, contact details enter from the right */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <img
              src={officeImage}
              alt="The office building in Santa Ana, California"
              loading="lazy"
              width={1536}
              height={1024}
              className="aspect-[3/2] w-full rounded-xl object-cover shadow-xl"
            />
            <div className="mt-6 overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Map showing the firm's office in Santa Ana, California"
                src={FIRM.mapEmbedUrl}
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal from="right">
            <div className="space-y-6">
              <article className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-steel">
                  <Phone className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="mt-5 font-serif text-xl">By Phone</h2>
                <a
                  href={FIRM.phoneHref}
                  className="mt-2 inline-block font-serif text-2xl text-steel transition-colors hover:text-navy"
                >
                  {FIRM.phoneDisplay}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Telephone consultations are often the quickest way to get started. If the line is
                  busy or it is after hours, leave a message and your call will be returned.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-steel">
                  <MapPin className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="mt-5 font-serif text-xl">Office</h2>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  {FIRM.address}
                </p>
                <a
                  href={FIRM.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-navy"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </article>

              <article className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-steel">
                  <Clock3 className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="mt-5 font-serif text-xl">Consultations</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Consultations are by appointment. Call the office to arrange a time to discuss
                  your matter.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
