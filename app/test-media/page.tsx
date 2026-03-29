import Link from 'next/link'

import {client} from '@/sanity/lib/client'
import {testMediaItemsQuery} from '@/sanity/lib/queries'
import type {TestMediaItem} from '@/sanity/lib/types'

function formatPublishedAt(value: string): string {
  return new Date(value).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function TestMediaPage() {
  const items = await client.fetch<TestMediaItem[]>(testMediaItemsQuery)

  return (
    <main className='mx-auto w-full max-w-5xl px-4 pb-20 pt-32 md:px-8'>
      <header className='mb-8 border-b border-slate-200 pb-6'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>POC Route</p>
        <h1 className='mt-3 text-4xl font-semibold text-black md:text-5xl'>Test Media Mapper</h1>
        <p className='mt-4 text-slate-700'>
          Unified mapping test for items classified as News or Portfolio.
        </p>
      </header>

      {items.length === 0 ? (
        <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600'>
          No media items found in Sanity.
        </div>
      ) : (
        <section className='grid gap-5'>
          {items.map((item) => (
            <article key={item._id} className='rounded-2xl border border-slate-200 bg-white p-5'>
              <div className='mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide'>
                <span
                  className={`rounded-full px-2.5 py-1 font-semibold ${
                    item.kind === 'news' ? 'bg-sky-100 text-sky-800' : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {item.kind}
                </span>
                <span className='text-slate-500'>{formatPublishedAt(item.publishedAt)}</span>
              </div>

              <h2 className='text-2xl font-semibold text-black'>{item.title}</h2>
              {item.summary ? <p className='mt-2 text-slate-700'>{item.summary}</p> : null}

              {item.thumbnailUrl ? (
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className='mt-4 h-40 w-full rounded-xl object-cover md:h-52'
                  loading='lazy'
                />
              ) : null}

              <div className='mt-4 flex flex-wrap gap-4 text-sm'>
                <Link href={item.href} className='font-semibold text-black underline underline-offset-4'>
                  Open {item.kind === 'news' ? 'article' : 'portfolio'}
                </Link>
                <span className='text-slate-500'>Source type: {item._type}</span>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
