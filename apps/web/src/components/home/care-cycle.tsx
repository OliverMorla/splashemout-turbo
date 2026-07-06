import { BlurInViewDiv } from "@splashemout/animation/motion/components";
import { cn } from "../../../../../packages/utils/src/class-names";
import { CareSymbol, type CareSymbolName } from "./care-symbols";

// A genuine sequence (schedule → wash → return), so the 01/02/03 markers carry
// order information rather than decorating a non-sequence.
const STEPS: {
  step: string;
  name: CareSymbolName;
  title: string;
  body: string;
}[] = [
  {
    step: "01",
    name: "deliver",
    title: "Schedule",
    body: "Book a pickup or drop your laundry off at the counter. Either way, you're done in minutes.",
  },
  {
    step: "02",
    name: "fold",
    title: "We wash & fold",
    body: "Attendants wash, dry, and fold it on the right cycle — the way you'd do it, with the time you don't have.",
  },
  {
    step: "03",
    name: "wash",
    title: "Returned next day",
    body: "Pick it up at the laundromat or have it delivered back to your door, folded and ready to put away.",
  },
];

export function CareCycle() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
        <BlurInViewDiv y={14} className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            The pickup cycle
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-foreground sm:text-5xl">
            Three steps. Back the next day.
          </h2>
        </BlurInViewDiv>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {STEPS.map(({ step, name, title, body }) => (
            <BlurInViewDiv
              key={step}
              y={16}
              className="relative flex flex-col gap-4 bg-background p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl leading-none text-brand/30">
                  {step}
                </span>
                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-brand-solid">
                  <CareSymbol name={name} className="size-6" />
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {body}
                </p>
              </div>
            </BlurInViewDiv>
          ))}
        </div>

        <BlurInViewDiv
          y={12}
          className={cn(
            "mt-8 flex items-center gap-3 rounded-xl border border-dashed border-[color:var(--ticket-line)] bg-ticket-paper/60 px-5 py-3",
          )}
        >
          <CareSymbol name="industrial" className="size-5 text-brand-solid" />
          <p className="font-sans text-sm text-[color:var(--ticket-ink)]">
            <span className="font-semibold">Bulk loads welcome</span> — comforters,
            blankets, rugs, pet beds, and horse blankets fit our large machines.
          </p>
        </BlurInViewDiv>
      </div>
    </section>
  );
}
