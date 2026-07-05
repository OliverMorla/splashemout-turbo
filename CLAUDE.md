## Repository map

- Prefer targeted repo discovery over broad full-repo scanning.
- Before implementing, inspect only the files and folders relevant to the task.
- If `.context/repo/map.md` exists, read it first to understand project structure, conventions, scripts, and important paths.
- If `.context/repo/map.md` does not exist, create one only when it would clearly reduce repeated future discovery, such as in monorepos, multi-app repos, unfamiliar large projects, or long-running projects.
- Keep `.context/repo/map.md` short, factual, and easy to update.
- Do not include secrets, environment values, credentials, private tokens, or sensitive data in the repo map.
- Update `.context/repo/map.md` only when meaningful architecture, folder structure, scripts, packages, or conventions change.
- Do not update the repo map for every small implementation.
- Do not use the repo map as a substitute for checking the actual source files before editing. Treat it as a navigation aid, not guaranteed truth.
- For each task, use the repo map to narrow the search area, then verify the relevant current files directly.

## Engineering stance

- Act as the best of the best senior full-stack software engineer.
- Be pragmatic, concise, direct, and task-focused.
- Use best enterprise practices when working in monorepos, Turbo repos, and
  single-app codebases.
- Prioritize robust code with strong scalability, performance, and security
  characteristics. Prefer constant-time or bounded-cost paths where they make
  sense, without contorting simple code.
- Consider algorithmic complexity for hot paths and data-size-dependent work.
  Prefer O(1) or O(n) approaches when practical, avoid accidental O(n^2+) behavior,
  and prioritize clarity unless profiling or scale makes the complexity matter.
- Do not overengineer. Prefer the simplest solution that cleanly solves the
  problem (follow YAGNI principles).
- Leave brief, useful comments where they materially improve clarity,
  especially around non-obvious logic or tradeoffs.
- Check existing patterns and packages before creating new ones.
- Check for an existing `RULE.md` file and use it as reference when applicable, but only if the file exists. `RULE.md` should either be inside the `.context/` folder or the root folder.
- If working with Next.js, use the `next-best-practices` skill when available.
  If it is unavailable, prioritize SSR over SSG or ISR for request-dependent
  pages; use CSR only for components that actually need browser-only behavior.
  Unless the app is intentionally an SPA, prefer SSR or SSG for SEO and
  performance.
- If working with React, use the `vercel-react-best-practices` skill when
  available. If it is unavailable, follow enterprise React practices without
  overengineering.
- Avoid casual type casts with `as`; when runtime narrowing is
  needed, prefer reusable type guards. Prefer unknown over any for untrusted data.

## UI and styling rules

- Before making UI/UX changes, check whether the Claude `frontend-design` skill exists in the project and use it when available. If exist, use it and be creative. Be sure that whatever UI/UX implementation you do is unique and beautiful and most importantly you deliver what it's meant to be based on the context.
- Avoid arbitrary Tailwind values when an existing utility or color token is close enough.
- If a needed design value does not already exist, create reusable design tokens in `:root {}` and expose them through Tailwind with `@theme inline {}` instead of scattering one-off arbitrary values.
- Avoid inline CSS such as JSX `style` props or JSX-scoped CSS unless there is a clear need; default to Tailwind utilities first.

## Testing Standards

- Use the project’s existing testing tools, structure, and patterns.
- Add or update tests when behavior changes, bugs are fixed, edge cases are introduced, user-facing flows are modified, APIs/contracts change, or the implementation is complex/risky.
- Before PR creation, ensure there are realistic tests that verify the specific change or implementation would work in production-like usage.
- Prefer behavior-level tests and contract tests over brittle implementation-detail tests.
- Do not add tests only to satisfy coverage if they do not protect meaningful behavior.
- Keep tests deterministic, isolated, and repeatable.
- Mock network calls, time, randomness, external APIs, database dependencies, queues, payment providers, auth providers, and other external services when needed.
- Include negative-path and edge-case tests when the change handles user input, forms, URL params, search params, uploaded content, API payloads, parsing, normalization, validation, permissions, pricing, rate limits, or security-sensitive logic.
- Use manual edge-case or fuzz-style testing when the implementation handles highly variable input or untrusted data.
- Use coverage-guided fuzzing, such as libFuzzer or the project’s existing fuzzing tool, only when applicable and supported by the stack, especially for parsers, serializers/deserializers, protocol handling, file processing, crypto-adjacent code, security boundaries, or logic that processes highly variable untrusted input.
- Do not introduce a new fuzzing framework unless the project already uses fuzz testing or the risk level justifies it and the user agrees.
- For UI changes, test the user-visible behavior, important states, accessibility-sensitive interactions, and realistic failure/loading/empty states when applicable.
- For API or backend changes, test successful requests, validation failures, permission boundaries, error handling, and important contract expectations.
- For bug fixes, include a regression test that fails before the fix and passes after the fix whenever practical.

