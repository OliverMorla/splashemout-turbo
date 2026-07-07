import { HeroSection } from "@/components/variant-5/hero-section";
import { RouteCardSection } from "@/components/variant-5/route-card-section";
import { ClosingSection } from "@/components/variant-5/closing-section";

export default function VariantFivePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <RouteCardSection />
      <ClosingSection />
    </main>
  );
}
