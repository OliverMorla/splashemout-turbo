"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import {
  Building2,
  Shirt,
  Sparkles,
  Truck,
  WashingMachine,
} from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { RouteDivider } from "./route-divider";

const ROUTE_STOPS = ["Home pickup", "Drop-off", "Commercial route"];

const SECONDARY_SERVICES = [
  {
    label: "Wash & Fold",
    description:
      "Drop off your laundry and let our attendants wash, dry, and fold it for next-day pickup. Starts at $1.69/lb with a $15 minimum.",
    bestFor: "Students & quick errands",
    href: "/services/wash-and-fold" as Route,
    icon: Shirt,
    routeIndex: 1,
  },
  {
    label: "Self-Service Laundry",
    description:
      "Use clean, attended laundromats with large machines for everyday loads, bedding, towels, and bulky items.",
    bestFor: "Bedding & bulky loads",
    href: "/services/self-service-laundry" as Route,
    icon: WashingMachine,
    routeIndex: 1,
  },
  {
    label: "Dry Cleaning Pickup & Delivery",
    description:
      "Add garment care pickup and delivery when laundry day includes dry cleaning.",
    bestFor: "Suits & delicates",
    href: "/services/dry-cleaning" as Route,
    icon: Sparkles,
    routeIndex: 1,
  },
  {
    label: "Commercial Laundry",
    description:
      "Keep towels, linens, uniforms, and blankets moving with recurring pickup and custom pricing.",
    bestFor: "Businesses & recurring volume",
    href: "/commercial" as Route,
    icon: Building2,
    routeIndex: 2,
  },
];

export function ServiceSplit() {
  const [routeIndex, setRouteIndex] = useState<number | null>(null);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <BlurInViewDiv
          y={12}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Choose the laundry path that fits your day.
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Do it yourself, drop it off, schedule pickup, or set up
              recurring laundry for your business.
            </p>
          </div>
          <RouteDivider steps={ROUTE_STOPS} activeIndex={routeIndex} />
        </BlurInViewDiv>

        <div className="grid gap-4 lg:grid-cols-5">
          <BlurInViewDiv
            y={16}
            onMouseEnter={() => setRouteIndex(0)}
            onMouseLeave={() => setRouteIndex(null)}
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border lg:col-span-3"
          >
            <Image
              src="/media/images/hero-2.webp"
              alt="Folded towels and laundry bags staged for delivery in a Central Kentucky neighborhood."
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-brand-solid/90 via-brand-solid/30 to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                <Truck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl text-white sm:text-3xl">
                Pickup &amp; Delivery
              </h3>
              <p className="max-w-md text-sm leading-6 text-white/85 sm:text-base">
                Skip the trip. Schedule online, leave your laundry where you
                choose, and get it back clean and folded in 24-48 hours.
              </p>
              <span className="claim-tag mt-1 inline-flex w-fit items-center rounded-full px-2.5 py-1 font-sans text-[0.65rem] font-semibold tracking-wide uppercase">
                Best for busy families
              </span>
              <Link
                href={"/schedule" as Route}
                className={cn(
                  buttonVariants({ variant: "brand", size: "lg" }),
                  "mt-3 h-11 w-fit px-5",
                )}
              >
                Schedule Pickup
              </Link>
            </div>
          </BlurInViewDiv>

          <div className="flex flex-col gap-3 lg:col-span-2">
            {SECONDARY_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <BlurInViewDiv
                  key={service.label}
                  y={16}
                  delay={0.06 * index}
                  onMouseEnter={() => setRouteIndex(service.routeIndex)}
                  onMouseLeave={() => setRouteIndex(null)}
                  className="flex flex-1 flex-col gap-2 rounded-xl border border-border p-4 transition-colors hover:border-brand/40 hover:bg-muted sm:p-5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-sans text-sm font-semibold text-foreground sm:text-base">
                      {service.label}
                    </h3>
                  </div>
                  <p className="font-sans text-xs leading-5 text-muted-foreground sm:text-sm">
                    {service.description}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                    <span className="claim-tag inline-flex w-fit items-center rounded-full px-2 py-0.5 font-sans text-[0.6rem] font-semibold tracking-wide uppercase">
                      {service.bestFor}
                    </span>
                    <Link
                      href={service.href}
                      className="font-sans text-xs font-semibold text-brand hover:underline"
                    >
                      Learn more &rarr;
                    </Link>
                  </div>
                </BlurInViewDiv>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
