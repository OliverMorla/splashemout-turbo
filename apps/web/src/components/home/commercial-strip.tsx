import Link from "next/link";
import type { Route } from "next";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { Button } from "@splashemout/ui/button";

const INDUSTRIES = [
  "Airbnb / VRBO",
  "Restaurants",
  "Spas & salons",
  "Gyms",
  "Clinics",
  "Hotels",
  "Equine",
];

const OPERATIONAL_DETAILS = [
  { label: "Recurring pickup", value: "Weekly or twice weekly" },
  { label: "Volume", value: "Scoped to your linens & uniforms" },
  { label: "Turnaround", value: "Built around your schedule" },
  { label: "Pricing", value: "Custom quote, no surprises" },
];

export function CommercialStrip() {
  return (
    <section className="bg-brand-solid">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <BlurInViewDiv y={16}>
            <h2 className="font-serif text-3xl text-background sm:text-4xl">
              Laundry service for businesses that run on clean linens.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-background/80">
              Set up recurring pickup for towels, linens, uniforms, blankets,
              and specialty laundry with pricing built around your volume and
              schedule.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {INDUSTRIES.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-background/25 px-3 py-1 font-sans text-xs font-semibold text-background/90"
                >
                  {industry}
                </li>
              ))}
            </ul>

            <Link href={"/commercial/request-a-bid" as Route}>
              <Button
                variant="brand"
                size="lg"
                className="mt-7 h-11 border-background bg-background px-5 text-brand-solid hover:bg-background/90"
              >
                Request a Bid
              </Button>
            </Link>
          </BlurInViewDiv>

          <BlurInViewDiv
            y={16}
            delay={0.15}
            className="grid grid-cols-2 gap-3"
          >
            {OPERATIONAL_DETAILS.map((detail) => (
              <div
                key={detail.label}
                className="rounded-lg border border-background/20 bg-background/5 p-4"
              >
                <p className="font-sans text-[0.65rem] font-semibold tracking-[0.16em] text-background/60 uppercase">
                  {detail.label}
                </p>
                <p className="mt-1 font-sans text-sm font-medium text-background">
                  {detail.value}
                </p>
              </div>
            ))}
          </BlurInViewDiv>
        </div>
      </div>
    </section>
  );
}
