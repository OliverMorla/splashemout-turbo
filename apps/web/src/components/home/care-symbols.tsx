import type { SVGProps } from "react";

/**
 * Care Label iconography for Variant 2.
 *
 * These are the universal laundry care symbols (ISO 3758) redrawn as a single
 * line set so the whole page shares one drawn vocabulary — the vernacular of
 * the care tag sewn into a garment. Care symbols always represent a *laundry
 * process* (wash, fold, deliver, dry-clean). UI actions use lucide icons, so
 * the symbol system stays undiluted.
 *
 * Decorate by default: render with `aria-hidden` when a text label is present.
 */

export type CareSymbolName =
  | "wash"
  | "fold"
  | "deliver"
  | "industrial"
  | "dryclean"
  | "price";

const STROKE: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

function Wash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...STROKE} {...props}>
      {/* wavy water line */}
      <path d="M3.5 8.4c1 0 1 1.2 2 1.2s1-1.2 2-1.2 1 1.2 2 1.2 1-1.2 2-1.2 1 1.2 2 1.2 1-1.2 2-1.2 1 1.2 2 1.2 1-1.2 2-1.2" />
      {/* tub body */}
      <path d="M5 9.3 6.2 19a1.2 1.2 0 0 0 1.2 1h9.2a1.2 1.2 0 0 0 1.2-1L19 9.3" />
    </svg>
  );
}

function Fold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...STROKE} {...props}>
      {/* folded garment with corner turn-down and a fold rule */}
      <path d="M5.5 5.5h10l3.5 3.5v9h-13.5z" />
      <path d="M15.5 5.5v3.5h3.5" />
      <path d="M5.5 14.2h13.5" />
    </svg>
  );
}

function Deliver(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...STROKE} {...props}>
      {/* tied laundry bag with an arrow handed into it */}
      <path d="M8 6.5 9.2 4.6h5.6L16 6.5" />
      <path d="M7 6.5h10l-1.1 12.1a1.2 1.2 0 0 1-1.2 1.1H9.3a1.2 1.2 0 0 1-1.2-1.1L7 6.5z" />
      <path d="M2.4 11H8" />
      <path d="m5.4 8.5L8 11l-2.6 2.5" />
    </svg>
  );
}

function Industrial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...STROKE} {...props}>
      {/* wash tub with two agitation bars — the permanent-press / bulk glyph */}
      <path d="M3.5 8.4c1 0 1 1.2 2 1.2s1-1.2 2-1.2 1 1.2 2 1.2 1-1.2 2-1.2 1 1.2 2 1.2 1-1.2 2-1.2 1 1.2 2 1.2 1-1.2 2-1.2" />
      <path d="M5 9.3 6.2 19a1.2 1.2 0 0 0 1.2 1h9.2a1.2 1.2 0 0 0 1.2-1L19 9.3" />
      <path d="M10 12.2v3.4M14 12.2v3.4" />
    </svg>
  );
}

function DryClean(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...STROKE} {...props}>
      {/* the circle + P of professional dry cleaning */}
      <circle cx="12" cy="12" r="8" />
      <path d="M10 16V8h2.3a2 2 0 0 1 0 4H10" />
    </svg>
  );
}

function Price(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...STROKE} {...props}>
      {/* hanging clothing price tag */}
      <path d="M4 12 11 5h8a1 1 0 0 1 1 1v8l-7 7z" />
      <circle cx="11" cy="9" r="1.2" />
    </svg>
  );
}

const GLYPHS = {
  wash: Wash,
  fold: Fold,
  deliver: Deliver,
  industrial: Industrial,
  dryclean: DryClean,
  price: Price,
} as const satisfies Record<CareSymbolName, (p: SVGProps<SVGSVGElement>) => React.JSX.Element>;

export function CareSymbol({
  name,
  className,
  ...props
}: { name: CareSymbolName } & SVGProps<SVGSVGElement>) {
  const Glyph = GLYPHS[name];
  return <Glyph className={className} {...props} />;
}
