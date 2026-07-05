"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeOrientation = "icon" | "dropdown";
type ThemeValue = "light" | "dark" | "system";

type ThemeToggleProps = Readonly<{
  className?: string;
  orientation?: ThemeOrientation;
  label?: string;
}>;

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

const themes: Array<{ label: string; value: ThemeValue }> = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

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

  if (!mounted) {
    if (orientation === "dropdown") {
      return (
        <select
          aria-label={label}
          className={cn(
            "rounded-md border border-black/10 bg-transparent px-3 py-2 text-sm",
            className,
          )}
          defaultValue="system"
          disabled
        >
          {themes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <button
        type="button"
        aria-label={label}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent",
          className,
        )}
        disabled
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  if (orientation === "dropdown") {
    return (
      <select
        aria-label={label}
        className={cn(
          "rounded-md border border-black/10 bg-transparent px-3 py-2 text-sm",
          className,
        )}
        onChange={(event) => setTheme(event.target.value as ThemeValue)}
        value={(theme as ThemeValue | undefined) ?? "system"}
      >
        {themes.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }

  const isDark = resolvedTheme === "dark";
  const Icon = isDark ? Sun : Moon;
  const nextTheme: ThemeValue = isDark ? "light" : "dark";
  const buttonLabel = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      aria-label={buttonLabel}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent transition-colors hover:bg-black/5",
        className,
      )}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
