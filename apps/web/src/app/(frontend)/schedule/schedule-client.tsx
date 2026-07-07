"use client";

import { useMemo, useState, type ComponentType, type ReactNode } from "react";
import {
  Truck,
  Shirt,
  Sparkles,
  MapPin,
  Clock,
  Ticket,
  TicketCheck,
  Phone,
  ArrowRight,
  Check,
  Pencil,
  RotateCcw,
} from "lucide-react";
import {
  BlurDiv,
  BlurH1,
  BlurInViewDiv,
  BlurP,
} from "@splashemout/animation/motion/components";
import { buttonVariants, ButtonWave } from "@splashemout/ui/button";
import { cn } from "../../../../../../packages/utils/src/class-names";
import { contactInfo } from "@/config/nav";

const EXTERNAL_SCHEDULER = "https://splashemout.curbsidelaundries.com/";

// Real service names and pricing, kept in sync with the figures already
// used on variant-4 and the homepage service cards — nothing invented here.
const SERVICES = [
  {
    id: "pickup-delivery",
    name: "Pickup & Delivery",
    tagline: "Doorstep pickup, washed with care, back in 24 hours.",
    price: "$1.99/lb",
    minimum: "$30 minimum",
    turnaround: "24-hour return",
    icon: Truck,
  },
  {
    id: "wash-fold",
    name: "Wash & Fold Pickup",
    tagline: "The same wash-and-fold order, picked up at your door.",
    price: "$1.69/lb",
    minimum: "$15 minimum",
    turnaround: "Next-day ready",
    icon: Shirt,
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning Pickup",
    tagline: "Garment care routed with your wash, no separate trip.",
    price: "Priced at drop-off",
    minimum: "Add to any pickup",
    turnaround: "Returned with your order",
    icon: Sparkles,
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

const WINDOWS = [
  { id: "morning", label: "Morning", range: "8 – 11 AM" },
  { id: "midday", label: "Midday", range: "11 AM – 2 PM" },
  { id: "afternoon", label: "Afternoon", range: "2 – 5 PM" },
  { id: "evening", label: "Evening", range: "5 – 8 PM" },
] as const;

type WindowId = (typeof WINDOWS)[number]["id"];

const DAY_MS = 24 * 60 * 60 * 1000;

type DayOption = { id: string; label: string; full: string };

function buildDayOptions(): DayOption[] {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
  });
  const now = new Date();
  return Array.from({ length: 6 }, (_, i) => {
    const date = new Date(now.getTime() + i * DAY_MS);
    const full = formatter.format(date);
    const label = i === 0 ? "Today" : i === 1 ? "Tomorrow" : full;
    return { id: `day-${i}`, label, full };
  });
}

function generateTicketId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return `SEO-${id}`;
}

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring";

const INPUT_CLASS = cn(
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors",
  FOCUS_RING,
);

function isEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value);
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function ScheduleClient() {
  const days = useMemo(buildDayOptions, []);

  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [serviceId, setServiceId] = useState<ServiceId | null>(null);
  const [dayId, setDayId] = useState<string | null>(null);
  const [windowId, setWindowId] = useState<WindowId | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [openStep, setOpenStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const step1Valid = address.trim().length > 4 && /^\d{5}$/.test(zip);
  const step2Valid = serviceId !== null;
  const step3Valid = dayId !== null && windowId !== null;
  const step4Valid =
    name.trim().length > 1 && isEmail(email) && digitsOnly(phone).length >= 10;

  // A step can only be opened once every step before it is valid — the
  // sequence is real (you can't quote a service without an address, or
  // confirm without a window), so the numbering carries actual meaning.
  const maxOpenable = !step1Valid ? 1 : !step2Valid ? 2 : !step3Valid ? 3 : 4;

  const service = SERVICES.find((s) => s.id === serviceId) ?? null;
  const day = days.find((d) => d.id === dayId) ?? null;
  const pickupWindow = WINDOWS.find((w) => w.id === windowId) ?? null;

  function goToStep(step: number) {
    if (step <= maxOpenable) setOpenStep(step);
  }

  function handleConfirm() {
    if (!step4Valid) return;
    setTicketId(generateTicketId());
    setConfirmed(true);
  }

  function handleReset() {
    setAddress("");
    setZip("");
    setServiceId(null);
    setDayId(null);
    setWindowId(null);
    setName("");
    setPhone("");
    setEmail("");
    setOpenStep(1);
    setConfirmed(false);
    setTicketId(null);
  }

  return (
    <main className="flex flex-1 flex-col bg-background">
      <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_36rem_at_top,rgba(14,165,233,0.07),transparent)]" />
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <BlurDiv
            delay={0.05}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold tracking-widest text-brand uppercase"
          >
            <Ticket className="h-3.5 w-3.5" aria-hidden="true" />
            Schedule Pickup &amp; Delivery
          </BlurDiv>
          <BlurH1
            delay={0.12}
            className="mt-5 font-serif text-4xl leading-tight font-normal tracking-tight text-foreground sm:text-5xl"
          >
            Fill out your claim ticket.
          </BlurH1>
          <BlurP
            delay={0.18}
            className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Four quick steps — address, service, window, and contact — and
            you&apos;ll see exactly what a Splash &apos;Em Out pickup ticket
            looks like before you book.
          </BlurP>
          <BlurP delay={0.24} className="mt-3 text-sm text-muted-foreground">
            This page previews how scheduling will work. To book a real
            pickup right now, use our{" "}
            <a
              href={EXTERNAL_SCHEDULER}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-semibold text-brand underline underline-offset-2 hover:text-brand-solid",
                FOCUS_RING,
                "rounded-sm",
              )}
            >
              live scheduler
            </a>
            .
          </BlurP>
        </div>
      </section>

      <section className="pb-24 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 lg:grid-cols-12 lg:items-start">
          {/* Left column — the sequential steps */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {/* Step 1 — Address */}
            <StepCard
              number={1}
              title="Where should we pick up?"
              description="We route pickups across Lexington, Richmond, and Nicholasville."
              icon={MapPin}
              isOpen={openStep === 1}
              isComplete={step1Valid}
              isLocked={1 > maxOpenable}
              summary={step1Valid ? `${address} · ${zip}` : undefined}
              onEdit={() => goToStep(1)}
            >
              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
                  Pickup address
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Porch Way, Lexington, KY"
                    autoComplete="street-address"
                    className={INPUT_CLASS}
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground sm:w-40">
                  ZIP code
                  <input
                    type="text"
                    inputMode="numeric"
                    value={zip}
                    onChange={(e) => setZip(digitsOnly(e.target.value).slice(0, 5))}
                    placeholder="40502"
                    autoComplete="postal-code"
                    className={INPUT_CLASS}
                  />
                </label>
                <StepContinue
                  disabled={!step1Valid}
                  onClick={() => goToStep(2)}
                  label="Continue to service"
                />
              </div>
            </StepCard>

            {/* Step 2 — Service */}
            <StepCard
              number={2}
              title="What's in the load?"
              description="Pick the service line this pickup is for."
              icon={service ? service.icon : Shirt}
              isOpen={openStep === 2}
              isComplete={step2Valid}
              isLocked={2 > maxOpenable}
              summary={service ? service.name : undefined}
              onEdit={() => goToStep(2)}
            >
              <div
                role="group"
                aria-label="Select a service"
                className="grid gap-2.5 sm:grid-cols-3"
              >
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  const selected = serviceId === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setServiceId(s.id)}
                      className={cn(
                        "flex flex-col items-start gap-2 rounded-xl border p-3.5 text-left transition-colors",
                        FOCUS_RING,
                        selected
                          ? "border-brand bg-brand/5"
                          : "border-border bg-background hover:border-brand/40",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          selected ? "text-brand" : "text-muted-foreground",
                        )}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-foreground">
                        {s.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {s.price} · {s.minimum}
                      </span>
                    </button>
                  );
                })}
              </div>
              <StepContinue
                disabled={!step2Valid}
                onClick={() => goToStep(3)}
                label="Continue to pickup window"
              />
            </StepCard>

            {/* Step 3 — Date & window */}
            <StepCard
              number={3}
              title="Pick a pickup window"
              description="Choose a day and a three-hour window that works for you."
              icon={Clock}
              isOpen={openStep === 3}
              isComplete={step3Valid}
              isLocked={3 > maxOpenable}
              summary={
                day && pickupWindow ? `${day.label} · ${pickupWindow.label}` : undefined
              }
              onEdit={() => goToStep(3)}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Day
                  </p>
                  <div
                    role="group"
                    aria-label="Select a pickup day"
                    className="flex flex-wrap gap-2"
                  >
                    {days.map((d) => {
                      const selected = dayId === d.id;
                      return (
                        <button
                          key={d.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setDayId(d.id)}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                            FOCUS_RING,
                            selected
                              ? "border-brand bg-brand/5 text-brand"
                              : "border-border bg-background text-foreground hover:border-brand/40",
                          )}
                        >
                          {d.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Window
                  </p>
                  <div
                    role="group"
                    aria-label="Select a pickup window"
                    className="grid gap-2 sm:grid-cols-2"
                  >
                    {WINDOWS.map((w) => {
                      const selected = windowId === w.id;
                      return (
                        <button
                          key={w.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setWindowId(w.id)}
                          className={cn(
                            "flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-sm transition-colors",
                            FOCUS_RING,
                            selected
                              ? "border-brand bg-brand/5"
                              : "border-border bg-background hover:border-brand/40",
                          )}
                        >
                          <span className="font-semibold text-foreground">
                            {w.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {w.range}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <StepContinue
                  disabled={!step3Valid}
                  onClick={() => goToStep(4)}
                  label="Continue to contact info"
                />
              </div>
            </StepCard>

            {/* Step 4 — Contact & confirm */}
            <StepCard
              number={4}
              title="Who do we text when we're on the way?"
              description="We'll send tracking updates to this contact."
              icon={Phone}
              isOpen={openStep === 4}
              isComplete={step4Valid}
              isLocked={4 > maxOpenable}
              summary={step4Valid ? `${name} · ${phone}` : undefined}
              onEdit={() => goToStep(4)}
            >
              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
                  Full name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Baker"
                    autoComplete="name"
                    className={INPUT_CLASS}
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
                    Phone
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(859) 555-0142"
                      autoComplete="tel"
                      className={INPUT_CLASS}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jordan@email.com"
                      autoComplete="email"
                      className={INPUT_CLASS}
                    />
                  </label>
                </div>
                <button
                  type="button"
                  disabled={!step4Valid}
                  onClick={handleConfirm}
                  className={cn(
                    buttonVariants({ variant: "wave", size: "lg" }),
                    "group relative mt-1 h-14 justify-center gap-2 px-8 text-base disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  <ButtonWave />
                  <span className="relative font-bold">
                    Confirm Preview Pickup
                  </span>
                  <ArrowRight
                    className="relative h-4 w-4 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </StepCard>
          </div>

          {/* Right column — the live claim ticket */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <BlurInViewDiv y={16}>
              {confirmed ? (
                <ConfirmedTicket
                  ticketId={ticketId}
                  address={address}
                  zip={zip}
                  service={service}
                  day={day}
                  pickupWindow={pickupWindow}
                  name={name}
                  onReset={handleReset}
                />
              ) : (
                <DraftTicket
                  address={address}
                  zip={zip}
                  service={service}
                  day={day}
                  pickupWindow={pickupWindow}
                  name={name}
                  phone={phone}
                />
              )}
            </BlurInViewDiv>
          </div>
        </div>
      </section>
    </main>
  );
}

type StepCardProps = {
  number: number;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  isOpen: boolean;
  isComplete: boolean;
  isLocked: boolean;
  summary?: string;
  onEdit: () => void;
  children: ReactNode;
};

function StepCard({
  number,
  title,
  description,
  icon: Icon,
  isOpen,
  isComplete,
  isLocked,
  summary,
  onEdit,
  children,
}: StepCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-background transition-colors",
        isOpen ? "border-brand/50 shadow-sm" : "border-border",
        isLocked && "opacity-60",
      )}
    >
      <button
        type="button"
        onClick={onEdit}
        disabled={isLocked}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left disabled:cursor-not-allowed",
          FOCUS_RING,
        )}
      >
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold",
            isComplete
              ? "bg-brand text-background"
              : "bg-muted text-muted-foreground",
          )}
        >
          {isComplete ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            number
          )}
        </span>
        <span className="flex-1">
          <span className="block font-serif text-lg font-normal text-foreground">
            {title}
          </span>
          {isComplete && !isOpen && summary ? (
            <span className="mt-0.5 block text-sm text-muted-foreground">
              {summary}
            </span>
          ) : (
            <span className="mt-0.5 block text-sm text-muted-foreground">
              {description}
            </span>
          )}
        </span>
        {isComplete && !isOpen && (
          <Pencil
            className="h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
        )}
        <Icon
          className={cn(
            "h-5 w-5 shrink-0",
            isOpen ? "text-brand" : "text-muted-foreground",
          )}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="border-t border-border px-5 pt-4 pb-5">{children}</div>
      )}
    </div>
  );
}

