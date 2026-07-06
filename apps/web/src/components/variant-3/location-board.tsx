import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";

type Location = {
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  hours: string;
};

const CITIES: { city: string; locations: Location[] }[] = [
  {
    city: "Lexington",
    locations: [
      {
        name: "Versailles Road",
        address: "1202 Versailles Rd, Lexington, KY 40508",
        phone: "859-303-7777",
        phoneHref: "tel:+18593037777",
        hours: "8am–10pm",
      },
      {
        name: "E. New Circle Road",
        address: "160 E New Circle Rd, Lexington, KY 40505",
        phone: "859-309-1560",
        phoneHref: "tel:+18593091560",
        hours: "8am–11pm",
      },
      {
        name: "Pimlico Pkwy",
        address: "3120 Pimlico Pkwy Ste 178, Lexington, KY 40517",
        phone: "859-523-1110",
        phoneHref: "tel:+18595231110",
        hours: "Mon–Fri 8am–11pm, Sat–Sun 7am–11pm",
      },
      {
        name: "Bryan Station Road",
        address: "1788 Bryan Station Rd, Lexington, KY 40505",
        phone: "859-299-7558",
        phoneHref: "tel:+18592997558",
        hours: "8am–10pm",
      },
      {
        name: "Waller Avenue",
        address: "393 Waller Ave #13, Lexington, KY 40504",
        phone: "859-368-9019",
        phoneHref: "tel:+18593689019",
        hours: "8am–9:30pm",
      },
      {
        name: "E. Reynolds Road",
        address: "125 E Reynolds Rd, Lexington, KY 40517",
        phone: "859-407-3653",
        phoneHref: "tel:+18594073653",
        hours: "8am–10pm",
      },
    ],
  },
  {
    city: "Richmond",
    locations: [
      {
        name: "Red House Road",
        address: "908 Red House Rd, Richmond, KY 40475",
        phone: "859-575-1048",
        phoneHref: "tel:+18595751048",
        hours: "8am–9pm",
      },
      {
        name: "Eastern Bypass",
        address: "469 Eastern Bypass, Richmond, KY 40475",
        phone: "859-575-4276",
        phoneHref: "tel:+18595754276",
        hours: "8am–11pm",
      },
    ],
  },
  {
    city: "Nicholasville",
    locations: [
      {
        name: "Edgewood Drive",
        address: "200 Edgewood Dr, Nicholasville, KY 40356",
        phone: "859-241-1542",
        phoneHref: "tel:+18592411542",
        hours: "7am–10pm",
      },
    ],
  },
];

function directionsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function LocationBoard() {
  return (
    <section id="locations" className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv
          y={14}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Find a laundromat
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground uppercase sm:text-4xl">
              Nine locations, all attended.
            </h2>
          </div>
          <Link
            href={"/locations" as Route}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
          >
            All locations &amp; hours
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </BlurInViewDiv>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {CITIES.map(({ city, locations }, cityIndex) => (
            <BlurInViewDiv
              key={city}
              y={16}
              delay={Math.min(cityIndex * 0.08, 0.24)}
              className="rounded-2xl border border-border bg-background"
            >
              <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
                <MapPin className="size-4 text-brand" aria-hidden="true" />
                <h3 className="font-serif text-sm font-bold tracking-[0.1em] text-foreground uppercase">
                  {city}
                </h3>
                <span className="ml-auto font-sans text-xs text-muted-foreground tabular-nums">
                  {locations.length} {locations.length === 1 ? "site" : "sites"}
                </span>
              </div>

              <ul className="divide-y divide-border">
                {locations.map((location) => (
                  <li key={location.name} className="px-5 py-4">
                    <p className="font-serif text-sm font-bold text-foreground">
                      {location.name}
                    </p>
                    <p className="mt-1 font-sans text-xs leading-5 text-muted-foreground">
                      {location.address}
                    </p>
                    <p className="mt-1 font-sans text-xs text-muted-foreground">
                      {location.hours}
                    </p>
                    <div className="mt-2.5 flex items-center gap-4">
                      <a
                        href={location.phoneHref}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-foreground transition-colors hover:text-brand"
                      >
                        <Phone className="size-3.5" aria-hidden="true" />
                        {location.phone}
                      </a>
                      <a
                        href={directionsHref(location.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-brand transition-colors hover:text-brand-solid"
                      >
                        Directions
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </BlurInViewDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
