"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

import PressHighlightCard from '../UI/PressHighlightCard'
import { client } from '@/sanity/lib/client'
import { newsroomPostsQuery } from '@/sanity/lib/queries'
import type { NewsPostListItem } from '@/sanity/lib/types'

const refreshIntervalMs = 60_000
const cacheKey = 'mka:pressHighlights'
const cacheTtlMs = 5 * 60_000

type CachePayload = {
  timestamp: number
  items: NewsPostListItem[]
}

const readCache = (): NewsPostListItem[] | null => {
  if (typeof window === 'undefined') return null
  const raw = window.sessionStorage.getItem(cacheKey)
  if (!raw) return null

  try {
    const payload = JSON.parse(raw) as CachePayload
    if (!payload?.timestamp || !Array.isArray(payload.items)) return null
    if (Date.now() - payload.timestamp > cacheTtlMs) return null
    return payload.items
  } catch {
    return null
  }
}

const writeCache = (items: NewsPostListItem[]) => {
  if (typeof window === 'undefined') return
  const payload: CachePayload = { timestamp: Date.now(), items }
  window.sessionStorage.setItem(cacheKey, JSON.stringify(payload))
}

function PressHighlights() {
  const [posts, setPosts] = useState<NewsPostListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true
    const cached = readCache()
    let hasCache = false

    if (cached && cached.length > 0) {
      setPosts(cached)
      setIsLoading(false)
      setHasError(false)
      hasCache = true
    }

    const loadPosts = async () => {
      try {
        if (!hasCache) setIsLoading(true)
        const result = await client.fetch<NewsPostListItem[]>(newsroomPostsQuery)
        if (!isMounted) return
        const nextPosts = result.slice(0, 3)
        setPosts(nextPosts)
        writeCache(nextPosts)
        setHasError(false)
      } catch {
        if (!isMounted) return
        if (!hasCache) setHasError(true)
      } finally {
        if (!isMounted) return
        setIsLoading(false)
      }
    }

    void loadPosts()
    const intervalId = window.setInterval(() => {
      void loadPosts()
    }, refreshIntervalMs)

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        void loadPosts()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  if (!isLoading && (hasError || posts.length === 0)) {
    return null
  }

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
            <HiArrowRight aria-hidden='true' className='text-2xl' />
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