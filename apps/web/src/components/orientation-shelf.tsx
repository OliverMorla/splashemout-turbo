"use client";

import { useState } from "react";
import {
  AnimatePresence,
  useReducedMotion,
} from "@splashemout/animation/motion/react";
import * as m from "@splashemout/animation/motion/react-m";
import { cn } from "../../../../packages/utils/src/class-names";

const ORIENTATION_CUES = [
  "overwhelmed",
  "guarded",
  "not sure yet",
  "between appointments",
  "ready but uncertain",
  "trying again",
];

const REASSURANCES: Record<string, string> = {
  overwhelmed: "There is no need to make a decision right now. Take your time.",
  guarded: "Your pace is the correct pace. You don't have to explain anything.",
  "not sure yet":
    "Not knowing is a healthy place to start. We can sit with that.",
  "between appointments":
    "A quiet bridge between support structures. A place to catch your breath.",
  "ready but uncertain":
    "Curiosity is enough. Let's explore what feels supportive at a gentle scale.",
  "trying again":
    "Every beginning is fresh. There is no progress pressure here.",
};

interface OrientationShelfProps {
  delay?: number;
}

export default function OrientationShelf({
  delay = 0.68,
}: OrientationShelfProps) {
  const [activeCue, setActiveCue] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const handleCueClick = (cue: string) => {
    setActiveCue((prev) => (prev === cue ? null : cue));
  };

  const displayText = activeCue
    ? REASSURANCES[activeCue]
    : "Whatever state you arrive in can stay unnamed for a while.";

  return (
    <m.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/40 px-4 py-6 sm:px-10 bg-background/50 backdrop-blur-xs"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        {/* Left side: Reflective message */}
        <div className="lg:col-span-5 flex min-h-[64px] sm:min-h-[80px] items-center justify-start">
          <AnimatePresence mode="wait">
            <m.p
              key={activeCue ?? "default"}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 6, filter: "blur(3px)" }
              }
              animate={
                reduceMotion
                  ? { opacity: 0.9 }
                  : { opacity: 0.9, y: 0, filter: "blur(0px)" }
              }
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -6, filter: "blur(3px)" }
              }
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-lg font-light italic leading-relaxed text-foreground/90 sm:text-xl md:text-2xl"
            >
              {displayText}
            </m.p>
          </AnimatePresence>
        </div>

        {/* Right side: Interactive tag buttons */}
        <div
          className="lg:col-span-7 flex flex-wrap gap-2.5 lg:justify-end"
          aria-label="Possible starting points"
        >
          {ORIENTATION_CUES.map((cue) => {
            const isActive = activeCue === cue;
            return (
              <button
                key={cue}
                onClick={() => handleCueClick(cue)}
                className={cn(
                  "rounded-lg border px-3.5 py-2 font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] transition-all duration-300 select-none active:scale-[0.98]",
                  isActive
                    ? "border-accent bg-accent/10 text-accent font-semibold shadow-inner shadow-accent/10"
                    : "border-border/50 bg-muted/30 text-muted-foreground/80 hover:border-border/90 hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {cue}
              </button>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}
