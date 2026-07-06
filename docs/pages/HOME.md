# Splash 'Em Out Homepage Integration Plan

This document defines the homepage sections for Splash 'Em Out as of July 6, 2026. It should be used with [ROUTES.md](../ROUTES.md), [ASSETS.md](../ASSETS.md), [VISUAL.md](../VISUAL.md), and [TONE.md](../TONE.md) before implementing or redesigning `apps/web/src/app/(frontend)/page.tsx`.

## Page Job

The homepage has one job: help a local visitor take the right laundry action in under a minute.

Primary actions:

- Schedule pickup.
- Find a location.
- Understand pricing.
- Choose the right service.
- Request a commercial bid.

The page should feel practical, local, clean, and more polished than a typical laundromat site. It should not feel like a national laundry startup, a lifestyle blog, or a generic small-business brochure.

## CRO Copy Verdict

The original section strategy is solid: it puts action, service choice, pricing, location, trust, and CTA in the right order. The visual idea is also strong. The Load Path is specific to the laundry journey, gives the design a memorable system, and does not need to change.

The copy needed one level of conversion tightening. The homepage should say less about the brand and more about the visitor's immediate problem:

- `I need this laundry done without losing my day.`
- `I need a clean laundromat near me.`
- `I need to know the price before I commit.`
- `I need to trust the place handling my clothes.`
- `I need a business laundry partner who can handle recurring volume.`

Copy rule for implementation: every section should answer one conversion question, handle one objection, and point to one next action.

## Core Message

Primary value proposition:

> Clean laundromats, wash-and-fold, and pickup laundry service across Central Kentucky, with clear prices and real local locations.

Short value proposition:

> Laundry handled by a local team, your way.

Primary CTA:

> Schedule Pickup

Secondary CTA:

> Find a Location

Commercial CTA:

> Request a Bid

Objections to handle across the page:

| Objection                          | Homepage Answer                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| `How much does it cost?`           | Show per-pound pricing and minimums before the final CTA.                        |
| `Is there a location near me?`     | Put the location finder above the pickup process and link to all locations.      |
| `Will my laundry be handled well?` | Show attended facilities, service steps, preferences, and real process proof.    |
| `How does pickup work?`            | Use the Load Path to explain schedule, pickup, wash/fold, and return.            |
| `Can you handle my business?`      | Include a commercial strip with industries, frequency, volume, and quote path.   |
| `Is this local or an app?`         | Emphasize Central Kentucky, local phone number, and physical laundromat network. |

## A/B Testing Priorities

Start with these tests before changing layout:

| Test Area       | Variant A                             | Variant B                                                   | What To Measure                      |
| --------------- | ------------------------------------- | ----------------------------------------------------------- | ------------------------------------ |
| Hero H1         | `Laundry day, handled.`               | `Get your laundry picked up, washed, folded, and returned.` | Schedule clicks and scroll depth.    |
| Hero CTA pair   | `Schedule Pickup` + `Find a Location` | `Schedule Pickup` + `View Pricing`                          | Pickup conversion vs pricing intent. |
| Pricing section | Receipt-style pricing                 | Side-by-side service pricing cards                          | Pricing clicks and schedule starts.  |
| Location prompt | `Find a clean laundromat near you.`   | `Need a washer today? Find the closest Splash 'Em Out.`     | Location clicks and directions taps. |
| Final CTA       | `Put laundry back on your schedule.`  | `Ready to stop planning around laundry?`                    | Final CTA clicks.                    |

## Design Thesis

Use the existing Fresh Utility visual direction, but make the homepage memorable through one signature device:

> The Load Path

The Load Path is a crisp route-line motif that shows laundry moving from home, to Splash 'Em Out, to clean return. It should appear in the hero, process, and CTA sections as a functional visual system, not as background decoration.

Recommended UI language:

- Full-width bands instead of stacked decorative cards.
- Dense, scannable service information.
- Real image proof from `docs/ASSETS.md`.
- Location and pricing surfaces high on the page.
- Buttons with literal actions: Schedule Pickup, Find a Location, View Pricing, Request a Bid.
- Subtle motion from the animation package for reveal, route progress, image transitions, and hover feedback.

Avoid:

- Bubble-pattern backgrounds.
- Generic gradient hero art.
- Hidden pricing.
- A carousel as the main homepage structure.
- Marketing sections that do not help someone act.

## Asset Usage

Use current assets intentionally:

