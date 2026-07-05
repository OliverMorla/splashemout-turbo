# Repository Map

## Structure

- `apps/web` - Next.js app using App Router under `src/app/(frontend)`.
- `apps/web/src/app/(frontend)` - Public frontend route group with `layout.tsx`, `page.tsx`, `not-found.tsx`, and Tailwind 4 globals in `globals.css`.
- `apps/web/src/app/robots.ts` and `apps/web/src/app/sitemap.ts` - Metadata routes.
- `apps/web/src/components` - Shared frontend components such as header and footer.
- `apps/web/src/config` - Site-level metadata and config.
- `apps/web/public` - Static assets, including brand images and manifest icons.
- `apps/web/scripts` - App-local helper scripts.
- `packages/animation` - Shared GSAP, Motion, and OGL animation exports and React animation components.
- `packages/auth` - Better Auth server/client exports.
- `packages/db` - Drizzle/Postgres package with schema export and Drizzle Kit config.
- `packages/eslint-config` - Shared ESLint configs exported as base, Next.js, and React internal presets.
- `packages/ui` - Shared React UI components and theme helpers.
- `packages/utils` - Shared utility exports, including class name merging.
- `scripts` - Root maintenance scripts such as clean install and environment secret generation.
- `tests` - Test workspace directories exist, but no test files were present when this map was updated.
- `design-system` - Persisted UI/UX design-system guidance and page overrides.

## Key Project Notes

- Root package manager is `pnpm` and orchestration is via Turbo.
- Workspace packages are declared by `pnpm-workspace.yaml` as `apps/*` and `packages/*`.
- Internal workspace packages use the `@splashemout/*` namespace.
- Root runtime requirements are Node `>=22.13.0` and pnpm `>=11.0.0 <12`.
- Standard root validation script is `pnpm validate`, which aliases `pnpm check`.
- `pnpm check` runs format, lint, typecheck, test, and build.
- The web app is Next.js 16 with React 19 and Tailwind CSS 4.
- App-specific product and design source files live in `apps/web/PRODUCT.md` and `apps/web/DESIGN.md`.
- Package tests currently use Vitest where configured (`packages/animation`, `packages/ui`, and `packages/utils`).
- Database commands live in `packages/db`: `db:generate`, `db:migrate`, `db:push`, and `db:studio`.
- Turbo task names are `build`, `lint`, `check-types`, `test`, and `dev`.

## Conventions

- Treat `.context/repo/map.md` as a navigation aid only; inspect current source before editing.
- Do not inspect `.env` or `.env.*` files.
- For UI work, prefer Tailwind utilities backed by tokens in `apps/web/src/app/(frontend)/globals.css`.
- Check root `RULE.md` before React ecosystem work for short operational rules.
