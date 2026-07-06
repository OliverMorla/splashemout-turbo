# Splash 'Em Out

Splash 'Em Out is a Central Kentucky laundry service website for clean, fully attended laundromats, drop-off wash-and-fold, pickup and delivery laundry, dry cleaning pickup and delivery, and commercial laundry service.

The site should help visitors quickly find a location, understand pricing, schedule pickup, or request a commercial bid.

## Product Direction

The website is organized around the highest-value customer tasks:

- Find a clean laundromat in Lexington, Richmond, or Nicholasville.
- Schedule pickup and delivery through the Curbside Laundries portal.
- Understand wash-and-fold and pickup pricing before converting.
- Explore dry cleaning pickup and delivery.
- Request a commercial laundry quote for recurring or emergency service.

The product should feel bright, clean, local, useful, and conversion-focused. It should not feel like a generic SaaS landing page, a vague cleaning company, or a stock-photo laundromat template.

## Key Docs

- [docs/SETUP.md](docs/SETUP.md): source reference brief for services, pricing, locations, contact details, SEO, conversion requirements, and copy blocks.
- [docs/ABOUT.md](docs/ABOUT.md): company, audience, service model, goals, pricing direction, and trust summary.
- [docs/TONE.md](docs/TONE.md): voice, copy, CTAs, FAQ tone, and commercial copy guidance.
- [docs/VISUAL.md](docs/VISUAL.md): visual direction, theme colors, typography, layout, imagery, and motion.
- [docs/ROUTES.md](docs/ROUTES.md): recommended route strategy and route priorities.
- [docs/ASSETS.md](docs/ASSETS.md): public asset inventory and production asset plan.
- [TASTE.md](TASTE.md): concise design execution brief for landing-page work.
- [VIBE.md](VIBE.md): high-level taste and experience guardrails.

## Repository

This repo is a pnpm and Turborepo workspace refocused for Splash 'Em Out. Internal workspace packages use the `@splashemout/*` namespace.

```txt
apps/
  web/        Main Next.js web app
packages/
  ui/         Shared React UI components
  animation/  Shared animation helpers
  utils/      Shared utility functions
  auth/       Auth package
  db/         Drizzle/Postgres package
docs/
  SETUP.md
  ABOUT.md
  TONE.md
  VISUAL.md
  ROUTES.md
  ASSETS.md
```

## Development

Requirements:

- Node.js `>=22.13.0`
- pnpm `>=11.0.0 <12`

Install dependencies:

```sh
pnpm install
```

Run all apps and packages:

```sh
pnpm dev
```

Run validation:

```sh
pnpm validate
```

## Product Guardrails

- Keep Schedule Pickup, Find a Location, Call, and Request a Bid paths easy to reach.
- Make pricing, minimums, and turnaround visible.
- Use real location and service proof whenever possible.
- Keep city and location pages specific enough to be useful.
- Do not hide the external scheduling portal behind unnecessary steps.
- Do not invent unverified hours, guarantees, or regulated laundry claims.
