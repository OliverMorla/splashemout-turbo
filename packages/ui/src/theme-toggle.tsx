"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "../../utils/src/class-names";

type ThemeOrientation = "icon" | "dropdown";
type ThemeValue = "light" | "dark" | "system";

type ThemeToggleProps = Readonly<{
  className?: string;
  orientation?: ThemeOrientation;
  label?: string;
}>;

const themes: Array<{ label: string; value: ThemeValue }> = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

// The dial mirrors a washer cycle knob: a two-stop track (Rinse / Night
// Rinse) with a solid indicator that settles at whichever stop is active,
// rather than a generic sun/moon pill switch.
export function ThemeToggle({
  className,
  orientation = "icon",
  label = "Toggle theme",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (orientation === "dropdown") {
    return (
      <select
        aria-label={label}
        className={cn(
          "rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
        disabled={!mounted}
        onChange={(event) => setTheme(event.target.value as ThemeValue)}
        value={mounted ? ((theme as ThemeValue | undefined) ?? "system") : "system"}
      >
        {themes.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const buttonLabel = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={buttonLabel}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative inline-flex h-8 w-[3.75rem] shrink-0 items-center rounded-full border border-border bg-muted p-1 transition-all hover:border-brand/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-60",
        className,
      )}
    >
      <span className="relative z-0 flex h-6 w-6 items-center justify-center">
        <Sun className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      </span>
      <span className="relative z-0 flex h-6 w-6 items-center justify-center">
        <Moon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 left-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand-solid text-background shadow-[0_1px_0_0_rgb(255_255_255_/_0.35)_inset,0_6px_10px_-4px_rgb(7_23_36_/_0.45)] transition-transform duration-300 ease-out",
          isDark && "translate-x-[1.75rem]",
        )}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
