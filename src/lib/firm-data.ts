import { FileSignature, Landmark, Scale, type LucideIcon } from "lucide-react";

export const FIRM = {
  name: "Jerome D. Stark, PC",
  tagline: "Attorney at Law",
  phoneDisplay: "714-558-8014",
  phoneHref: "tel:+17145588014",
  address: "540 N Golden Cir Dr #203, Santa Ana, CA 92705",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=540+N+Golden+Cir+Dr+%23203%2C+Santa+Ana%2C+CA+92705",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=540%20N%20Golden%20Cir%20Dr%20%23203%2C%20Santa%20Ana%2C%20CA%2092705&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export interface NavLink {
  to: "/" | "/about" | "/services" | "/contact";
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Practice Areas" },
  { to: "/contact", label: "Contact" },
];

export interface Service {
  slug: "business-litigation" | "commercial-law" | "corporate-law";
  title: string;
  tagline: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    slug: "business-litigation",
    title: "Business Litigation",
    tagline: "Resolving disputes with a trial-ready approach",
    description:
      "When a business dispute threatens your company, you need counsel who is prepared to take the case all the way to verdict. Jerome D. Stark, PC represents companies and business owners in high-stakes litigation, from the first demand letter through trial and appeal.",
    items: [
      "Breach of contract claims",
      "Partnership & shareholder disputes",
      "Business torts & unfair competition",
      "Injunctive relief & emergency remedies",
      "Trials, arbitration & mediation",
    ],
    icon: Scale,
  },
  {
    slug: "commercial-law",
    title: "Commercial Law",
    tagline: "Agreements and transactions built to hold up",
    description:
      "Strong commercial relationships start with clear, enforceable agreements. The firm drafts, negotiates, and advises on the contracts and commercial matters that keep your business moving — and helps you avoid the disputes that slow it down.",
    items: [
      "Contract drafting & negotiation",
      "Commercial transactions & agreements",
      "Vendor, supplier & distribution arrangements",
      "Trade secrets & confidential information",
      "Dispute avoidance & risk management",
    ],
    icon: FileSignature,
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    tagline: "Sound legal footing for your company",
    description:
      "From formation through governance and growth, the firm advises businesses on the corporate decisions that shape their future — practical, straight-forward counsel for closely held companies and their owners.",
    items: [
      "Entity formation & restructuring",
      "Corporate governance & shareholder agreements",
      "Mergers, acquisitions & divestitures",
      "Operating agreements & buy-sell provisions",
      "Ongoing general counsel for businesses",
    ],
    icon: Landmark,
  },
];
