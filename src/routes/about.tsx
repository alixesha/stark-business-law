import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, MessagesSquare, Phone, type LucideIcon } from "lucide-react";
import attorneyImage from "@/assets/attorney-portrait.jpg";
import { Reveal } from "@/components/reveal";
import { FIRM } from "@/lib/firm-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About | Jerome D. Stark, PC — Business Litigation Attorney in Santa Ana, CA",
      },
      {
        name: "description",
        content:
          "Learn about Jerome D. Stark, PC — a Santa Ana law practice devoted to business litigation, commercial law, and corporate law. Call 714-558-8014.",
      },
      { property: "og:title", content: "About Jerome D. Stark, PC" },
      {
        property: "og:description",
        content:
          "A Santa Ana law practice devoted to the legal needs of California businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "You are kept informed at every stage of your matter, in plain language — never left wondering where things stand.",
  },
  {
    icon: Compass,
    title: "Practical strategy",
    text: "Legal advice should serve the business. Every recommendation is weighed against your goals, costs, and risks.",
  },
  {
    icon: HeartHandshake,
    title: "Personal commitment",
    text: "Clients work directly with the attorney responsible for their matter, and their matters are treated with care.",
  },
];

function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-deep py-16 text-background lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal from="right">
            <p className="eyebrow">About the Firm</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Jerome D. Stark, PC</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              A Santa Ana law practice devoted to the legal needs of businesses and the people who
              run them — serving clients throughout Orange County, California.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Attorney portrait enters from the left, bio text enters from the right */}
      <section className="py-20 lg:py-28">
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
            <p className="eyebrow-muted">Your Attorney</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Jerome D. Stark</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Jerome D. Stark, PC represents companies, business owners, and entrepreneurs in
              business litigation, commercial law, and corporate law. The firm's clients range from
              closely held companies to established enterprises facing significant disputes or
              important transactions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Clients come to the firm for clear judgment under pressure — in contract disputes,
              partner and shareholder disagreements, and the agreements that shape a company's
              future. Each matter is handled with careful preparation and a focus on practical,
              business-minded outcomes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The firm's approach is straightforward: understand the business first, then provide
              counsel that serves it — whether that means negotiating hard at the table or trying
              the case in court.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/60 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal from="right" className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-muted">How the Firm Works</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              A practice built around its clients
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} from="right" delay={i * 150}>
                <article className="h-full rounded-xl border border-border bg-card p-8 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-steel">
                    <value.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-6 font-serif text-xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-navy-deep py-20 text-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal from="right">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Speak with the firm about your matter
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-background/75">
              Call to schedule a consultation about your dispute, transaction, or corporate matter.
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
