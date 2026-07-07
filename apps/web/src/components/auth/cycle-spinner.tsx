import { cn } from "../../../../../packages/utils/src/class-names";

// A wash-cycle dial standing in for a generic spinner — four ticks sweeping
// around a ring, echoing the brand without illustrating a washing machine.
export function CycleSpinner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("cycle-spin h-4 w-4 shrink-0", className)}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        strokeWidth="2"
        className="stroke-current opacity-20"
      />
      {[0, 90, 180, 270].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="2"
          x2="12"
          y2="5.5"
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-current"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}
