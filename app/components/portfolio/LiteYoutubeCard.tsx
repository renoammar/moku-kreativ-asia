'use client'

import {useMemo, useState} from 'react'

type LiteYoutubeCardProps = {
  title: string
  youtubeUrl: string
  thumbnailUrl?: string
}

function extractYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.split('/').filter(Boolean)[0] ?? null
    }

    if (parsed.pathname.includes('/shorts/')) {
      const [, , id] = parsed.pathname.split('/')
      return id ?? null
    }

    const watchId = parsed.searchParams.get('v')
    if (watchId) {
      return watchId
    }

    return null
  } catch {
    return null
  }
}

export default function LiteYoutubeCard({title, youtubeUrl, thumbnailUrl}: LiteYoutubeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoId = useMemo(() => extractYouTubeVideoId(youtubeUrl), [youtubeUrl])
  const fallbackThumb = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''
  const poster = thumbnailUrl || fallbackThumb

  if (!videoId) {
    return (
      <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
        <div className='flex min-h-56 items-center justify-center px-6 py-8 text-center text-sm text-slate-600'>
          Invalid YouTube URL for this portfolio item.
        </div>
        <div className='border-t border-slate-100 px-5 py-4'>
          <h3 className='text-lg font-semibold text-slate-900'>{title}</h3>
        </div>
      </article>
    )
  }

  return (
    <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md'>
      <div className='relative aspect-video w-full bg-slate-100'>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className='h-full w-full'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        ) : (
          <button
            type='button'
            onClick={() => setIsPlaying(true)}
            className='group relative h-full w-full'
            aria-label={`Play ${title}`}
          >
            <img
              src={poster}
              alt={title}
              loading='lazy'
              className='h-full w-full object-cover'
            />
            <span className='absolute inset-0 bg-black/35 transition-colors duration-200 group-hover:bg-black/45' />
            <span className='absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow'>
              ▶
            </span>
          </button>
        )}
      </div>

      <div className='px-5 py-4'>
        <h3 className='text-lg font-semibold text-slate-900'>{title}</h3>
      </div>
    </article>
  )
}
