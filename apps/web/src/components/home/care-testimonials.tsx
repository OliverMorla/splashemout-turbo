import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { cn } from "../../../../../packages/utils/src/class-names";
import { CareSymbol, type CareSymbolName } from "./care-symbols";

type Note = {
  quote: string;
  name: string;
  place: string;
  service: string;
  symbol: CareSymbolName;
  rotate: string;
  hang: string;
};

// One tag per service line — the testimonial is proof the tag's promise
// (price, turnaround) actually held up for someone.
const NOTES: Note[] = [
  {
    quote:
      "Machines are always open, and someone's there if a dryer acts up. I get four loads done before the coffee shop next door gets busy.",
    name: "Dana R.",
    place: "Lexington",
    service: "Self-Service Laundry",
    symbol: "wash",
    rotate: "-rotate-2",
    hang: "sm:translate-y-0",
  },
  {
    quote:
      "I drop off Sunday night. It's folded and bagged by Monday afternoon, same as when my mom used to do it.",
    name: "Priya S.",
    place: "Richmond",
    service: "Wash & Fold",
    symbol: "fold",
    rotate: "rotate-1",
    hang: "sm:translate-y-6",
  },
  {
    quote:
      "The bag's off my porch by eight and back clean by the next evening. I haven't touched a laundry basket in months.",
    name: "Marcus T.",
    place: "Nicholasville",
    service: "Pickup & Delivery",
    symbol: "deliver",
    rotate: "-rotate-1",
    hang: "sm:-translate-y-3",
  },
  {
    quote:
      "Towels show up the same day every week, folded to the size our shelves need. Nobody on staff thinks about laundry anymore.",
    name: "Owner",
    place: "Main Street Diner",
    service: "Commercial Laundry",
    symbol: "industrial",
    rotate: "rotate-2",
    hang: "sm:translate-y-4",
  },
  {
    quote:
      "I add my suits to the same pickup as my regular wash. One bag, one driver, one price.",
    name: "Elena V.",
    place: "Lexington",
    service: "Dry Cleaning Pickup",
    symbol: "dryclean",
    rotate: "-rotate-2",
    hang: "sm:-translate-y-1",
  },
];

// Signature element: a clothespin, pinning each tag to the line the way a
// real load hangs to dry. Local to this section — care-symbols.tsx is
// reserved for laundry *processes*, and a pin isn't one.
function Clothespin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 3v7" />
      <path d="M15 3v7" />
      <path d="M9 10c-2.2 1-3.4 3-3.4 5.6a6.4 6.4 0 0 0 12.8 0c0-2.6-1.2-4.6-3.4-5.6" />
      <path d="M12 10v11" />
    </svg>
  );
}

export function CareTestimonials() {
  return (
    <section id="testimonials" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
        <BlurInViewDiv y={14} className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Straight off the line
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-foreground sm:text-5xl">
            What Central Kentucky keeps coming back for.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
            Every tag below is pinned to one of the five ways people get their
            laundry done, in their own words.
          </p>
        </BlurInViewDiv>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden border-t border-dashed border-[color:var(--ticket-line)] sm:block"
          />

          <ul className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {NOTES.map((note, index) => (
              <BlurInViewDiv
                key={note.name}
                y={16}
                delay={Math.min(index * 0.07, 0.28)}
                className={cn(
                  "relative shrink-0 basis-[78%] snap-start sm:basis-auto sm:shrink sm:pt-7",
                  note.hang,
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 left-1/2 hidden -translate-x-1/2 -rotate-3 text-[color:var(--ticket-line)] sm:block"
                >
                  <Clothespin className="size-5" />
                </span>

                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-[14px] border border-dashed border-[color:var(--ticket-line)] bg-ticket-paper p-6 text-[color:var(--ticket-ink)] shadow-lg",
                    note.rotate,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-6 flex size-5 items-center justify-center rounded-full bg-background ring-1 ring-[color:var(--ticket-line)] sm:hidden"
                  >
                    <span className="size-1.5 rounded-full bg-[color:var(--ticket-line)]" />
                  </span>

                  <p className="font-serif text-lg leading-snug italic">
                    &ldquo;{note.quote}&rdquo;
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-dashed border-[color:var(--ticket-line)] pt-4">
                    <div>
                      <p className="font-sans text-sm font-semibold">
                        {note.name}
                      </p>
                      <p className="font-sans text-xs opacity-70">
                        {note.place}
                      </p>
                    </div>
                    <CareSymbol
                      name={note.symbol}
                      className="size-6 text-brand-solid"
                    />
                  </div>

                  <p className="mt-3 font-sans text-[0.65rem] font-semibold tracking-[0.16em] uppercase opacity-60">
                    {note.service}
                  </p>
                </div>
              </BlurInViewDiv>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
