# Public Assets

Inventory and asset plan for files under `apps/web/public`. Paths are shown as Next.js public URLs, so `apps/web/public/images/brand/logo.webp` would be referenced as `/images/brand/logo.webp`.

As of this update, the expected public asset folders exist but no production assets were present. Do not document copied placeholder images as real Splash 'Em Out assets. Add rows here as real brand, location, service, and SEO assets are created or received.

## Expected Folder Structure

| Folder | Intended use |
| --- | --- |
| `/images/brand` | Logo, wordmark, icon mark, and approved brand lockups. |
| `/images/icons` | Service icons or custom utility icons if not covered by `lucide-react`. |
| `/images/marketing` | Homepage, service, commercial, and promotional imagery. |
| `/images/seo` | Open Graph and structured social preview images. |
| `/media/images` | Larger in-page photography or generated hero/CTA imagery. |
| `/media/video` | Optimized hero or service process video. |
| `/manifest` | Favicons, app icons, and web manifest files. |

## Priority Asset Needs

| Asset | Priority | Recommended specs | Recommended use |
| --- | ---: | --- | --- |
| Brand logo on transparent background | P0 | SVG preferred, WebP/PNG fallback | Header, footer, metadata, location pages. |
| Square icon mark | P0 | SVG plus 512x512 PNG | Favicons, manifest icons, compact mobile UI. |
| Open Graph image | P0 | 1200x630 WebP/PNG | Social previews and metadata. Include brand, service promise, and Central Kentucky cue. |
| Homepage hero image | P0 | 1920x1080 WebP or AVIF | First viewport. Prefer real clean facility, attendant, folded order, or pickup bag. |
| Location exterior photos | P0 | 1600px wide minimum | Each location page and locations hub. |
| Machine/interior photos | P0 | 1600px wide minimum | Self-service laundry page and trust sections. |
| Wash-and-fold process photos | P0 | 1600px wide minimum | Wash-and-fold and pickup/delivery pages. |
| Commercial laundry photos | P1 | 1600px wide minimum | Commercial hub and industry pages. |
| Promo image for free laundry bag | P1 | 1200x800 WebP/AVIF | Pickup and delivery page, promo blocks. |
| Short ambient facility/process video | P2 | 8-15s, muted, under 4 MB if possible | Optional hero or service process background. |

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

| Component | Source path | Export | Description |
| --- | --- | --- | --- |
| `Header` | `apps/web/src/components/header.tsx` | `Header` | Site header. Currently copied from the previous project and should be updated to Splash 'Em Out navigation and CTAs before launch. |
| `Footer` | `apps/web/src/components/footer.tsx` | `Footer` | Site footer. Currently copied from the previous project and should be updated with locations, services, phone, email, legal links, and schedule CTA. |

## Shared UI Package

The workspace package namespace is `@splashemout/*` in `package.json`. Import shared UI primitives using that scope.

| Component or helper | Import | Source path | Use |
| --- | --- | --- | --- |
| `Button` | `import { Button } from "@splashemout/ui/button"` | `packages/ui/src/button.tsx` | Shared button primitive. Supports native button props plus `variant` and `size`. |
| `buttonVariants` | `import { buttonVariants } from "@splashemout/ui/button"` | `packages/ui/src/button.tsx` | Class-variance helper for applying button styles to non-button elements. |
| `ThemeProvider` | `import { ThemeProvider } from "@splashemout/ui/theme-provider"` | `packages/ui/src/theme-provider.tsx` | Client wrapper around `next-themes`. Verify default theme behavior before public launch. |
| `ThemeToggle` | `import { ThemeToggle } from "@splashemout/ui/theme-toggle"` | `packages/ui/src/theme-toggle.tsx` | Client theme control. Use only if light/dark theme switching remains part of the final site. |

### Button Options

| Option | Values |
| --- | --- |
| `variant` | `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`, `matte` |
| `size` | `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg` |

## Animation Package

The web app wraps client motion under `LazyMotionProvider` from `@splashemout/animation/motion/provider` in the frontend layout. Keep animation components inside client components when they use effects, browser APIs, Motion hooks, GSAP, OGL, or Three.js.

### Motion Exports

| Component or helper | Import | Source path | Use |
| --- | --- | --- | --- |
| `LazyMotionProvider` | `import { LazyMotionProvider } from "@splashemout/animation/motion/provider"` | `packages/animation/src/motion/provider/lazy-motion-provider.tsx` | Client Motion feature provider. Use once near the app shell before Motion components. |
| `motion`, `AnimatePresence`, Motion types | `import { motion, AnimatePresence } from "@splashemout/animation/motion/react"` | `packages/animation/src/motion/react.ts` | Re-export of `motion/react` for standard Motion APIs and types. |
| `m` motion factory | `import * as m from "@splashemout/animation/motion/react-m"` | `packages/animation/src/motion/react-m.ts` | Re-export of `motion/react-m`; use for Motion components inside `LazyMotionProvider`. |
| `domAnimation` | `import { domAnimation } from "@splashemout/animation/motion/features/dom-animation"` | `packages/animation/src/motion/features/dom-animation.ts` | Motion DOM feature bundle used by the lazy provider. |

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
