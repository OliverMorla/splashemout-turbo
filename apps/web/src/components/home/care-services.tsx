import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { CareSymbol, type CareSymbolName } from "./care-symbols";

type Service = {
  name: CareSymbolName;
  title: string;
  blurb: string;
  tag: string;
  href: Route;
};

// The five service lines mapped to the care-symbol system. Each tag carries
// price, minimum, or turnaround so the decision and the cost sit together.
const SERVICES: Service[] = [
  {
    name: "wash",
    title: "Self-Service Laundry",
    blurb: "Attended laundromats with large, ready machines and seating.",
    tag: "Pay per load",
    href: "/services/self-service-laundry" as Route,
  },
  {
    name: "fold",
    title: "Wash & Fold",
    blurb: "Drop it off. We wash, dry, and fold it back the next day.",
    tag: "$1.69/lb · $15 min",
    href: "/services/wash-and-fold" as Route,
  },
  {
    name: "deliver",
    title: "Pickup & Delivery",
    blurb: "We grab the bag from your porch and bring it back clean.",
    tag: "24–48 hr turnaround",
    href: "/services/pickup-and-delivery" as Route,
  },
  {
    name: "industrial",
    title: "Commercial Laundry",
    blurb: "Recurring linens, towels, and uniforms on a set schedule.",
    tag: "Custom quote",
    href: "/services/commercial-laundry" as Route,
  },
  {
    name: "dryclean",
    title: "Dry Cleaning Pickup",
    blurb: "Routed to a trusted local cleaner and delivered with your wash.",
    tag: "Add to any pickup",
    href: "/services/pickup-and-delivery" as Route,
  },
];

export function CareServices() {
  return (
    <section id="services" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv y={14} className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Every wash cycle
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-foreground sm:text-5xl">
            Five ways to get laundry done.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Pick the cycle that fits the load. Prices and turnaround are on the
            tag so you know the cost before you commit.
          </p>
        </BlurInViewDiv>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <BlurInViewDiv
              key={service.title}
              y={16}
              delay={Math.min(index * 0.06, 0.24)}
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-muted/50 text-brand-solid transition-colors group-hover:border-brand/30 group-hover:bg-brand/5">
                <CareSymbol name={service.name} className="size-7" />
              </span>

              <h3 className="mt-5 font-serif text-xl text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {service.blurb}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-dashed border-[color:var(--ticket-line)] pt-4">
                <span className="rounded-md border border-dashed border-[color:var(--ticket-line)] bg-ticket-paper px-2.5 py-1 font-sans text-xs font-semibold text-[color:var(--ticket-ink)]">
                  {service.tag}
                </span>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-0.5 font-sans text-xs font-semibold text-brand transition-colors hover:text-brand-solid"
                  aria-label={`${service.title} — learn more`}
                >
                  Learn more
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </BlurInViewDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
