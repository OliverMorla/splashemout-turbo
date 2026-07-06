"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { MapPin, Truck } from "lucide-react";
import {
  BlurDiv,
  BlurH1,
  BlurP,
} from "@splashemout/animation/motion/components";
import { useReducedMotion } from "@splashemout/animation/motion/react";
import { cn } from "../../../../../packages/utils/src/class-names";
import { buttonVariants } from "@splashemout/ui/button";
import { contactInfo } from "@/config/nav";
import { RouteDivider } from "./route-divider";

const HERO_PHOTOS = ["/media/images/hero.webp", "/media/images/hero-2.webp"];
const SLIDE_INTERVAL_MS = 7000;

const TRUST_STRIP = [
  "Fully attended locations",
  "9 Central Kentucky laundromats",
  "24-48 hour pickup turnaround",
  "Commercial laundry available",
];

const LOAD_PATH_STOPS = ["Porch", "Wash", "Fold", "Return"];

export function HeroCommandCenter() {
  const reducedMotion = !!useReducedMotion();
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const id = setInterval(() => {
      setActivePhoto((current) => (current + 1) % HERO_PHOTOS.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-background">
      <BlurDiv delay={0} y={0} className="absolute inset-0">
        {HERO_PHOTOS.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="A woven basket of folded towels and a laundry bag left on a sunlit porch, with a delivery van passing on the street beyond."
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn(
              "object-cover object-right transition-opacity duration-1000 ease-in-out lg:object-center",
              !reducedMotion && "hero-photo-drift",
              index === activePhoto ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </BlurDiv>
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pt-32 pb-40 sm:px-10 sm:pb-44 lg:pb-24">
        <BlurDiv delay={0.15} y={10} className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ticket-paper shadow-md">
            <Image
              src="/images/brand/logo.webp"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="font-sans text-sm font-bold tracking-wide text-white uppercase">
            Splash &apos;Em Out
          </span>
        </BlurDiv>

        <div className="max-w-2xl">
          <BlurP
            delay={0.25}
            y={10}
            className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-promo uppercase"
          >
            Central Kentucky laundry service
          </BlurP>

          <BlurH1
            delay={0.34}
            className="font-serif text-6xl leading-[0.95] font-normal text-white sm:text-7xl lg:text-8xl"
          >
            Laundry day,
            <br />
            handled.
          </BlurH1>

          <BlurP
            delay={0.48}
            y={10}
            className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg"
          >
            Schedule pickup, drop off wash-and-fold, or find a clean attended
            laundromat near you. Splash &apos;Em Out helps you get clean
            laundry without giving up your day.
          </BlurP>

          <BlurDiv
            delay={0.58}
            y={10}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href={contactInfo.scheduleHref as Route}
              className={cn(buttonVariants({ variant: "brand", size: "lg" }), "h-12 px-6 text-base")}
            >
              <Truck className="h-4 w-4" aria-hidden="true" />
              Schedule Pickup
            </Link>
            <Link
              href={"/locations" as Route}
              className={cn(
                "h-12 rounded-lg border border-white/40 bg-white/10 px-6 font-sans text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20",
                "inline-flex items-center gap-2",
              )}
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Find a Location
            </Link>
            <Link
              href={"/pricing" as Route}
              className="font-sans text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              View Pricing
            </Link>
          </BlurDiv>

          <BlurDiv delay={0.68} y={8} className="mt-8">
            <RouteDivider steps={LOAD_PATH_STOPS} className="mb-5" />
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {TRUST_STRIP.map((item) => (
                <li
                  key={item}
                  className="font-sans text-xs font-medium text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </BlurDiv>
        </div>

        <BlurDiv
          delay={0.8}
          y={14}
          className="hero-ticket w-64 -rotate-2 px-5 py-4 lg:absolute lg:right-10 lg:bottom-16 lg:w-60 xl:right-20"
        >
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.24em] uppercase">
            Claim ticket
          </p>
          <ul className="hero-ticket-rule mt-3 space-y-2 border-t pt-3 text-sm font-medium">
            <li className="flex items-baseline justify-between gap-2">
              <span>Pickup</span>
              <span className="tabular-nums opacity-70">$30 min</span>
            </li>
            <li className="flex items-baseline justify-between gap-2">
              <span>Wash &amp; fold</span>
              <span className="tabular-nums opacity-70">$1.69/lb</span>
            </li>
            <li className="flex items-baseline justify-between gap-2">
              <span>Commercial</span>
              <span className="tabular-nums opacity-70">Custom quote</span>
            </li>
          </ul>
          <p className="hero-ticket-rule mt-3 border-t pt-2 font-sans text-[0.65rem] tracking-[0.18em] uppercase opacity-70">
            Central Kentucky
          </p>
        </BlurDiv>
      </div>
    </section>
  );
}
