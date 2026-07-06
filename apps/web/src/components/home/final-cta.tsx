import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Phone } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";
import { RouteDivider } from "./route-divider";

const LOAD_PATH_STOPS = ["Porch", "Wash", "Fold", "Return"];

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-solid">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/marketing/cta.webp"
          alt="A Splash 'Em Out laundry order, cleaned and folded, ready to be returned to its owner."
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-solid via-brand-solid/80 to-brand-solid/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv y={16} className="max-w-2xl">
          <RouteDivider
            steps={LOAD_PATH_STOPS}
            activeIndex={3}
            className="mb-6"
          />
          <h2 className="font-serif text-4xl text-background sm:text-5xl">
            Put laundry back on your schedule.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-background/80 sm:text-lg">
            Whether you want pickup, drop-off wash-and-fold, a self-service
            laundromat, or recurring commercial laundry, Splash &apos;Em Out
            gives you a clear next step.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={"/schedule" as Route}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 border-background bg-background px-6 text-base text-brand-solid hover:bg-background/90",
              )}
            >
              Schedule Pickup
            </Link>
            <Link
              href={"/locations" as Route}
              className="font-sans text-sm font-semibold text-background underline decoration-background/40 underline-offset-4 hover:decoration-background"
            >
              Find a Location
            </Link>
            <Link
              href={"/commercial/request-a-bid" as Route}
              className="font-sans text-sm font-semibold text-background underline decoration-background/40 underline-offset-4 hover:decoration-background"
            >
              Request a Bid
            </Link>
          </div>

          <a
            href={contactInfo.phoneHref}
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-background/90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
