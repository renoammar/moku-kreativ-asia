"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { client } from '@/sanity/lib/client'
import { newsroomPostsQuery } from '@/sanity/lib/queries'
import type { NewsPostListItem } from '@/sanity/lib/types'

const categoryOptions = [
  { label: 'All Press Releases', value: 'all' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Partnerships', value: 'partnerships' },
  { label: 'Activities', value: 'activities' },
  { label: 'Thought Leadership', value: 'thought-leadership' },
] as const

type CategoryFilter = (typeof categoryOptions)[number]['value']

function formatPublishedAt(value: string): string {
  // Matching the image format: "Feb 25, 2026"
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function NewsPage() {
  const [posts, setPosts] = useState<NewsPostListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  useEffect(() => {
    let isMounted = true
    const loadPosts = async () => {
      try {
        const result = await client.fetch<NewsPostListItem[]>(newsroomPostsQuery)
        if (!isMounted) return
        setPosts(result)
        setVisibleCount(9)
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
    return () => { isMounted = false }
  }, [])

  return (
    <main className='mx-auto w-full max-w-7xl px-6 pb-20 pt-20'>
      {/* Header Section */}
      <header className='mb-12 text-center'>
        <h1 className='text-6xl font-bold text-[#D0E7F5] opacity-50'>Press</h1>
        
        {/* Filter Pills (Visual only, as seen in image) */}
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          {categoryOptions.map((category) => (
            <button
              key={category.value}
              className={
                activeCategory === category.value
                  ? 'rounded-full bg-[#003366] px-6 py-2 text-sm font-medium text-white'
                  : 'rounded-full border border-slate-300 px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50'
              }
              onClick={() => {
                setActiveCategory(category.value)
                setVisibleCount(9)
              }}
              type='button'
            >
              {category.label}
            </button>
          ))}
          <button className='ml-2 p-2 text-slate-500'>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </header>

      {/* Grid Content */}
      {isLoading ? (
        <div className='py-20 text-center text-slate-500'>Loading...</div>
      ) : hasError ? (
        <div className='py-20 text-center text-rose-600'>Failed to load posts.</div>
      ) : (
        <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
          {filteredPosts.slice(0, visibleCount).map((post) => (
            <article key={post._id} className='group flex flex-col'>
              {/* Image Container */}
              <div className='relative mb-4 aspect-16/10 overflow-hidden rounded-3xl rounded-br-[68px]'>
                {post.mainImage?.url ? (
                  <img 
                    src={post.mainImage.url}
                    alt={post.mainImage.alt || post.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                ) : (
                  <div className='h-full w-full bg-slate-200' />
                )}
              </div>

              {/* Meta & Title */}
              <div className='flex grow flex-col'>
                <p className='text-[13px] font-medium text-slate-400'>
                  {formatPublishedAt(post.publishedAt)}
                </p>
                <h2 className='mt-2 text-[18px] font-bold leading-snug text-[#003366] line-clamp-3 hover:underline'>
                  <Link href={`/news/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
              </div>
            </article>
          ))}
        </div>
      )}

      {!isLoading && !hasError && filteredPosts.length === 0 ? (
        <div className='mt-12 py-10 text-center text-slate-500'>
          No posts found in this category.
        </div>
      ) : null}

      {/* Load More Button */}
      {filteredPosts.length > 9 && visibleCount < filteredPosts.length ? (
        <div className='mt-16 text-center'>
          <button
            className='rounded-full bg-[#E0F4FF] px-12 py-3 text-sm font-bold text-[#00AEEF] transition-colors hover:bg-[#D0E7F5]'
            onClick={() => setVisibleCount((prev) => Math.min(prev + 9, filteredPosts.length))}
            type='button'
          >
            Load more
          </button>
        </div>
      ) : null}
    </main>
  )
}