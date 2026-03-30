"use client"

import {useEffect, useState} from 'react'
import Link from 'next/link'
import {FiArrowLeft} from 'react-icons/fi'

import {client} from '@/sanity/lib/client'
import {portfolioVideosQuery} from '@/sanity/lib/queries'
import type {PortfolioVideo} from '@/sanity/lib/types'

function getVideoHref(url: string): string {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.split('/').filter(Boolean)[0]
      if (id) return `https://www.youtube.com/watch?v=${id}`
    }

    if (parsed.pathname.includes('/shorts/')) {
      const [, , id] = parsed.pathname.split('/')
      if (id) return `https://www.youtube.com/watch?v=${id}`
    }

    const watchId = parsed.searchParams.get('v')
    if (watchId) return `https://www.youtube.com/watch?v=${watchId}`

    return url
  } catch {
    return url
  }
}

function getPortfolioHref(video: PortfolioVideo): string {
  if (video.slug) {
    return `/portfolio/${video.slug}`
  }

  return getVideoHref(video.youtubeUrl)
}

function formatPortfolioDate(value: string): string {
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function AllPortfolioPage() {
  const [videos, setVideos] = useState<PortfolioVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadVideos = async () => {
      try {
        const result = await client.fetch<PortfolioVideo[]>(portfolioVideosQuery)
        if (!isMounted) return
        setVideos(result)
        setHasError(false)
      } catch {
        if (!isMounted) return
        setHasError(true)
      } finally {
        if (!isMounted) return
        setIsLoading(false)
      }
    }

    void loadVideos()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className='mx-auto min-h-screen w-full max-w-7xl px-4 pb-20 pt-24 md:px-8'>
      <header className='mb-10 flex flex-col gap-5 border-b border-slate-200 pb-7 md:flex-row md:items-end md:justify-between'>
        <div>
          <h1 className='text-6xl font-bold text-[#D0E7F5]'>All Portfolio</h1>
        </div>

        <Link
          href='/event#portofolio-section'
          className='inline-flex items-center gap-2 self-start rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100'
        >
          <FiArrowLeft aria-hidden='true' className='h-4 w-4' />
          Back to portfolio
        </Link>
      </header>

      {isLoading ? (
        <div className='rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          Loading portfolio wall...
        </div>
      ) : hasError ? (
        <div className='rounded-2xl border border-rose-200 bg-rose-50 px-6 py-10 text-center text-rose-700'>
          Failed to load portfolio stories. Please try refreshing this page.
        </div>
      ) : videos.length === 0 ? (
        <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          No portfolio stories published yet.
        </div>
      ) : (
        <section className='flex flex-wrap justify-start gap-6'>
          {videos.map((video) => (
            <Link
              key={video._id}
              href={getPortfolioHref(video)}
              className='group block w-96 flex-none transition-all duration-300 hover:-translate-y-1'
            >
              <div className='relative aspect-video w-96 overflow-hidden rounded-3xl rounded-br-[48px] shadow-sm'>
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.thumbnailAlt || video.title}
                    width={384}
                    height={216}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    loading='lazy'
                  />
                ) : (
                  <div className='flex h-full w-full items-center justify-center bg-slate-100 text-slate-500'>
                    No thumbnail
                  </div>
                )}
              </div>

              <div className='mt-4 px-2'>
                <p className='mb-1 text-[13px] font-semibold text-[#00AEEF]'>
                  {formatPortfolioDate(video.publishedAt || new Date().toISOString())}
                </p>
                <h2 className='line-clamp-2 text-lg leading-snug font-bold text-[#003366] transition-colors group-hover:text-[#00AEEF]'>
                  {video.title}
                </h2>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  )
}
