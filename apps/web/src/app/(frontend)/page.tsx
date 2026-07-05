import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <section className="relative isolate grid min-h-svh place-items-center overflow-hidden px-6 py-16 text-center sm:px-10">
        <Image
          src="/images/brand/logo.webp"
          alt=""
          width={180}
          height={180}
          priority
          className="absolute left-1/2 top-12 -z-10 h-44 w-44 -translate-x-1/2 object-contain opacity-10 sm:h-56 sm:w-56"
        />

        <div
          className="coming-soon-wash absolute inset-0 -z-20"
          aria-hidden="true"
        />

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <div className="mb-10 flex items-center gap-3">
            <Image
              src="/images/brand/logo.webp"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain"
            />
            <span className="font-sans text-sm font-bold uppercase text-foreground">
              Splash 'Em Out
            </span>
          </div>

          <p className="mb-5 font-sans text-xs font-semibold uppercase text-brand">
            Laundry day, handled
          </p>

          <h1 className="font-serif text-6xl leading-none font-normal text-foreground sm:text-7xl lg:text-8xl">
            Coming soon.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A clean local laundry service for wash-and-fold, pickup and
            delivery, dry cleaning pickup, and commercial laundry across
            Central Kentucky.
          </p>

          <svg
            className="mt-12 h-20 w-full max-w-xl text-border"
            viewBox="0 0 560 80"
            fill="none"
            role="img"
            aria-label="Laundry load path"
          >
            <path
              d="M36 42 C142 8 220 72 314 42 S452 14 524 42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="36" cy="42" r="7" className="fill-brand" />
            <circle cx="280" cy="42" r="7" className="fill-accent" />
            <circle cx="524" cy="42" r="7" className="fill-brand" />
          </svg>

          <div
            className="mt-2 flex flex-wrap justify-center gap-3 font-sans text-xs font-semibold uppercase text-muted-foreground"
            aria-label="Upcoming services"
          >
            <span>Self-service laundry</span>
            <span aria-hidden="true">/</span>
            <span>Pickup and delivery</span>
            <span aria-hidden="true">/</span>
            <span>Commercial laundry</span>
          </div>
        </div>
      </section>
    </main>
  );
}
