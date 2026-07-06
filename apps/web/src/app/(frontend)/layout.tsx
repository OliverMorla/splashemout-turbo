import type { Metadata } from "next";
import { Zilla_Slab, DM_Sans } from "next/font/google";
import { LazyMotionProvider } from "@splashemout/animation/motion/provider";
import { ThemeProvider } from "@splashemout/ui/theme-provider";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import "./globals.css";

const siteName = siteConfig.name;
const title = "Splash 'Em Out | Central Kentucky Laundry Service";
const description =
  "Attended laundromats, wash-and-fold, pickup & delivery, and commercial laundry service in Lexington, Richmond & Nicholasville, KY.";
const ogImage = {
  url: "/images/brand/og.webp",
  width: 1731,
  height: 909,
  alt: "Splash 'Em Out pickup, delivery, wash, and fold",
};

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
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "laundry service",
    "wash and fold",
    "pickup and delivery laundry",
    "commercial laundry",
    "Splash 'Em Out",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Local Business",
  classification: "Laundry service",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/manifest/favicon.ico", sizes: "any" },
      { url: "/manifest/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/manifest/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/manifest/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest/site.webmanifest",
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: siteName,
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
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
          <LazyMotionProvider>
            <PostHogProvider>
              <Header />
              {children}
              <Footer />
            </PostHogProvider>
          </LazyMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
