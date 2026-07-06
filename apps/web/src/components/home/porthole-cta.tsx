import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { BlurInViewDiv, BlurP } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

export function PortholeCta() {
  return (
    <section className="bg-background pt-20 pb-28 sm:pt-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <BlurInViewDiv
          y={20}
          className="relative isolate overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/marketing/cta.webp"
            alt="Folded laundry ready for a Splash 'Em Out pickup order."
            width={2172}
            height={724}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 1100px, 100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#04070a]/92 via-[#04070a]/55 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 py-14 sm:px-14 sm:py-20 lg:max-w-lg">
            <BlurP
              y={10}
              className="font-sans text-xs font-semibold tracking-[0.24em] text-accent uppercase"
            >
              Free bag, first pickup
            </BlurP>
            <h2 className="font-serif text-3xl leading-[1.05] font-normal text-white sm:text-4xl lg:text-5xl">
              Your first load is the easy part.
            </h2>
            <p className="max-w-sm text-sm leading-6 text-white/75 sm:text-base">
              Schedule your first pickup and get a free laundry bag &mdash; no
              trip to the laundromat required.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://splashemout.curbsidelaundries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "brand", size: "lg" }),
                  "h-12 justify-center rounded-full px-7 text-base",
                )}
              >
                Schedule pickup
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={contactInfo.phoneHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 justify-center rounded-full border-white/25 bg-transparent px-7 text-base text-white hover:border-white/50 hover:bg-white/10",
                )}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
