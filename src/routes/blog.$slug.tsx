import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowRight, HeartHandshake } from 'lucide-react'

import {
  BlogShell,
  SITE_URL,
  formatDate,
  getPost,
  getPosts,
  renderMarkdown,
} from '../blog'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData: post }) => {
    if (!post) return {}
    const url = `${SITE_URL}/blog/${post.slug}`
    const title = `${post.title} | Modern Psych Therapy`
    return {
      meta: [
        { title },
        { name: 'description', content: post.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `${SITE_URL}/logo-dark-square.png` },
        { property: 'article:published_time', content: post.date },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: post.description },
      ],
      links: [{ rel: 'canonical', href: url }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated,
            author: { '@type': 'Organization', name: post.author },
            publisher: {
              '@type': 'Organization',
              name: 'Modern Psych Therapy',
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-512.png` },
            },
            mainEntityOfPage: url,
            keywords: post.tags.join(', '),
          }),
        },
      ],
    }
  },
  component: PostPage,
  notFoundComponent: () => (
    <BlogShell>
      <article className="post">
        <h1>Article not found</h1>
        <p>
          <Link to="/blog">See all articles</Link>
        </p>
      </article>
    </BlogShell>
  ),
})

function PostPage() {
  const post = Route.useLoaderData()
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
  return (
    <BlogShell>
      <article className="post">
        <header className="post-head">
          <p className="eyebrow">
            <Link to="/blog">Blog</Link>
            {post.tags[0] ? ` · ${post.tags[0]}` : ''}
          </p>
          <h1>{post.title}</h1>
          <p className="post-meta">
            {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time>{' '}
            · {post.readingMinutes} min read
          </p>
        </header>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
        />
        <aside className="post-cta">
          <h2>Want support for your child or family?</h2>
          <p>
            Modern Psych Therapy works with children, parents and families in
            Bengaluru and online. A first conversation is a calm, no-pressure
            place to start.
          </p>
          <Link to="/" className="primary-action">
            Book a consultation <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </aside>
        <p className="post-disclaimer">
          <HeartHandshake size={18} aria-hidden="true" />
          <span>
            This article is general information, not a diagnosis or a substitute
            for professional care. If there is immediate danger or a crisis,
            contact local emergency services (112 in India) or Tele-MANAS at
            14416.
          </span>
        </p>
      </article>
      {more.length > 0 && (
        <section className="post-more-list" aria-label="More articles">
          <h2>Keep reading</h2>
          <ul>
            {more.map((p) => (
              <li key={p.slug}>
                <Link to="/blog/$slug" params={{ slug: p.slug }}>
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </BlogShell>
  )
}
