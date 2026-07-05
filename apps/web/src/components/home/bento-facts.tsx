import CountUp from "@splashemout/animation/motion/components/count-up";
import {
  BlurInViewDiv,
  TextReveal,
} from "@splashemout/animation/motion/components";
import { TonedImage } from "./toned-image";

/**
 * Splash 'Em Out in the fewest words we could manage, ahead of the ring-by-ring
 * walkthrough below. Numbers are the shape of the product itself (rings,
 * optionality, labels handed out), not growth metrics — a light, one-time
 * count-up on view rather than an ambient effect.
 */
export function BentoFacts() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <TextReveal
          as="h2"
          text="A shape you can see, not just a promise."
          trigger="view"
          className="mb-4 font-serif text-3xl leading-[1.1] font-light tracking-tight text-foreground sm:text-4xl"
        />
        <BlurInViewDiv delay={0.1} y={12} className="mb-12 sm:mb-16">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Before the walkthrough, here is Splash 'Em Out stated plainly — the fewest
            words we could manage.
          </p>
        </BlurInViewDiv>

        <div className="grid w-full auto-rows-[minmax(9rem,auto)] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <BlurInViewDiv
            delay={0.02}
            className="col-span-2 row-span-2 sm:col-span-1"
          >
            <TonedImage
              seed="splashemout-quiet-window"
              alt="Soft morning light across a quiet, uncluttered corner"
              sizes="(min-width: 640px) 280px, 100vw"
              className="h-full min-h-56 w-full"
            />
          </BlurInViewDiv>

          {/* Ring motif echoes the hero orb and RingsOverview below —
              the one signature flourish in an otherwise plain grid. */}
          <BlurInViewDiv
            delay={0.08}
            className="relative flex flex-col justify-between overflow-hidden border border-border/60 bg-muted/20 p-6 dark:bg-muted/10"
          >
            <span
              className="absolute -top-8 -right-8 h-28 w-28 rounded-full border border-brand/15"
              aria-hidden="true"
            />
            <span
              className="absolute -top-4 -right-4 h-16 w-16 rounded-full border border-brand/25"
              aria-hidden="true"
            />
            <span className="relative font-serif text-5xl font-light tracking-tight text-brand sm:text-6xl">
              <CountUp to={3} duration={1.4} />
            </span>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              rings, never more — Orientation, Field, Resonance.
            </p>
          </BlurInViewDiv>

          <BlurInViewDiv
            delay={0.14}
            className="flex flex-col justify-between border border-border/60 bg-muted/20 p-6 dark:bg-muted/10"
          >
            <span className="font-serif text-5xl font-light tracking-tight text-accent sm:text-6xl">
              <CountUp to={100} duration={1.4} />%
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              optional. skip anything, always.
            </p>
          </BlurInViewDiv>

          <BlurInViewDiv
            delay={0.2}
            className="col-span-2 flex flex-col justify-center border border-border/60 bg-foreground p-6 text-background sm:col-span-1"
          >
            <span className="font-serif text-5xl font-light tracking-tight sm:text-6xl">
              <CountUp to={0} duration={1} />
            </span>
            <p className="mt-3 text-sm leading-relaxed opacity-75">
              diagnoses or scores waiting on the other side.
            </p>
          </BlurInViewDiv>

          <BlurInViewDiv
            delay={0.26}
            className="col-span-2 flex items-center justify-center border border-border/60 bg-muted/20 p-6 text-center sm:col-span-1 dark:bg-muted/10"
          >
            <p className="font-serif text-xl leading-snug font-light tracking-tight text-foreground">
              Set by you. Never by a program.
            </p>
          </BlurInViewDiv>

          <BlurInViewDiv
            delay={0.32}
            className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-2"
          >
            <TonedImage
              seed="splashemout-open-hands"
              alt="Hands resting calmly, open and unhurried"
              sizes="(min-width: 640px) 280px, 100vw"
              className="h-full min-h-40 w-full sm:min-h-56"
            />
          </BlurInViewDiv>
        </div>
      </div>
    </section>
  );
}
