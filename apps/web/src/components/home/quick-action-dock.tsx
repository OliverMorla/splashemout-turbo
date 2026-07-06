"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Building2, MapPin, Truck, WashingMachine } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { cn } from "../../../../../packages/utils/src/class-names";
import { RouteDivider } from "./route-divider";

const ROUTE_STOPS = ["Home pickup", "Store visit", "Commercial route"];

const ACTIONS = [
  {
    label: "Schedule Pickup",
    description: "We pick up, wash, fold, and return your laundry.",
    detail: "$30 pickup minimum",
    href: "/schedule" as Route,
    icon: Truck,
    routeIndex: 0,
  },
  {
    label: "Find a Location",
    description: "Get hours, directions, and services for nearby laundromats.",
    detail: "9 Central Kentucky locations",
    href: "/locations" as Route,
    icon: MapPin,
    routeIndex: 1,
  },
  {
    label: "See Wash & Fold",
    description: "Leave the bag with us and pick it up clean and folded.",
    detail: "$1.69/lb, $15 minimum",
    href: "/services/wash-and-fold" as Route,
    icon: WashingMachine,
    routeIndex: 1,
  },
  {
    label: "Request a Bid",
    description: "Get recurring laundry pricing for towels, linens, uniforms, and more.",
    detail: "Custom volume pricing",
    href: "/commercial/request-a-bid" as Route,
    icon: Building2,
    routeIndex: 2,
  },
];

export function QuickActionDock() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeRouteIndex = activeIndex !== null ? ACTIONS[activeIndex].routeIndex : null;

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
        <BlurInViewDiv
          y={12}
          className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Skip the scroll
            </p>
            <h2 className="mt-1 font-serif text-2xl text-foreground sm:text-3xl">
              Tell us what laundry day needs.
            </h2>
          </div>
          <RouteDivider steps={ROUTE_STOPS} activeIndex={activeRouteIndex} />
        </BlurInViewDiv>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {ACTIONS.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                href={action.href}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onBlur={() => setActiveIndex(null)}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-brand/50 hover:bg-muted sm:p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-sans text-sm font-semibold text-foreground sm:text-base">
                  {action.label}
                </span>
                <span className="font-sans text-xs leading-5 text-muted-foreground">
                  {action.description}
                </span>
                <span
                  className={cn(
                    "claim-tag mt-auto inline-flex w-fit items-center rounded-full px-2 py-0.5 font-sans text-[0.65rem] font-semibold tracking-wide uppercase opacity-0 transition-opacity",
                    "group-hover:opacity-100 group-focus-visible:opacity-100",
                  )}
                >
                  {action.detail}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