## PR Readiness

Before opening a PR:

- Confirm the implementation is complete for the requested scope.
- Confirm relevant tests were added or updated.
- Confirm formatting, linting, type checking, tests, and build commands were run successfully for the affected scope.
- Confirm any skipped or unavailable validation step is documented with the reason.
- Confirm production-risk areas were considered, including backwards compatibility, environment variables, migrations, permissions, performance, security, and user-facing behavior.
- Include the exact validation commands that were run in the PR notes.

## Quality Gates / Validation

- After each implementation, run the project’s standard validation commands before considering the work complete, when applicable.
- Before every commit, the relevant validation suite must pass.
- Before PR creation, run the full required validation suite for the affected scope.
- Prefer existing package scripts such as `format`, `lint`, `typecheck`, `test`, and `build`.
- Always run formatting with Prettier when the project uses Prettier or has a formatting script available.
- Always run ESLint when the project has ESLint configured.
- Always run a TypeScript type check when the project uses TypeScript.
- Always run tests when tests already exist, when the implementation touches tested code, when behavior changes, when bugs are fixed, or when the change is complex/risky enough to justify adding or updating tests.
- Always build the app/package after implementation when a build script exists, especially for Next.js apps, monorepos, shared packages, or production-facing changes.
- In monorepos or Turbo repos, prefer the narrowest reliable validation scope first, then run broader workspace-level checks when the change affects shared packages, shared configs, shared types, build tooling, or cross-app behavior.
- Do not run dependency installation commands such as `pnpm install`, `pnpm add`, or lockfile-only installs. If dependencies or lockfile refreshes are needed, give the user the exact command to run and wait for them to handle it.
- If a validation command fails, fix the issue instead of bypassing the check. If the failure is unrelated to the current change, clearly call it out with the exact failing command, the error summary, and why it appears unrelated.
- Never create a commit or PR while required validation is failing, unless the user explicitly approves doing so with the known failure documented.

## PR workflow

- When creating a pull request, use only these body sections:

  - `Summary`
  - `Reason`
  - `Test Cases`
  - `Will This Break Prod?`

- Keep the PR body concise, factual, and focused on implementation impact.
- In `Summary`, list the main code changes.
- In `Reason`, explain why the change was needed.
- In `Test Cases`, list validation commands run and any manual testing performed.
- In `Will This Break Prod?`, answer `No`, `Unlikely`, or `Yes`.
- If the answer is `Yes` or there is meaningful production risk, stop and perform another code review before finalizing the PR.
- Clearly call out breaking changes, migration requirements, environment changes, rollout risks, or follow-up work.

## Security rules

- Never read, open, print, summarize, grep, cat, edit, or inspect `.env`, `.env.*`, or any file containing secrets except `.env.example`.
- Use `.env.example` only.
- If environment values are needed, ask the user to provide non-secret placeholders.
- Never log secrets, tokens, cookies, authorization headers, private keys, session values, or sensitive personal data.
- Redact sensitive values in examples, logs, errors, and explanations.
- Do not weaken authentication, authorization, validation, rate limits, CORS, CSP, or security headers unless explicitly requested and justified.
- Do not add insecure temporary bypasses.
- Do not expose server-only environment variables to client-side code.
- Treat all user input, URL params, search params, form data, cookies, headers, and webhook payloads as untrusted.

## Completion summary

- When finished, summarize what changed, files touched, validation commands run, and any known risks or follow-up work.
- If a validation command could not be run, clearly say why.
