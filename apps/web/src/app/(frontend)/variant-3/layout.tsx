import { Space_Mono, Inter } from "next/font/google";

// Scoped to /variant-3 only — the shared root layout still sets the
// site-wide Zilla Slab + DM Sans variables for the header and footer.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-v3-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-v3-body",
  display: "swap",
});

export default function VariantThreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`board-scope ${spaceMono.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
