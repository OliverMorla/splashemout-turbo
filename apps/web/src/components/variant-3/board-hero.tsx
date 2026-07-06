import Link from "next/link";
import type { Route } from "next";
import {
  ArrowRight,
  ClipboardList,
  MapPin,
  Phone,
  Tag,
  Truck,
} from "lucide-react";
import { BlurDiv, BlurH1, BlurP } from "@splashemout/animation/motion/components";
import { contactInfo } from "@/config/nav";

// The four high-intent actions from the product brief, read as rows on a
// split-flap departure board instead of a button grid or icon dock.
const BOARD_ROWS: {
  label: string;
  status: string;
  href: Route;
  icon: typeof Truck;
}[] = [
  {
    label: "Schedule pickup",
    status: "Book now",
    href: contactInfo.scheduleHref as Route,
    icon: Truck,
  },
  {
    label: "Find a location",
    status: "9 open",
    href: "/locations" as Route,
    icon: MapPin,
  },
  {
    label: "View pricing",
    status: "Listed",
    href: "/pricing" as Route,
    icon: Tag,
  },
  {
    label: "Request a bid",
    status: "Fast reply",
    href: "/commercial/request-a-bid" as Route,
    icon: ClipboardList,
  },
];

export function BoardHero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:px-10 sm:pt-36 sm:pb-20">
        <BlurDiv
          delay={0.05}
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5"
        >
          <span
            className="board-status-dot size-1.5 rounded-full bg-brand"
            aria-hidden="true"
          />
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Central Kentucky · 9 locations · live board
          </span>
        </BlurDiv>

        <BlurH1
          delay={0.16}
          className="mt-6 max-w-3xl font-serif text-4xl leading-[1.02] font-bold tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl"
        >
          Laundry day,
          <br />
          back on schedule.
        </BlurH1>

        <BlurP
          delay={0.28}
          y={10}
          className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
        >
          Four ways in, one board. Pick a row — pickup, a nearby laundromat,
          pricing, or a commercial quote — and see exactly where it goes.
        </BlurP>

        <BlurDiv
          delay={0.38}
          y={14}
          className="board-panel mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-[0_30px_70px_-40px_rgb(15_23_42_/_0.35)]"
        >
          <ul className="divide-y divide-border">
            {BOARD_ROWS.map(({ label, status, href, icon: Icon }, index) => (
              <li key={label}>
                <Link
                  href={href}
                  className="board-row group flex items-center gap-4 px-5 py-4 outline-none transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 sm:px-7 sm:py-5"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span
                    className="board-status-dot size-2 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                    style={{ animationDelay: `${index * 220}ms` }}
                  />
                  <Icon
                    className="size-4 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className="font-serif text-base font-bold tracking-tight text-foreground uppercase sm:text-lg">
                    {label}
                  </span>
                  <span
                    className="mx-2 hidden flex-1 border-b border-dotted border-border sm:block"
                    aria-hidden="true"
                  />
                  <span className="ml-auto font-serif text-xs font-bold tracking-[0.18em] text-brand-solid uppercase sm:text-sm">
                    {status}
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </BlurDiv>

        <BlurDiv delay={0.52} y={10} className="mt-6">
          <a
            href={contactInfo.phoneHref}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
        </BlurDiv>
      </div>
    </section>
  );
}
