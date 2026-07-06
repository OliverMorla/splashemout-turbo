import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ClipboardList, MapPin, Tag, Truck } from "lucide-react";
import {
  BlurDiv,
  BlurH1,
  BlurP,
} from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";
import { CareSymbol } from "./care-symbols";

// The four high-intent actions surfaced as quick chips under the hero CTAs.
const QUICK_ACTIONS = [
  {
    label: "Schedule pickup",
    href: contactInfo.scheduleHref as Route,
    icon: Truck,
  },
  {
    label: "Find a location",
    href: "/locations" as Route,
    icon: MapPin,
  },
  {
    label: "See pricing",
    href: "/pricing" as Route,
    icon: Tag,
  },
  {
    label: "Request a bid",
    href: "/commercial/request-a-bid" as Route,
    icon: ClipboardList,
  },
];

const TRUST_STRIP = [
  "Fully attended locations",
  "9 Central Kentucky laundromats",
  "24–48 hour pickup turnaround",
  "Next-day wash & fold",
];

/**
 * Care Label hero. The signature element is the kraft care tag hanging over the
 * porch photo — perforated hole, dashed stitch, printed care symbols, and the
 * price stamped on it. The split layout keeps it bright and editorial, distinct
 * from Variant 1's full-bleed cinematic scrim.
 */
export function CareHero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Soft brand wash so the white panel never reads flat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-accent/5"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pt-28 pb-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pt-36 lg:pb-24">
        {/* Left — thesis + actions */}
        <div className="max-w-xl">
          <BlurDiv delay={0.05} className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1.5">
            <MapPin className="size-3.5 text-brand" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Lexington · Richmond · Nicholasville
            </span>
          </BlurDiv>

          <BlurH1
            delay={0.16}
            className="mt-5 font-serif text-5xl leading-[0.98] font-normal text-foreground sm:text-6xl lg:text-7xl"
          >
            Tag us with your laundry.
          </BlurH1>

          <BlurP
            delay={0.3}
            y={10}
            className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Schedule pickup, drop off wash-and-fold, or find a clean, attended
            laundromat across Central Kentucky. Clear prices, real locations,
            and laundry folded like it was your own.
          </BlurP>

          <BlurDiv delay={0.42} y={10} className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={contactInfo.scheduleHref as Route}
              className={cn(buttonVariants({ variant: "brand", size: "lg" }), "h-12 px-6 text-base")}
            >
              <Truck className="size-4" aria-hidden="true" />
              Schedule Pickup
            </Link>
            <Link
              href={"/locations" as Route}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-base")}
            >
              <MapPin className="size-4" aria-hidden="true" />
              Find a Location
            </Link>
          </BlurDiv>

          <BlurDiv delay={0.54} y={8} className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {QUICK_ACTIONS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 font-sans text-xs font-medium text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurDiv>
        </div>

        {/* Right — photo + signature care tag + price sticker */}
        <BlurDiv delay={0.3} y={16} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/media/images/hero.webp"
              alt="A woven basket of folded towels and a Splash 'Em Out laundry bag left on a sunlit porch, ready for pickup."
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 90vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-foreground/15 via-transparent to-transparent"
            />
          </div>

          {/* Signature: the care label tag */}
          <div className="absolute -top-5 -left-3 w-60 -rotate-3 sm:-left-6 lg:-left-10">
            <div className="relative rounded-[14px] border border-dashed border-[color:var(--ticket-line)] bg-ticket-paper p-5 text-[color:var(--ticket-ink)] shadow-2xl">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-9 flex size-6 items-center justify-center rounded-full bg-background ring-1 ring-[color:var(--ticket-line)]"
              >
                <span className="size-2 rounded-full bg-[color:var(--ticket-line)]" />
              </span>

              <div className="flex items-center justify-between">
                <span className="font-sans text-[0.6rem] font-bold tracking-[0.22em] uppercase">
                  Care label
                </span>
                <span className="font-sans text-[0.6rem] tracking-[0.16em] uppercase opacity-60">
                  No. 0248
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3 text-brand-solid">
                <CareSymbol name="wash" className="size-6" />
                <CareSymbol name="fold" className="size-6" />
                <CareSymbol name="deliver" className="size-6" />
                <CareSymbol name="dryclean" className="size-6" />
              </div>

              <dl className="mt-4 space-y-1.5 border-t border-dashed border-[color:var(--ticket-line)] pt-3 font-sans text-[0.78rem]">
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="font-semibold">Wash</dt>
                  <dd className="opacity-70">Central KY</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="font-semibold">Fold</dt>
                  <dd className="opacity-70 tabular-nums">$1.69 / lb</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="font-semibold">Return</dt>
                  <dd className="opacity-70">Next day</dd>
                </div>
              </dl>

              <p className="mt-3 font-serif text-sm font-medium">
                Splash &apos;Em Out
              </p>
            </div>
          </div>

          {/* Price sticker — keeps the price next to the service decision */}
          <div className="absolute -bottom-4 -right-2 rotate-3 sm:-right-5">
            <div className="relative rounded-md border border-border bg-background px-4 py-2.5 shadow-lg">
              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 size-3 -translate-x-1/2 rounded-full border border-border bg-background"
              />
              <p className="font-sans text-[0.58rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Wash &amp; fold
              </p>
              <p className="mt-0.5 font-serif text-2xl leading-none text-foreground">
                $1.69
                <span className="ml-1 font-sans text-xs text-muted-foreground">
                  /lb
                </span>
              </p>
            </div>
          </div>
        </BlurDiv>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 mx-auto w-full max-w-7xl border-t border-border px-6 py-5 sm:px-10">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {TRUST_STRIP.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 font-sans text-xs font-medium text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
