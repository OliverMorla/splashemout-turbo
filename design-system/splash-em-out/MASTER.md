# UI/UX Pro Max Master

> When building a specific page, first check `design-system/splash-em-out/pages/[page-name].md`.
> If that file exists, its rules override this master file. If it does not exist, use this file as the source of truth.

---

**Project:** Splash 'Em Out  
**Source brief:** `docs/ABOUT.md`  
**Generated:** 2026-07-06  
**Platform type:** local service conversion website plus future customer/operations platform  
**Stack:** Next.js App Router, React, Tailwind CSS  
**Design dials:** variance 6/10, motion 3/10, density 5/10

---

## Product Interpretation

Splash 'Em Out is not a generic small-business brochure. It is a local laundry service platform for people who need to make a practical decision quickly: find a clean laundromat, understand wash-and-fold pricing, schedule pickup and delivery, or request a commercial laundry bid.

The interface must balance two modes:

- **Residential urgency:** mobile visitors checking price, hours, directions, phone, pickup availability, and nearby locations.
- **Commercial evaluation:** business buyers judging dependability, pickup logistics, turnaround, service scope, and quote fit.

The experience should feel clean, attended, local, and operationally dependable. It should not feel like lifestyle wellness, luxury fashion, a faceless national app, or a thin local SEO site.

## Experience Strategy

### Primary User Jobs

1. Find the closest laundromat.
2. Understand the difference between self-service, drop-off wash-and-fold, pickup and delivery, dry cleaning pickup, and commercial laundry.
3. See price, minimums, turnaround, and service area before committing.
4. Schedule pickup or call without extra navigation.
5. Request a commercial bid with enough detail for useful follow-up.

### Conversion Hierarchy

Use one dominant action per screen, with supporting actions visible but quieter:

| Context             | Primary action  | Secondary actions              |
| ------------------- | --------------- | ------------------------------ |
| Home                | Schedule Pickup | Find a Location, View Pricing  |
| Locations           | Get Directions  | Call, View Location Details    |
| Pricing             | Schedule Pickup | Find a Location, Request a Bid |
| Pickup and Delivery | Schedule Pickup | View Pricing, See Service Area |
| Wash-and-Fold       | Find a Location | View Pricing, Call             |
| Commercial          | Request a Bid   | Call, See Industries Served    |

### Information Priority

Above the fold, users should see:

- What Splash 'Em Out does.
- Where it serves.
- The next best action.
- A visible location or scheduling path.

Within one minute, a mobile visitor should be able to answer:

- Where is the closest location?
- What service do I need?
- What does it cost?
- How fast is turnaround?
- Can I schedule, call, or request a bid now?

## Visual Direction

### Style

Use **clean utility with local proof**:

- Bright, high-contrast service-commerce layout.
- Dense enough to be useful, not sparse like a lifestyle landing page.
- Clear route, pricing, and location structures.
- Real proof surfaces: locations, phone numbers, hours, machine sizes, amenities, pricing, minimums, turnaround, commercial laundry types.
- Minimal decorative UI. Motion and visual motifs should explain service flow or reinforce cleanliness, not create visual noise.

### Avoid

- Event/conference landing structures.
- Generic SaaS hero plus feature grid.
- Lifestyle blog pacing.
- Hidden pricing or vague quote funnels.
- Low-quality or unrelated stock imagery.
- Thin city pages that only swap city names.
- Overloaded navigation with every service variation at the top level.

## Color System

The palette should communicate clean, safe, local service. Use neutral surfaces as the default material and reserve saturated color for actions, location states, cleanliness proof, and promotions.

