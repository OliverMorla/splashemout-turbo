"use client";

import * as m from "@splashemout/animation/motion/react-m";
import { Marquee } from "@splashemout/animation/motion/components";
import { Button } from "@splashemout/ui/button";
import { cn } from "../../../../../packages/utils/src/class-names";
import { ArrowRight, Droplet } from "lucide-react";

/**
 * Signature idea: "The Sort." Instead of one generic row of review cards
 * drifting the same direction, testimonials are split into three lanes, one
 * per service line, each running at its own speed and direction (self-service
 * is unhurried, wash & fold is a steady middle pace reversed, pickup/delivery
 * & commercial moves fastest, like a van on a schedule). Card styling changes
 * per lane too — light, tinted, and dark-ink — echoing the palettes already
 * established by ServicesSection and ProofSection so the commercial lane
 * reads as the same "serious B2B" register as CommercialSection. Star ratings
 * are swapped for droplets, a small nod to the brand name instead of a
 * generic 5-star cliché. Hovering a card pauses only its lane and lifts that
 * one card, so a reader can stop a single testimonial without freezing the
 * whole section.
 */

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const selfServiceTestimonials: Testimonial[] = [
  {
    name: "Maya R.",
    role: "UK junior, off South Limestone",
    quote:
      "Three washers, one attendant on shift, and the dryers actually finish in 35 minutes. I can knock out a week of laundry between two classes.",
    rating: 5,
  },
  {
    name: "Tom D.",
    role: "Richmond resident, near EKU",
    quote:
      "Been going to the same location for two years. It's card-only now so nobody's machine eats quarters, and it's bright enough that I don't mind the wait.",
    rating: 5,
  },
  {
    name: "Priscilla H.",
    role: "Horse boarder, Woodford County",
    quote:
      "Not a lot of places will run a stable blanket without side-eyeing you. The extra-capacity machines handled two saddle pads and a full blanket in one cycle.",
    rating: 4,
  },
  {
    name: "Deja W.",
    role: "Lexington resident",
    quote:
      "I bring my comforter here instead of the place down the street because the big machines get it fully dry in one cycle, not three.",
    rating: 5,
  },
];

const washFoldTestimonials: Testimonial[] = [
  {
    name: "Andre P.",
    role: "Dad of three, Hamburg",
    quote:
      "Drop off Monday morning, folded and bagged by Tuesday afternoon, exactly like they said. My wife stopped asking who did the towels — they're folded better than we do it.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "ER nurse, Lexington",
    quote:
      "Twelve-hour shifts don't leave room for laundry. It's $1.75 a pound and it comes back sorted by owner in separate bags, which matters more than people think with three kids.",
    rating: 5,
  },
  {
    name: "Grace L.",
    role: "Graduate student",
    quote:
      "I weigh it, hand it over, stop thinking about it. Fourteen pounds ran about twenty four dollars and it smells like it actually got washed, not just steamed.",
    rating: 4,
  },
  {
    name: "Ben T.",
    role: "Nicholasville resident",
    quote:
      "They fold fitted sheets. I still don't know how, but they do, and that alone is worth the per-pound price.",
    rating: 5,
  },
];

const commercialTestimonials: Testimonial[] = [
  {
    name: "Whitney Combs",
    role: "Airbnb host, downtown Lexington",
    quote:
      "Same-day turnaround on linens means I can flip a checkout by 4pm without touching a washer myself. Bags come back sealed and ready to make beds.",
    rating: 5,
  },
  {
    name: "Dr. Alan Ferris",
    role: "Office manager, veterinary clinic",
    quote:
      "We send blankets and exam-table linens out three times a week. Pickup is always inside the window they quote, and the invoice matches the bid every time.",
    rating: 5,
  },
  {
    name: "Marisol Ortega",
    role: "General manager, restaurant",
    quote:
      "Napkins and aprons picked up after close, back before we open two days later. We've never had to reschedule service around them.",
    rating: 5,
  },
  {
    name: "Kevin Reyes",
    role: "Manager, boutique hotel",
    quote:
      "We priced out four commercial laundry services. Splash 'Em Out was the only one that gave us a real number over the phone instead of 'we'll follow up.'",
    rating: 4,
  },
];

type LaneVariant = "light" | "tint" | "dark";

