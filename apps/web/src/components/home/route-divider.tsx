import { cn } from "../../../../../packages/utils/src/class-names";

type RouteDividerProps = {
  steps: string[];
  activeIndex?: number | null;
  className?: string;
};

/**
 * The Load Path in its compact form: a row of stops joined by short
 * connectors. Used wherever the full drawn-line treatment (see
 * `load-path.tsx`) would be too heavy — hero overlay, dock hover state,
 * final CTA recap.
 */
export function RouteDivider({ steps, activeIndex, className }: RouteDividerProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "h-1.5 w-1.5 shrink-0 rounded-full bg-border transition-colors duration-300",
                activeIndex != null && index <= activeIndex && "bg-brand",
              )}
              aria-hidden="true"
            />
            <span className="font-sans text-[0.65rem] font-semibold tracking-wide whitespace-nowrap uppercase text-muted-foreground">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <span
              className="mx-2 h-px w-6 shrink-0 bg-border sm:w-10"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
