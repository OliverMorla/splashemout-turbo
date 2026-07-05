"use client";

import { useState, type FormEvent } from "react";
import { TextReveal } from "@splashemout/animation/motion/components";
import {
  AnimatePresence,
  useReducedMotion,
} from "@splashemout/animation/motion/react";
import * as m from "@splashemout/animation/motion/react-m";
import { cn } from "../../../../../packages/utils/src/class-names";
import { TonedImage } from "@/components/home/toned-image";

interface IconProps {
  className?: string;
}

const ShieldCheck = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l7-2a1 1 0 0 1 .48 0l7 2A1 1 0 0 1 20 6v7Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Heart = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const RefreshCw = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M16 3h5v5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 21H3v-5" />
  </svg>
);

const AudioWave = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 10v3" />
    <path d="M6 6v11" />
    <path d="M10 3v17" />
    <path d="M14 8v7" />
    <path d="M18 5v13" />
    <path d="M22 10v3" />
  </svg>
);

const RING_TABS = [
  { num: 1, title: "Ring 1: Orientation", desc: "A soft, label-free intake" },
  { num: 2, title: "Ring 2: The Field", desc: "Optional support nodes" },
  { num: 3, title: "Ring 3: Resonance", desc: "Relational therapist care" },
];

/**
 * A hands-on walkthrough of the three rings, one tab per ring, each with a
 * small non-committal sandbox so the mechanics can be felt before signing up
 * for anything. Extracted from the guided-support variant's "three-rings"
 * section; the surrounding breathing-timer hero from that page is
 * intentionally left behind.
 */