| Role            | Hex       | Token                      | Usage                                                         |
| --------------- | --------- | -------------------------- | ------------------------------------------------------------- |
| Background      | `#FAFAFA` | `--color-background`       | Page canvas                                                   |
| Surface         | `#FFFFFF` | `--color-surface`          | Forms, pricing, location panels                               |
| Foam            | `#F8FAFC` | `--color-foam`             | Soft utility bands                                            |
| Foreground      | `#171717` | `--color-foreground`       | Primary text                                                  |
| Supporting text | `#404040` | `--color-supporting`       | Body copy on light surfaces                                   |
| Muted text      | `#525252` | `--color-muted-foreground` | Metadata where contrast remains AA                            |
| Border          | `#E5E5E5` | `--color-border`           | Dividers, form controls, card boundaries                      |
| Clean Water     | `#0EA5E9` | `--color-primary`          | Primary actions, schedule links, route lines, selected states |
| Deep Water      | `#075985` | `--color-primary-strong`   | Hover states, high-contrast CTA sections, footer              |
| Soft Rinse      | `#E0F2FE` | `--color-primary-soft`     | Location finder tint, service highlights                      |
| Fresh Mint      | `#14B8A6` | `--color-success`          | Clean/attended/amenity proof and positive states              |
| Citrus Signal   | `#D97706` | `--color-promo`            | Promotions only, adjusted for contrast                        |
| Error           | `#DC2626` | `--color-destructive`      | Validation and true errors                                    |
| Focus Ring      | `#0EA5E9` | `--color-ring`             | Keyboard focus outlines                                       |

Rules:

- Body text on light surfaces must use `#171717`, `#262626`, or `#404040`.
- Do not use pale gray body text on blue-tinted surfaces.
- Citrus is not a general highlight color. It is for approved offers such as a free laundry bag or military/first-responder discount.
- Use color plus text/icon for status. Do not communicate price, availability, error, or location state by color alone.

## Typography

The type system should be legible first, with enough character to feel local and memorable.

Recommended direction for new work:

- **Display/headlines:** a sturdy slab or service-friendly serif for large marketing moments only.
- **Body/UI:** a highly readable sans-serif for navigation, forms, pricing, labels, tables, and service copy.
- **Numbers:** tabular figures for prices, phone numbers, hours, machine sizes, and turnaround.

Implementation rules:

- Use `next/font` for font loading. Do not add external font `<link>` tags.
- Base body size is 16px minimum.
- Body line-height should be 1.55 to 1.7.
- Long text should cap at 65 to 75 characters per line.
- Location, pricing, and commercial pages should use compact sans-serif hierarchy, not oversized display type inside dense panels.

## Layout System

### Breakpoints

Design and verify these widths:

- 375px: small mobile.
- 768px: tablet.
- 1024px: small desktop.
- 1440px: desktop.

### Spacing

Use an 8px-based rhythm with flexible section spacing.

| Token         | Value  | Usage                       |
| ------------- | ------ | --------------------------- |
| `--space-xs`  | `4px`  | Tight inline gaps           |
| `--space-sm`  | `8px`  | Icon/text gaps              |
| `--space-md`  | `16px` | Standard component padding  |
| `--space-lg`  | `24px` | Card and form grouping      |
| `--space-xl`  | `32px` | Section internal grouping   |
| `--space-2xl` | `48px` | Mobile section separation   |
| `--space-3xl` | `64px` | Desktop section separation  |
| `--space-4xl` | `96px` | Major marketing transitions |

### Containers

- Mobile gutters: 24px.
- Tablet gutters: 40px.
- Desktop content max: 1200px to 1280px.
- Dense operational sections can use 1440px when comparison or map/list content needs width.

### Page Structure

Use full-width bands with constrained inner content. Cards are allowed for repeated records such as locations, pricing items, service options, FAQs, and commercial industries. Do not put cards inside cards.

## Component Standards

### Buttons

All interactive targets must be at least 44px tall, with visible focus states.

```css
.button-primary {
  min-height: 44px;
  border-radius: 8px;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  transition:
    background-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.button-primary:hover {
  background: var(--color-primary-strong);
}

.button-primary:active {
  transform: translateY(1px);
}

.button-primary:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--color-ring), white 20%);
  outline-offset: 3px;
}
```

Primary labels must be concrete:

- Schedule Pickup
- Find a Location
- View Pricing
- Request a Bid
- Call Now
- Get Directions

Avoid generic `Learn More` as the only action.

### Forms

Forms must use visible labels, helper text for complex fields, and inline validation near the field.

Commercial quote forms should group fields by:

