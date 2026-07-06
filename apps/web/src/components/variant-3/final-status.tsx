import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

export function FinalStatus() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <BlurInViewDiv
          y={16}
          className="board-panel overflow-hidden rounded-2xl border border-border"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-6 sm:px-10 sm:py-8">
            <div className="flex items-center gap-4">
              <span
                className="board-status-dot size-2.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <div>
                <p className="font-serif text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Status
                </p>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground uppercase sm:text-3xl">
                  Ready for pickup.
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={contactInfo.scheduleHref as Route}
                className={cn(
                  buttonVariants({ variant: "brand", size: "lg" }),
                  "h-11 px-6 text-base",
                )}
              >
                Schedule Pickup
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={"/locations" as Route}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-6 text-base",
                )}
              >
                Find a Location
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-foreground transition-colors hover:text-brand"
              >
                <Phone className="size-4" aria-hidden="true" />
                {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
