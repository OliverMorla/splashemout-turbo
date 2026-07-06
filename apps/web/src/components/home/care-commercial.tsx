import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { CareSymbol } from "./care-symbols";

// What commercial buyers actually need to scope a quote — surfaced as plain
// tags so the bid form is clear before any sales language.
const HANDLES = ["Linens", "Towels", "Uniforms", "Bedding", "Table linens"];

export function CareCommercial() {
  return (
    <section id="commercial" className="relative overflow-hidden bg-muted/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <BlurInViewDiv y={16} className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/images/marketing/foltex-automated-folding-machine-joe-dan-3.jpg"
              alt="A Splash 'Em Out attendant operating automated folding equipment for folded laundry orders."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </BlurInViewDiv>

        <BlurInViewDiv y={16} className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            <CareSymbol name="industrial" className="size-4" aria-hidden="true" />
            Commercial laundry
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-foreground sm:text-5xl">
            Laundry that keeps your business running.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            Recurring pickup for Airbnb turnovers, restaurants, spas, salons,
            gyms, clinics, and hotels. Tell us the volume, frequency, turnaround,
            and laundry type — we&apos;ll send a clear quote back fast.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {HANDLES.map((item) => (
              <li
                key={item}
                className="rounded-md border border-dashed border-[color:var(--ticket-line)] bg-ticket-paper px-2.5 py-1 font-sans text-xs font-semibold text-[color:var(--ticket-ink)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={"/commercial/request-a-bid" as Route}
              className={cn(buttonVariants({ variant: "matte", size: "lg" }), "h-12 px-6 text-base")}
            >
              Request a bid
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={"/commercial" as Route}
              className="font-sans text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Commercial overview
            </Link>
          </div>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
