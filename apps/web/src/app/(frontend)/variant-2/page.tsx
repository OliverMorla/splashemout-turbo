import type { Metadata } from "next";
import { CareHero } from "@/components/home/care-hero";
import { CareServices } from "@/components/home/care-services";
import { CareCycle } from "@/components/home/care-cycle";
import { CarePriceTag } from "@/components/home/care-price-tag";
import { CareLocations } from "@/components/home/care-locations";
import { CareCommercial } from "@/components/home/care-commercial";
import { CareTestimonials } from "@/components/home/care-testimonials";
import { CareFinalCta } from "@/components/home/care-final-cta";
import { StickyActionBar } from "@/components/home/sticky-action-bar";

export const metadata: Metadata = {
  title: "Splash 'Em Out | Laundry Day, Tagged & Handled",
  description:
    "Schedule pickup, wash-and-fold, and attended laundromats across Central Kentucky. Clear prices, real locations, and laundry folded like it was your own.",
};

/**
 * Variant 2 — "Care Label". The page reads like the care tag sewn into a
 * garment: universal care symbols, kraft tags, and stamped prices. Every
 * section earns its place against the four high-intent actions (schedule,
 * locate, price, bid) and the five service lines.
 */
export default function VariantTwo() {
  return (
    <>
      <main className="flex flex-1 flex-col bg-background">
        <CareHero />
        <CareServices />
        <CareCycle />
        <CarePriceTag />
        <CareLocations />
        <CareCommercial />
        <CareTestimonials />
        <CareFinalCta />
      </main>
      <StickyActionBar />
    </>
  );
}
