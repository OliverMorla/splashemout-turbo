import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";
import { CareSymbol } from "./care-symbols";

export function CareFinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-solid">
      <Image
        src="/images/marketing/cta.webp"
        alt="Folded laundry ready for a Splash 'Em Out pickup order."
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-solid/95 via-brand-solid/80 to-brand-solid/60"
        aria-hidden="true"
      />

      {/* care-symbol watermark — the cycle closed */}
      <CareSymbol
        name="fold"
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 -top-12 size-72 text-background/10"
      />
      <CareSymbol
        name="deliver"
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-16 size-72 text-background/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv y={16} className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-background/70 uppercase">
            Tag us in
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] font-normal text-background sm:text-6xl">
            Put laundry back on your schedule.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-background/80 sm:text-lg">
            Pickup, drop-off wash-and-fold, a self-service laundromat, or
            recurring commercial laundry — pick the cycle and we&apos;ll handle the
            rest.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={contactInfo.scheduleHref as Route}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 border-transparent bg-background px-6 text-base text-brand-solid hover:bg-background/90",
              )}
            >
              Schedule Pickup
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={"/locations" as Route}
              className={cn(
                "h-12 rounded-lg border border-background/40 bg-background/10 px-6 font-sans text-base font-medium text-background backdrop-blur-sm transition-colors hover:bg-background/20",
                "inline-flex items-center gap-2",
              )}
            >
              Find a Location
            </Link>
          </div>

          <a
            href={contactInfo.phoneHref}
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-background/90"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
