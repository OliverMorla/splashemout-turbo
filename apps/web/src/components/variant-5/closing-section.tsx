"use client";

import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BlurH1, BlurInViewDiv, BlurP } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";

const LOCATIONS = [
  {
    name: "Richmond Rd",
    address: "2285 Richmond Rd, Lexington, KY 40502",
    phone: "859-268-4330",
  },
  {
    name: "Versailles Rd",
    address: "1801 Versailles Rd, Lexington, KY 40504",
    phone: "859-254-4330",
  },
];

export function ClosingSection() {
  return (
    <section className="bg-v5-green px-6 py-24 text-v5-paper md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex -rotate-3 items-center gap-2 rounded-full border-2 border-dashed border-v5-amber/70 px-4 py-1.5 text-v5-amber">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                Route confirmed
              </span>
            </div>
            <BlurH1 className="font-v5-display text-4xl font-medium tracking-tight md:text-5xl">
              Ready when you are.
            </BlurH1>
            <BlurP className="mt-4 text-base leading-relaxed text-v5-paper/80 md:text-lg">
              Schedule a pickup, walk into an attended laundromat, or send us
              your commercial volume &mdash; we&apos;ll build the bid around
              it.
            </BlurP>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://splashemout.curbsidelaundries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 rounded-full bg-v5-amber px-8 text-base font-semibold text-v5-ink hover:bg-v5-amber/90",
                )}
              >
                Schedule Pickup
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
              <Link
                href={"/commercial/request-a-bid" as Route}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-14 rounded-full border-v5-paper/30 bg-transparent px-8 text-base font-semibold text-v5-paper hover:bg-v5-paper/10",
                )}
              >
                Request a Commercial Bid
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-auto lg:min-w-[22rem]">
            {LOCATIONS.map((location, index) => (
              <BlurInViewDiv
                key={location.name}
                delay={index * 0.1}
                className="rounded-2xl border border-v5-paper/15 bg-v5-paper/5 p-5"
              >
                <div className="flex items-center gap-2 font-v5-display text-lg font-medium">
                  <MapPin className="h-4 w-4 text-v5-amber" aria-hidden="true" />
                  {location.name}
                </div>
                <p className="mt-1 text-sm text-v5-paper/70">
                  {location.address}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-v5-paper/70">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {location.phone}
                </p>
              </BlurInViewDiv>
            ))}
            <Link
              href={"/locations" as Route}
              className="text-sm font-medium text-v5-amber underline-offset-4 hover:underline"
            >
              See all locations &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
