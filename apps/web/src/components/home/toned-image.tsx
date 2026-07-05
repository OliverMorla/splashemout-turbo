import Image from "next/image";

type TonedImageProps = {
  seed: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

// Picsum photography toned to the brand's clay/violet duotone so unpredictable
// stock photos still read as one consistent, restrained palette.
export function TonedImage({
  seed,
  alt,
  sizes,
  className,
  priority,
}: TonedImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className ?? ""}`}>
      <Image
        src={`https://picsum.photos/seed/${seed}/1600/1600`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover grayscale-[55%] contrast-[1.05] saturate-[0.6]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand/15 via-transparent to-accent/15 mix-blend-multiply dark:from-brand/20 dark:to-accent/20 dark:mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-border/30"
        aria-hidden="true"
      />
    </div>
  );
}
