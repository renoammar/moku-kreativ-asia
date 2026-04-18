import {PortableText, type PortableTextReactComponents} from '@portabletext/react'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {FiArrowLeft} from 'react-icons/fi'

import {client} from '@/sanity/lib/client'
import {newsroomPostBySlugQuery, newsroomPostSlugsQuery} from '@/sanity/lib/queries'
import type {NewsPost} from '@/sanity/lib/types'

type NewsArticlePageProps = {
  params: Promise<{slug: string}>
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({children}) => <p className='mb-6 leading-relaxed text-[#333]'>{children}</p>,
    h4: ({children}) => <h4 className='mb-4 inline font-bold uppercase tracking-tight text-black'>{children} </h4>,
  },
  types: {
    image: ({value}) => {
      const imageValue = value as {url?: string; alt?: string; caption?: string}
      if (!imageValue?.url) {
        return null
      }

      return (
        <figure className='my-10'>
          <img
            src={imageValue.url}
            alt={imageValue.alt || 'News image'}
            className='w-full rounded-2xl object-cover'
            loading='lazy'
          />
          {imageValue.caption ? <figcaption className='mt-3 text-sm text-slate-600'>{imageValue.caption}</figcaption> : null}
        </figure>
      )
    },
  },
  marks: {
    link: ({children, value}) => (
      <a href={value?.href} className='text-blue-700 underline underline-offset-2' rel='noreferrer noopener'>
        {children}
      </a>
    ),
  },
}

function formatPublishedAt(value: string): string {
  return new Date(value).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

async function getPostBySlug(slug: string): Promise<NewsPost | null> {
  return client.fetch<NewsPost | null>(newsroomPostBySlugQuery, {slug})
}
export const dynamicParams = true; 
export async function generateStaticParams(): Promise<Array<{slug: string}>> {
  try {
    const slugs = await client.fetch<Array<{slug: string}>>(newsroomPostSlugsQuery)
    return slugs ?? []
  } catch {
    return []
  }
}
export async function generateMetadata({params}: NewsArticlePageProps): Promise<Metadata> {
  const {slug} = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found | Moku Kreativ Asia',
    }
  }

  return {
    title: `${post.title} | Moku Kreativ Asia Newsroom`,
    description: post.excerpt || `Read ${post.title} in the Moku Kreativ Asia Newsroom.`,
  }
}

export default async function NewsArticlePage({params}: NewsArticlePageProps) {
  const {slug} = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className='mx-auto mt-16 w-full max-w-4xl px-6 pb-20 pt-16 md:px-12'>
      <div className='mb-8'>
        <Link href='/news' className='inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#003b73] hover:text-[#002b55]'>
          <FiArrowLeft aria-hidden='true' className='h-4 w-4' />
          <span>Back to all press releases</span>
        </Link>
      </div>

      <header className='mb-10'>
        <h1 className='text-[32px] font-bold leading-tight text-[#0066b2] md:text-[44px]'>{post.title}</h1>
        <p className='mt-4 text-[15px] font-medium text-gray-500'>{formatPublishedAt(post.publishedAt)}</p>
      </header>

      {post.mainImage?.url ? (
        <figure className='mb-10'>
          <img
            src={post.mainImage.url}
            alt={post.mainImage.alt || post.title}
            className='w-full rounded-3xl object-cover'
          />
          {post.mainImage.caption ? <figcaption className='mt-3 text-sm text-slate-600'>{post.mainImage.caption}</figcaption> : null}
        </figure>
      ) : null}

      {post.excerpt ? (
        <div className='mb-10 rounded-2xl bg-[#f0f9ff] p-6 md:p-8'>
          <p className='text-[17px] leading-relaxed text-[#0066b2]'>{post.excerpt}</p>
        </div>
      ) : null}
      <article className='prose-lg max-w-none font-sans antialiased'>
        <PortableText value={post.body} components={portableTextComponents} />
      </article>
    </main>
  )
}
