// Blog post parsing, shared by the site (src/blog.ts) and the build-time
// feed generator (scripts/build-feeds.mjs) so both read posts the same way.
//
// A post is content/blog/<slug>.md: a frontmatter block of `key: value`
// lines between `---` fences, then Markdown. `tags` is a comma list.

export const SITE_URL = 'https://modernpsychtherapy.com'

const REQUIRED = ['title', 'description', 'date']

export function parsePost(slug, raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) throw new Error(`content/blog/${slug}.md: missing frontmatter`)
  const meta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i < 1) continue
    meta[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^(["'])(.*)\1$/, '$2')
  }
  for (const key of REQUIRED) {
    if (!meta[key]) throw new Error(`content/blog/${slug}.md: missing "${key}"`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
    throw new Error(`content/blog/${slug}.md: date must be YYYY-MM-DD`)
  }
  const body = match[2].trim()
  return {
    slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    updated: meta.updated || meta.date,
    author: meta.author || 'Modern Psych Therapy',
    tags: (meta.tags || '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
    body,
  }
}

// Newest first, hiding posts dated in the future so a merged post can wait
// for its publish date. Dates compare in IST, where the readers are.
export function publishedPosts(posts, now = new Date()) {
  const today = new Date(now.getTime() + 5.5 * 3600 * 1000)
    .toISOString()
    .slice(0, 10)
  return posts
    .filter((p) => p.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date))
}