const variantStyles: Record<
  LaneVariant,
  {
    card: string;
    role: string;
    divider: string;
    droplet: string;
    dropletMuted: string;
    ring: string;
  }
> = {
  light: {
    card: "bg-white text-[#001A23]",
    role: "text-[#001A23]/60",
    divider: "border-[#001A23]/15",
    droplet: "fill-[#00E5FF] text-[#00E5FF]",
    dropletMuted: "text-[#001A23]/15",
    ring: "hover:ring-[#00E5FF]",
  },
  tint: {
    card: "bg-[#E2E8F0] text-[#001A23]",
    role: "text-[#001A23]/60",
    divider: "border-[#001A23]/20",
    droplet: "fill-[#0055FF] text-[#0055FF]",
    dropletMuted: "text-[#001A23]/15",
    ring: "hover:ring-[#0055FF]",
  },
  dark: {
    card: "bg-[#001A23] text-white",
    role: "text-white/60",
    divider: "border-white/20",
    droplet: "fill-[#00E5FF] text-[#00E5FF]",
    dropletMuted: "text-white/20",
    ring: "hover:ring-[#00E5FF]",
  },
};

function DropletRating({
  rating,
  variant,
}: {
  rating: number;
  variant: LaneVariant;
}) {
  const styles = variantStyles[variant];
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 droplets`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Droplet
          key={i}
          className={cn("h-3.5 w-3.5", i < rating ? styles.droplet : styles.dropletMuted)}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  label,
  variant,
}: {
  testimonial: Testimonial;
  label: string;
  variant: LaneVariant;
}) {
  const styles = variantStyles[variant];
  return (
    <div
      className={cn(
        "flex w-[300px] shrink-0 flex-col gap-4 rounded-[1.75rem] p-6 shadow-sm ring-2 ring-transparent transition-all duration-300 md:w-[360px]",
        "hover:-translate-y-1 hover:shadow-xl",
        styles.card,
        styles.ring,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <DropletRating rating={testimonial.rating} variant={variant} />
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
          {label}
        </span>
      </div>
      <p className="text-base font-medium leading-relaxed md:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className={cn("mt-auto border-t border-dashed pt-3", styles.divider)}>
        <p className="font-v3-display text-sm font-bold uppercase tracking-tight">
          {testimonial.name}
        </p>
        <p className={cn("text-xs font-medium", styles.role)}>{testimonial.role}</p>
      </div>
    </div>
  );
}

interface LaneProps {
  label: string;
  chipClassName: string;
  variant: LaneVariant;
  items: Testimonial[];
  direction: "left" | "right";
  speed: number;
}

function Lane({ label, chipClassName, variant, items, direction, speed }: LaneProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest",
            chipClassName,
          )}
        >
          {label}
        </span>
      </div>
      <Marquee pauseOnHover direction={direction} speed={speed}>
        {items.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            label={label}
            variant={variant}
          />
        ))}
      </Marquee>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F7F6] py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6 md:px-12 lg:px-24">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-6 inline-block rounded-full bg-[#001A23]/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#001A23]/70">
            Real Loads, Real Words
          </span>
          <h2 className="font-v3-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tighter text-[#001A23] md:text-7xl">
            Straight From <span className="text-[#0055FF]">The Fold.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#001A23]/70 md:text-xl">
            Three lanes, three ways people actually use us. Hover a card to pause its row and read the whole thing.
          </p>
        </m.div>
      </div>

      <div className="flex flex-col gap-10">
        <Lane
          label="Self-Service"
          chipClassName="bg-[#001A23] text-white"
          variant="light"
          items={selfServiceTestimonials}
          direction="left"
          speed={55}
        />
        <Lane
          label="Wash & Fold"
          chipClassName="bg-[#0055FF] text-white"
          variant="tint"
          items={washFoldTestimonials}
          direction="right"
          speed={42}
        />
        <Lane
          label="Pickup, Delivery & Commercial"
          chipClassName="bg-[#00E5FF] text-[#001A23]"
          variant="dark"
          items={commercialTestimonials}
          direction="left"
          speed={32}
        />
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:px-12 lg:px-24">
        <p className="max-w-md font-medium text-[#001A23]/70">
          Ready to see which lane fits your laundry?
        </p>
        <Button className="h-14 rounded-full bg-[#001A23] px-8 text-lg font-bold text-white transition-colors hover:bg-[#0055FF]">
          Schedule Your First Load
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
