import {
  BlurInViewDiv,
  TextReveal,
} from "@splashemout/animation/motion/components";

export function RingsOverview() {
  return (
    <section className="bg-gradient-to-b from-background via-muted/10 to-background px-4 py-24 sm:px-6 sm:py-28 dark:via-muted/15">
      <div className="mx-auto w-full max-w-5xl">
        <TextReveal
          as="h2"
          text="Three rings, one pace."
          trigger="view"
          className="mb-4 font-serif text-3xl leading-[1.1] font-light tracking-tight text-foreground sm:text-4xl"
        />
        <BlurInViewDiv delay={0.1} y={12} className="mb-12 sm:mb-16">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Each ring opens at your speed. Nothing here unlocks early, and
            nothing closes if you step away.
          </p>
        </BlurInViewDiv>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border/40 bg-border/40 lg:grid-cols-2 lg:grid-rows-2">
          {/* Orientation: the large cell, carries the brand's ring motif */}
          <BlurInViewDiv
            delay={0.06}
            y={16}
            className="flex flex-col justify-between gap-10 bg-background/90 p-8 sm:p-10 lg:row-span-2 dark:bg-background/80"
          >
            <div
              className="relative flex h-32 items-center justify-center"
              aria-hidden="true"
            >
              <span className="absolute h-16 w-16 rounded-full border border-brand/25" />
              <span className="absolute h-24 w-24 rounded-full border border-brand/15" />
              <span className="absolute h-32 w-32 rounded-full border border-accent/10" />
            </div>
            <div>
              <h3 className="mb-3 font-serif text-2xl font-light text-foreground">
                Orientation
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">
                A short, soft intake. You describe what is present in your own
                words, with no score attached and no diagnosis implied.
              </p>
            </div>
          </BlurInViewDiv>

          {/* The Field */}
          <BlurInViewDiv
            delay={0.14}
            y={16}
            className="flex flex-col justify-center gap-3 bg-muted/35 p-8 sm:p-10 dark:bg-muted/45"
          >
            <h3 className="font-serif text-xl font-light text-foreground">
              The Field
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Optional, low-pressure spaces to explore, pause, or leave without
              losing your place.
            </p>
          </BlurInViewDiv>

          {/* Resonance */}
          <BlurInViewDiv
            delay={0.22}
            y={16}
            className="flex flex-col justify-center gap-3 bg-accent/[0.06] p-8 sm:p-10 dark:bg-accent/10"
          >
            <h3 className="font-serif text-xl font-light text-foreground">
              Resonance
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              When you are ready, a small set of therapists introduced for fit,
              not urgency.
            </p>
          </BlurInViewDiv>
        </div>
      </div>
    </section>
  );
}
