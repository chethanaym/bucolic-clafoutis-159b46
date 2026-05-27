# Mindful Horizons

Mindful Horizons is a one-page website for mental wellbeing, psychological health, and special needs support. It is designed for a compassionate care provider that needs a polished landing page with service information, an approachable care process, and direct contact options.

## Key Technologies

- TanStack Start with React 19
- TanStack Router file-based routes
- Vite
- Tailwind CSS 4 with custom global CSS
- lucide-react icons
- Netlify deployment configuration

## Project Structure

```
src/routes/__root.tsx  # Document shell and SEO metadata
src/routes/index.tsx   # One-page website
src/styles.css         # Global layout, theme, and responsive styling
public/                # Static public assets
```

## Run Locally

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

The Vite development server runs on port 3000 by default. On Netlify, the configured build command is `npm run build`.
