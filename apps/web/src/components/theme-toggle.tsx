"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  AnimatePresence,
  useReducedMotion,
} from "@splashemout/animation/motion/react";
import * as m from "@splashemout/animation/motion/react-m";

type ThemeChoice = "light" | "dark" | "system";

const THEME_SEQUENCE: ThemeChoice[] = ["light", "dark", "system"];

const THEME_META: Record<ThemeChoice, { emoji: string; label: string }> = {
  light: { emoji: "☀️", label: "Light" },
  dark: { emoji: "🌙", label: "Dark" },
  system: { emoji: "🌓", label: "Match device" },
};

function isThemeChoice(value: string | undefined): value is ThemeChoice {
  return value === "light" || value === "dark" || value === "system";
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const current: ThemeChoice = mounted && isThemeChoice(theme) ? theme : "dark";
  const currentIndex = THEME_SEQUENCE.indexOf(current);
  const next = THEME_SEQUENCE[(currentIndex + 1) % THEME_SEQUENCE.length];
  const meta = THEME_META[current];

  return (
    <div className="group fixed right-6 bottom-6 z-50">
      <span className="pointer-events-none absolute right-1/2 bottom-full mb-2 translate-x-1/2 translate-y-1 rounded-full border border-border/40 bg-background/90 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-muted-foreground opacity-0 shadow-sm backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {meta.label}
      </span>
      <button
        type="button"
        onClick={() => setTheme(next)}
        disabled={!mounted}
        aria-label={`Theme: ${meta.label}. Tap to switch to ${THEME_META[next].label}.`}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-border/40 bg-background/70 shadow-lg shadow-foreground/10 backdrop-blur-xl transition-colors hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none dark:shadow-black/30"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[conic-gradient(from_120deg,var(--brand),var(--accent),var(--brand))] opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-30"
        />
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={current}
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.5, rotate: -90, filter: "blur(4px)" }
            }
            animate={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }
            }
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.5, rotate: 90, filter: "blur(4px)" }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl leading-none"
          >
            {meta.emoji}
          </m.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
