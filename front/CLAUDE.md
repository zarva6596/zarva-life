# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Zarva-Life — особистий бренд-сайт Романа Зарванського (фронтенд/фулл-стек розробник). Концепція головної сторінки: лендінг, де "товар" — це автор та його особистість.

### Сторінки

| Route | Призначення |
|---|---|
| `/` | Особистий лендінг — фото, відео, хобі, захоплення, робота |
| `/work` | CV для потенційних клієнтів — досвід, компанії, завантаження PDF, список портфоліо |
| `/work/portfolio/[slug]` | Окрема сторінка кожного проєкту з портфоліо |
| `/moto` | Мотожиття — катання та реставрація мотоциклів |
| `/blog` | Щоденні статті |
| `/growth` | Напрямки розвитку: embedded, 3D-друк, проектування, YouTube-канал |

## Commands

```bash
npm run dev        # Dev server at http://localhost:3000
npm run build      # Production build
npm run preview    # Local production preview
npm run generate   # Static site generation
npm run lint       # ESLint check
npm run lint:fix   # ESLint auto-fix
```

## Architecture

**Stack:** Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4 + Pinia

Source code lives in `src/` (configured via `srcDir: 'src/'` in nuxt.config.ts).

### Component Convention

Components are organized in two directories, both **auto-imported without prefix**:

- `src/components/universal/` — shared reusable UI components (buttons, cards, inputs)
- `src/components/general/` — feature/domain components grouped by subdirectory:
  - `general/default/` — components for the default layout (Header, Footer)
  - `general/dashboard/` — components for the dashboard layout (Header, Sidebar, Footer)

No import statements needed — all components in these dirs are globally available in templates.

### Layouts

Three layout templates in `src/layouts/`:
- `default.vue` — standard pages (header + content + footer)
- `dashboard.vue` — dashboard pages (sidebar + header + content + footer)
- `auth.vue` — authentication pages (centered layout)

Pages use `definePageMeta({ layout: 'dashboard' })` to switch layout. Pages without `definePageMeta` default to `default.vue`.

### Internationalization (i18n)

Module: `@nuxtjs/i18n` v10. Two locales:
- `en` (English) — default, без префіксу (`/`, `/work`, `/blog`…)
- `uk` (Ukrainian) — з префіксом `/uk/` (`/uk/`, `/uk/work`…)

Стратегія: `prefix_except_default`. Файли перекладів: `i18n/locales/en.json` та `i18n/locales/uk.json` (на рівні кореня проєкту, бо `restructureDir: 'i18n'` — дефолт v10).

В компонентах:
```ts
const { t } = useI18n()
// t('nav.home'), t('pages.work.title')…
```

Для перемикання мови: `useI18n().locale` або `useSwitchLocalePath()`.

### State Management

Pinia is configured via `@pinia/nuxt`. Stores go in `src/stores/` (Nuxt auto-imports composables from `src/composables/`).

### Styling

Tailwind CSS 4 is loaded via Vite plugin + `src/assets/css/main.css`. Use utility classes inline — no component-scoped styles.

### ESLint

ESLint config (`eslint.config.mjs`) enforces padding between Vue SFC blocks (`<script>`, `<template>`, `<style>`) and between tags — always add blank lines between them.
