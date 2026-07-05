import { TextReveal } from "@splashemout/animation/motion/components";

export function PhilosophyQuote() {
  return (
    <section className="bg-gradient-to-b from-muted/10 via-brand/[0.06] to-muted/10 px-4 py-28 sm:px-6 sm:py-36 dark:from-muted/15 dark:via-brand/10 dark:to-muted/15">
      <div className="mx-auto max-w-3xl text-center">
        <TextReveal
          as="p"
          text={["Care that meets you doesn't", "need your diagnosis first."]}
          trigger="view"
          className="font-serif text-3xl leading-[1.18] font-light tracking-tight text-foreground sm:text-4xl"
          lineClassName="pb-1"
        />
        <TextReveal
          as="p"
          text="It only needs to know you showed up."
          trigger="view"
          delay={0.18}
          className="font-serif text-3xl leading-[1.18] font-light tracking-tight text-brand sm:text-4xl"
          lineClassName="pb-1"
        />
      </div>
    </section>
  );
}
