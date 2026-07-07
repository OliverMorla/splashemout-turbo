import { HeroSection } from "@/components/variant-3/hero-section";
import { ServicesSection } from "@/components/variant-3/services-section";
import { ProofSection } from "@/components/variant-3/proof-section";
import { TestimonialsSection } from "@/components/variant-3/testimonials-section";
import { CommercialSection } from "@/components/variant-3/commercial-section";

export default function VariantThreePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProofSection />
      <TestimonialsSection />
      <CommercialSection />
    </main>
  );
}
