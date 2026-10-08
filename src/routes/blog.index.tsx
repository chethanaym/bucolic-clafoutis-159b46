import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { BlogShell, SITE_URL, formatDate, getPosts } from '../blog'

const TITLE = 'Wellbeing Blog for Parents & Families | Modern Psych Therapy'
const DESCRIPTION =
  'Simple, practical guidance on sleep, nutrition, emotions, screen time and calm for children and families, from a Bengaluru psychology practice.'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: `${SITE_URL}/blog` },
      { property: 'og:image', content: `${SITE_URL}/logo-dark-square.png` },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/blog` },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Modern Psych Therapy Blog',
        href: '/rss.xml',
      },
    ],
  }),
})

function BlogIndex() {
  const posts = getPosts()
  return (
    <BlogShell>
      <header className="blog-head">
        <p className="eyebrow">The blog</p>
        <h1>Everyday wellbeing for children and families.</h1>
        <p>
          Short, practical reads on sleep, food, feelings and calm, written for
          parents and caregivers. New articles every week.
        </p>
      </header>
      <div className="post-list">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <p className="post-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time> ·{' '}
              {post.readingMinutes} min read
            </p>
            <h2>
              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                {post.title}
              </Link>
            </h2>
            <p>{post.description}</p>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="post-more"
              aria-label={`Read ${post.title}`}
            >
              Read article <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
        {posts.length === 0 && <p>The first article is on its way.</p>}
      </div>
    </BlogShell>
  )
}
