"use client"

import {useEffect, useState} from 'react'
import Link from 'next/link'

import {client} from '@/sanity/lib/client'
import {newsroomPostsQuery} from '@/sanity/lib/queries'
import type {NewsPostListItem} from '@/sanity/lib/types'

function formatPublishedAt(value: string): string {
  return new Date(value).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsPage() {
  const [posts, setPosts] = useState<NewsPostListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadPosts = async () => {
      try {
        const result = await client.fetch<NewsPostListItem[]>(newsroomPostsQuery)
        if (!isMounted) return
        setPosts(result)
        setHasError(false)
      } catch {
        if (!isMounted) return
        setHasError(true)
      } finally {
        if (!isMounted) return
        setIsLoading(false)
      }
    }

    void loadPosts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className='mx-auto w-full max-w-5xl px-4 pb-20 pt-32 md:px-8'>
      <header className='mb-10 border-b border-slate-200 pb-6'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>Newsroom</p>
        <h1 className='mt-3 text-4xl font-semibold text-black md:text-5xl'>Company Updates & Insights</h1>
      </header>

      {isLoading ? (
        <div className='rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          Loading latest news...
        </div>
      ) : hasError ? (
        <div className='rounded-2xl border border-rose-200 bg-rose-50 px-6 py-10 text-center text-rose-700'>
          Failed to load latest news. Please refresh this page.
        </div>
      ) : posts.length === 0 ? (
        <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          No news published yet.
        </div>
      ) : (
        <section className='grid gap-6'>
          {posts.map((post) => (
            <article key={post._id} className='rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-sm'>
              <p className='text-sm text-slate-500'>{formatPublishedAt(post.publishedAt)}</p>
              <h2 className='mt-2 text-2xl font-semibold text-black'>
                <Link href={`/news/${post.slug}`} className='hover:text-slate-700'>
                  {post.title}
                </Link>
              </h2>
              {post.excerpt ? <p className='mt-3 text-slate-700'>{post.excerpt}</p> : null}
              <Link href={`/news/${post.slug}`} className='mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-black'>
                Read Article
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
