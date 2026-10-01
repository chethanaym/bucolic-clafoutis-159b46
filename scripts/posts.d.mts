export const SITE_URL: string

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  updated: string
  author: string
  tags: string[]
  readingMinutes: number
  body: string
}

export function parsePost(slug: string, raw: string): Post
export function publishedPosts(posts: Post[], now?: Date): Post[]
