"use client"

import {useEffect, useState} from 'react'
import Link from 'next/link'

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

export default function PortfolioPage() {
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

  const featuredVideo = videos[0]
  const topStories = videos.slice(1, 3)

  return (
    <main className='relative mx-auto min-h-screen w-full max-w-7xl overflow-hidden px-4 pb-20 pt-28 md:px-8'>
      <div className='pointer-events-none absolute left-1/2 top-8 h-56 w-130 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl' />

      <header className='relative mb-12 border-b border-slate-200 pb-8'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-xs font-bold uppercase tracking-[0.26em] text-slate-500'>Pressroom Concept</p>
            <h1 className='mt-3 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl'>Portfolio</h1>
            <p className='mt-4 max-w-2xl text-slate-700'>
              Editorial-style showcase inspired by a newsroom feed. This gives your client a cleaner story-first structure for portfolio updates.
            </p>
          </div>

          <Link
            href='/portfolio/all-portfolio'
            className='inline-flex items-center gap-2 self-start rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-800 transition-colors duration-200 hover:bg-sky-200'
          >
            See all portfolio
            <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </header>

      {isLoading ? (
        <div className='rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          Loading latest portfolio stories...
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
        <>
          {featuredVideo && (
            <section className='mb-12 grid gap-6 lg:grid-cols-3'>
              <Link
                href={getPortfolioHref(featuredVideo)}
                className='group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2'
              >
                <div className='relative aspect-video overflow-hidden'>
                  {featuredVideo.thumbnailUrl ? (
                    <img
                      src={featuredVideo.thumbnailUrl}
                      alt={featuredVideo.title}
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                      loading='eager'
                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-slate-100 text-slate-500'>
                      No thumbnail
                    </div>
                  )}
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent' />
                  <span className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900'>
                    Featured
                  </span>
                </div>
                <div className='px-6 py-5'>
                  <h2 className='text-2xl font-semibold leading-tight text-slate-900'>{featuredVideo.title}</h2>
                </div>
              </Link>

              <div className='grid gap-6'>
                {topStories.map((video) => (
                  <Link
                    key={video._id}
                    href={getPortfolioHref(video)}
                    className='group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                  >
                    <div className='relative aspect-video overflow-hidden'>
                      {video.thumbnailUrl ? (
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                          loading='lazy'
                        />
                      ) : (
                        <div className='flex h-full w-full items-center justify-center bg-slate-100 text-slate-500'>
                          No thumbnail
                        </div>
                      )}
                    </div>
                    <div className='px-5 py-4'>
                      <h3 className='line-clamp-2 text-base font-semibold leading-snug text-slate-900'>{video.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className='rounded-3xl border border-slate-200 bg-white/80 p-6 md:p-8'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div>
                <h2 className='text-2xl font-semibold text-slate-900'>All Portfolio</h2>
                <p className='mt-2 text-sm text-slate-600'>
                  View the full portfolio wall in a dedicated page with wrapped photo cards.
                </p>
              </div>
              <Link
                href='/portfolio/all-portfolio'
                className='inline-flex items-center gap-2 self-start rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700'
              >
                Open all portfolio
                <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
