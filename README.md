# Pray for Peru

A static missionary information website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Showcases ministry work, photography, testimonies, and a timeline of service in Peru.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build & Deploy

```bash
npm run build
npm run preview
```

The production build outputs static files to `dist/`.

## GitHub Pages

This repo deploys automatically to GitHub Pages on every push to `main`.

Live site: [https://mastaanRandhawa.github.io/pray-for-peru/](https://mastaanRandhawa.github.io/pray-for-peru/)

The Vite `base` path is set to `/pray-for-peru/` for project-page hosting. To deploy elsewhere, update `base` in `vite.config.ts`.

## Editing Content

All text, stats, images, and contact details live in JSON files under `src/content/`. Edit these files to update the site without changing component code:

| File | Contents |
|------|----------|
| `site.json` | Name, tagline, mission statement, email, location, intro |
| `highlights.json` | Stat cards on the homepage |
| `about.json` | Biography and mission work sections |
| `peru-ministry.json` | Ministry blocks, programs, partnerships |
| `gallery.json` | Gallery images with categories and captions |
| `testimonies.json` | Quotes and impact stories |
| `timeline.json` | Timeline milestones |
| `hero-images.json` | Hero marquee image URLs |

After editing JSON, restart the dev server if it is running.

## Pages

- `/` — Homepage with animated hero, intro, highlights, testimonies teaser, timeline preview
- `/about` — Biography and mission work
- `/peru-ministry` — Ministry details and full timeline
- `/gallery` — Filterable photo gallery with lightbox
- `/testimonies` — Quotes and impact stories
- `/timeline` — Full service timeline
- `/contact` — Contact form (opens mailto:) and prayer info

## Tech Stack

- Vite + React 19 + TypeScript
- React Router for client-side routing
- Tailwind CSS v4 with custom earth-tone palette
- shadcn/ui components
- framer-motion for the hero marquee animation

## Contact Form

The contact form validates input client-side, then opens the visitor's email client via `mailto:` with a prefilled subject and body. Update the email address in `src/content/site.json`.
