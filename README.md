# Enablement.ch — Site

Marketing site for Enablement.ch. Astro + Vercel. Deploys on every push to `main`.

**Design system:** https://github.com/MarcusAurelian/enablement-design-system

## Stack

- [Astro](https://astro.build) — static site, components, markdown content collections
- Sofia Sans (Google Fonts) + JetBrains Mono
- Crimson `#E11E48` accent on cool off-white canvas
- Light + dark mode via semantic CSS custom properties

## Structure

```
src/
├── components/        # Reusable Astro components (Hero, Workflow, LogoWall, etc.)
├── content/
│   └── case-studies/  # Markdown files, one per case study
├── content.config.ts  # Schema for case studies frontmatter
├── layouts/
│   └── BaseLayout.astro  # HTML shell, fonts, theme toggle
├── pages/
│   ├── index.astro       # Homepage
│   └── case-studies/
│       ├── index.astro   # List
│       └── [...slug].astro  # Detail template
└── styles/
    └── global.css     # All design system tokens + components
```

## Commands

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Install dependencies                             |
| `npm run dev`      | Local dev server at `localhost:4321`             |
| `npm run build`    | Production build to `./dist/`                    |
| `npm run preview`  | Preview production build locally                 |

## Adding a case study

Drop a new markdown file in `src/content/case-studies/`. Frontmatter required:

```yaml
---
company: Acme
headline: A short claim sentence
outcome: One-sentence description of what we built
metrics:
  - value: "2×"
    label: "Pipeline in 90 days"
publishedAt: 2025-09-01
featured: true
---
```

The file slug (filename minus `.md`) becomes the URL: `/case-studies/<slug>`.