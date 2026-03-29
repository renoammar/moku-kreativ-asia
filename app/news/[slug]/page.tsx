import {PortableText, type PortableTextReactComponents} from '@portabletext/react'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {client} from '@/sanity/lib/client'
import {newsroomPostBySlugQuery, newsroomPostSlugsQuery} from '@/sanity/lib/queries'
import type {NewsPost} from '@/sanity/lib/types'

type NewsArticlePageProps = {
  params: Promise<{slug: string}>
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({children, value}) => (
      <a href={value?.href} className='text-blue-700 underline underline-offset-2' rel='noreferrer noopener'>
        {children}
      </a>
    ),
  },
}

function formatPublishedAt(value: string): string {
  return new Date(value).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

async function getPostBySlug(slug: string): Promise<NewsPost | null> {
  return client.fetch<NewsPost | null>(newsroomPostBySlugQuery, {slug})
}

export async function generateStaticParams(): Promise<Array<{slug: string}>> {
  const slugs = await client.fetch<Array<{slug: string}>>(newsroomPostSlugsQuery)
  return slugs
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
    <main className='mx-auto w-full max-w-4xl px-4 pb-20 pt-32 md:px-8'>
      <header className='mb-8 border-b border-slate-200 pb-5'>
        <p className='text-sm text-slate-500'>{formatPublishedAt(post.publishedAt)}</p>
        <h1 className='mt-2 text-4xl font-semibold text-black md:text-5xl'>{post.title}</h1>
        {post.excerpt ? <p className='mt-4 text-lg text-slate-700'>{post.excerpt}</p> : null}
      </header>

      <div id='adsense-article-top' className='mb-8 min-h-24 w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500'>
        AdSense Slot: Top Inline
      </div>

      <article className='prose prose-slate max-w-none text-black'>
        <PortableText value={post.body} components={portableTextComponents} />
      </article>

      <div id='adsense-article-middle' className='my-8 min-h-24 w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500'>
        AdSense Slot: Middle Inline
      </div>

      <div id='adsense-article-bottom' className='mt-8 min-h-24 w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500'>
        AdSense Slot: Bottom Inline
      </div>
    </main>
  )
}
