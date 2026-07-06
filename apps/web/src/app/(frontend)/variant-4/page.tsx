import type { Metadata } from "next";
import { VariantFourClient } from "./variant-4-client";

export const metadata: Metadata = {
  title: "Splash 'Em Out | The Future of Clean Laundry",
  description:
    "An editorial, state-of-the-art laundry experience for Central Kentucky. Schedule pickup, find a clean attended laundromat, or request a commercial bid.",
};

export default function VariantFourPage() {
  return <VariantFourClient />;
}
