import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen w-full flex-1 items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-12">
      <div className="absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10 bg-muted/30" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background/55" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Coming soon
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-light leading-none tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            This page is still being prepared.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Some parts of Splash &apos;Em Out are intentionally opening in
            stages. This page is not available yet, but you can return home for
            pickup, delivery, wash-and-fold, and commercial laundry updates.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:bg-brand focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Return home
            </Link>
          </div>
        </div>

        <aside className="border-l border-border/60 pl-6 sm:pl-8 lg:col-span-4">
          <p className="font-serif text-7xl font-light leading-none text-brand/80">
            404
          </p>
          <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              Our full site is coming soon. For now, this route is not ready for
              visitors.
            </p>
            <p className="border-t border-border/60 pt-5 text-foreground/80">
              If you arrived here from a link, that page is planned but not
              published yet.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
