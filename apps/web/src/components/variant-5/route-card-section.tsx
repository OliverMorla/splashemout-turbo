"use client";

import { Building2, Shirt, Truck, WashingMachine } from "lucide-react";
import { BlurH1, BlurInViewDiv, BlurP } from "@splashemout/animation/motion/components";

// Real service-line figures shared with variant-4's pricing data, so every
// variant quotes the same numbers.
const SERVICES = [
  {
    id: "pickup",
    name: "Pickup & Delivery",
    tagline: "We grab the bag, wash it, and bring it back to your door.",
    price: "$1.99/lb",
    minimum: "$30 minimum",
    icon: Truck,
  },
  {
    id: "wash-fold",
    name: "Drop-off Wash & Fold",
    tagline: "Drop it at any location, we sort, wash, dry, and fold.",
    price: "$1.69/lb",
    minimum: "$15 minimum",
    icon: Shirt,
  },
  {
    id: "self-service",
    name: "Self-Service Laundry",
    tagline: "Attended laundromats with high-capacity machines.",
    price: "Varies",
    minimum: "No minimum",
    icon: WashingMachine,
  },
  {
    id: "commercial",
    name: "Commercial Laundry",
    tagline: "Recurring pickup for linens, towels, uniforms & more.",
    price: "Custom",
    minimum: "Volume-based",
    icon: Building2,
  },
];

export function RouteCardSection() {
  return (
    <section className="border-t border-v5-line bg-v5-paper px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <BlurH1
          className="font-v5-display text-4xl font-medium tracking-tight text-v5-ink md:text-5xl"
        >
          Every stop on the route.
        </BlurH1>
        <BlurP className="mt-4 max-w-2xl text-base leading-relaxed text-v5-ink/70 md:text-lg">
          Five service lines, one dependable operation. Pricing is posted up
          front &mdash; no hunting for a quote before you can decide.
        </BlurP>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurInViewDiv
                key={service.id}
                delay={index * 0.08}
                className="flex items-start justify-between gap-6 rounded-2xl border border-v5-line bg-white/60 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-v5-green/25 bg-v5-green/10 text-v5-green">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-v5-display text-xl font-medium text-v5-ink">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-v5-ink/65">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-v5-display text-lg font-medium text-v5-green">
                    {service.price}
                  </div>
                  <div className="text-xs text-v5-ink/55">
                    {service.minimum}
                  </div>
                </div>
              </BlurInViewDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
