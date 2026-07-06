import type { Metadata } from "next";
import { BoardHero } from "@/components/variant-3/board-hero";
import { ServiceLedger } from "@/components/variant-3/service-ledger";
import { LocationBoard } from "@/components/variant-3/location-board";
import { CommercialBand } from "@/components/variant-3/commercial-band";
import { FinalStatus } from "@/components/variant-3/final-status";

export const metadata: Metadata = {
  title: "Splash 'Em Out | The Board",
  description:
    "Schedule pickup, find an attended Central Kentucky laundromat, check pricing, or request a commercial bid — one status board, four ways in.",
};

export default function VariantThreePage() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <BoardHero />
      <ServiceLedger />
      <LocationBoard />
      <CommercialBand />
      <FinalStatus />
    </main>
  );
}
