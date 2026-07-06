import Link from "next/link";
import type { Route } from "next";
import { Phone, Truck } from "lucide-react";
import { contactInfo } from "@/config/nav";

/**
 * Mobile-only bottom bar so Schedule and Call stay reachable without
 * hunting, per the hero and final-CTA mobile requirements in HOME.md.
 */
export function StickyActionBar() {
  return (
    <div
      className="glass-header fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-2xl p-2 lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.5rem)" }}
    >
      <Link
        href={contactInfo.scheduleHref as Route}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-solid px-4 py-3 font-sans text-sm font-semibold text-background"
      >
        <Truck className="h-4 w-4" aria-hidden="true" />
        Schedule
      </Link>
      <a
        href={contactInfo.phoneHref}
        className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm font-semibold text-foreground"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