| Asset                         | Use On Homepage                                                                                       | Notes                                                                                                |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `/media/images/hero.webp`     | Primary hero background.                                                                              | Best for porch pickup and negative space. Use as first-frame image.                                  |
| `/media/images/hero-2.webp`   | Alternate hero image or pickup service section image.                                                 | Good for showing folded towels, bags, and neighborhood delivery.                                     |
| `/media/video/hero-c.mp4`     | Optional hero motion layer or process strip.                                                          | Use only if performance is acceptable. Keep muted, looped, and avoid autoplay on low-power contexts. |
| `/images/marketing/cta.webp`  | Final CTA band.                                                                                       | Strong fit for the schedule pickup conversion section.                                               |
| `/images/brand/logo.webp`     | Header, hero claim-ticket detail, footer, and small local-trust marks.                                | Keep transparent background. Prefer SVG later if available.                                          |
| `/images/brand/og.webp`       | Metadata and possible low-priority social preview references.                                         | Do not use as a visible homepage content image unless it adds real proof.                            |
| `/images/brand/og-2.webp`     | Alternate metadata or campaign preview.                                                               | Same rule as above.                                                                                  |
| Future location photos        | Location finder, location preview cards, and trust proof.                                             | Needed before launch for a stronger local homepage.                                                  |
| Future facility/process shots | Service proof, wash-and-fold process, self-service machine capacity, and commercial laundry sections. | Higher value than generic lifestyle photography.                                                     |

## Recommended Homepage Sections

### 1. Hero: Laundry Day Command Center

Priority: P0

Purpose: Make the visitor understand the service, locality, and next action immediately.

Recommended customer-facing copy:

- Eyebrow: `Central Kentucky laundry service`
- H1: `Laundry day, handled.`
- Supporting copy: `Schedule pickup, drop off wash-and-fold, or find a clean attended laundromat near you. Splash 'Em Out helps you get clean laundry without giving up your day.`
- Primary CTA: `Schedule Pickup`
- Secondary CTA: `Find a Location`
- Tertiary link: `View Pricing`
- Trust strip: `Fully attended locations`, `9 Central Kentucky laundromats`, `24-48 hour pickup turnaround`, `Commercial laundry available`

Headline variants:

- A: `Laundry day, handled.`
- B: `Get clean laundry back without losing your day.`
- C: `Pickup, wash-and-fold, and clean laundromats near you.`

Objection handled: visitors need to know whether this is pickup only, a laundromat only, or a full local laundry platform. The hero should make all three paths visible immediately.

UI direction:

- Use `/media/images/hero.webp` as the first hero image.
- Keep the current claim-ticket idea, but make it more useful: show service status, minimums, or next actions instead of only service names.
- Add a compact Load Path overlay: `Porch -> Wash -> Fold -> Return`, using route dots and short labels.
- Keep text over image, not inside a floating hero card.
- Add a small ZIP/address starter field only if it can route to scheduling or service-area validation. If not, use buttons only.

Cool UI elements:

- A "claim ticket" panel that feels like a modern laundry tag, with perforated edge styling and tabular pricing snippets.
- A route-line animation that draws once on load from the schedule CTA toward the ticket.
- A sticky mobile action bar with `Schedule` and `Call`.

Implementation notes:

- The existing `Hero` component can evolve into this section.
- Keep image transitions reduced-motion aware.
- Hero copy should stay short enough to scan on mobile.

### 2. Quick Action Dock

Priority: P0

Purpose: Let task-driven users skip the homepage story and choose what they need.

Recommended actions:

- `Schedule Pickup`
- `Find a Location`
- `Drop Off Wash & Fold`
- `Request Commercial Bid`

Recommended microcopy:

- Schedule Pickup: `We pick up, wash, fold, and return your laundry.`
- Find a Location: `Get hours, directions, and services for nearby laundromats.`
- Drop Off Wash & Fold: `Leave the bag with us and pick it up clean and folded.`
- Request Commercial Bid: `Get recurring laundry pricing for towels, linens, uniforms, and more.`

CTA variants:

- Residential: `Schedule Pickup`
- Location intent: `Find My Location`
- Wash-and-fold intent: `See Wash & Fold`
- Commercial intent: `Request a Bid`

UI direction:

- Place directly after the hero.
- Use a horizontal command dock on desktop and a two-by-two grid on mobile.
- Each action should include an icon from `lucide-react`, one short description, and one clear destination.
- Use this as a utility surface, not a decorative card stack.

Cool UI elements:

- Hovering an action advances a small Load Path dot to show the route type: home pickup, store visit, or commercial route.
- The active action can reveal one practical detail, such as `$30 pickup minimum` or `$1.69/lb drop-off`.

