"use client"

import {useEffect, useState} from 'react'

import {client} from '@/sanity/lib/client'
import {portfolioVideosQuery} from '@/sanity/lib/queries'
import type {PortfolioVideo} from '@/sanity/lib/types'

import LiteYoutubeCard from '../components/portfolio/LiteYoutubeCard'

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

  return (
    <main className='mx-auto w-full max-w-6xl px-4 pb-20 pt-32 md:px-8'>
      <header className='mb-10 border-b border-slate-200 pb-6'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>Portfolio</p>
        <h1 className='mt-3 text-4xl font-semibold text-black md:text-5xl'>Video Gallery</h1>
        <p className='mt-4 max-w-3xl text-slate-700'>
          Explore selected Moku Kreativ Asia work samples. All videos are streamed from YouTube for maximum performance and minimal maintenance.
        </p>
      </header>

      {isLoading ? (
        <div className='rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          Loading latest portfolio videos...
        </div>
      ) : hasError ? (
        <div className='rounded-2xl border border-rose-200 bg-rose-50 px-6 py-10 text-center text-rose-700'>
          Failed to load portfolio videos. Please try refreshing this page.
        </div>
      ) : videos.length === 0 ? (
        <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          No portfolio videos published yet.
        </div>
      ) : (
        <section className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {videos.map((video) => (
            <LiteYoutubeCard
              key={video._id}
              title={video.title}
              youtubeUrl={video.youtubeUrl}
              thumbnailUrl={video.thumbnailUrl}
            />
          ))}
        </section>
      )}
    </main>
  )
}
