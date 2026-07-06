"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BlurDiv,
  BlurH1,
  BlurP,
} from "@splashemout/animation/motion/components";
import { useReducedMotion } from "@splashemout/animation/motion/react";
import { cn } from "../../../../../packages/utils/src/class-names";

const SERVICES = [
  "Self-service laundry",
  "Pickup & delivery",
  "Commercial laundry",
];

const HERO_PHOTOS = ["/media/images/hero.webp", "/media/images/hero-2.webp"];
const SLIDE_INTERVAL_MS = 7000;

export function Hero() {
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:pb-24">
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
          <span className="font-sans text-sm font-bold uppercase tracking-wide text-white">
            Splash &apos;Em Out
          </span>
        </BlurDiv>

        <div className="max-w-2xl">
          <BlurP
            delay={0.25}
            y={10}
            className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-promo"
          >
            Laundry day, handled
          </BlurP>

          <BlurH1
            delay={0.34}
            className="font-serif text-6xl leading-[0.95] font-normal text-white sm:text-7xl lg:text-8xl"
          >
            Coming soon
            <br />
            to your porch.
          </BlurH1>

          <BlurP
            delay={0.48}
            y={10}
            className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg"
          >
            A clean local laundry service for wash-and-fold, pickup and
            delivery, dry cleaning pickup, and commercial laundry across Central
            Kentucky.
          </BlurP>
        </div>

        <BlurDiv
          delay={0.6}
          y={14}
          className="hero-ticket w-64 -rotate-2 px-5 py-4 lg:absolute lg:right-10 lg:bottom-16 lg:w-56 xl:right-20"
        >
          <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.24em]">
            Claim ticket
          </p>
          <ul className="hero-ticket-rule mt-3 space-y-2 border-t pt-3 text-sm font-medium">
            {SERVICES.map((service) => (
              <li key={service} className="flex items-baseline gap-2">
                <span className="text-brand" aria-hidden="true">
                  &bull;
                </span>
                {service}
              </li>
            ))}
          </ul>
          <p className="hero-ticket-rule mt-3 border-t pt-2 font-sans text-[0.65rem] uppercase tracking-[0.18em] opacity-70">
            Central Kentucky
          </p>
        </BlurDiv>
      </div>
    </section>
  );
}
