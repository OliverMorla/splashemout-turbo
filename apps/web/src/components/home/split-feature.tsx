import {
  BlurInViewDiv,
  TextReveal,
} from "@splashemout/animation/motion/components";
import { TonedImage } from "./toned-image";

type SplitFeatureProps = {
  title: string;
  body: string;
  imageSeed: string;
  imageAlt: string;
  reverse?: boolean;
};

export function SplitFeature({
  title,
  body,
  imageSeed,
  imageAlt,
  reverse,
}: SplitFeatureProps) {
  const imageBlock = (
    <TonedImage
      seed={imageSeed}
      alt={imageAlt}
      sizes="(min-width: 1024px) 480px, 100vw"
      className="aspect-[4/5] w-full"
    />
  );

  const textBlock = (
    <BlurInViewDiv delay={0.1} y={18} className="flex flex-col gap-5">
      <TextReveal
        as="h2"
        text={title}
        trigger="view"
        className="font-serif text-3xl leading-[1.12] font-light tracking-tight text-foreground sm:text-4xl"
      />
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
    </BlurInViewDiv>
  );

  return (
    <section
      className={
        reverse
          ? "bg-gradient-to-b from-muted/15 via-background to-background px-4 py-24 sm:px-6 sm:py-28 dark:from-muted/20 dark:via-background dark:to-background"
          : "bg-gradient-to-b from-background via-background to-muted/15 px-4 py-24 sm:px-6 sm:py-28 dark:from-background dark:via-background dark:to-muted/20"
      }
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {reverse ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}
