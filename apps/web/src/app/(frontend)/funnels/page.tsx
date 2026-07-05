import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, Layers3, RouteIcon } from "lucide-react";
import { buttonVariants } from "@splashemout/ui/button";

const FUNNELS = [
  {
    name: "Guided Support",
    href: "/guided-support",
    posture: "Interactive care path",
    description:
      "A fuller self-guided flow with cues, breathing, reflection, rings, and commitments.",
    signal: "Most immersive",
    palette: "Brand clay + violet",
    motion: "Stateful interactions",
    accent: "from-brand/20 via-accent/10 to-transparent",
  },
  {
    name: "Find Your Footing",
    href: "/find-your-footing",
    posture: "Topographic orientation",
    description:
      "A calmer map-like funnel built around waypoints, elevation, and choosing how far to go.",
    signal: "Most spatial",
    palette: "Contour field",
    motion: "Slow drift",
    accent: "from-accent/20 via-brand/10 to-transparent",
  },
  {
    name: "Quiet Orientation",
    href: "/quiet-orientation",
    posture: "Single-line intake",
    description:
      "A direct orientation room where a tangled line settles into rings as the story unfolds.",
    signal: "Most narrative",
    palette: "Line + ring system",
    motion: "Line draw",
    accent: "from-foreground/10 via-brand/10 to-transparent",
  },
  {
    name: "Pause Room",
    href: "/pause-room",
    posture: "Minimal soft room",
    description:
      "A spacious, low-pressure funnel for pausing before deciding what kind of support fits.",
    signal: "Most minimal",
    palette: "Muted room tones",
    motion: "Quiet reveal",
    accent: "from-muted via-accent/10 to-transparent",
  },
  {
    name: "Compass",
    href: "/variant-6",
    posture: "Orientation instrument",
    description:
      "A calm compass whose needle drifts and settles but never locks. Orientation as an instrument, not a verdict.",
    signal: "Most grounded",
    palette: "Plum ink + clay signal",
    motion: "Settling drift",
    accent: "from-foreground/10 via-accent/10 to-brand/10",
  },
  {
    name: "The Threshold",
    href: "/variant-7",
    posture: "A door, glimpsed then reached",
    description:
      "A focused hero built around a single doorway that opens on render, distant at first, reached by the closing section.",
    signal: "Most narrative arc",
    palette: "Chalk + clay glow",
    motion: "Door swing + line waves",
    accent: "from-brand/15 via-foreground/10 to-accent/15",
  },
] as const satisfies ReadonlyArray<{
  name: string;
  href: Route;
  posture: string;
  description: string;
  signal: string;
  palette: string;
  motion: string;
  accent: string;
}>;

export default function FunnelsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/40 px-6 pb-14 pt-28 sm:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,var(--body-glow-brand),transparent_32%),radial-gradient(circle_at_82%_26%,var(--body-glow-accent),transparent_34%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <Layers3 className="size-3.5 text-brand" aria-hidden="true" />
              Funnel Lab
            </div>
            <h1 className="font-serif text-5xl font-light leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Choose the door,
              <br />
              compare the room.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A private switchboard for the current Splash 'Em Out funnels. Open each
              route, compare the emotional posture, and keep the strongest
              direction moving.
            </p>
          </div>

          <div className="grid w-full max-w-sm grid-cols-2 gap-3 rounded-2xl border border-border/60 bg-background/75 p-3 shadow-sm backdrop-blur lg:max-w-xs">
            <div className="rounded-xl bg-muted/50 p-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Live
              </span>
              <p className="mt-2 font-serif text-4xl font-light">
                {FUNNELS.length}
              </p>
            </div>
            <div className="rounded-xl bg-foreground p-4 text-background">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70">
                Mode
              </span>
              <p className="mt-3 text-sm font-medium leading-snug">
                Funnel review
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
          {FUNNELS.map((funnel, index) => (
            <Link
              key={funnel.href}
              href={funnel.href}
              className="group relative min-h-80 overflow-hidden rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/45 hover:shadow-xl hover:shadow-foreground/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${funnel.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 right-0 h-40 w-40 translate-x-10 translate-y-10 rounded-full border border-foreground/10 transition-transform duration-500 group-hover:translate-x-7 group-hover:translate-y-7"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full min-h-64 flex-col justify-between gap-10">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      className="size-5 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-10">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                      {funnel.posture}
                    </p>
                    <h2 className="font-serif text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                      {funnel.name}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {funnel.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-border/50 pt-5 text-sm text-muted-foreground sm:grid-cols-3">
                  <FunnelMetric label="Signal" value={funnel.signal} />
                  <FunnelMetric label="Palette" value={funnel.palette} />
                  <FunnelMetric label="Motion" value={funnel.motion} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <RouteIcon className="size-4 text-accent" aria-hidden="true" />
            <span>
              Routes are temporary funnel entry points for comparison.
            </span>
          </div>
          <Link
            href={"/" as Route}
            className={buttonVariants({
              variant: "link",
              className: "group/root gap-2",
            })}
          >
            Back to homepage
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover/root:translate-x-0.5 group-hover/root:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FunnelMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
        {label}
      </p>
      <p className="mt-1 font-medium text-foreground">{value}</p>
    </div>
  );
}
