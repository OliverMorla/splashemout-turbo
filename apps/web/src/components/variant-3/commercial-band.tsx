import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

// What a bid actually needs to be scoped — read as a manifest, not sales copy.
const INTAKE_FIELDS = [
  { field: "Volume", detail: "How much laundry, per pickup" },
  { field: "Frequency", detail: "Daily, weekly, or as-needed" },
  { field: "Turnaround", detail: "Same-day, next-day, or flexible" },
  { field: "Laundry type", detail: "Linens, towels, uniforms, bedding" },
];

const BUYERS = [
  "Airbnb & VRBO hosts",
  "Restaurants & bars",
  "Spas & salons",
  "Gyms & clinics",
  "Vet offices",
  "Hotels",
  "Universities",
  "Equine businesses",
];

export function CommercialBand() {
  return (
    <section
      id="commercial"
      className="relative isolate overflow-hidden bg-foreground text-background"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <BlurInViewDiv y={16}>
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-background/60 uppercase">
            Commercial accounts
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-background uppercase sm:text-4xl">
            Recurring laundry, one clear bid.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-background/75">
            Tell us the volume, frequency, turnaround, and laundry type — we
            send a clear quote back fast, no sales call required.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {BUYERS.map((buyer) => (
              <li
                key={buyer}
                className="rounded-md border border-background/25 px-2.5 py-1 font-sans text-xs font-semibold text-background/85"
              >
                {buyer}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={"/commercial/request-a-bid" as Route}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 border-transparent bg-background px-6 text-base text-foreground hover:bg-background/90",
              )}
            >
              Request a bid
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-background/90"
            >
              <Phone className="size-4" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
          </div>
        </BlurInViewDiv>

        <BlurInViewDiv
          y={16}
          delay={0.12}
          className="overflow-hidden rounded-2xl border border-background/20"
        >
          <div className="border-b border-background/20 px-5 py-3.5">
            <span className="font-serif text-xs font-bold tracking-[0.18em] text-background/70 uppercase">
              What we ask for
            </span>
          </div>
          <ul className="divide-y divide-background/15">
            {INTAKE_FIELDS.map((item) => (
              <li key={item.field} className="flex flex-col gap-1 px-5 py-4">
                <span className="font-serif text-sm font-bold text-background">
                  {item.field}
                </span>
                <span className="font-sans text-xs text-background/65">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
