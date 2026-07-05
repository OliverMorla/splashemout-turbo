---
name: Splash 'Em Out
description: Clean local laundry service website for laundromats, wash-and-fold, pickup and delivery, and commercial laundry.
colors:
  background: "#fafafa"
  foreground: "#171717"
  muted: "#f5f5f5"
  muted-foreground: "#737373"
  border: "#e5e5e5"
  ring: "#0ea5e9"
  brand: "#0ea5e9"
  accent: "#14b8a6"
  promo: "#f59e0b"
typography:
  display:
    fontFamily: "Instrument Serif, Newsreader, Fraunces, Georgia, Times New Roman, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0"
  headline:
    fontFamily: "Inter, DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "0"
  body:
    fontFamily: "Inter, DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
rounded:
  sm: "4px"
  md: "8px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section-y: "80px"
components:
  primary-button:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  secondary-button:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  status-chip:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Design System: Splash 'Em Out

## 1. Overview

**Creative North Star: "Fresh Utility"**

Splash 'Em Out's interface should feel like a clean, well-run local laundry operation where every useful action is easy to find. The system is bright, direct, and service-forward: it should help visitors schedule pickup, find a location, understand pricing, or request a commercial bid without unnecessary ceremony.

The default UI material is Tailwind neutral. Brand color appears as a focused signal: blue for action and scheduling, mint for freshness and clean-facility trust, citrus for approved promotions.

**Key Characteristics:**

- Neutral, high-clarity surfaces.
- Strong local-service hierarchy.
- Pricing and location details near the decision point.
- Real imagery of facilities, machines, attendants, laundry bags, folded orders, and commercial volume.
- A simple route/process motif that explains laundry moving from pickup or drop-off to clean return.

## 2. Colors

The palette is a clean neutral system with water, mint, and citrus signals.

### Primary

- **Clean Water** (`brand` / `ring`): Use for primary CTAs, links, selected states, scheduling actions, route lines, and map pins.

### Secondary

- **Fresh Mint** (`accent`): Use for clean-facility badges, attended-location proof, amenities, success states, and subtle freshness moments.

### Promotion

- **Citrus Signal** (`promo`): Use only for active offers such as free laundry bag or 10% off military and first responders.

### Neutral

- **Neutral Ground** (`background`): Default page surface.
- **White Panel**: Forms, cards, pricing tables, and location cards.
- **Ink** (`foreground`): Primary text and high-emphasis UI.
- **Muted Surface** (`muted`): Secondary bands and low-emphasis panels.
- **Muted Text** (`muted-foreground`): Helper text, metadata, and captions.
- **Line** (`border`): Dividers, form borders, card borders, and map/list structure.

### Named Rules

**The Neutral First Rule.** Most of the site should read neutral and clean. If the page reads all blue, the brand color is overused.

**The Citrus Means Offer Rule.** Citrus is reserved for promotions and high-value callouts. Do not use it for ordinary section decoration.

**The No Fake Warning Rule.** Red, amber, and yellow are not decorative. Use them only for errors, warnings, or approved promo treatment.

## 3. Typography

**Display Font:** Instrument Serif, Newsreader, or Fraunces with Georgia fallback.
**Body Font:** Inter, DM Sans, or system sans.
**Label/Data Font:** Same sans family with tabular numbers when showing prices, hours, and phone numbers.

### Hierarchy

- **Display**: Use for the main homepage promise or a major brand moment only.
- **Headline**: Use bold sans for service headings, pricing sections, and commercial pages.
- **Title**: Use medium or semibold sans for cards, location names, and form groups.
- **Body**: Use readable sans, 1rem to 1.125rem, with clear line-height.
- **Label**: Use compact sans for badges, table labels, metadata, and amenity chips.
- **Numbers**: Use tabular numerals for prices, hours, phone numbers, and counts.

### Named Rules

**The Numbers Must Scan Rule.** Prices and hours should align visually and stay close to service context.

**The Display Stays Marketing Rule.** Do not use serif display typography inside dense forms, location lists, or pricing tables.

## 4. Elevation

Splash 'Em Out is mostly flat and crisp. Depth should come from spacing, borders, tonal contrast, and clear structure.

Use:

- White panels on neutral backgrounds.
- Thin neutral borders.
- Small shadows only for sticky headers, floating mobile CTAs, or map overlays where separation is needed.
- `8px` radii for cards and forms.

Avoid:

- Heavy shadows.
- Glassmorphism.
- Nested cards.
- Large rounded SaaS blobs.
- Decorative gradient cards.

## 5. Components

### Buttons

- **Primary:** Clean Water background, white text, 8px radius, clear hover using Deep Water.
- **Secondary:** White or neutral background, neutral border, neutral text.
- **Commercial CTA:** Can use Deep Water when it anchors a business quote section.
- **Promo CTA:** Keep the button blue; use Citrus on the badge or offer text instead.
- **Focus:** Clean Water ring with visible offset.

Primary button labels:

- Schedule Pickup
- Find a Location
- View Pricing
- Request a Bid
- Call Now
- Get Directions

### Chips And Badges

- Use pill badges for amenities, trust points, and location metadata.
- Use mint-tinted badges for clean, attended, large machines, and pickup/delivery.
- Use citrus-tinted badges only for promotions.
- Do not make badges look like gamified achievements.

### Cards And Containers

- Use cards for services, pricing, locations, reviews, and commercial industries.
- Keep cards independent. Do not place cards inside larger decorative cards.
- Keep internal padding stable across breakpoints.
- Every card should have one clear job.

### Inputs And Forms

- Use white or neutral fills, neutral borders, 8px radius, and visible labels.
- Form labels should be literal: Business name, Weekly laundry volume, Pickup frequency.
- Keep commercial quote forms longer but grouped.
- Use validation messages that tell the user exactly what to fix.

### Navigation

- Header should prioritize Home, Services, Locations, Pricing, Commercial, and Contact.
- Primary header CTA should be Schedule Pickup.
- Mobile should keep Schedule and Call reachable.
- Avoid deep nested menus. A simple services menu is enough.

### Location Finder

- The location finder is a core component, not a decorative section.
- It should support city/ZIP search or clearly display nearest available locations if search is not implemented.
- Location cards need address, phone, hours, directions, and services.

### Load Path

The Load Path is the signature motif: a clean route line with dots or steps showing how laundry moves through the service.

Use it for:

- Pickup and delivery process.
- Drop-off to next-day pickup.
- Commercial recurring pickup.
- Homepage service flow.

Do not use it as a random full-page background.

## 6. Do's And Don'ts

### Do:

- Do keep neutral surfaces dominant and color purposeful.
- Do show prices, minimums, and turnaround close to CTAs.
- Do use real facility and service imagery when available.
- Do make location, schedule, call, and directions actions obvious on mobile.
- Do make commercial quote paths specific and easy to find.
- Do keep motion subtle, fast, and useful.

### Don't:

- Don't hide prices under testimonials or long brand copy.
- Don't use generic family laundry stock as the main proof.
- Don't make the homepage feel like unrelated SaaS.
- Don't use purple AI gradients, beige wellness styling, or dark luxury laundry aesthetics.
- Don't create city pages that only swap city names.
- Don't promise unverified commercial, medical, emergency, or same-day capabilities.
