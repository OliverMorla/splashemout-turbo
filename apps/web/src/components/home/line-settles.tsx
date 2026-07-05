"use client";

import { useEffect, useRef, useState } from "react";
import {
  BlurInViewDiv,
  TextReveal,
} from "@splashemout/animation/motion/components";
import { AnimatePresence } from "@splashemout/animation/motion/react";
import * as m from "@splashemout/animation/motion/react-m";
import { cn } from "../../../../../packages/utils/src/class-names";
import { ContourField } from "@/components/contour";

const PANELS = [
  {
    id: "orientation",
    ring: "Outer ring",
    title: "Orientation",
    body: "Put words to what's happening today, however loose or unfinished they are. Nothing you say here gets turned into a score.",
    radius: 100,
  },
  {
    id: "field",
    ring: "Middle ring",
    title: "The Field",
    body: "A handful of quiet rooms — grounding, reflection, small check-ins. Step into one, stay a minute, and leave without a trace.",
    radius: 74,
  },
  {
    id: "resonance",
    ring: "Inner ring",
    title: "Resonance",
    body: "When another person feels right, we make an introduction chosen for fit, never for availability or ranking.",
    radius: 46,
  },
] as const;

/**
 * A slower, one-ring-at-a-time walkthrough of the same three rings the
 * Compass and RingsOverview sections already named. Backed by the same
 * topographic contour field used in find-your-footing, at low opacity, so
 * the "settling" motif carries through visually as well as in copy.
 */
export function LineSettles() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = panelRefs.current.findIndex(
            (el) => el === entry.target,
          );
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const el of panelRefs.current) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-background px-4 py-24 sm:px-10 sm:py-28 lg:px-16">
      {/* Sized to inset-0 already; no overflow-hidden here so it doesn't
          clip the sticky column's positioning context below. */}
      <ContourField className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              How the line settles
            </span>
            <TextReveal
              as="h2"
              text="One ring at a time. No rush to the next."
              trigger="view"
              className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl"
            />

            <div className="relative mt-10 flex h-64 items-center justify-center sm:h-72">
              <svg
                viewBox="0 0 220 220"
                className="h-full w-full"
                aria-hidden="true"
              >
                {PANELS.map((panel, index) => (
                  <circle
                    key={panel.id}
                    cx={110}
                    cy={110}
                    r={active === index ? panel.radius * 1.04 : panel.radius}
                    fill="none"
                    stroke={active === index ? "var(--brand)" : "var(--border)"}
                    strokeWidth={active === index ? 2.5 : 1}
                    opacity={active === index ? 1 : 0.55}
                    className="origin-center transition-all duration-700 ease-out"
                  />
                ))}
                <circle
                  cx={110}
                  cy={110}
                  r={3}
                  fill="var(--accent)"
                  className="origin-center transition-transform duration-700 ease-out"
                  style={{
                    transform: `scale(${1 + active * 0.15})`,
                    transformBox: "fill-box",
                  }}
                />
              </svg>
            </div>

            <div className="mt-6 h-5 text-center" aria-live="polite">
              <AnimatePresence mode="wait">
                <m.p
                  key={active}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-sm italic text-muted-foreground"
                >
                  {PANELS[active].ring} — {PANELS[active].title}
                </m.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {PANELS.map((panel, index) => (
            <div
              key={panel.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              className={cn(
                "flex min-h-[50vh] flex-col justify-center border-t border-border/40 py-12 first:border-t-0 sm:py-16",
                "lg:min-h-[60vh]",
              )}
            >
              <BlurInViewDiv
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              >
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
                  {panel.ring}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-light text-foreground sm:text-3xl">
                  {panel.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {panel.body}
                </p>
              </BlurInViewDiv>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
