import { Bricolage_Grotesque, Manrope } from "next/font/google";
import type { Metadata } from "next";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-v3-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-v3-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Splash 'Em Out | Redefined",
  description: "A new standard for laundry in Central Kentucky.",
};

export default function VariantThreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`v3-scope ${bricolage.variable} ${manrope.variable} font-v3-body bg-[#F4F7F6] text-[#001A23] min-h-screen selection:bg-[#00E5FF] selection:text-[#001A23]`}>
      {children}
    </div>
  );
}
