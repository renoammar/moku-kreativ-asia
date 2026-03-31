"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

import PressHighlightCard from '../UI/PressHighlightCard'
import { client } from '@/sanity/lib/client'
import { portfolioVideosQuery } from '@/sanity/lib/queries'
import type { PortfolioVideo } from '@/sanity/lib/types'

function getPortfolioHref(video: PortfolioVideo): string {
  if (video.slug) return `/portfolio/${video.slug}`
  return '/portfolio'
}

function PortofolioHighlightPage
() {
  const [videos, setVideos] = useState<PortfolioVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadVideos = async () => {
      try {
        const result = await client.fetch<PortfolioVideo[]>(portfolioVideosQuery)
        if (!isMounted) return
        setVideos(result.slice(0, 3))
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

  return (
    <section className=' px-4 py-14 md:px-8 md:py-20'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-4xl font-semibold text-[#123A66] md:text-[46px]'>Portofolio</h2>

          <Link
            href='/portfolio/all-portfolio'
            className='inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-6 py-3 text-xl font-medium text-sky-500 transition-colors duration-300 hover:bg-sky-200 md:text-2xl'
          >
            See all portofolio
            <span aria-hidden='true'>→</span>
          </Link>
        </div>

        <div className='mt-8 grid gap-8 md:mt-10 md:grid-cols-3'>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <PressHighlightCard
                key={`portfolio-loading-${index}`}
                title='Loading...'
                titleHref='/portfolio/all-portfolio'
                readMoreLabel='View project'
              />
            ))
          ) : hasError || videos.length === 0 ? (
            <p className='text-slate-500 md:col-span-3'>No portfolio highlights available right now.</p>
          ) : (
            videos.map((video) => (
              <PressHighlightCard
                key={video._id}
                title={video.title}
                titleHref={getPortfolioHref(video)}
                readMoreLabel='View project'
                imageSrc={video.thumbnailUrl}
                imageAlt={video.thumbnailAlt || video.title}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default PortofolioHighlightPage