### 3. Service Split: Choose Your Laundry Path

Priority: P0

Purpose: Make pickup, drop-off, self-service, dry cleaning, and commercial laundry easy to distinguish.

Recommended customer-facing copy:

- Section headline: `Choose the laundry path that fits your day.`
- Section subheadline: `Do it yourself, drop it off, schedule pickup, or set up recurring laundry for your business.`
- Pickup & Delivery: `Skip the trip. Schedule online, leave your laundry where you choose, and get it back clean and folded in 24-48 hours.`
- Wash & Fold: `Drop off your laundry and let our attendants wash, dry, and fold it for next-day pickup. Starts at $1.69/lb with a $15 minimum.`
- Self-Service Laundry: `Use clean, attended laundromats with large machines for everyday loads, bedding, towels, and bulky items.`
- Dry Cleaning Pickup & Delivery: `Add garment care pickup and delivery when laundry day includes dry cleaning.`
- Commercial Laundry: `Keep towels, linens, uniforms, and blankets moving with recurring pickup and custom pricing.`

Objection handled: each service explains the customer benefit and the next step, instead of listing features only.

UI direction:

- Use an asymmetric split layout: one larger featured pickup/delivery panel and four tighter service rows.
- Avoid equal generic cards if possible. The business has different service weights, so the layout should reflect that.
- Add one direct CTA per service.
- Use `Truck`, `Shirt`, `WashingMachine`, `Building2`, and a suitable garment icon from `lucide-react`.

Cool UI elements:

- A service toggle that switches the Load Path labels between `Home pickup`, `Drop-off`, and `Commercial route`.
- A small "best for" label on each service: busy families, students, bedding, businesses, quick errands.

### 4. Pricing Snapshot

Priority: P0

Purpose: Build trust by showing real prices before asking the visitor to schedule.

Recommended pricing:

- Drop-off wash-and-fold: `$1.69/lb`, `$15 minimum`.
- Pickup recurring: `$2.09/lb`, `$30 minimum`.
- Pickup as needed: `$2.39/lb`, `$30 minimum`.
- Commercial: `Custom quote`.

Recommended customer-facing copy:

- Section headline: `Know the price before you choose the service.`
- Section subheadline: `Clear per-pound pricing for wash-and-fold and pickup, with custom quotes for commercial laundry.`
- Drop-off note: `Best when you are already near a Splash 'Em Out location.`
- Recurring pickup note: `Best for weekly laundry routines.`
- As-needed pickup note: `Best when laundry piles up and you need it handled.`
- Commercial note: `Best for recurring towels, linens, uniforms, and specialty loads.`
- CTA: `View Full Pricing`
- Secondary CTA: `Schedule Pickup`

Objection handled: price anxiety. This section should reduce hesitation before the scheduling click.

UI direction:

- Use tabular numbers and strong contrast.
- Keep this section near the service split, not buried near the bottom.
- Include `View Full Pricing` and `Schedule Pickup` CTAs.
- Include a small promo callout only if approved: free laundry bag for first pickup order, 10% off wash-and-fold for military and first responders.

Cool UI elements:

- A receipt-style pricing panel with line items and minimums.
- A subtle "weigh after cleaning" note if final totals depend on actual weight.
- Citrus Signal should be used only for the approved promo, not for all pricing.

### 5. Location Finder Preview

Priority: P0

Purpose: Capture local laundromat intent and prove Splash 'Em Out is local.

Recommended customer-facing copy:

- Heading: `Find a clean laundromat near you.`
- Subheadline: `Check nearby Splash 'Em Out locations, hours, services, phone numbers, and directions before you go.`
- Location search or filter by city: Lexington, Richmond, Nicholasville.
- Preview several locations with address, hours, phone, services, and directions.
- CTA: `See All Locations`

Headline variants:

- A: `Find a clean laundromat near you.`
- B: `Need a washer today? Find the closest Splash 'Em Out.`
- C: `Get directions to a clean, attended laundromat.`

Objection handled: local visitors need to trust that the location exists, is open, and has the service they need.

UI direction:

- Use a map/list split when location data is ready.
- If a real map is not available yet, use a structured list with city chips and direct links.
- Location cards should be practical: address, call, directions, services, hours.
- Use future location exterior photos when available.

Cool UI elements:

- Map pins that match the Clean Water brand color.
- A location availability strip: `Attended`, `Large machines`, `Wash & fold`, `Pickup area`.
- A mobile-first city selector that feels like a transit stop selector, not a form-heavy directory.

