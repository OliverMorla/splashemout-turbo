import {
  BadgeCheck,
  MapPinned,
  PhoneCall,
  WashingMachine,
} from "lucide-react";
import { BlurInViewDiv } from "@splashemout/animation/motion/components";

const PROOF_POINTS = [
  {
    icon: BadgeCheck,
    copy: "Fully attended laundromats for cleaner, easier visits.",
  },
  {
    icon: WashingMachine,
    copy: "Large-capacity machines for bedding, towels, and big household loads.",
  },
  {
    icon: MapPinned,
    copy: "Clear phone numbers, addresses, and directions for each location.",
  },
  {
    icon: PhoneCall,
    copy: "Pickup, drop-off, and commercial service from one local brand.",
  },
];

const CHECKLIST = [
  "Fully attended",
  "Clean & safe",
  "80 lb washers",
  "Local phone support",
];

export function TrustProof() {
  return (
    <section className="border-y border-border bg-footer-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <BlurInViewDiv y={12} className="max-w-2xl">
          <h2 className="font-serif text-3xl text-footer-fg sm:text-4xl">
            Clean facilities. Real attendants. Local service.
          </h2>
          <p className="mt-3 text-base leading-7 text-footer-fg/75">
            Splash &apos;Em Out is built around practical laundry help:
            staffed locations, large machines, visible prices, and a local
            team you can contact.
          </p>
        </BlurInViewDiv>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <BlurInViewDiv
                key={point.copy}
                y={16}
                delay={0.08 * index}
                className="flex flex-col gap-3 rounded-xl border border-footer-accent/20 bg-background/60 p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-footer-accent/10 text-footer-accent">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="font-sans text-sm leading-6 text-footer-fg">
                  {point.copy}
                </p>
              </BlurInViewDiv>
            );
          })}
        </div>

        <BlurInViewDiv
          y={12}
          delay={0.3}
          className="mt-8 flex flex-wrap gap-2"
        >
          {CHECKLIST.map((item) => (
            <span
              key={item}
              className="claim-tag rounded-full px-3 py-1 font-sans text-xs font-semibold tracking-wide uppercase"
            >
              {item}
            </span>
          ))}
        </BlurInViewDiv>
      </div>
    </section>
  );
}
