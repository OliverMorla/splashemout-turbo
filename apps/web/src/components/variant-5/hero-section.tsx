"use client";

import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, MapPin, Truck } from "lucide-react";
import {
  BlurDiv,
  BlurH1,
  BlurP,
} from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";

// Signature element: "The Route Stamp" — a rubber-stamp-style badge that
// reads like the mark a courier leaves on a confirmed delivery slip, not a
// generic eyebrow pill. Reused (smaller) in the closing section.
function RouteStamp() {
  return (
    <div className="inline-flex -rotate-6 items-center gap-2 rounded-full border-2 border-dashed border-v5-amber/70 bg-v5-paper/90 px-4 py-1.5 text-v5-green shadow-sm">
      <Truck className="h-4 w-4" aria-hidden="true" />
      <span className="text-xs font-semibold tracking-[0.18em] uppercase">
        On the route &middot; Central KY
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen h-dvh w-full">
      <video
        src="/media/video/hero-c.mp4"
        poster="/media/images/hero.webp"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Left-to-right scrim keeps the left-aligned copy legible over the
          moving footage without flattening the whole frame. */}
      <div className="v5-hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full items-center px-6 md:px-12 lg:px-20">
        <div className="flex max-w-xl flex-col items-start">
          <BlurDiv delay={0.1} className="mb-6">
            <RouteStamp />
          </BlurDiv>

          <BlurH1
            delay={0.2}
            className="font-v5-display text-5xl leading-[1.02] font-medium tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            We&apos;ll grab it, wash it,
            <span className="italic text-v5-amber"> bring it home.</span>
          </BlurH1>

          <BlurP
            delay={0.35}
            className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg"
          >
            Pickup and delivery for Central Kentucky, plus drop-off wash &amp;
            fold, attended self-service laundromats, and commercial accounts for
            the businesses that keep this town running.
          </BlurP>

          <BlurDiv
            delay={0.5}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
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
              href={"/locations" as Route}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-14 rounded-full border-white/40 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15",
              )}
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
              Find a Location
            </Link>
          </BlurDiv>
        </div>
      </div>
    </section>
  );
}
