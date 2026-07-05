# Splash 'Em Out Visual Direction

Use this guide for atmosphere, color, layout, typography, imagery, motion, and product surfaces.

For language and interaction copy, use [TONE.md](TONE.md). This file should not repeat voice rules except where they affect visual decisions.

## Visual Thesis

Splash 'Em Out should look like the cleanest, most dependable laundry service in the local market: bright, scrubbed, practical, friendly, and modern enough to make pickup and delivery feel easy.

Recommended aesthetic name:

> Fresh Utility

The site should combine Tailwind neutral structure, crisp service-commerce hierarchy, real local facility proof, and a small set of watery blue and citrus accent colors. The result should feel cleaner and more trustworthy than a normal laundromat site without drifting into sterile hospital blue or generic SaaS.

## First Impression

The first screen should make four things obvious:

- Splash 'Em Out handles laundry day.
- Visitors can schedule pickup or find a location immediately.
- The brand is local to Central Kentucky.
- The facilities and services are clean, attended, and dependable.

Avoid opening with a vague brand statement, a giant carousel, a decorative stock image, or a pricing table without service context.

## Layout

Use:

- A high-utility hero with one primary CTA and one location CTA.
- A location finder or location preview high on the page.
- Service cards for the five core services.
- Pricing callouts close to service explanations.
- Map-first location sections.
- Dense but readable commercial quote content.
- Sticky mobile actions for Schedule and Call.
- Clean full-width bands, not nested cards inside cards.

Avoid:

- Landing-page fluff before service details.
- Overly nested dropdown navigation.
- Floating decorative card stacks.
- Hiding prices below reviews.
- Thin location pages with only address and map.
- Layouts that make pickup and delivery look like the only service.

## Color

Default to Tailwind's `neutral` palette for most backgrounds, text, borders, dividers, panels, disabled states, and operational UI. Splash 'Em Out needs brand color as a service signal, not a full-screen color wash.

Recommended Tailwind foundation:

- `neutral-50` `#fafafa`: page background.
- `white` `#ffffff`: high-clarity panels and forms.
- `neutral-100` `#f5f5f5`: subtle secondary background.
- `neutral-200` `#e5e5e5`: borders and separators.
- `neutral-300` `#d4d4d4`: stronger borders and disabled controls.
- `neutral-500` `#737373`: secondary text.
- `neutral-700` `#404040`: supporting headings.
- `neutral-900` `#171717`: primary text.
- `neutral-950` `#0a0a0a`: highest contrast text only.

Recommended Splash brand colors:

- Clean Water `#0EA5E9`: primary brand action, links, selected states, pickup scheduling, and map pins.
- Deep Water `#075985`: hover states, footer surfaces, strong blue text, and high-contrast CTAs.
- Soft Rinse `#E0F2FE`: quiet blue backgrounds, location finder tint, and service highlights.
- Fresh Mint `#14B8A6`: secondary freshness cue, success states, clean facility badges, and amenity accents.
- Citrus Signal `#F59E0B`: sparing promotional accents such as free bag and military or first-responder discount.
- Foam `#F8FAFC`: cooler neutral surface when a section needs a laundry-clean feel without becoming blue.

Tailwind token recommendation:

```ts
colors: {
  neutral: colors.neutral,
  splash: {
    water: {
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#BAE6FD",
      300: "#7DD3FC",
      400: "#38BDF8",
      500: "#0EA5E9",
      600: "#0284C7",
      700: "#0369A1",
      800: "#075985",
      900: "#0C4A6E",
    },
    mint: {
      50: "#F0FDFA",
      100: "#CCFBF1",
      200: "#99F6E4",
      300: "#5EEAD4",
      400: "#2DD4BF",
      500: "#14B8A6",
      600: "#0D9488",
      700: "#0F766E",
      800: "#115E59",
      900: "#134E4A",
    },
    citrus: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },
  },
}
```

Recommended CSS token direction:

