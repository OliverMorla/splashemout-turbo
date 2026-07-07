"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Droplet, MessageCircle, Send, X } from "lucide-react";
import * as m from "@splashemout/animation/motion/react-m";
import { AnimatePresence, useReducedMotion } from "@splashemout/animation/motion/react";
import { Button } from "@splashemout/ui/button";
import { Input } from "@splashemout/ui/input";
import { cn } from "../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

// Seeded transcript so the panel reads like an ongoing front-desk
// conversation instead of an empty inbox. Purely local UI state — no
// network call is made for these or for replies (see getCannedReply below).
const seedMessages: ChatMessage[] = [
  {
    id: "seed-1",
    role: "assistant",
    text: "Hey, I'm the Splash 'Em Out front desk. Ask me about pickup & delivery, pricing, or your nearest laundromat.",
  },
  {
    id: "seed-2",
    role: "user",
    text: "Do you pick up in Richmond?",
  },
  {
    id: "seed-3",
    role: "assistant",
    text: "We do — Richmond, Lexington, and Nicholasville are all in our pickup area. Want the link to schedule a bag?",
  },
];

// Simple keyword routing so the widget feels useful without pretending to be
// a live agent. This is UI-only: matched by substring, no requests are sent.
function getCannedReply(input: string): string {
  const text = input.toLowerCase();

  if (/(pick\s?up|deliver|schedule|bag)/.test(text)) {
    return `We can grab your laundry and bring it back clean. Head to ${contactInfo.scheduleHref} to pick a pickup window.`;
  }

  if (/(price|pricing|cost|pound|minimum|\$)/.test(text)) {
    return "Wash-and-fold runs $1.69/lb with a $15 minimum. Full pricing for every service is on our Pricing page.";
  }

  if (/(commercial|bid|quote|business|linens|towels)/.test(text)) {
    return "For recurring commercial pickup, the Commercial page has a quick bid form — tell us your volume and turnaround and we'll follow up.";
  }

  if (/(location|near|address|richmond|lexington|nicholasville|hour|open|close)/.test(text)) {
    return "We've got attended laundromats across Central Kentucky. Check the Locations page for addresses, hours, and directions.";
  }

  if (/(dry\s?clean)/.test(text)) {
    return "Yes — we handle dry cleaning pickup and delivery too, same easy scheduling as wash-and-fold.";
  }

  return `I'm just a quick preview right now. For a real answer, call or text us at ${contactInfo.phoneDisplay}, or browse pricing and locations above.`;
}

export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(seedMessages);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);

  const panelId = useId();
  const inputId = useId();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setTyping(true);

    // Simulated response delay only — no network request is made.
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: "assistant", text: getCannedReply(text) },
      ]);
    }, 550);
  }

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div className="chat-widget-offset fixed z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <m.div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="false"
            aria-label="Chat with the Splash 'Em Out front desk"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={transition}
            style={{ transformOrigin: "bottom right" }}
            className="glass-panel flex h-[min(32rem,70vh)] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl"
          >
            <div className="claim-stub flex items-start justify-between gap-3 rounded-t-3xl px-4 pt-4 pb-3">
              <div>
                <p className="font-serif text-base leading-tight">Front Desk</p>
                <p className="mt-0.5 text-xs opacity-70">
                  Ask about pickup, pricing & locations
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
                aria-label="Close chat"
                className="-mr-1 -mt-1 shrink-0"
              >
                <X aria-hidden="true" />
              </Button>
            </div>

            <div
              ref={scrollRef}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    message.role === "assistant"
                      ? "self-start rounded-bl-sm border border-border bg-muted text-foreground"
                      : "self-end rounded-br-sm bg-brand-solid text-background",
                  )}
                >
                  <span className="sr-only">
                    {message.role === "assistant" ? "Front desk: " : "You: "}
                  </span>
                  {message.text}
                </div>
              ))}
              {typing ? (
                <div
                  className="max-w-[60%] animate-pulse self-start rounded-2xl rounded-bl-sm border border-border bg-muted px-3.5 py-2.5 text-sm text-muted-foreground"
                  aria-hidden="true"
                >
                  &hellip;
                </div>
              ) : null}
            </div>

            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border-t border-border/70 px-3 py-3"
            >
              <label htmlFor={inputId} className="sr-only">
                Message the front desk
              </label>
              <Input
                id={inputId}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about pickup, pricing…"
                autoComplete="off"
                className="rounded-full"
              />
              <Button
                type="submit"
                variant="brand"
                size="icon"
                className="rounded-full"
                disabled={!draft.trim()}
                aria-label="Send message"
              >
                <Send aria-hidden="true" />
              </Button>
            </form>
          </m.div>
        ) : null}
      </AnimatePresence>

      <button
        ref={launcherRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close chat" : "Chat with the front desk"}
        onClick={() => setOpen((value) => !value)}
        className="glass-header relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-brand-solid transition-transform hover:scale-105 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            <Droplet
              className="absolute right-2.5 bottom-2.5 h-3 w-3 fill-accent text-accent"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </div>
  );
}
