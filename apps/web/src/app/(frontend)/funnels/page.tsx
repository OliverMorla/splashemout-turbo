import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Funnels",
  description: "Internal review of homepage funnel prototypes for Splash 'Em Out.",
  robots: { index: false, follow: false },
};

const funnels = [
  {
    id: "01",
    slug: "variant-1",
    name: "Load Path",
    concept:
      "A command-center hero with a single drawn route line — porch to wash to fold to return — carried through every section down to a sticky action bar.",
    signature: "Route-line motif",
  },
  {
    id: "02",
    slug: "variant-2",
    name: "Care Label",
    concept:
      "Reads like the care tag sewn into a garment: universal care symbols, kraft-paper tags, and stamped prices standing in for generic cards.",
    signature: "Care-symbol tags",
  },
  {
    id: "03",
    slug: "variant-3",
    name: "The Board",
    concept:
      "A split-flap departure board — every high-intent action and price line flips into place like a status row, set in mono display type.",
    signature: "Split-flap board",
  },
  {
    id: "04",
    slug: "variant-4",
    name: "Dissolved",
    concept:
      "An editorial, state-of-the-art take on the brand — italic serif headlines, teal glass, and a porthole video reel of the wash cycle.",
    signature: "Editorial glass",
  },
] as const;

export default function FunnelsPage() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <section className="relative isolate flex w-full flex-1 flex-col px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
            Internal — Prototype Review
          </p>
          <h1 className="mt-5 font-serif text-4xl font-light leading-tight tracking-normal text-foreground sm:text-5xl">
            Funnels
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
            Four homepage builds, four different bets on how someone books a
            pickup. Pull a ticket to open the full page.
          </p>

          <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {funnels.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/${f.slug}`}
                  className="receipt-panel group flex h-full flex-col gap-6 rounded-lg border border-border p-7 transition-colors hover:border-brand/40 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-3xl font-medium text-brand">
                      {f.id}
                    </span>
                    <span className="claim-tag rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
                      {f.signature}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl text-foreground italic">
                      {f.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.concept}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View prototype
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