export function ProductArchitecture() {
  const [selectedRing, setSelectedRing] = useState<number>(1);
  const [sandboxInput, setSandboxInput] = useState<string>("");
  const [sandboxReflected, setSandboxReflected] = useState<string | null>(null);
  const [audioPlaying, setAudioWave] = useState<boolean>(false);
  const [journalText, setJournalText] = useState<string>("");
  const [journalSaved, setJournalSaved] = useState<boolean>(false);
  const [resonanceFit, setResonanceFit] = useState<boolean | null>(null);

  const reducedMotion = !!useReducedMotion();

  const handleSandboxSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!sandboxInput.trim()) return;

    setSandboxReflected(
      `We hear that you are feeling "${sandboxInput.trim()}" right now. In Splash 'Em Out, you don't need to justify or analyze this feeling. It is a real state of your nervous system today. Let's let this feeling occupy its own room without trying to change it immediately.`,
    );
  };

  const handleResetSandbox = () => {
    setSandboxInput("");
    setSandboxReflected(null);
  };

  const handleJournalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!journalText.trim()) return;
    setJournalSaved(true);
  };

  return (
    <section
      id="product-architecture"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.06] dark:opacity-[0.08]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mb-12 max-w-xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-accent font-semibold dark:text-accent/90">
            Product Architecture
          </span>
          <TextReveal
            as="h2"
            text="Try a ring before you begin."
            trigger="view"
            className="mt-2 font-serif text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl"
          />
          <p className="mt-3 text-base text-muted-foreground">
            Each ring below is a small, harmless preview — nothing you type or
            tap here is saved or sent anywhere. Switch tabs to see how each one
            actually works.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-2 border-b border-border/20 pb-4 sm:flex-row sm:items-center">
          {RING_TABS.map((ring) => (
            <button
              key={ring.num}
              onClick={() => setSelectedRing(ring.num)}
              className={cn(
                "flex flex-1 flex-col items-start rounded-xl border p-4 text-left transition-all duration-300",
                selectedRing === ring.num
                  ? "border-accent bg-accent/[0.04] text-accent shadow-xs"
                  : "border-transparent bg-transparent text-muted-foreground hover:bg-muted/20 hover:text-foreground",
              )}
            >
              <span className="font-mono text-xs font-semibold">
                0{ring.num}
              </span>
              <span className="mt-1 font-serif text-base font-light text-foreground">
                {ring.title}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {ring.desc}
              </span>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-border/40 bg-muted/15 p-6 md:p-8 dark:bg-muted/5">
          <AnimatePresence mode="wait">
            {selectedRing === 1 && (
              <m.div
                key="ring-1-sandbox"
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -10, filter: "blur(3px)" }
                }
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 10, filter: "blur(3px)" }
                }
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-5 flex flex-col items-start gap-4">
                  <span className="font-serif text-sm font-light italic text-brand">
                    Ring 1 Simulator
                  </span>
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    Intake without a score.
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Unlike traditional systems that assign scores, levels, or
                    clinical diagnosis, Ring 1 uses reflective orientation. You
                    share how you feel in ordinary words. The system simply
                    listens and echoes validation.
                  </p>
                  <div className="flex items-center gap-2 rounded-lg border border-border/20 bg-background/50 px-3 py-1.5 text-[10.5px] text-muted-foreground">
                    <ShieldCheck className="size-4 text-accent" />
                    <span>100% private — nothing here is saved or sent.</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/30 bg-background p-6 shadow-xs lg:col-span-7">
                  {sandboxReflected ? (
                    <div className="flex flex-col gap-4">
                      <div className="rounded-lg bg-brand/5 p-4 border-l-2 border-brand">
                        <p className="font-serif text-xs italic text-brand/80">
                          Reflected Back to You:
                        </p>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-foreground">
                          {sandboxReflected}
                        </p>
                      </div>
                      <button
                        onClick={handleResetSandbox}
                        className="group inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <RefreshCw className="size-3 transition-transform group-hover:rotate-180 duration-500" />
                        <span>Try another description</span>
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSandboxSubmit}
                      className="flex flex-col gap-4"
                    >
                      <label
                        htmlFor="home-sandbox-feel"
                        className="font-serif text-sm font-light text-foreground"
                      >
                        {
                          '"If you could describe your present state in one word or short sentence, what is it?"'
                        }
                      </label>
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                          id="home-sandbox-feel"
                          type="text"
                          value={sandboxInput}
                          onChange={(e) => setSandboxInput(e.target.value)}
                          placeholder="e.g., tight chest, overwhelmed, resting..."
                          className="min-w-0 flex-1 rounded-lg border border-border/60 bg-muted/20 px-3.5 py-2 text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                        <button
                          type="submit"
                          disabled={!sandboxInput.trim()}
                          className="shrink-0 rounded-lg bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap text-background hover:bg-accent/90 disabled:opacity-40 disabled:pointer-events-none transition-all"
                        >
                          Reflect
                        </button>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        Type how you feel, then click Reflect to see how our
                        non-diagnostic echoing works.
                      </p>
                    </form>
                  )}
                </div>
              </m.div>
            )}

            {selectedRing === 2 && (
              <m.div
                key="ring-2-sandbox"
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -10, filter: "blur(3px)" }
                }
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 10, filter: "blur(3px)" }
                }
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-5 flex flex-col items-start gap-4">
                  <span className="font-serif text-sm font-light italic text-brand">
                    Ring 2 Simulator
                  </span>
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    Explore support nodes.
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    The Field is a spacious landscape of grounding tools,
                    psychoeducation, and quiet grounding prompts. You can enter
                    any node, save it for later, or walk away. No scores are
                    logged, and no streaks are broken.
                  </p>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-muted border border-border/30 px-3 py-1 text-[9.5px] font-medium uppercase text-muted-foreground">
                      Grounding
                    </span>
                    <span className="rounded-full bg-muted border border-border/30 px-3 py-1 text-[9.5px] font-medium uppercase text-muted-foreground">
                      Journaling
                    </span>
                    <span className="rounded-full bg-muted border border-border/30 px-3 py-1 text-[9.5px] font-medium uppercase text-muted-foreground">
                      Audio
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/30 bg-background p-6 shadow-xs lg:col-span-7">
                  <div className="flex flex-col gap-5">
                    <div className="rounded-lg border border-border/30 bg-muted/15 p-4 dark:bg-muted/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded bg-brand/10 text-brand">
                            <AudioWave className="size-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-serif text-xs font-semibold text-foreground">
                              Sound Node: Rain Canopy
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              Ambient brown noise with soft rainfall.
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setAudioWave(!audioPlaying)}
                          className={cn(
                            "rounded px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors border",
                            audioPlaying
                              ? "bg-brand/10 border-brand/35 text-brand"
                              : "bg-background border-border/40 text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {audioPlaying ? "Playing" : "Listen"}
                        </button>
                      </div>
                      {audioPlaying && (
                        <div className="mt-3 flex items-end justify-center gap-1 h-6">
                          {[1.2, 1.8, 0.6, 2.2, 1.4, 0.4, 1.9, 1.1, 0.8].map(
                            (speed, i) => (
                              <m.div
                                key={i}
                                animate={{ height: ["10%", "100%", "10%"] }}
                                transition={{
                                  duration: speed,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-1 rounded-full bg-brand/40"
                              />
                            ),
                          )}
                        </div>
                      )}
                    </div>

                    <div className="rounded-lg border border-border/30 bg-muted/15 p-4 dark:bg-muted/10">
                      {journalSaved ? (
                        <div className="text-center py-2">
                          <p className="font-serif text-xs italic text-accent">
                            {
                              '"Your reflection is stored locally on your device. Quiet. Private."'
                            }
                          </p>
                          <button
                            onClick={() => {
                              setJournalSaved(false);
                              setJournalText("");
                            }}
                            className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Write another reflection
                          </button>
                        </div>
                      ) : (
                        <form
                          onSubmit={handleJournalSubmit}
                          className="flex flex-col gap-3"
                        >
                          <label
                            htmlFor="home-journal-input"
                            className="font-serif text-xs font-semibold text-foreground"
                          >
                            {
                              'Reflection Prompt: "What does the tension in your shoulders want to say?"'
                            }
                          </label>
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <input
                              id="home-journal-input"
                              type="text"
                              value={journalText}
                              onChange={(e) => setJournalText(e.target.value)}
                              placeholder="I feel a tightness, like I need to run..."
                              className="min-w-0 flex-1 rounded border border-border/40 bg-background px-3 py-1.5 text-xs focus:outline-none focus:border-accent"
                            />
                            <button
                              type="submit"
                              disabled={!journalText.trim()}
                              className="shrink-0 rounded bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap text-background hover:bg-accent/90 disabled:opacity-40 transition-all"
                            >
                              Save Private Log
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </m.div>
            )}

            {selectedRing === 3 && (
              <m.div
                key="ring-3-sandbox"
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -10, filter: "blur(3px)" }
                }
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 10, filter: "blur(3px)" }
                }
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-5 flex flex-col items-start gap-4">
                  <span className="font-serif text-sm font-light italic text-brand">
                    Ring 3 Simulator
                  </span>
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    Resonance over ranking.
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    When you decide you need human care, Splash 'Em Out introduces you
                    to a small, curated set of therapists. Instead of ranking
                    providers by rating, availability, or marketplace bidding,
                    we focus on clinical philosophy and nervous system
                    compatibility.
                  </p>
                  <div className="flex items-center gap-2 rounded-lg border border-border/20 bg-background/50 px-3 py-1.5 text-[10.5px] text-muted-foreground">
                    <Heart className="size-4 text-brand" />
                    <span>Matches designed for safe, relational fit.</span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/30 bg-background p-6 shadow-xs lg:col-span-7">
                  {resonanceFit !== null ? (
                    <div className="text-center py-6">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Heart className="size-5" />
                      </div>
                      <h4 className="mt-3 font-serif text-lg font-light text-foreground">
                        {resonanceFit
                          ? "Connection Saved Gently"
                          : "Respectfully Passed"}
                      </h4>
                      <p className="mx-auto mt-1.5 max-w-sm text-xs leading-relaxed text-muted-foreground">
                        {resonanceFit
                          ? "Sarah has been saved to your workspace. Whenever you are ready to send an initial reflection, her profile is waiting for you. No pressure."
                          : "Sarah has been cleared. Splash 'Em Out's matching engine respects your system; passing helps us refine invitations without rating or ranking therapists."}
                      </p>
                      <button
                        onClick={() => setResonanceFit(null)}
                        className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                      >
                        View another practitioner
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-start border-b border-border/15 pb-4">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border/30">
                          <TonedImage
                            seed="sarah-chen-therapist"
                            alt="Cozy portrait of therapist"
                            sizes="64px"
                            className="h-full w-full"
                          />
                        </div>
                        <div>
                          <span className="rounded bg-accent/5 border border-accent/20 px-2 py-0.5 text-[9px] font-medium text-accent">
                            Nervous System Compatibility
                          </span>
                          <h4 className="mt-1 font-serif text-base font-light text-foreground">
                            Sarah Chen, LMFT
                          </h4>
                          <p className="text-[10px] text-muted-foreground">
                            Pacing Focus: Slow, Unhurried • Quiet Grounding
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span className="font-serif text-[11px] font-semibold uppercase tracking-wider text-brand">
                          Clinical Philosophy:
                        </span>
                        <p className="font-serif text-xs italic text-foreground leading-relaxed">
                          {
                            '"In my practice, silence is welcome. We do not work under pressure to resolve everything in our first session. We move at the speed of your protection systems, treating defenses as wise guardians, not obstacles to break down."'
                          }
                        </p>
                      </div>

                      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                        <button
                          onClick={() => setResonanceFit(true)}
                          className="flex-1 rounded bg-brand/10 border border-brand/35 text-brand py-2 text-xs font-semibold uppercase tracking-wider hover:bg-brand/15 transition-all"
                        >
                          This feels aligned
                        </button>
                        <button
                          onClick={() => setResonanceFit(false)}
                          className="flex-1 rounded border border-border/40 text-muted-foreground py-2 text-xs font-semibold uppercase tracking-wider hover:bg-muted/40 hover:text-foreground transition-all"
                        >
                          Pass Respectfully
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