### 6. How Pickup Works: The Load Path

Priority: P0

Purpose: Remove uncertainty around pickup and delivery.

Recommended steps:

1. Schedule online.
2. Leave your laundry where you choose.
3. We wash, dry, and fold.
4. Your laundry comes back ready to put away.

Recommended customer-facing copy:

- Section headline: `Pickup laundry without the guesswork.`
- Section subheadline: `The Load Path shows exactly what happens after you schedule.`
- Step 1: `Schedule your pickup`
- Step 1 detail: `Choose your service, address, and pickup instructions.`
- Step 2: `Set out your laundry`
- Step 2 detail: `Leave it in the spot you select. First pickup orders can include a laundry bag when the offer is active.`
- Step 3: `We wash, dry, and fold`
- Step 3 detail: `Your order is handled by a local laundry team, not mailed away or routed through a faceless app.`
- Step 4: `Get it back ready to put away`
- Step 4 detail: `Clean, folded laundry comes back within the stated service window.`
- CTA: `Schedule Pickup`
- Secondary CTA: `View Pickup Pricing`

Objection handled: uncertainty about pickup logistics and trust.

UI direction:

- This is the main place to use the Load Path.
- Use a route line connecting the four steps with small proof points under each step.
- Pair with `/media/images/hero-2.webp` or short clips from `/media/video/hero-c.mp4` if performance allows.
- Include `Schedule Pickup` and `View Pickup Pricing` CTAs.

Cool UI elements:

- Scroll progress draws the route line from step one to step four.
- Each step can reveal a small operational detail on hover or focus.
- The final dot can become a folded-stack icon or check mark.

### 7. Trust Proof: Clean, Attended, Local

Priority: P1

Purpose: Make the brand feel dependable before the user commits.

Recommended proof points:

- Fully attended laundromats.
- Clean and safe facilities.
- Multiple Central Kentucky locations.
- Large machines up to 80 lb washers.
- Local phone number and clear support path.
- Practical amenities where available.

Recommended customer-facing copy:

- Section headline: `Clean facilities. Real attendants. Local service.`
- Section subheadline: `Splash 'Em Out is built around practical laundry help: staffed locations, large machines, visible prices, and a local team you can contact.`
- Proof copy:
  - `Fully attended laundromats for cleaner, easier visits.`
  - `Large-capacity machines for bedding, towels, and big household loads.`
  - `Clear phone numbers, addresses, and directions for each location.`
  - `Pickup, drop-off, and commercial service from one local brand.`

Objection handled: visitors need confidence before letting a laundry service handle personal clothes, bedding, or business linens.

UI direction:

- Use a full-width Foam or Soft Rinse band.
- Use compact proof rows, not vague testimonial blocks.
- Include real facility photos when available.
- If reviews are available, show two or three short review excerpts with source/location.

Cool UI elements:

- A "facility checklist" with real amenity chips.
- Before launch, use proof points and real images instead of placeholder reviews.

### 8. Commercial Laundry Strip

Priority: P1

Purpose: Route business buyers without distracting residential customers.

Recommended customer-facing copy:

- Headline: `Laundry service for businesses that run on clean linens.`
- Subheadline: `Set up recurring pickup for towels, linens, uniforms, blankets, and specialty laundry with pricing built around your volume and schedule.`
- Industries: Airbnb/VRBO, restaurants, spas/salons, gyms, clinics, hotels, equine.
- Key details: recurring pickup, volume, frequency, turnaround, custom quote.
- CTA: `Request a Bid`

Headline variants:

- A: `Laundry service for businesses that run on clean linens.`
- B: `Recurring laundry pickup for towels, linens, uniforms, and blankets.`
- C: `Keep clean inventory moving without running laundry in-house.`

Objection handled: business buyers need operational fit, not lifestyle copy. Mention frequency, volume, turnaround, and quote path.

UI direction:

- Make this a dense operational strip, not a second hero.
- Use Deep Water or neutral dark only if it has enough contrast and does not make the page feel too blue.
- Include a mini quote form preview only if the actual form route exists. Otherwise link to `/commercial/request-a-bid`.

Cool UI elements:

- Industry chips arranged like laundry tags.
- A route-frequency selector preview: `Weekly`, `Twice weekly`, `Emergency`, with no fake interactivity unless it connects to the bid form.

### 9. Service Area Band

Priority: P1

Purpose: Support local SEO and help users confirm coverage.

Recommended customer-facing copy:

