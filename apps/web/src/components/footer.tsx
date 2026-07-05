import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  BlurInViewDiv,
  // TextReveal,
} from "@splashemout/animation/motion/components";
// import { buttonVariants } from "@splashemout/ui/button";

type FooterLink = {
  href: Route;
  label: string;
};

type FooterLinkGroupConfig = {
  title: string;
  tone: string;
  links: FooterLink[];
};

const footerLinkGroups: FooterLinkGroupConfig[] = [
  {
    title: "The Space",
    tone: "text-brand/90",
    links: [
      { href: "/how-it-works" as Route, label: "How It Works" },
      { href: "/orientation" as Route, label: "Begin Orientation" },
      { href: "/field" as Route, label: "Enter the Field" },
      { href: "/regulation-room" as Route, label: "Regulation Room" },
    ],
  },
  {
    title: "Resonance",
    tone: "text-accent/95",
    links: [
      { href: "/resonance" as Route, label: "Our Model" },
      { href: "/therapists" as Route, label: "Find a Therapist" },
      { href: "/for-therapists/apply" as Route, label: "For Providers" },
    ],
  },
  {
    title: "Trust & Legal",
    tone: "text-foreground/70",
    links: [
      { href: "/about" as Route, label: "Philosophy" },
      { href: "/safety" as Route, label: "Boundaries" },
      { href: "/resources" as Route, label: "Resources" },
      { href: "/contact" as Route, label: "Contact" },
      { href: "/privacy" as Route, label: "Privacy" },
      { href: "/terms" as Route, label: "Terms" },
    ],
  },
];

const accountLinks: FooterLink[] = [
  { href: "/login" as Route, label: "User Sign In" },
  { href: "/signup" as Route, label: "Create Account" },
  { href: "/funnels" as Route, label: "Funnels" },
];

function FooterLinkGroup({
  group,
  index,
}: {
  group: FooterLinkGroupConfig;
  index: number;
}) {
  return (
    <BlurInViewDiv
      delay={0.12 + index * 0.08}
      y={18}
      className={
        index === 2
          ? "col-span-2 flex flex-col gap-4 sm:col-span-1"
          : "flex flex-col gap-4"
      }
    >
      <span
        className={`font-serif text-xs font-semibold uppercase tracking-[0.2em] ${group.tone}`}
      >
        {group.title}
      </span>
      <ul
        className={
          index === 2
            ? "grid grid-cols-2 gap-3 text-xs sm:flex sm:flex-col sm:text-sm"
            : "flex flex-col gap-3 text-xs sm:text-sm"
        }
      >
        {group.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </BlurInViewDiv>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-muted/10 to-background px-6 pb-0 pt-20 font-sans dark:via-muted/15">
      {/* 1. CTA — Immediate Support */}
      {/* <BlurInViewDiv
        className="relative flex w-full items-center justify-center overflow-hidden py-44 sm:py-52"
        delay={0.04}
        y={20}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute h-[280px] w-[280px] rounded-full border border-brand/[0.09]" />
          <div className="absolute h-[500px] w-[500px] rounded-full border border-brand/[0.06]" />
          <div className="absolute h-[720px] w-[720px] rounded-full border border-accent/[0.045]" />
          <div className="absolute h-[940px] w-[940px] rounded-full border border-accent/[0.025]" />
        </div>

        <div className="relative z-10 flex max-w-lg flex-col items-center gap-8 px-6 text-center sm:gap-9">
          <BlurInViewDiv
            delay={0.1}
            y={10}
            className="relative h-14 w-28 opacity-90 sm:h-16 sm:w-32"
          >
            <Image
              src="/images/brand/logo-transparent.webp"
              alt=""
              fill
              sizes="128px"
              className="object-contain"
              priority={false}
            />
          </BlurInViewDiv>

          <BlurInViewDiv
            delay={0.16}
            y={8}
            className="flex items-center gap-2.5"
          >
            <span
              className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-brand/70"
              aria-hidden="true"
            />
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-brand/75 font-semibold">
              Immediate Support
            </span>
          </BlurInViewDiv>

          <TextReveal
            as="h2"
            text={["You don't have to", "carry this alone."]}
            trigger="view"
            className="font-serif text-[2.6rem] font-light italic leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            lineClassName="pb-[0.1em]"
            delay={0.2}
            stagger={0.08}
            y={26}
          />

          <BlurInViewDiv delay={0.34} y={14}>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
              Reach the 988 Lifeline anytime — non-coercive, judgment-free, and
              always available.
            </p>
          </BlurInViewDiv>

          <BlurInViewDiv delay={0.46} y={12}>
            <Link
              href={"/immediate-help" as Route}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "group/btn rounded-full px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em]",
              })}
            >
              Seek Urgent Support
              <span
                className="font-sans transition-transform duration-300 group-hover/btn:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </BlurInViewDiv>
        </div>
      </BlurInViewDiv> */}

      {/* 2. Main Navigation Area */}
      <div className="z-10 mx-auto mb-auto mt-2 flex w-full max-w-5xl flex-col justify-between gap-12 md:flex-row md:gap-8">
        {/* Brand narrative Column */}
        <BlurInViewDiv
          delay={0.08}
          y={18}
          className="flex max-w-sm flex-col gap-4 md:max-w-xs"
        >
          <Link href="/" className="group flex w-fit items-center gap-2.5">
            <div className="relative flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/brand/logo-transparent.webp"
                alt="Splash 'Em Out"
                width={28}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-serif text-base font-light tracking-wide text-foreground transition-colors duration-300 group-hover:text-brand">
              Splash 'Em Out
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-muted-foreground">
            A gentle mental health support ecosystem built around self-directed
            orientation, community regulation, and therapeutic resonance.
            Explore support completely on your own terms.
          </p>
        </BlurInViewDiv>

        {/* 3-Column Route Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12 lg:gap-16">
          {footerLinkGroups.map((group, index) => (
            <FooterLinkGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>

      {/* 3. Sub-footer & Giant Watermark */}
      <div className="pointer-events-none relative mt-auto flex w-full select-none flex-col items-center justify-end pb-0">
        {/* Secondary legal / copyright info bar */}
        <BlurInViewDiv
          delay={0.12}
          y={12}
          className="pointer-events-auto z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 border-t border-border/20 px-4 pt-6 text-[10px] text-muted-foreground/50 sm:text-[11px] md:flex-row"
        >
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Splash 'Em Out LLC. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {accountLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <span>•</span>
            <span>Not therapy, diagnosis, or emergency care.</span>
          </div>
        </BlurInViewDiv>

        {/* The Giant Watermark "MAGNET" - blends perfectly at the bottom */}
        <BlurInViewDiv
          delay={0.18}
          y={16}
          className="pointer-events-none mt-4 flex h-[12vw] w-full select-none justify-center overflow-hidden sm:h-[11vw]"
        >
          <span className="translate-y-[20%] select-none font-serif text-[18vw] font-bold leading-none tracking-[0.18em] text-foreground/[0.035]">
            MAGNET
          </span>
        </BlurInViewDiv>
      </div>
    </footer>
  );
}
