import type { Metadata, Route } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "../../../../../../packages/utils/src/class-names";

export const metadata: Metadata = {
  title: "Table of Contents",
  description:
    "Every build of the Splash 'Em Out revamp, hung up side by side for client review.",
  robots: { index: false, follow: false },
};

type Entry = {
  id: string;
  name: string;
  tag: string;
  concept: string;
  href: string;
  external?: boolean;
  baseline?: boolean;
};

const homepageConcepts: Entry[] = [
  {
    id: "00",
    name: "Live Site",
    tag: "Currently live",
    concept:
      "The site as it stands today at splashemout.com — the line's baseline. Everything to the right is a proposed replacement for it.",
    href: "https://splashemout.com",
    external: true,
    baseline: true,
  },
  {
    id: "01",
    name: "Homepage",
    tag: "Current build",
    concept:
      "This project's working homepage — porthole hero video, direct booking path, no funnel experiments layered on top.",
    href: "/",
  },
  {
    id: "02",
    name: "Funnels",
    tag: "All variants",
    concept:
      "The internal index of every homepage variant below, gathered on one page for a quick side-by-side.",
    href: "/funnels",
  },
  {
    id: "03",
    name: "Load Path",
    tag: "Route-line motif",
    concept:
      "A command-center hero with a single drawn route line — porch to wash to fold to return — carried through every section down to a sticky action bar.",
    href: "/variant-1",
  },
  {
    id: "04",
    name: "Care Label",
    tag: "Care-symbol tags",
    concept:
      "Reads like the care tag sewn into a garment: universal care symbols, kraft-paper tags, and stamped prices standing in for generic cards.",
    href: "/variant-2",
  },
  {
    id: "05",
    name: "The Board",
    tag: "Split-flap board",
    concept:
      "A split-flap departure board — every high-intent action and price line flips into place like a status row, set in mono display type.",
    href: "/variant-3",
  },
  {
    id: "06",
    name: "Dissolved",
    tag: "Editorial glass",
    concept:
      "An editorial, state-of-the-art take on the brand — italic serif headlines, teal glass, and a porthole video reel of the wash cycle.",
    href: "/variant-4",
  },
  {
    id: "07",
    name: "On the Route",
    tag: "Route stamp hero",
    concept:
      "A single full-bleed hero moment — rubber-stamped route badge, warm serif headline, and the pickup van in motion, with nothing else competing for attention.",
    href: "/variant-5",
  },
];

const accountAndUtility: Entry[] = [
  {
    id: "08",
    name: "Schedule",
    tag: "Booking flow",
    concept:
      "The real pickup-scheduling flow every hero and CTA across the site points to.",
    href: "/schedule",
  },
  {
    id: "09",
    name: "Log In",
    tag: "Claim-ticket split",
    concept:
      "The screen splits like a torn claim ticket — video on one side, the sign-in form as the stub you present to get in.",
    href: "/login",
  },
  {
    id: "10",
    name: "Account",
    tag: "Claim stub",
    concept:
      "The signed-in dashboard, carrying the claim-ticket idea forward into a next-pickup stub and account details.",
    href: "/account",
  },
  {
    id: "11",
    name: "Accessibility",
    tag: "Policy page",
    concept:
      "The accessibility commitment and the path for reporting barriers.",
    href: "/accessibility",
  },
  {
    id: "12",
    name: "Privacy",
    tag: "Policy page",
    concept:
      "How pickup, delivery, and account data is collected, used, and stored.",
    href: "/privacy",
  },
  {
    id: "13",
    name: "Terms",
    tag: "Policy page",
    concept:
      "The terms governing pickup, delivery, wash-and-fold, and account use.",
    href: "/terms",
  },
];

const ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-1",
  "rotate-1",
  "-rotate-2",
  "rotate-1",
];

function Clothespin({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="2.5"
        y="1.5"
        width="13"
        height="19"
        rx="4"
        fill="var(--color-ticket-paper)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="9"
        y1="1.5"
        x2="9"
        y2="20.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="9"
        cy="6.5"
        r="2.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function EntryCard({ entry }: { entry: Entry }) {
  const Icon = entry.external ? ArrowUpRight : ArrowRight;

  const cardClassName = cn(
    "receipt-panel group flex h-full w-full flex-col gap-6 rounded-lg border border-border p-7 transition-colors hover:border-brand/40 sm:p-8",
    entry.baseline && "opacity-75 grayscale",
  );

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="font-serif text-3xl font-medium text-brand">
          {entry.id}
        </span>
        <span className="claim-tag rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
          {entry.tag}
        </span>
      </div>
      <div>
        <h3 className="font-serif text-2xl text-foreground italic">
          {entry.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {entry.concept}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        {entry.external ? "Visit live site" : "Open build"}
        <Icon
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </>
  );

  if (entry.external) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={entry.href as Route} className={cardClassName}>
      {content}
    </Link>
  );
}

function EntryLine({ entries }: { entries: Entry[] }) {
  return (
    <ol className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
      {entries.map((entry, i) => (
        <li
          key={entry.href}
          className={cn(
            "flex flex-col items-center transition-transform duration-500 ease-out hover:-translate-y-1 hover:rotate-0",
            ROTATIONS[i % ROTATIONS.length],
          )}
        >
          <Clothespin
            className={entry.baseline ? "text-muted-foreground" : "text-brand"}
          />
          <span className="h-5 w-px bg-border" aria-hidden="true" />
          <EntryCard entry={entry} />
        </li>
      ))}
    </ol>
  );
}

export default function TableOfContentPage() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <section className="relative isolate flex w-full flex-1 flex-col px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
            Internal — Client Review
          </p>
          <h1 className="mt-5 font-serif text-4xl font-light leading-tight tracking-normal text-foreground sm:text-5xl">
            The Line
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
            Every route in the Splash &apos;Em Out revamp, hung up side by side.
            Pull a tag to open the full page, and start from the live site on
            the far left to see exactly what each one replaces.
          </p>

          <h2 className="mt-20 font-serif text-xl text-foreground italic">
            Homepage Concepts
          </h2>
          <div className="mt-14">
            <EntryLine entries={homepageConcepts} />
          </div>

          <h2 className="mt-24 font-serif text-xl text-foreground italic">
            Account &amp; Utility Pages
          </h2>
          <div className="mt-14">
            <EntryLine entries={accountAndUtility} />
          </div>
        </div>
      </section>
    </main>
  );
}
