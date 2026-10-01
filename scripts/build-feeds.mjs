// Writes public/sitemap.xml and public/rss.xml from content/blog before
// `vite build`, so search engines and feed readers find every post.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'

import { SITE_URL, parsePost, publishedPosts } from './posts.mjs'

const dir = new URL('../content/blog/', import.meta.url)
const posts = publishedPosts(
  readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => parsePost(f.slice(0, -3), readFileSync(new URL(f, dir), 'utf8'))),
)

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const latest = posts[0]?.updated ?? new Date().toISOString().slice(0, 10)
const pages = [
  { loc: '/', lastmod: latest, priority: '1.0' },
  { loc: '/blog', lastmod: latest, priority: '0.8' },
  ...posts.map((p) => ({ loc: `/blog/${p.slug}`, lastmod: p.updated, priority: '0.7' })),
  { loc: '/terms', priority: '0.2' },
  { loc: '/refunds', priority: '0.2' },
  { loc: '/privacy', priority: '0.2' },
]

writeFileSync(
  new URL('../public/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url><loc>${SITE_URL}${p.loc}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}<priority>${p.priority}</priority></url>`,
  )
  .join('\n')}
</urlset>
`,
)

writeFileSync(
  new URL('../public/rss.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Modern Psych Therapy Blog</title>
  <link>${SITE_URL}/blog</link>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  <description>Practical, gentle guidance on sleep, nutrition, emotions and everyday wellbeing for families.</description>
  <language>en-in</language>
${posts
  .slice(0, 20)
  .map(
    (p) => `  <item>
    <title>${esc(p.title)}</title>
    <link>${SITE_URL}/blog/${p.slug}</link>
    <guid>${SITE_URL}/blog/${p.slug}</guid>
    <pubDate>${new Date(`${p.date}T09:00:00+05:30`).toUTCString()}</pubDate>
    <description>${esc(p.description)}</description>
  </item>`,
  )
  .join('\n')}
</channel>
</rss>
`,
)

console.log(`feeds: ${posts.length} published post(s) in sitemap.xml and rss.xml`)