```css
:root {
  --se-surface: #fafafa;
  --se-panel: #ffffff;
  --se-foam: #f8fafc;
  --se-ink: #171717;
  --se-muted: #737373;
  --se-line: #e5e5e5;
  --se-water: #0ea5e9;
  --se-water-deep: #075985;
  --se-water-soft: #e0f2fe;
  --se-mint: #14b8a6;
  --se-citrus: #f59e0b;
}
```

Usage:

- Use neutral backgrounds and text by default.
- Use Clean Water for the primary CTA and schedule-related controls.
- Use Deep Water for high-contrast dark sections and hover states.
- Use Soft Rinse for the location finder, process steps, and service highlights.
- Use Fresh Mint for cleanliness, attended locations, and amenities.
- Use Citrus Signal only for offers and high-value callouts.

Avoid:

- A page that reads all blue.
- Dominant purple, beige, brown, or AI-gradient palettes.
- Hospital-blue sterility.
- Neon aqua or over-saturated detergent packaging colors.
- Red except for true errors or urgent operational notices.
- Yellow for ordinary highlights when it could be mistaken for warning.

## Typography

Typography should be clean, legible, local-service confident, and a little memorable.

Recommended pairing:

- Display: `Instrument Serif`, `Newsreader`, or `Fraunces` for large marketing headlines only.
- Body and UI: `Inter`, `DM Sans`, or system sans.
- Data and utility labels: same sans family, medium weight.

Use:

- Big, plain hero headlines with short line lengths.
- Strong sans-serif section headings for service and pricing pages.
- Tabular numbers for pricing, hours, and location phone numbers.
- Tight, scannable labels for amenities and trust badges.

Avoid:

- Playful bubble fonts.
- Script fonts.
- Overly delicate fashion serif typography.
- Huge type inside dense cards, forms, or route lists.
- Negative letter spacing as a default.

## Imagery

Use real, inspection-friendly imagery wherever possible.

Good directions:

- Bright exterior shots for each laundromat location.
- Clean machine rows with visible capacity.
- Attendants folding or packaging laundry.
- Delivery bags, folded stacks, bedding, towels, and commercial linen volume.
- Local visual context without turning the site into tourism content.
- Crisp product-style photos of laundry bags and folded orders.

Avoid:

- Generic smiling people with laundry baskets in unrelated homes.
- Dark, moody laundromat photography.
- Over-cropped machine details that do not prove cleanliness.
- Purely abstract water, bubbles, or detergent splashes as the main visual.
- Photos where text overlays become unreadable.

## Signature Element

Use one memorable visual device:

> The Load Path

The Load Path is a simple line-and-dot route motif that shows laundry moving from home, to Splash 'Em Out, to clean return or pickup. It can appear in the hero, pickup process, and commercial flow. Keep it crisp, geometric, and utility-like, more route map than decorative swirl.

Use it to clarify:

- Schedule.
- Pickup.
- Wash, dry, fold.
- Return.
- Drop-off to next-day pickup.
- Commercial recurring service.

Do not use the Load Path as a random background pattern.

## Motion

Motion should feel efficient and clean.

Use:

- Fast, subtle reveal on service sections.
- Location cards that respond clearly on hover.
- Map pin or route-line motion only when it clarifies the pickup process.
- Button icon movement for arrows, phone, directions, and schedule actions.
- Reduced-motion support for all meaningful animation.

Avoid:

- Floating bubbles everywhere.
- Constant background animation.
- Confetti or celebration motion.
- Slow motion that makes the site feel sleepy.
- Decorative parallax that blocks scanning.

## Trust Surfaces

Design trust into the UI:

- Location cards with address, phone, hours, and direct directions.
- Pricing cards with minimums and turnaround.
- Badges for fully attended, clean facilities, large machines, pickup and delivery, and locally owned.
- Commercial quote form with realistic fields.
- Reviews near service CTAs.
- Service-area pages with local details, not duplicate copy.

## Success Standard

A Splash 'Em Out screen is visually successful when it helps someone act in under a minute: find a location, schedule pickup, understand pricing, or request a commercial quote. It should look clean enough to make the service feel trustworthy before the visitor reads every detail.
