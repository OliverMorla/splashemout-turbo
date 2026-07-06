"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { useReducedMotion } from "@splashemout/animation/motion/react";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";

const STEPS = [
  {
    title: "Schedule your pickup",
    detail: "Choose your service, address, and pickup instructions.",
  },
  {
    title: "Set out your laundry",
    detail:
      "Leave it in the spot you select. First pickup orders can include a laundry bag when the offer is active.",
  },
  {
    title: "We wash, dry, and fold",
    detail:
      "Your order is handled by a local laundry team, not mailed away or routed through a faceless app.",
  },
  {
    title: "Get it back ready to put away",
    detail: "Clean, folded laundry comes back within the stated service window.",
  },
];

export function LoadPath() {
  const reducedMotion = !!useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion || !svgRef.current) return;
    const node = svgRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <BlurInViewDiv y={16}>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              The Load Path
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
              Pickup laundry without the guesswork.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
              The Load Path shows exactly what happens after you schedule.
            </p>

            <svg
              ref={svgRef}
              viewBox="0 0 400 220"
              className="mt-8 w-full max-w-md"
              aria-hidden="true"
            >
              <path
                d="M20 20 V80 H380 V140 H20 V200"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth={2}
              />
              <path
                d="M20 20 V80 H380 V140 H20 V200"
                fill="none"
                className="load-path-line"
                data-trigger="view"
                data-in-view={inView}
                stroke="var(--color-brand)"
                strokeWidth={2}
              />
              {[
                { cx: 20, cy: 20 },
                { cx: 380, cy: 80 },
                { cx: 20, cy: 140 },
                { cx: 20, cy: 200 },
              ].map((point, index) => (
                <circle
                  key={index}
                  cx={point.cx}
                  cy={point.cy}
                  r={6}
                  className="fill-brand"
                />
              ))}
            </svg>

            <Link
              href={"/schedule" as Route}
              className={cn(buttonVariants({ variant: "brand", size: "lg" }), "mt-4 h-11 px-5")}
            >
              Schedule Pickup
            </Link>
            <Link
              href={"/pricing" as Route}
              className="ml-4 font-sans text-sm font-semibold text-brand hover:underline"
            >
              View Pickup Pricing
            </Link>
          </BlurInViewDiv>

          <div className="flex flex-col gap-5">
            {STEPS.map((step, index) => (
              <BlurInViewDiv
                key={step.title}
                y={16}
                delay={0.1 * index}
                className="flex gap-4 rounded-xl border border-border p-4 sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-solid font-sans text-sm font-bold text-background">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs leading-5 text-muted-foreground sm:text-sm">
                    {step.detail}
                  </p>
                </div>
              </BlurInViewDiv>
            ))}
            <BlurInViewDiv
              y={16}
              delay={0.5}
              className="relative overflow-hidden rounded-xl border border-border"
            >
              <Image
                src="/media/images/hero-2.webp"
                alt="Folded laundry and delivery bags ready to return to a Central Kentucky home."
                width={640}
                height={320}
                className="h-40 w-full object-cover sm:h-48"
              />
            </BlurInViewDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
