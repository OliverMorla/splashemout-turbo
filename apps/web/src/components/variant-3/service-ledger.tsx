import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";

// The five real service lines from the product brief, priced up front —
// a ledger, not a pitch. Pickup covers both pricing tiers on one row since
// it's a single service line with recurring vs. as-needed rates.
const ROWS: {
  service: string;
  rate: string;
  minimum: string;
  turnaround: string;
  href: Route;
  action: string;
}[] = [
  {
    service: "Self-service laundry",
    rate: "Pay per load",
    minimum: "—",
    turnaround: "~45 min",
    href: "/services/self-service-laundry" as Route,
    action: "See machines",
  },
  {
    service: "Wash & fold (drop-off)",
    rate: "$1.69/lb",
    minimum: "$15",
    turnaround: "Next day",
    href: "/services/wash-and-fold" as Route,
    action: "Find drop-off",
  },
  {
    service: "Pickup & delivery",
    rate: "$2.09–$2.39/lb",
    minimum: "$30",
    turnaround: "24–48 hr",
    href: "/services/pickup-and-delivery" as Route,
    action: "Schedule",
  },
  {
    service: "Dry cleaning pickup",
    rate: "Added to pickup",
    minimum: "—",
    turnaround: "With your wash",
    href: "/services/pickup-and-delivery" as Route,
    action: "Add to pickup",
  },
  {
    service: "Commercial laundry",
    rate: "Custom quote",
    minimum: "Volume-based",
    turnaround: "Flexible",
    href: "/commercial/request-a-bid" as Route,
    action: "Request a bid",
  },
];

export function ServiceLedger() {
  return (
    <section id="pricing" className="relative bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv y={14} className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            The board
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground uppercase sm:text-4xl">
            Five ways to wash, priced up front.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
            No coupons to chase and no quote to wait on for the everyday
            stuff. Rate, minimum, and turnaround sit next to every row.
          </p>
        </BlurInViewDiv>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <BlurInViewDiv
            y={16}
            className="overflow-x-auto rounded-2xl border border-border bg-background"
          >
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Service
                  </th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Rate
                  </th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Minimum
                  </th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Turnaround
                  </th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ROWS.map((row) => (
                  <tr key={row.service} className="group">
                    <td className="px-5 py-4 font-serif text-sm font-bold text-foreground sm:text-base">
                      {row.service}
                    </td>
                    <td className="px-5 py-4 font-serif text-sm text-brand-solid tabular-nums">
                      {row.rate}
                    </td>
                    <td className="px-5 py-4 font-sans text-sm text-muted-foreground tabular-nums">
                      {row.minimum}
                    </td>
                    <td className="px-5 py-4 font-sans text-sm text-muted-foreground">
                      {row.turnaround}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={row.href}
                        className="inline-flex items-center gap-1 font-sans text-xs font-semibold whitespace-nowrap text-brand transition-colors hover:text-brand-solid"
                      >
                        {row.action}
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </BlurInViewDiv>

          <BlurInViewDiv
            y={16}
            delay={0.1}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-auto lg:h-full lg:min-h-72"
          >
            <Image
              src="/images/marketing/machines.webp"
              alt="A bright Splash 'Em Out laundromat floor with rows of washers, dryers, folding tables, and open seating."
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </BlurInViewDiv>
        </div>
      </div>
    </section>
  );
}
