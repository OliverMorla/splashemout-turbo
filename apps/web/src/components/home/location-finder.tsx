import Link from "next/link";
import type { Route } from "next";
import { Phone, MapPinned, Navigation } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { Button } from "@splashemout/ui/button";
import { contactInfo } from "@/config/nav";

const CITIES = ["Lexington", "Richmond", "Nicholasville"];

const AVAILABILITY = ["Attended", "Large machines", "Wash & fold", "Pickup area"];

export function LocationFinder() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <BlurInViewDiv
          y={12}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Find a clean laundromat near you.
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Check nearby Splash &apos;Em Out locations, hours, services,
              phone numbers, and directions before you go.
            </p>
          </div>
          <Link href={"/locations" as Route}>
            <Button variant="outline" size="lg" className="h-11 px-5">
              See All Locations
            </Button>
          </Link>
        </BlurInViewDiv>

        <div className="grid gap-4 sm:grid-cols-3">
          {CITIES.map((city, index) => (
            <BlurInViewDiv
              key={city}
              y={16}
              delay={0.08 * index}
              className="flex flex-col gap-4 rounded-xl border border-border p-5"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPinned className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl text-foreground">{city}</h3>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {AVAILABILITY.map((item) => (
                  <li
                    key={item}
                    className="claim-tag rounded-full px-2 py-0.5 font-sans text-[0.65rem] font-semibold tracking-wide uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-sans text-xs text-muted-foreground">
                Address, hours, and live availability on the full locations
                page.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 font-sans text-xs font-semibold text-foreground hover:border-brand/40 hover:bg-muted"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  Call
                </a>
                <Link
                  href={"/locations" as Route}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 font-sans text-xs font-semibold text-foreground hover:border-brand/40 hover:bg-muted"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  Directions
                </Link>
              </div>
            </BlurInViewDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
