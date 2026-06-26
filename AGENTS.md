# AGENTS.md

## Project Overview

xapp-starter is a Turborepo monorepo for building xapps (Svelte-based applications) using the xapplaxy ecosystem.

## Architecture

- **Monorepo**: pnpm workspaces + Turborepo
- **Language**: TypeScript, Svelte 5
- **Styling**: Tailwind CSS v4, tailwind-merge, tailwind-variants
- **UI**: bits-ui, @xapplaxy/xy-ui (public UI lib)
- **Testing**: Vitest (unit), Playwright (integration)
- **Linting**: ESLint + Prettier (with svelte plugins)
- **Node**: >=18, pnpm 8.15.6

## Workspace Structure

```
apps/
  xapp/          # Main Svelte 5 app (SvelteKit, Vite)
packages/
  ui/            # Shared Svelte UI components (internal)
  utils/         # Shared utilities (@xapputils/utils)
  config/        # Shared config (Tailwind, PostCSS)
  config-eslint/ # Shared ESLint config
```

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Build all | `pnpm build` |
| Lint | `pnpm lint` |
| Format | `pnpm format` |
| Unit tests | `cd apps/xapp && pnpm test:unit` |
| Integration tests | `cd apps/xapp && pnpm test:integration` |
| Type check | `cd apps/xapp && pnpm check` |

## Conventions

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`, etc.) — not legacy reactive syntax.
- Shared components go in `packages/ui/`, app-specific components stay in `apps/xapp/src/`.
- Use `@xapputils/utils` (workspace dependency) for shared utility functions.
- Tailwind CSS v4 — use `@theme` and CSS-based config, not `tailwind.config.js`.
- Follow existing import patterns: workspace packages are referenced via `workspace:*`.

## Skills

Custom agent skills are located in `.agents/skills/`. Each subdirectory contains a skill definition (e.g., `create-xapp`).

## Adding a New xapp

Add a new app under `apps/` following the same structure as `apps/xapp/`. Register it automatically via the pnpm workspace glob `apps/*`.