- Business and contact.
- Pickup address and service area.
- Industry and laundry type.
- Volume and frequency.
- Turnaround and special notes.

Validation rules:

- Validate on blur or submit, not every keystroke.
- Focus the first invalid field after submit.
- Show an error summary for multiple failures.
- Use clear recovery copy: "Enter a phone number so we can contact you about your quote."

### Location Cards

Location cards must include the practical information users need:

- Location name or street.
- Address.
- Phone.
- Hours or a clear "hours vary, verify before visiting" state if unconfirmed.
- Primary services.
- Directions action.
- Call action on mobile.

Avoid location cards that are only images, slogans, or map pins.

### Pricing Blocks

Pricing blocks must show:

- Price.
- Minimum.
- Turnaround.
- Service type.
- Primary next action.

Use comparison only when it clarifies service choice. Do not force subscription-plan visual patterns onto laundry services.

### Navigation

Top-level navigation should stay practical:

- Services
- Pricing
- Locations
- Commercial
- Contact

Keep Schedule Pickup as the primary nav CTA. On mobile, keep Schedule and Call reachable without covering content.

## Motion

Motion should clarify service flow and provide responsive feedback.

Use:

- 150-220ms button and menu transitions.
- Route-line or step progression only where it explains pickup/drop-off flow.
- Subtle in-view reveal for content groups, with content visible by default.
- Instant or reduced transitions under `prefers-reduced-motion: reduce`.

Avoid:

- Constant background animation.
- Decorative bubbles or detergent splashes.
- Slow parallax.
- Motion that delays navigation, scheduling, forms, or directions.

## Accessibility Requirements

Treat WCAG 2.2 AA as the baseline.

Required:

- Visible skip link.
- Sequential heading hierarchy.
- Keyboard-accessible navigation, menus, forms, maps, and accordions.
- Visible focus rings.
- Alt text for meaningful proof imagery.
- Empty `alt=""` only for decoration.
- No horizontal scroll at 375px.
- No sticky header or mobile CTA overlap with content.
- Text contrast 4.5:1 for normal text, 3:1 for large text and large UI glyphs.
- Reduced-motion support for every animation.

## Performance Requirements

Public routes should stay fast on mobile and local-search traffic.

- Use `next/image` for local images.
- Reserve image dimensions or aspect ratios to prevent CLS.
- Hero images should be optimized and prioritized only when they are in the first viewport.
- Lazy-load below-fold imagery and video.
- Keep third-party scripts async/deferred and scoped.
- Use server-rendered content for SEO-critical service, pricing, and location pages.

## Next.js Implementation Rules

- Prefer Server Components for static marketing, pricing, service, and location content.
- Use Client Components only for browser APIs, stateful interaction, analytics providers, animation hooks, maps, menus, and forms that need client-side behavior.
- Do not expose server-only environment variables to the client.
- Use `next/font` for typography.
- Preserve deep links for all services, locations, pricing, and commercial quote routes.

## Anti-Patterns

Do not use:

- Event/conference landing sections such as speakers, sponsors, agendas, or countdowns.
- SaaS plan cards for laundry pricing.
- Generic stock families holding baskets as primary proof.
- Luxury garment-care language for ordinary laundry service.
- Hidden pricing behind a form.
- Thin duplicate city pages.
- Unverified hours, guarantees, regulated laundry claims, or commercial promises.
- Icon-only controls without accessible names.
- Hover-only disclosure for primary actions.
- Raw hex values scattered in components when a semantic token exists.

## Pre-Delivery Checklist

- [ ] Primary task is obvious above the fold.
- [ ] Schedule, location, call, pricing, and commercial bid paths are reachable on mobile.
- [ ] Pricing includes minimums and turnaround where relevant.
- [ ] Location content includes address, phone, services, directions, and hours state.
- [ ] Commercial quote path asks for volume, frequency, laundry type, and turnaround.
- [ ] Text contrast passes AA.
- [ ] Focus states are visible.
- [ ] All touch targets are at least 44px.
- [ ] Reduced motion is supported.
- [ ] No horizontal scroll at 375px.
- [ ] Images reserve space and use descriptive alt text when meaningful.
