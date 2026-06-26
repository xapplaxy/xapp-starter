---
name: create-xapp
description: Scaffold a new xapp in the monorepo
arguments:
  - name: app-name
    required: true
    description: "The name of the new xapp (kebab-case, e.g. my-widget)"
  - name: description
    required: false
    description: "Short description for package.json and migration metadata"
---

# Create XApp

Scaffold a new xapp in `apps/<app-name>/` using the existing `apps/xapp/` as the canonical template.

## Steps

### 1. Validate input

- `<app-name>` must be kebab-case (lowercase, hyphens only)
- Check that `apps/<app-name>/` does not already exist

### 2. Ask whether the xapp needs an API

Ask the user: **"Does this xapp need an API to fetch data?"**

This determines:
- Whether to create the `api/` folder with `<app-name>.py`
- Whether `index.html` includes the `all-miniapps-data` script tag

### 3. Create directory structure

Create `apps/<app-name>/` with this structure:

```
apps/<app-name>/
├── src/
│   ├── main.ts
│   ├── App.svelte
│   ├── app.css
│   └── lib/
│       ├── XAPPContainer.svelte
│       ├── XAPP.svelte
│       ├── types.ts
│       └── utils.ts
├── index.html
├── .env
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── .prettierrc
├── .npmrc
├── migration/migration.yaml
├── doc/<app-name>.md
└── api/<app-name>.py          ← only if API is needed
```

### 4. File contents

Copy each file from `apps/xapp/` with these substitutions:

#### `.env`
```
VITE_XAPP_KEY=<app-name>
```

#### `index.html`
- Replace `<title>XAPP</title>` → `<title><App Title></title>`
- Replace `<h1 ...>XAPP</h1>` → `<h1 ...><App Title></h1>`
- Replace `id="wg-xapp"` → `id="wg-<app-name>"`
- **If API is needed**: include the data script tag with the app name as key:
  ```html
  <script id="all-miniapps-data" type="application/json">{"<app-name>":{"generated_data":{"key1":"value","key2":0.3}}}</script>
  ```
- **If no API**: omit the `all-miniapps-data` script tag entirely

#### `main.ts`
Copy as-is — it reads `VITE_XAPP_KEY` from env, no hardcoded values.

#### `App.svelte`
Copy as-is — it reads `VITE_XAPP_KEY` from `import.meta.env`.

#### `package.json`
- Set `"name"` to `"<app-name>"`
- Keep the same dependencies and devDependencies as `apps/xapp/package.json`
- Keep all scripts identical

#### `tsconfig.json`
- Replace all `../xapp` references with `../<app-name>`

#### `vite.config.ts`
Copy as-is.

#### `eslint.config.js`
Copy as-is.

#### `.prettierrc`
Copy as-is.

#### `.npmrc`
Copy as-is.

#### `app.css`
Copy as-is but clear the custom `@layer` block to an empty skeleton using the app name:
```css
@layer <app-name> {
  .<app-name> {
  }
}
```

**Styling convention**: All Tailwind styles must be defined in `app.css`, NOT inline in `.svelte` files. Define custom classes with the `xa-` prefix inside the app's `@layer` block, then reference those classes in Svelte components.

Example — in `app.css`:
```css
@layer my-widget {
  .my-widget {
    .xa-card-header {
      @apply text-lg font-semibold p-4
    }
    .xa-result-row {
      @apply flex justify-between py-2 border-b
    }
  }
}
```

Then in the `.svelte` file, use the class names directly:
```svelte
<div class="xa-card-header">Title</div>
<div class="xa-result-row">...</div>
```

#### `src/lib/XAPPContainer.svelte`
Copy as-is — the structural pattern (Xapp > XappContainer > controls + XAPP component) stays the same.

#### `src/lib/XAPP.svelte`
Replace the sample UI content with a minimal skeleton:
```svelte
<script lang="ts">
  import { copyToClipboard } from './utils';

  export function copy() {
    const txt = "Copy text here";
    copyToClipboard(txt);
    return true;
  }
</script>

<div class="xa-calculator-container">
  <div class="xy-form">
    <div class="xy-form-control">
      <!-- Your xapp content here -->
    </div>
  </div>
</div>
```

#### `src/lib/types.ts`
Create empty file.

#### `src/lib/utils.ts`
Copy as-is (contains `copyToClipboard` and `getMiniAppData`).

#### `migration/migration.yaml`
Replace metadata:
- `name: <app-name>`
- `title: <App Title>`
- `description: <description or placeholder>`
- Generate a new random `pathKey` (8 alphanumeric chars)
- Set `widgets: [<app-name>]`
- Keep structure, lifecycle, owner, category, layout identical

#### `doc/<app-name>.md`
Copy the doc template from `apps/xapp/doc/xapp-starter.md` as-is (it uses generic placeholders).

#### `api/<app-name>.py` (only if API is needed)
Create empty file. Skip this folder entirely if the user said no API.

### 5. Install dependencies

```bash
pnpm install
```

### 6. Verify

```bash
pnpm --filter <app-name> dev
```

Open the browser and confirm the empty xapp shell renders without errors.

### 7. Report

Tell the user:
- The new xapp is at `apps/<app-name>/`
- Run `pnpm --filter <app-name> dev` to start development
- Edit `src/lib/XAPP.svelte` to build the UI
- Update `migration/migration.yaml` with final SEO metadata
