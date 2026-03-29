import type {PortableTextBlock} from 'sanity'

export type NewsPostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
}

export type NewsPost = NewsPostListItem & {
  body: PortableTextBlock[]
}

export type PortfolioVideo = {
  _id: string
  title: string
  youtubeUrl: string
  publishedAt: string
  thumbnailUrl?: string
}

export type TestMediaItem = {
  _id: string
  _type: 'post' | 'portfolio'
  title: string
  publishedAt: string
  kind: 'news' | 'portfolio'
  href: string
  summary?: string
  thumbnailUrl?: string
}
