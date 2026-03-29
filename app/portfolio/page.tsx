"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { client } from '@/sanity/lib/client'
import { portfolioVideosQuery } from '@/sanity/lib/queries'
import type { PortfolioVideo } from '@/sanity/lib/types'

function formatPortfolioDate(value: string): string {
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function getPortfolioHref(video: PortfolioVideo): string {
  if (video.slug) return `/portfolio/${video.slug}`
  return video.youtubeUrl || '#'
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
    return () => { isMounted = false }
  }, [])

  const featuredVideo = videos[0]
  const topStories = videos.slice(1, 4)

  return (
    <main className='relative mx-auto mt-16 min-h-screen w-full max-w-7xl px-6 pb-20 pt-20'>
      <header className='w-full flex justify-between items-center'>
        <h2 className='mt-3 text-4xl font-bold text-[#003366] md:text-5xl'>Portfolio</h2>
          <div className='text-center'>
            <Link
              href='/portfolio/all-portfolio'
              className='inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-6 py-3 text-xl font-medium text-sky-500 transition-colors duration-300 hover:bg-sky-200 md:text-2xl'
            >
              See all portfolio
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
      </header>

      {isLoading ? (
        <div className='py-20 text-center text-slate-400'>Loading portfolio...</div>
      ) : hasError ? (
        <div className='py-20 text-center text-rose-500'>Failed to load portfolio.</div>
      ) : videos.length === 0 ? (
        <div className='py-20 text-center text-slate-400'>No portfolio stories published yet.</div>
      ) : (
        <div className='relative z-10 mt-4'>
          <section className='grid gap-8 lg:grid-cols-3'>
            {featuredVideo && (
              <Link
                href={getPortfolioHref(featuredVideo)}
                className='group block lg:col-span-2'
              >
                <div className='relative aspect-video overflow-hidden  shadow-sm rounded-3xl rounded-br-[68px]'>
                  {featuredVideo.thumbnailUrl ? (
                    <img
                      src={featuredVideo.thumbnailUrl}
                      alt={featuredVideo.thumbnailAlt || featuredVideo.title}
                      className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                      loading='eager'
                    />
                  ) : (
                    <div className='flex h-full w-full items-center justify-center bg-slate-100 text-slate-500'>
                      No thumbnail
                    </div>
                  )}

                  <div className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100'>
                    <span className='text-lg font-bold text-white'>View Project</span>
                  </div>
                </div>

                <div className='mt-6 px-2'>
                  <p className='mb-2 text-sm font-semibold text-[#00AEEF]'>
                    {formatPortfolioDate(featuredVideo.publishedAt || new Date().toISOString())}
                  </p>
                  <h2 className='text-2xl leading-tight font-bold text-[#003366] transition-colors group-hover:text-[#00AEEF] md:text-3xl'>
                    {featuredVideo.title}
                  </h2>
                </div>
              </Link>
            )}

            <div className='flex flex-col gap-10'>
              {topStories.map((video) => (
                <Link
                  key={video._id}
                  href={getPortfolioHref(video)}
                  className='group block'
                >
                  <div className='relative aspect-16/10 overflow-hidden rounded-[30px] shadow-sm rounded-3xl rounded-br-[68px]'>
                    {video.thumbnailUrl ? (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.thumbnailAlt || video.title}
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
                    <h3 className='line-clamp-2 text-lg leading-snug font-bold text-[#003366] transition-colors group-hover:text-[#00AEEF]'>
                      {video.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
