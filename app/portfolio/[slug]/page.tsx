import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {FiArrowLeft, FiPlayCircle} from 'react-icons/fi'

import {client} from '@/sanity/lib/client'
import {portfolioBySlugQuery, portfolioSlugsQuery} from '@/sanity/lib/queries'
import type {PortfolioItem} from '@/sanity/lib/types'

type PortfolioDetailPageProps = {
  params: Promise<{slug: string}>
}

async function getPortfolioBySlug(slug: string): Promise<PortfolioItem | null> {
  return client.fetch<PortfolioItem | null>(portfolioBySlugQuery, {slug})
}

export async function generateStaticParams(): Promise<Array<{slug: string}>> {
  const slugs = await client.fetch<Array<{slug: string}>>(portfolioSlugsQuery)
  return slugs
}

export async function generateMetadata({params}: PortfolioDetailPageProps): Promise<Metadata> {
  const {slug} = await params
  const portfolio = await getPortfolioBySlug(slug)

  if (!portfolio) {
    return {
      title: 'Portfolio Not Found | Moku Kreativ Asia',
    }
  }

  return {
    title: `${portfolio.title} | Portfolio | Moku Kreativ Asia`,
    description: portfolio.caption || `View portfolio details for ${portfolio.title}.`,
  }
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.split('/').filter(Boolean)[0]
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }

    if (parsed.pathname.includes('/shorts/')) {
      const [, , id] = parsed.pathname.split('/')
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }

    const watchId = parsed.searchParams.get('v')
    return watchId ? `https://www.youtube-nocookie.com/embed/${watchId}` : null
  } catch {
    return null
  }
}

export default async function PortfolioDetailPage({params}: PortfolioDetailPageProps) {
  const {slug} = await params
  const portfolio = await getPortfolioBySlug(slug)

  if (!portfolio) {
    notFound()
  }

  const embedUrl = getYouTubeEmbedUrl(portfolio.youtubeUrl)

  return (
    <main className='mx-auto mt-16 w-full max-w-5xl px-6 pb-20 pt-16 md:px-12'>
      <div className='mb-8'>
        <Link href='/portfolio/all-portfolio' className='inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#003b73] hover:text-[#002b55]'>
          <FiArrowLeft aria-hidden='true' className='h-4 w-4' />
          <span>Back to all portfolio</span>
        </Link>
      </div>

      <header className='mb-10'>
        <h1 className='text-[32px] font-bold leading-tight text-[#0066b2] md:text-[56px]'>{portfolio.title}</h1>
      </header>

      {!embedUrl && portfolio.mainImage?.url ? (
        <figure className='mb-10'>
          <img
            src={portfolio.mainImage.url}
            alt={portfolio.mainImage.alt || portfolio.title}
            className='w-full rounded-4xl object-cover'
          />
        </figure>
      ) : null}

      {embedUrl ? (
        <section className='mb-12'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700'>
            <FiPlayCircle className='h-4 w-4' aria-hidden='true' />
            Live Playback
          </div>
          <div className='overflow-hidden rounded-3xl border border-slate-200 shadow-sm'>
            <div className='relative aspect-video'>
              <iframe
                src={`${embedUrl}?rel=0`}
                title={portfolio.title}
                className='h-full w-full'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>
        </section>
      ) : null}

      {portfolio.caption ? (
        <div className='mb-12 rounded-3xl bg-[#f0f9ff] p-6 md:p-8'>
          <p className='text-[19px] leading-relaxed text-[#0066b2]'>{portfolio.caption}</p>
        </div>
      ) : null}

      {portfolio.images && portfolio.images.length > 0 ? (
        <section>
          <h2 className='mb-5 text-2xl font-bold text-[#003b73]'>Gallery</h2>
          <div className='grid gap-5 sm:grid-cols-2'>
            {portfolio.images.map((image) => (
              <figure key={image._key} className='overflow-hidden rounded-3xl border border-slate-200 bg-white'>
                {image.url ? (
                  <img
                    src={image.url}
                    alt={image.alt || portfolio.title}
                    className='aspect-4/3 w-full object-cover'
                    loading='lazy'
                  />
                ) : null}
                {image.caption ? (
                  <figcaption className='px-4 py-3 text-sm text-slate-600'>{image.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}
