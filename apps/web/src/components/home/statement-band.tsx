import { BlurInViewDiv } from "@splashemout/animation/motion/components";

const STATEMENTS = [
  "Not therapy.",
  "Not a crisis line.",
  "Not a habit tracker.",
];

export function StatementBand() {
  return (
    <section className="bg-gradient-to-b from-muted/20 via-muted/10 to-background px-4 py-16 sm:px-6 sm:py-20 dark:from-muted/25 dark:via-muted/15 dark:to-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col divide-y divide-border/40 sm:flex-row sm:divide-x sm:divide-y-0">
        {STATEMENTS.map((line, index) => (
          <BlurInViewDiv
            key={line}
            delay={index * 0.08}
            y={14}
            className="flex-1 py-6 text-center sm:px-8 sm:py-0"
          >
            <p className="pb-1 font-serif text-2xl leading-[1.15] font-light italic text-foreground sm:text-3xl">
              {line}
            </p>
          </BlurInViewDiv>
        ))}
      </div>
    </section>
  );
}
