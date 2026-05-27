# AGENTS.md

## Project Overview

Mindful Horizons is a one-page public website for mental wellbeing, psychological health, and special needs support. It presents service pathways, a simple care approach, and direct contact options in a calm, accessible layout.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router |
| Build | Vite |
| Styling | Tailwind CSS 4 import plus custom global CSS |
| Icons | lucide-react |
| Deployment | Netlify |

## Key Files

```
src/routes/__root.tsx  # Root document, global metadata, and shared styles import
src/routes/index.tsx   # Complete one-page website content and structure
src/styles.css         # Global visual system, layout, responsive styles, and interaction states
public/                # Static assets served by the site
netlify.toml           # Netlify build and dev configuration
```

## Architecture

The site is intentionally small. The homepage route contains the complete page structure and uses static arrays for repeatable service and process content. Styling lives in `src/styles.css` so the page can use expressive layout rules that would be awkward as long utility class strings.

The template product catalog routes were removed because this project is a standalone one-page website, not a multi-page product site.

## Coding Conventions

- Keep route components in `src/routes`.
- Use `lucide-react` icons for UI iconography.
- Keep copy clear, supportive, and careful around mental health topics.
- Avoid promising clinical outcomes or replacing emergency guidance.
- Prefer small static content arrays inside the page unless content management or persistence is requested.
- Do not add persistence unless the feature requires it; if persistence is needed, use Netlify platform storage primitives.
