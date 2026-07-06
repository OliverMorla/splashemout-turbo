import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurDiv, BlurP } from "@splashemout/animation/motion/components";
import { buttonVariants } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";

export function VideoPorthole() {
  return (
    <section className="relative isolate overflow-hidden bg-[#04070a] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgb(56 189 248 / 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-xl text-center lg:text-left">
          <BlurP
            y={10}
            className="mb-4 font-sans text-xs font-semibold tracking-[0.24em] text-accent uppercase"
          >
            Take a look inside
          </BlurP>

          <h2 className="font-serif text-4xl leading-[1.02] font-normal text-white sm:text-5xl">
            One cycle, start to finish.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg lg:mx-0">
            From porch pickup to a folded, wrapped return &mdash; see how a
            real Splash &apos;Em Out load moves through the process.
          </p>

          <BlurDiv y={12} className="mt-8 flex justify-center lg:justify-start">
            <a
              href="https://splashemout.curbsidelaundries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "brand", size: "lg" }),
                "h-12 w-full rounded-full px-7 text-base sm:w-auto",
              )}
            >
              Schedule pickup
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </BlurDiv>
        </div>

        <BlurDiv y={18} className="w-[min(84vw,520px)] shrink-0">
          <div className="relative aspect-square w-full">
            <div className="porthole-ring" aria-hidden="true" />
            <div className="porthole-inner absolute inset-[5%]">
              <video
                className="h-full w-full object-cover"
                src="/media/video/hero-c.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
              <div className="porthole-sheen" aria-hidden="true" />
            </div>
            <div
              className="absolute inset-[5%] rounded-full border border-white/10"
              aria-hidden="true"
            />
            <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-1.5 backdrop-blur-sm">
              <Image
                src="/images/brand/logo.webp"
                alt=""
                width={18}
                height={18}
                className="h-4.5 w-4.5 object-contain"
              />
              <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-white uppercase">
                Splash &apos;Em Out
              </span>
            </span>
          </div>
        </BlurDiv>
      </div>
    </section>
  );
}
