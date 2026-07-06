import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

// City-level proof. We deliberately do not print street addresses or hours
// here — those live on /locations and stay accurate per-location. The phone is
// real and routes to the right store.
const CITIES = [
  { name: "Lexington", note: "Multiple attended locations" },
  { name: "Richmond", note: "Near EKU" },
  { name: "Nicholasville", note: "Large machines" },
];

export function CareLocations() {
  return (
    <section id="locations" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv y={14} className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Find your laundromat
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-foreground sm:text-5xl">
              Real locations, attended.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
              Bright, staffed laundromats across Central Kentucky. Walk in, or
              call ahead and we&apos;ll have a machine ready.
            </p>
          </div>
          <Link
            href={"/locations" as Route}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
          >
            All locations &amp; hours
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </BlurInViewDiv>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {CITIES.map((city, index) => (
            <BlurInViewDiv
              key={city.name}
              y={16}
              delay={Math.min(index * 0.07, 0.21)}
              className="group flex flex-col rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:border-brand/40 hover:bg-background"
            >
              <div className="flex items-center gap-2 text-brand">
                <MapPin className="size-5" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-foreground">
                  {city.name}
                </h3>
              </div>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                {city.note}
              </p>

              <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 font-sans text-sm">
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Clock className="size-4 text-muted-foreground/70" aria-hidden="true" />
                  Hours on the location page
                </span>
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-brand"
                >
                  <Phone className="size-4 text-muted-foreground/70" aria-hidden="true" />
                  {contactInfo.phoneDisplay}
                </a>
              </div>

              <Link
                href={"/locations" as Route}
                className={cn(
                  "mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand",
                )}
              >
                Hours &amp; directions
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </BlurInViewDiv>
          ))}
        </ul>
      </div>
    </section>
  );
}