- Section headline: `Laundry service across Central Kentucky.`
- Section subheadline: `Find pickup coverage and nearby Splash 'Em Out locations in Lexington, Richmond, Nicholasville, and surrounding communities.`

- Lexington
- Richmond
- Nicholasville
- Georgetown
- Frankfort
- Versailles
- Winchester
- University of Kentucky
- Eastern Kentucky University

Objection handled: visitors need to confirm service availability before they click into scheduling or directions.

UI direction:

- Keep it compact and link-driven.
- Use local content only where real route pages exist or are planned.
- Make it feel like a coverage map, not a keyword list.

Cool UI elements:

- A simple route-map line grouped by city.
- City chips that reveal nearest location or pickup availability when data exists.

### 10. Final CTA: Put Laundry Back On Your Schedule

Priority: P0

Purpose: Give the visitor one confident final action after the page has answered service, price, location, and trust.

Recommended customer-facing copy:

- Heading: `Put laundry back on your schedule.`
- Supporting copy: `Whether you want pickup, drop-off wash-and-fold, a self-service laundromat, or recurring commercial laundry, Splash 'Em Out gives you a clear next step.`
- Primary CTA: `Schedule Pickup`
- Secondary CTA: `Find a Location`
- Commercial link: `Request a Bid`

CTA variants:

- A: `Schedule Pickup`
- B: `Book Laundry Pickup`
- C: `Start a Pickup Order`

Final CTA headline variants:

- A: `Put laundry back on your schedule.`
- B: `Ready to stop planning around laundry?`
- C: `Get clean laundry handled by a local team.`

Objection handled: final decision friction. This section should summarize the three main paths and make the next click obvious.

UI direction:

- Use `/images/marketing/cta.webp` as the image anchor for this section.
- Make the section full-width and visually different from the rest of the page.
- Do not put the CTA in a small card. Let the image and copy create a confident closing band.
- Include phone number `859-268-4330` for mobile confidence.

Cool UI elements:

- The Load Path completes into the CTA button.
- A small claim-ticket summary can repeat the three main paths: pickup, locations, commercial.
- On mobile, keep `Schedule Pickup` and `Call Now` visible near the bottom.

## Optional Sections To Defer

Do not include these in the first full homepage unless the needed proof exists:

| Section                | Priority | Why To Defer                                                                                  |
| ---------------------- | -------: | --------------------------------------------------------------------------------------------- |
| Blog or tips preview   |    Avoid | Lower conversion value than services, pricing, locations, and commercial quote paths.         |
| Large testimonial wall |       P2 | Useful only with real reviews and source details.                                             |
| Loyalty or membership  |    Avoid | No validated membership program in current docs.                                              |
| App download promotion |    Avoid | Do not imply a custom app while scheduling is through Curbside or the first-party web portal. |
| Long brand story       |       P2 | Better for About page. Homepage should stay action-focused.                                   |

## Proposed Page Order

Use this order for the first complete homepage:

1. Hero: Laundry Day Command Center.
2. Quick Action Dock.
3. Service Split.
4. Pricing Snapshot.
5. Location Finder Preview.
6. How Pickup Works: The Load Path.
7. Trust Proof.
8. Commercial Laundry Strip.
9. Service Area Band.
10. Final CTA.

This order keeps the homepage practical: action first, then service choice, then price, then location, then proof, then conversion.

## Implementation Notes

- Keep the homepage server-renderable by default. Move only interactive pieces into client components.
- Use `next/image` for all static images.
- Use current animation helpers from `@splashemout/animation/motion/components` for restrained reveals.
- Use `lucide-react` icons for service and action controls.
- Use existing button primitives from `@splashemout/ui/button`.
- Keep section components under `apps/web/src/components/home`.
- Do not add a new state library for homepage interactions.
- Do not duplicate booking logic between `/schedule` and `/account/schedule`; the homepage should route to the correct entry point.
- Use Tailwind utilities and existing tokens first. Add reusable CSS tokens only when the design needs a value that is used across sections.
- Preserve reduced-motion behavior for route-line, reveal, and media motion.

## Success Checklist

- The first viewport makes Schedule Pickup and Find a Location obvious.
- Pricing appears before the final CTA.
- Pickup and delivery is clearly different from drop-off wash-and-fold.
- Commercial buyers have a visible bid path without taking over the page.
- The page uses at least one real homepage image and the CTA image from `ASSETS.md`.
- The Load Path appears as a useful service-flow device, not decoration.
- Mobile users can call or schedule without hunting.
- No section exists only because landing pages usually have it.
