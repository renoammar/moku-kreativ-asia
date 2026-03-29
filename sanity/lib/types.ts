import type {PortableTextBlock} from 'sanity'

export type NewsCategory =
  | 'corporate'
  | 'partnerships'
  | 'activities'
  | 'thought-leadership'

export type NewsPostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  category?: NewsCategory
  publishedAt: string
  mainImage?: NewsImage
}

export type NewsImage = {
  url?: string
  alt?: string
  caption?: string
}

export type NewsBodyImageBlock = {
  _type: 'image'
  _key: string
  url?: string
  alt?: string
  caption?: string
}

export type NewsPost = NewsPostListItem & {
  mainImage?: NewsImage
  body: Array<PortableTextBlock | NewsBodyImageBlock>
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
