# Splash 'Em Out Web

`apps/web` is the primary Splash 'Em Out web application.

Splash 'Em Out offers clean fully attended laundromats, drop-off wash-and-fold, pickup and delivery, dry cleaning pickup and delivery, and commercial laundry service across Lexington, Richmond, Nicholasville, and nearby Kentucky communities.

## Product Scope

The web app should support the route and conversion plan described in [../../docs/SETUP.md](../../docs/SETUP.md) and [../../docs/ROUTES.md](../../docs/ROUTES.md):

- Public homepage with Schedule Pickup and Find a Location CTAs.
- Service pages for pickup and delivery, wash-and-fold, self-service laundry, commercial laundry, and dry cleaning.
- Pricing page with per-pound prices, minimums, turnaround, bulky-item pricing, and promotions.
- Location hub plus individual location pages.
- Service-area pages with unique local content.
- Commercial hub and commercial quote request form.
- Contact, FAQ, reviews, privacy, and terms pages.
- Redirect or bridge routes for external scheduling and customer login.
- Payload admin for protected content and media management.

Do not frame the app as a generic laundry marketplace or hide core local-service actions behind brand storytelling.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Payload CMS
- Shared workspace packages from `packages/*`

Internal workspace packages use the `@splashemout/*` namespace.

## Commands

From the repository root:

```sh
pnpm exec turbo dev --filter=web
pnpm exec turbo build --filter=web
pnpm exec turbo lint --filter=web
pnpm exec turbo check-types --filter=web
```

From this directory:

```sh
pnpm dev
pnpm build
pnpm lint
pnpm check-types
```

The development server runs at [http://localhost:3000](http://localhost:3000) unless Next.js selects another port.

## Product Routes

See [../../docs/ROUTES.md](../../docs/ROUTES.md) for the full route plan.

Highest-priority routes:

- `/`
- `/services`
- `/services/pickup-and-delivery`
- `/services/wash-and-fold`
- `/services/self-service-laundry`
- `/services/commercial-laundry`
- `/pricing`
- `/locations`
- all nine `/locations/[slug]` pages
- `/service-areas/lexington-ky`
- `/service-areas/richmond-ky`
- `/service-areas/nicholasville-ky`
- `/commercial`
- `/commercial/request-a-bid`
- `/schedule`
- `/login`
- `/contact`
- `/privacy`
- `/terms`

## UI Direction

Before changing UI or copy, read:

- [PRODUCT.md](PRODUCT.md)
- [../../docs/TONE.md](../../docs/TONE.md)
- [../../docs/VISUAL.md](../../docs/VISUAL.md)

The intended style is **Fresh Utility**: bright, clean, practical, local, and high-trust. Default to Tailwind neutral for structure and text, then use Clean Water blue for primary action, Deep Water for high contrast, Fresh Mint for cleanliness, and Citrus only for promotions.

Use real Splash 'Em Out surfaces: location cards, machine capacity, wash-and-fold pricing, pickup process, commercial quote details, hours, phones, directions, and service-area proof. Avoid generic stock photography, decorative bubbles as the main visual, hidden pricing, and vague conversion copy.

## External Scheduling

Pickup scheduling and customer login currently point to:

```txt
https://splashemout.curbsidelaundries.com/
```

Use direct links or clear bridge routes. Do not imply the app owns scheduling unless that integration is built.
