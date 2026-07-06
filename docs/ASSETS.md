# Public Assets

Inventory and asset plan for public-facing web assets. Paths under `apps/web/public` are shown as Next.js public URLs, so `apps/web/public/images/brand/logo.webp` would be referenced as `/images/brand/logo.webp`. App Router metadata files under `apps/web/src/app` are listed by their served URL.

As of this update, the repo contains the production-facing brand logo, two Open Graph images, a manifest icon set, two pickup/delivery hero images, and one hero video. Do not document copied placeholder images as real Splash 'Em Out assets. Add rows here as real brand, location, service, and SEO assets are created or received.

## Current Assets

| Public URL                               | Source path                                             | Type             | Specs                             | Recommended use                                                                                                                                            |
| ---------------------------------------- | ------------------------------------------------------- | ---------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/images/brand/logo.webp`                | `apps/web/public/images/brand/logo.webp`                | Brand logo       | WebP with alpha, 1254x1254, 88 KB | Header, footer, metadata fallbacks, and brand lockups where a raster logo is acceptable. Keep transparent background intact.                               |
| `/images/brand/og.webp`                  | `apps/web/public/images/brand/og.webp`                  | Open Graph image | WebP, 1731x909, 103 KB            | Primary social preview for pickup, delivery, wash-and-fold, and coming-soon pages.                                                                         |
| `/images/brand/og-2.webp`                | `apps/web/public/images/brand/og-2.webp`                | Open Graph image | WebP, 1731x909, 100 KB            | Alternate social preview or campaign image for laundry-day messaging.                                                                                      |
| `/manifest/android-chrome-192x192.png`   | `apps/web/public/manifest/android-chrome-192x192.png`   | Manifest icon    | PNG with alpha, 192x192, 49 KB    | Android Chrome and PWA icon.                                                                                                                               |
| `/manifest/android-chrome-512x512.png`   | `apps/web/public/manifest/android-chrome-512x512.png`   | Manifest icon    | PNG with alpha, 512x512, 223 KB   | High-resolution Android Chrome and install icon.                                                                                                           |
| `/manifest/apple-touch-icon.png`         | `apps/web/public/manifest/apple-touch-icon.png`         | Apple touch icon | PNG with alpha, 180x180, 43 KB    | iOS home-screen icon.                                                                                                                                      |
| `/manifest/favicon-16x16.png`            | `apps/web/public/manifest/favicon-16x16.png`            | Favicon          | PNG with alpha, 16x16, 855 bytes  | Browser favicon fallback.                                                                                                                                  |
| `/manifest/favicon-32x32.png`            | `apps/web/public/manifest/favicon-32x32.png`            | Favicon          | PNG with alpha, 32x32, 2 KB       | Browser favicon fallback.                                                                                                                                  |
| `/manifest/favicon.ico`                  | `apps/web/public/manifest/favicon.ico`                  | Favicon          | ICO, 16x16 and 32x32, 15 KB       | Legacy browser favicon.                                                                                                                                    |
| `/manifest/site.webmanifest`             | `apps/web/public/manifest/site.webmanifest`             | Web manifest     | JSON, 406 bytes                   | PWA and install metadata. Icon `src` values should stay aligned with the `/manifest` folder location.                                                      |
| `/favicon.ico`                           | `apps/web/src/app/favicon.ico`                          | App favicon      | ICO, 16x16 and 32x32, 15 KB       | Next.js App Router favicon served from the app metadata file convention.                                                                                   |
| `/media/images/hero.webp`                | `apps/web/public/media/images/hero.webp`                | Hero image       | WebP, 1916x821, 91 KB             | Homepage or pickup/delivery hero with laundry bag and folded towels on a residential porch. Useful when copy needs open sky/negative space on the left.    |
| `/media/images/hero-2.webp`              | `apps/web/public/media/images/hero-2.webp`              | Hero image       | WebP, 1916x821, 139 KB            | Alternate pickup/delivery hero with folded towels, laundry bags, and delivery van in a neighborhood setting. Useful for service pages or A/B hero testing. |
| `/media/video/hero-c.mp4`                | `apps/web/public/media/video/hero-c.mp4`                | Hero video       | MP4, 5.5 MB                       | Optional homepage or service hero motion asset. Use muted/autoplay/loop only where performance budget allows; consider further compression for mobile.     |
| `/images/marketing/cta.webp`             | `apps/web/public/images/marketing/cta.webp`             | CTA image        | WebP, 2172x724, 80 KB             | Wide-format callout image for a schedule pickup or wash-and-fold CTA band.                                                                                 |
| `/images/marketing/meet-the-owners.webp` | `apps/web/public/images/marketing/meet-the-owners.webp` | Marketing image  | WebP, 1280x1707, 176 KB           | Portrait-format owner or team image for about, trust, homepage proof, and local brand story sections.                                                      |
| `/images/marketing/splashemout-van.webp` | `apps/web/public/images/marketing/splashemout-van.webp` | Marketing image  | WebP with alpha, 995x658, 60 KB   | Branded service van image for pickup and delivery sections, service-area proof, and local trust callouts.                                                  |

## Expected Folder Structure

| Folder              | Intended use                                                            |
| ------------------- | ----------------------------------------------------------------------- |
| `/images/brand`     | Logo, wordmark, icon mark, and approved brand lockups.                  |
| `/images/icons`     | Service icons or custom utility icons if not covered by `lucide-react`. |
| `/images/marketing` | Homepage, service, commercial, and promotional imagery.                 |
| `/images/seo`       | Open Graph and structured social preview images.                        |
| `/media/images`     | Larger in-page photography or generated hero/CTA imagery.               |
| `/media/video`      | Optimized hero or service process video.                                |
| `/manifest`         | Favicons, app icons, and web manifest files.                            |

## Priority Asset Needs

| Asset                                | Priority | Recommended specs                    | Recommended use                                                                     |
| ------------------------------------ | -------: | ------------------------------------ | ----------------------------------------------------------------------------------- |
| Brand logo SVG                       |       P0 | SVG preferred                        | Header, footer, metadata, location pages, and sharp scaling across breakpoints.     |
| Homepage hero image                  |       P0 | 1920x1080 WebP or AVIF               | First viewport. Prefer real clean facility, attendant, folded order, or pickup bag. |
| Location exterior photos             |       P0 | 1600px wide minimum                  | Each location page and locations hub.                                               |
| Machine/interior photos              |       P0 | 1600px wide minimum                  | Self-service laundry page and trust sections.                                       |
| Wash-and-fold process photos         |       P0 | 1600px wide minimum                  | Wash-and-fold and pickup/delivery pages.                                            |
| Commercial laundry photos            |       P1 | 1600px wide minimum                  | Commercial hub and industry pages.                                                  |
| Promo image for free laundry bag     |       P1 | 1200x800 WebP/AVIF                   | Pickup and delivery page, promo blocks.                                             |
| Short ambient facility/process video |       P2 | 8-15s, muted, under 4 MB if possible | Optional hero or service process background.                                        |

## Imagery Direction

Use imagery that proves the service:

- Clean rows of washers and dryers.
- Bright, attended laundromats.
- Folded laundry stacks and packaged orders.
- Pickup and delivery bags.
- Large bedding, towels, linens, and commercial volume.
- Exterior location shots that help people recognize the building.

Avoid:

- Generic stock families holding baskets.
- Dark or gritty laundromat imagery.
- Abstract bubbles as the main proof.
- Photos that make facilities look unattended or cluttered.
- Duplicating the same generic image across every city and service page.

## App Components

| Component         | Source path                                    | Export            | Description                                                                                                |
| ----------------- | ---------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| `Hero`            | `apps/web/src/components/home/hero.tsx`        | `Hero`            | Homepage coming-soon hero with rotating pickup/delivery imagery and direct service signals.                |
| `PostHogProvider` | `apps/web/src/components/posthog-provider.tsx` | `PostHogProvider` | Client analytics provider and pageview tracker. Keep server-only environment values out of this component. |

## Shared UI Package

The workspace package namespace is `@splashemout/*` in `package.json`. Import shared UI primitives using that scope.

| Component or helper | Import                                                           | Source path                          | Use                                                                                          |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `Button`            | `import { Button } from "@splashemout/ui/button"`                | `packages/ui/src/button.tsx`         | Shared button primitive. Supports native button props plus `variant` and `size`.             |
| `buttonVariants`    | `import { buttonVariants } from "@splashemout/ui/button"`        | `packages/ui/src/button.tsx`         | Class-variance helper for applying button styles to non-button elements.                     |
| `ThemeProvider`     | `import { ThemeProvider } from "@splashemout/ui/theme-provider"` | `packages/ui/src/theme-provider.tsx` | Client wrapper around `next-themes`. Verify default theme behavior before public launch.     |
| `ThemeToggle`       | `import { ThemeToggle } from "@splashemout/ui/theme-toggle"`     | `packages/ui/src/theme-toggle.tsx`   | Client theme control. Use only if light/dark theme switching remains part of the final site. |

### Button Options

| Option    | Values                                                                     |
| --------- | -------------------------------------------------------------------------- |
| `variant` | `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`, `matte` |
| `size`    | `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`       |

## Animation Package

The web app wraps client motion under `LazyMotionProvider` from `@splashemout/animation/motion/provider` in the frontend layout. Keep animation components inside client components when they use effects, browser APIs, Motion hooks, GSAP, OGL, or Three.js.

### Motion Exports

| Component or helper                       | Import                                                                                | Source path                                                       | Use                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `LazyMotionProvider`                      | `import { LazyMotionProvider } from "@splashemout/animation/motion/provider"`         | `packages/animation/src/motion/provider/lazy-motion-provider.tsx` | Client Motion feature provider. Use once near the app shell before Motion components. |
| `motion`, `AnimatePresence`, Motion types | `import { motion, AnimatePresence } from "@splashemout/animation/motion/react"`       | `packages/animation/src/motion/react.ts`                          | Re-export of `motion/react` for standard Motion APIs and types.                       |
| `m` motion factory                        | `import * as m from "@splashemout/animation/motion/react-m"`                          | `packages/animation/src/motion/react-m.ts`                        | Re-export of `motion/react-m`; use for Motion components inside `LazyMotionProvider`. |
| `domAnimation`                            | `import { domAnimation } from "@splashemout/animation/motion/features/dom-animation"` | `packages/animation/src/motion/features/dom-animation.ts`         | Motion DOM feature bundle used by the lazy provider.                                  |

### Motion Components

Prefer the barrel import for exported motion components:

```tsx
import {
  BlurDiv,
  BlurH1,
  BlurInViewDiv,
  BlurP,
  BlurSection,
  BlurSpan,
  DotPattern,
  Marquee,
  TextReveal,
} from "@splashemout/animation/motion/components";
```

Use motion to make the site feel crisp and responsive. For Splash 'Em Out, motion should clarify service flow or make sections feel polished. It should not become decorative clutter.

Recommended usage:

- Use `TextReveal` only for major marketing headlines.
- Use blur-in-view primitives for service cards, pricing sections, and location lists.
- Keep delays short.
- Respect reduced motion.
- Avoid constant bubble, wave, or background movement.

## Usage Notes

- Prefer `next/image` for production images.
- Always provide meaningful `alt` text for content images.
- Use empty `alt=""` only when the asset is purely decorative.
- Keep location photos accurate to the location page they appear on.
- Do not stretch assets outside their aspect ratio.
- Optimize images before commit using existing app scripts if they are part of the workflow.
- Update this file whenever real assets are added, removed, renamed, or given a new recommended use.
