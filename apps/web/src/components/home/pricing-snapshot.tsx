import Link from "next/link";
import type { Route } from "next";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { Button } from "@splashemout/ui/button";

const PRICE_LINES = [
  {
    label: "Drop-off wash-and-fold",
    price: "$1.69/lb",
    minimum: "$15 minimum",
    note: "Best when you are already near a Splash 'Em Out location.",
  },
  {
    label: "Pickup, recurring",
    price: "$2.09/lb",
    minimum: "$30 minimum",
    note: "Best for weekly laundry routines.",
  },
  {
    label: "Pickup, as needed",
    price: "$2.39/lb",
    minimum: "$30 minimum",
    note: "Best when laundry piles up and you need it handled.",
  },
  {
    label: "Commercial laundry",
    price: "Custom quote",
    minimum: "Volume pricing",
    note: "Best for recurring towels, linens, uniforms, and specialty loads.",
  },
];

export function PricingSnapshot() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <BlurInViewDiv y={16}>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Know the price before you choose the service.
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">
              Clear per-pound pricing for wash-and-fold and pickup, with custom
              quotes for commercial laundry.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={"/pricing" as Route}>
                <Button variant="brand" size="lg" className="h-11 px-5">
                  View Full Pricing
                </Button>
              </Link>
              <Link href={"/schedule" as Route}>
                <Button variant="outline" size="lg" className="h-11 px-5">
                  Schedule Pickup
                </Button>
              </Link>
            </div>
          </BlurInViewDiv>

          <BlurInViewDiv
            y={16}
            delay={0.1}
            className="receipt-panel rounded-lg px-6 py-8 sm:px-8"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Splash &apos;Em Out &middot; Price List
            </p>
            <ul className="hero-ticket-rule mt-4 divide-y divide-border border-t border-border">
              {PRICE_LINES.map((line) => (
                <li key={line.label} className="flex flex-col gap-1 py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm font-semibold text-foreground sm:text-base">
                      {line.label}
                    </span>
                    <span className="font-sans text-base font-bold tabular-nums text-brand-solid sm:text-lg">
                      {line.price}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-sans text-xs text-muted-foreground">
                      {line.note}
                    </span>
                    <span className="font-sans text-xs font-medium tabular-nums text-muted-foreground">
                      {line.minimum}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-dashed border-border pt-3 font-sans text-[0.65rem] text-muted-foreground">
              Final totals reflect weight after cleaning.
            </p>
            <p className="mt-3 inline-flex items-center rounded-full bg-promo/10 px-3 py-1.5 font-sans text-xs font-semibold text-promo">
              Free laundry bag on your first pickup order &middot; 10% off
              wash-and-fold for military and first responders
            </p>
          </BlurInViewDiv>
        </div>
      </div>
    </section>
  );
}
