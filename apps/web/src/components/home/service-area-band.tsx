import Link from "next/link";
import type { Route } from "next";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";

const AREAS = [
  "Lexington",
  "Richmond",
  "Nicholasville",
  "Georgetown",
  "Frankfort",
  "Versailles",
  "Winchester",
  "University of Kentucky",
  "Eastern Kentucky University",
];

export function ServiceAreaBand() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <BlurInViewDiv y={12} className="max-w-2xl">
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Laundry service across Central Kentucky.
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Find pickup coverage and nearby Splash &apos;Em Out locations in
            Lexington, Richmond, Nicholasville, and surrounding communities.
          </p>
        </BlurInViewDiv>

        <BlurInViewDiv y={12} delay={0.1} className="mt-6 flex flex-wrap gap-2">
          {AREAS.map((area) => (
            <Link
              key={area}
              href={"/locations" as Route}
              className="rounded-full border border-border px-3 py-1.5 font-sans text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-muted sm:text-sm"
            >
              {area}
            </Link>
          ))}
        </BlurInViewDiv>
      </div>
    </section>
  );
}
