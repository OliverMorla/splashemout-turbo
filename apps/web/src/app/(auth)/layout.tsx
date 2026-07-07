import type { Metadata } from "next";
import { Zilla_Slab, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@splashemout/ui/theme-provider";
import { PostHogProvider } from "@/components/posthog-provider";
import "../(frontend)/globals.css";

const displayFont = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// Auth routes (`/login`, `/account`) render as their own root layout, not
// nested under `(frontend)`, so they stay free of the marketing Header and
// Footer chrome — a full-screen account experience, not a page-in-a-site.
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${displayFont.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <PostHogProvider>{children}</PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
