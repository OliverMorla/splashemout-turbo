import {
  BlurInViewDiv,
  TextReveal,
} from "@splashemout/animation/motion/components";
import { TonedImage } from "./toned-image";

export function ResonanceFeature() {
  return (
    <section className="bg-gradient-to-b from-background via-accent/[0.03] to-muted/10 px-4 py-24 sm:px-6 sm:py-28 dark:via-accent/5 dark:to-muted/15">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 max-w-xl">
          <TextReveal
            as="h2"
            text="Resonance is met, not assigned."
            trigger="view"
            className="mb-4 font-serif text-3xl leading-[1.12] font-light tracking-tight text-foreground sm:text-4xl"
          />
          <BlurInViewDiv delay={0.1} y={14}>
            <p className="text-base leading-relaxed text-muted-foreground">
              When you are ready for a person, we introduce a small set of
              therapists chosen for fit, not availability. You decide who feels
              right.
            </p>
          </BlurInViewDiv>
        </div>
        <TonedImage
          seed="splashemout-resonance-evening-light"
          alt="Warm evening light across an empty seating area"
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="aspect-[16/8] w-full"
        />
      </div>
    </section>
  );
}
