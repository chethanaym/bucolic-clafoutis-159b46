# AGENTS.md

## Project Overview

Modern Psych Therapy is a one-page public website for mental wellbeing, psychological health, and special needs support. It presents service pathways, a simple care approach, and direct contact options in a calm, accessible layout.

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
src/routes/terms.tsx   # Terms & Conditions
src/routes/refunds.tsx # Refunds & Cancellations policy
src/routes/privacy.tsx # Privacy policy
src/routes/pay.tsx     # Razorpay payment button, kept off every other page on purpose
src/booking.tsx        # Booking panel, Calendly hand-off, and the ScrollLink used by the nav
src/legal.tsx          # Shared layout and footer for the policy pages, plus clinic contact details
src/styles.css         # Global visual system, layout, responsive styles, and interaction states
public/                # Static assets served by the site
netlify.toml           # Netlify build and dev configuration
```

## Architecture

The site is intentionally small. The homepage route contains the complete page structure and uses static arrays for repeatable service and process content.

The hero's right-hand column is the booking panel (`src/booking.tsx`). It collects a
name, email and a line of context, then sends the visitor to Calendly with those
prefilled. In-page navigation goes through `ScrollLink`, not `<a href="#id">`: the
router intercepts same-origin clicks, sets the hash and stops, so plain anchors set the
URL but never scroll.

Three policy routes sit alongside it. They exist because a payment gateway (Razorpay) requires a merchant site to publish terms, a refund and cancellation policy, and a privacy policy, all reachable from the site. They share a layout and a footer from `src/legal.tsx`; clinic contact details live there as a single constant so they cannot drift between pages.

`pay.tsx` carries the Razorpay payment button. It lives on its own route so that
Razorpay's third-party script loads only for people who go there to pay, which keeps
the privacy notice's "browsing collects nothing about you" claim true for the rest of
the site. Razorpay ships the button as a `<script>` that injects itself into the
surrounding `<form>`; React will not run a `<script>` written in JSX, so the element is
created and appended in an effect. Styling lives in `src/styles.css` so the page can use expressive layout rules that would be awkward as long utility class strings.

The template product catalog routes were removed because this project is a standalone one-page website, not a multi-page product site.

## Coding Conventions

- Keep route components in `src/routes`.
- Use `lucide-react` icons for UI iconography.
- Keep copy clear, supportive, and careful around mental health topics.
- Avoid promising clinical outcomes or replacing emergency guidance.
- Prefer small static content arrays inside the page unless content management or persistence is requested.
- Do not add persistence unless the feature requires it; if persistence is needed, use Netlify platform storage primitives.

## Brand
- Name: Modern Psych Therapy
- Logo: profile silhouette with growing leaf branches, gradient teal → pink → purple
- Email: modernpsychtherapy@gmail.com
- Primary brand colors:
  - Navy background: #0D003C
  - Teal accent: ~#5DD9D1
  - Pink/magenta: ~#E91E80
  - Purple: ~#7A2BE0
- Tone: calm, compassionate, professional. No clinical jargon, no salesy language.
