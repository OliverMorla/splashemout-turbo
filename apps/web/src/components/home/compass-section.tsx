import {
  BlurInViewDiv,
  DotPattern,
  TextReveal,
} from "@splashemout/animation/motion/components";
import { Compass } from "@/components/home/compass";

const COMPASS_CAPTION =
  "The rings are the three doors — Orientation, the Field, Resonance. The needle is you. It settles where it settles.";

/**
 * An orientation instrument, not a verdict. Placed mid-page so the "three
 * rings" idea introduced earlier gets a concrete, physical metaphor before
 * the deeper walkthroughs further down.
 */
export function CompassSection() {
  return (
    <section className="relative overflow-hidden bg-muted/10 px-4 py-24 sm:px-6 sm:py-28 dark:bg-muted/[0.06]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <DotPattern
          width={40}
          height={40}
          cx={20}
          cy={20}
          cr={1}
          className="text-muted-foreground/25"
        />
        <div className="absolute top-0 left-1/4 h-[45vh] w-[45vw] rounded-full bg-brand/5 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vw] rounded-full bg-accent/5 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            How Splash 'Em Out orients
          </span>
          <TextReveal
            as="h2"
            text={["Notice where you are.", "Not where you should be."]}
            trigger="view"
            className="mt-3 font-serif text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            lineClassName="pb-[0.08em]"
          />
          <BlurInViewDiv delay={0.14} className="mt-6 max-w-md">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Splash 'Em Out won&apos;t point you anywhere. It&apos;s a quiet instrument
              for noticing where you actually are — and what kind of support
              might feel possible from here.
            </p>
          </BlurInViewDiv>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
          <BlurInViewDiv
            delay={0.2}
            y={20}
            className="group relative w-full max-w-md transition-transform duration-500 hover:-translate-y-1 lg:max-w-lg"
          >
            <Compass className="h-auto w-full" />
            <BlurInViewDiv
              delay={0.6}
              className="mt-6 text-center lg:text-left"
            >
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground lg:mx-0">
                {COMPASS_CAPTION}
              </p>
            </BlurInViewDiv>
          </BlurInViewDiv>
        </div>
      </div>
    </section>
  );
}
