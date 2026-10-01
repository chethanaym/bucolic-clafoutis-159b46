# Blog style guide

The weekly blog exists to help parents and caregivers, and in doing so to bring
search traffic to the site. Every post is reviewed by a person before it is
merged; merging publishes it.

## Audience and voice

- **Reader:** a parent or caregiver in India (often Bengaluru), not a clinician.
  Busy, possibly worried, reading on a phone.
- **Voice:** calm, warm, practical, non-judgemental. Plain English, short
  sentences, no clinical jargon (explain a term the first time if it is needed).
- Speak to the reader as "you". Never shame parents or children.
- Indian context where it fits naturally: local foods (dal, ragi, idli, curd,
  seasonal fruit), school/exam rhythms, joint families, monsoon/summer heat.

## Safety rules (non-negotiable)

- General information only. **No diagnosis, no medication or supplement
  doses, no promises of outcomes.**
- Every factual or numeric claim (sleep hours, screen-time limits, nutrient
  needs) must match a mainstream source: WHO, AAP, AASM, UNICEF, ICMR-NIN
  (Dietary Guidelines for Indians), NHS, CDC. Name the source in the text
  ("the American Academy of Sleep Medicine recommends..."); link it where useful.
- Include a "When to seek help" section with concrete red flags.
- Do not mention specific brands or products.
- The page template already adds a crisis line and disclaimer, so don't repeat
  them in the body.

## SEO shape

- **Title (≤ 60 chars):** a question or clear promise a parent would type,
  containing the main keyword. E.g. "How Much Sleep Does My Child Need?"
- **Description (140–160 chars):** a one-sentence summary with the keyword. It
  becomes the Google snippet.
- **Slug:** short, lowercase, hyphenated keyword phrase, no date, no stop words
  (e.g. `how-much-sleep-children-need`). Never change a slug after publishing.
- **Length:** 900–1,400 words.
- **Structure:** a 2–3 sentence intro that answers the question directly, then
  `##` sections with descriptive headings (search engines read them). Use lists
  and one small table where they help. End with a short "The takeaway" section.
- Add 1–3 internal links to earlier posts (`/blog/<slug>`) where relevant, and
  one natural mention that support is available (the page adds the booking CTA).
- No `#` H1 in the body; the title is the H1.

## File format

`content/blog/<slug>.md`:

```markdown
---
title: How Much Sleep Does My Child Need? A Simple Guide for Parents
description: Sleep needs by age, signs your child isn't getting enough, and a calm bedtime routine that works, explained simply for parents.
date: 2026-10-05
author: Modern Psych Therapy
tags: Sleep, Children, Parenting
---

Body in Markdown...
```

`date` is the publish date (YYYY-MM-DD). A post dated in the future stays
hidden until that day. The first tag is shown as the post's category.

## Workflow

1. Pick the next unchecked topic in `docs/blog/TOPICS.md` (or a better seasonal
   one; add it to the list).
2. Write the post, tick the topic with the slug and date.
3. `npm run build` must pass.
4. Open a PR titled `Blog: <title>` for review. Never merge it yourself.
