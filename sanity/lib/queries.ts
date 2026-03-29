import {groq} from 'next-sanity'

export const newsroomPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt,
      "caption": mainImage.caption
    }
  }
`

export const newsroomPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt,
      "caption": mainImage.caption
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }
`

export const newsroomPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`

export const portfolioVideosQuery = groq`
  *[_type == "portfolio"] | order(publishedAt desc) {
    _id,
    title,
    youtubeUrl,
    publishedAt,
    "thumbnailUrl": thumbnail.asset->url
  }
`

export const testMediaItemsQuery = groq`
  *[_type in ["post", "portfolio"]] | order(publishedAt desc) {
    _id,
    _type,
    title,
    publishedAt,
    "kind": select(_type == "post" => "news", "portfolio"),
    "href": select(
      _type == "post" => "/news/" + slug.current,
      "/portfolio"
    ),
    "summary": select(_type == "post" => excerpt, "YouTube showcase video"),
    "thumbnailUrl": select(_type == "portfolio" => thumbnail.asset->url, null)
  }
`
