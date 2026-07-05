import {
  BlurInViewDiv,
  TextReveal,
} from "@splashemout/animation/motion/components";

const COMMITMENTS = [
  "No scores or diagnostic labels.",
  "No streaks, levels, or completion pressure.",
  "No therapist rankings by availability.",
  "No forced disclosure to keep access.",
];

export function BoundariesGrid() {
  return (
    <section className="bg-gradient-to-b from-muted/10 via-background to-background px-4 py-24 sm:px-6 sm:py-28 dark:from-muted/15 dark:via-background dark:to-background">
      <div className="mx-auto w-full max-w-5xl">
        <TextReveal
          as="h2"
          text="What stays out, on purpose."
          trigger="view"
          className="mb-12 font-serif text-3xl leading-[1.1] font-light tracking-tight text-foreground sm:mb-16 sm:text-4xl"
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border/40 bg-border/40 sm:grid-cols-2">
          {COMMITMENTS.map((line, index) => (
            <BlurInViewDiv
              key={line}
              delay={index * 0.06}
              y={14}
              className="bg-background/90 p-8 sm:p-10 dark:bg-background/80"
            >
              <p className="max-w-xs text-lg leading-relaxed font-light text-foreground sm:text-xl">
                {line}
              </p>
            </BlurInViewDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
