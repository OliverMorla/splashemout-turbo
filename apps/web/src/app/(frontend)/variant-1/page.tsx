import type { Metadata } from "next";
import { HeroCommandCenter } from "@/components/home/hero-command-center";
import { QuickActionDock } from "@/components/home/quick-action-dock";
import { ServiceSplit } from "@/components/home/service-split";
import { PricingSnapshot } from "@/components/home/pricing-snapshot";
import { LocationFinder } from "@/components/home/location-finder";
import { LoadPath } from "@/components/home/load-path";
import { TrustProof } from "@/components/home/trust-proof";
import { CommercialStrip } from "@/components/home/commercial-strip";
import { ServiceAreaBand } from "@/components/home/service-area-band";
import { FinalCta } from "@/components/home/final-cta";
import { StickyActionBar } from "@/components/home/sticky-action-bar";

export const metadata: Metadata = {
  title: "Splash 'Em Out | Laundry Day, Handled",
  description:
    "Clean laundromats, wash-and-fold, and pickup laundry service across Central Kentucky, with clear prices and real local locations.",
};

export default function VariantOne() {
  return (
    <>
      <main className="flex flex-1 flex-col overflow-hidden bg-background pb-24 lg:pb-0">
        <HeroCommandCenter />
        <QuickActionDock />
        <ServiceSplit />
        <PricingSnapshot />
        <LocationFinder />
        <LoadPath />
        <TrustProof />
        <CommercialStrip />
        <ServiceAreaBand />
        <FinalCta />
      </main>
      <StickyActionBar />
    </>
  );
}
