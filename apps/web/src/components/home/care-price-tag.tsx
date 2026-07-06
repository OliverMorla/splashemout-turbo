import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { cn } from "../../../../../packages/utils/src/class-names";
import { CareSymbol } from "./care-symbols";

// Secondary prices — flat, honest, no persuasion. The big tag carries the lead.
const SECONDARY = [
  { label: "Pickup & delivery from", value: "$30 min" },
  { label: "Self-service", value: "Pay per load" },
  { label: "Commercial", value: "Custom quote" },
];

export function CarePriceTag() {
  return (
    <section className="relative overflow-hidden bg-muted/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left — the hanging price tag */}
        <BlurInViewDiv y={16} className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative -rotate-1 rounded-2xl border border-dashed border-[color:var(--ticket-line)] bg-ticket-paper p-8 text-[color:var(--ticket-ink)] shadow-2xl">
            {/* string hole */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-muted/60 ring-1 ring-[color:var(--ticket-line)]"
            >
              <span className="size-2 rounded-full bg-[color:var(--ticket-line)]" />
            </span>

            <div className="flex items-center justify-between">
              <span className="font-sans text-[0.62rem] font-bold tracking-[0.22em] uppercase">
                Wash &amp; fold
              </span>
              <span className="font-sans text-[0.62rem] tracking-[0.16em] uppercase opacity-60">
                Drop-off
              </span>
            </div>

            <p className="mt-4 font-serif text-7xl leading-none">
              $1.69
              <span className="ml-2 font-sans text-lg align-middle opacity-70">
                /lb
              </span>
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-dashed border-[color:var(--ticket-line)] pt-5 font-sans text-sm">
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase opacity-60">
                  Minimum
                </dt>
                <dd className="mt-1 font-semibold tabular-nums">$15</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase opacity-60">
                  Turnaround
                </dt>
                <dd className="mt-1 font-semibold">Next day</dd>
              </div>
            </dl>
          </div>
        </BlurInViewDiv>

        {/* Right — context + secondary prices */}
        <BlurInViewDiv y={16}>
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Pricing, on the tag
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-foreground sm:text-5xl">
            What it costs, before you ask.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            No coupons to chase and no quotes to wait for on the everyday stuff.
            Per-pound wash-and-fold with a low minimum and next-day pickup.
          </p>

          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
            {SECONDARY.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <span className="font-sans text-sm text-muted-foreground">
                  {row.label}
                </span>
                <span className="font-serif text-lg text-foreground">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href={"/pricing" as Route}
            className={cn(
              "mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand",
            )}
          >
            See full pricing
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </BlurInViewDiv>
      </div>

      {/* Faint wash-tub watermark tying the band to the care-symbol system */}
      <CareSymbol
        name="wash"
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-10 size-64 text-foreground/[0.04]"
      />
    </section>
  );
}