function StepContinue({
  disabled,
  onClick,
  label,
}: {
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "brand", size: "lg" }),
        "mt-1 h-11 justify-center gap-1.5 self-start px-6 disabled:pointer-events-none disabled:opacity-50",
      )}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

type TicketService = (typeof SERVICES)[number] | null;
type TicketDay = DayOption | null;
type TicketWindow = (typeof WINDOWS)[number] | null;

function TicketRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between text-sm">
      <span className="text-[color:var(--ticket-ink)]/60">{label}</span>
      <span className="font-mono font-bold text-[color:var(--ticket-ink)]">
        {value}
      </span>
    </div>
  );
}

function DraftTicket({
  address,
  zip,
  service,
  day,
  pickupWindow,
  name,
  phone,
}: {
  address: string;
  zip: string;
  service: TicketService;
  day: TicketDay;
  pickupWindow: TicketWindow;
  name: string;
  phone: string;
}) {
  const hasAnything = address || service || day || name;
  return (
    <div className="receipt-panel rounded-2xl border-[color:var(--ticket-line)] bg-ticket-paper px-6 py-7 shadow-lg">
      <div className="flex items-center justify-between border-b border-dashed border-[color:var(--ticket-line)] pb-3">
        <p className="font-mono text-xs font-bold tracking-[0.22em] text-[color:var(--ticket-ink)] uppercase">
          Claim Ticket
        </p>
        <span className="rounded bg-brand/10 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-brand-solid uppercase">
          Draft
        </span>
      </div>

      {hasAnything ? (
        <div className="mt-4 space-y-3">
          <TicketRow
            label="Address"
            value={address ? `${address}${zip ? ` · ${zip}` : ""}` : "—"}
          />
          <TicketRow label="Service" value={service ? service.name : "—"} />
          {service && (
            <>
              <TicketRow label="Rate" value={service.price} />
              <TicketRow label="Minimum" value={service.minimum} />
              <TicketRow label="Turnaround" value={service.turnaround} />
            </>
          )}
          <TicketRow
            label="Window"
            value={day && pickupWindow ? `${day.label}, ${pickupWindow.range}` : "—"}
          />
          <TicketRow label="Contact" value={name || "—"} />
          <TicketRow label="Phone" value={phone || "—"} />
        </div>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--ticket-ink)]/70">
          Start with your pickup address — this ticket fills in as you go, so
          you can see the whole order before you confirm.
        </p>
      )}

      <div className="mt-5 border-t border-[color:var(--ticket-line)] pt-3">
        <p className="text-center font-mono text-[0.6rem] tracking-[0.18em] text-[color:var(--ticket-ink)]/50 uppercase">
          Splash &apos;Em Out Laundry · Preview
        </p>
      </div>
    </div>
  );
}

