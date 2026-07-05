# Repository Rule

Short operational rules for React ecosystem work. Use `CLAUDE.md` / `AGENTS.md` for the broad baseline; this file only captures implementation choices worth remembering.

## Defaults

- Prefer existing components, hooks, env helpers, auth helpers, animation helpers, utilities, and package boundaries before adding new abstractions.
- Do not introduce tRPC, TanStack Start, TanStack Query, axios, Prisma, Zustand, Redux, SWR, or other framework/data/state libraries unless the task clearly needs them or the edited area already uses them.

## React Defaults

- Keep components server-renderable by default; add client-only behavior only where browser APIs, stateful interaction, effects, or event handlers require it.
- Keep server state, client state, form state, and URL state separate instead of pushing everything into context or a global store.
- Derive simple state during render; avoid effects for values that can be computed from props/state.
- Keep effects for synchronization with external systems, subscriptions, timers, browser APIs, and imperative libraries.
- Avoid module-level mutable request/user state in SSR or React Server Component code.
- Minimize prop serialization into client components; pass only the fields the client actually needs.
- Use `Promise.all` for independent async work and start async work early when it removes waterfalls.
- Split heavy, rarely used, or browser-only UI behind dynamic imports where bundle size matters.

## Framework Options

- For Next.js, use SSR for request-accurate or personalized content, SSG for static content, ISR for mostly static content that should refresh, and CSR only for browser-only components.
- For Next.js, use server actions for short-lived UI-triggered mutations where framework integration helps.
- For Next.js, use route handlers or backend endpoints for webhooks, retry-prone jobs, heavy orchestration, long-running work, or non-UI entry points.
- For React-only or Vite-style apps, keep data fetching behind typed service functions and avoid coupling reusable UI components to transport details.
- For TanStack Start, treat TanStack Router as the application contract: typed routes, params, search validation, loaders, links, and pending states should carry the app structure.
- For TanStack Start, use server functions, server routes, SSR, and streaming for explicit server work instead of bolting on unrelated backend patterns by default.
- For TanStack Start, keep server-only work behind validated boundaries and use Query integration only when the feature benefits from server-state caching, dehydration, prefetching, mutations, or background refetching.

## Request and Data Boundaries

- Keep validation and authorization at backend boundaries.
- Use Zod or existing validation helpers when user input, URL params, forms, API payloads, cookies, headers, or webhook payloads cross a backend boundary.
- For webhook-driven mutations, require idempotency and signature verification.
- Do not duplicate the same business operation across multiple request paths.
- Do not serialize secrets or sensitive internal fields to the client.

## UI, Motion, and Styling

- For UI work, check the project design docs and existing components before designing new patterns.
- Prefer Tailwind utilities backed by existing tokens; add reusable tokens in `:root {}` and `@theme inline {}` instead of scattering arbitrary values.
- Avoid JSX `style` props or scoped CSS unless Tailwind cannot express the requirement cleanly.
- Use existing motion helpers for page reveals when the project provides them.
- Use in-view motion for below-the-fold sections and keep motion restrained with reduced-motion behavior preserved.

## Placement and Naming

- Keep route-local implementation under `app/**/_components`, `app/**/_lib`, or `app/**/_utils` when practical.
- Keep feature-only helpers and types inside the owning feature/module.
- Move only truly generic code into shared packages or top-level shared folders.
- Use `kebab-case` for files and folders, `PascalCase` for exported React components and exported type names, and `camelCase` for functions, variables, and object keys.
- Avoid vague filenames like `helpers.ts` or `common.ts`.

## Validation

- Prefer the narrowest reliable validation scope first, then broaden when changes affect shared packages or cross-app behavior.
- Run formatting, ESLint, TypeScript checks, and relevant tests when available for the affected scope.
- Build when practical, but in Codex skip app-scoped `pnpm build` commands if they trigger the known `.env` access issue or hang; document the skip.
- Do not run dependency install commands. If dependencies or lockfile updates are needed, ask the user to run the exact command.
