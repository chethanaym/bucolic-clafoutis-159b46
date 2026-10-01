import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { marked } from 'marked'

import { SITE_URL, parsePost, publishedPosts } from '../scripts/posts.mjs'
import type { Post } from '../scripts/posts.mjs'
import { SiteFooter } from './legal'

import './blog.css'

export type { Post }
export { SITE_URL }

// Posts are Markdown files in content/blog, bundled at build time. Adding a
// post is adding a file; see docs/blog/STYLE_GUIDE.md.
const files = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const allPosts: Post[] = Object.entries(files).map(([path, raw]) =>
  parsePost(path.split('/').pop()!.replace(/\.md$/, ''), raw),
)

export function getPosts(): Post[] {
  return publishedPosts(allPosts)
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug)
}

export function renderMarkdown(body: string): string {
  return marked.parse(body, { async: false })
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="Modern Psych Therapy home">
          <img
            src="/logo-transparent.png"
            alt="Modern Psych Therapy logo"
            className="h-8 md:h-10 w-auto"
          />
          <span>Modern Psych Therapy</span>
        </Link>
        <div className="nav-links">
          <Link to="/blog">Blog</Link>
          <Link to="/">
            <ArrowLeft size={16} aria-hidden="true" /> Back to site
          </Link>
        </div>
      </nav>
      {children}
      <SiteFooter />
    </main>
  )
}
