import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Mindful Horizons | Mental Wellbeing & Special Needs Support',
      },
      {
        name: 'description',
        content:
          'A compassionate one-page wellbeing website for mental health guidance, psychological support, and special needs services.',
      },
      { name: 'theme-color', content: '#0D003C' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Mindful Horizons' },
      {
        property: 'og:description',
        content:
          'A compassionate one-page wellbeing website for mental health guidance, psychological support, and special needs services.',
      },
      // TODO: replace with absolute URL once the domain is live
      { property: 'og:image', content: '/logo-dark-square.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/logo-dark-square.png' },
    ],
    links: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
