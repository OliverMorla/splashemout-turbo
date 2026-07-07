import { Fraunces, Work_Sans } from "next/font/google";
import type { Metadata } from "next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-v5-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-v5-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Splash 'Em Out | On the Route",
  description:
    "Pickup and delivery, wash & fold, self-service laundromats, and commercial accounts for Central Kentucky — all on one route.",
};

export default function VariantFiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`v5-scope ${fraunces.variable} ${workSans.variable} font-v5-body bg-v5-paper text-v5-ink min-h-screen selection:bg-v5-amber selection:text-v5-paper`}
    >
      {children}
    </div>
  );
}
