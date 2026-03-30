"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

import PressHighlightCard from '../UI/PressHighlightCard'
import { client } from '@/sanity/lib/client'
import { newsroomPostsQuery } from '@/sanity/lib/queries'
import type { NewsPostListItem } from '@/sanity/lib/types'

function PressHighlights() {
  const [posts, setPosts] = useState<NewsPostListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadPosts = async () => {
      try {
        const result = await client.fetch<NewsPostListItem[]>(newsroomPostsQuery)
        if (!isMounted) return
        setPosts(result.slice(0, 3))
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
    <section className=' px-4 py-14 md:px-8 md:py-20' id='press-highlight'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-4xl font-semibold text-[#123A66] md:text-[46px]'>Press</h2>

          <Link
            href='/news'
            className='inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-6 py-3 text-xl font-medium text-sky-500 transition-colors duration-300 hover:bg-sky-200 md:text-2xl'
          >
            See all news
            <span aria-hidden='true'>→</span>
          </Link>
        </div>

        <div className='mt-8 grid gap-8 md:mt-10 md:grid-cols-3'>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <PressHighlightCard
                key={`press-loading-${index}`}
                title='Loading...'
                titleHref='/news'
                readMoreLabel='Read more'
              />
            ))
          ) : hasError || posts.length === 0 ? (
            <p className='text-slate-500 md:col-span-3'>No news highlights available right now.</p>
          ) : (
            posts.map((post) => (
              <PressHighlightCard
                key={post._id}
                title={post.title}
                titleHref={`/news/${post.slug}`}
                readMoreLabel='Read more'
                imageSrc={post.mainImage?.url}
                imageAlt={post.mainImage?.alt || post.title}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default PressHighlights