function ConfirmedTicket({
  ticketId,
  address,
  zip,
  service,
  day,
  pickupWindow,
  name,
  onReset,
}: {
  ticketId: string | null;
  address: string;
  zip: string;
  service: TicketService;
  day: TicketDay;
  pickupWindow: TicketWindow;
  name: string;
  onReset: () => void;
}) {
  return (
    <div className="receipt-panel rounded-2xl border-[color:var(--ticket-line)] bg-ticket-paper px-6 py-7 shadow-lg">
      <div className="flex items-center justify-between border-b border-dashed border-[color:var(--ticket-line)] pb-3">
        <p className="font-mono text-xs font-bold tracking-[0.22em] text-[color:var(--ticket-ink)] uppercase">
          Claim Ticket
        </p>
        <span className="flex items-center gap-1 rounded bg-accent/15 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-accent uppercase">
          <TicketCheck className="h-3 w-3" aria-hidden="true" />
          Confirmed
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <TicketRow label="Ticket #" value={ticketId ?? "—"} />
        <TicketRow label="Address" value={`${address} · ${zip}`} />
        <TicketRow label="Service" value={service?.name ?? "—"} />
        <TicketRow
          label="Window"
          value={day && pickupWindow ? `${day.label}, ${pickupWindow.range}` : "—"}
        />
        <TicketRow label="Contact" value={name} />
      </div>

      <div className="mt-5 rounded-lg border border-dashed border-[color:var(--ticket-line)] p-3">
        <p className="text-xs leading-relaxed text-[color:var(--ticket-ink)]/80">
          This is a preview, not a booked pickup — nothing was scheduled or
          charged. To have a driver actually come get this load, use the
          live scheduler below.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <a
          href={EXTERNAL_SCHEDULER}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "brand", size: "lg" }),
            "h-12 w-full justify-center gap-2",
          )}
        >
          Schedule a real pickup
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={onReset}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 flex-1 justify-center gap-1.5",
            )}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Start over
          </button>
          <a
            href={contactInfo.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 justify-center gap-1.5 px-4",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
