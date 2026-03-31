"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

import { client } from '@/sanity/lib/client'
import { newsroomPostsQuery } from '@/sanity/lib/queries'
import type { NewsPostListItem } from '@/sanity/lib/types'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'

const categoryOptions = [
  { label: 'All Press Releases', value: 'all' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Partnerships', value: 'partnerships' },
  { label: 'Activities', value: 'activities' },
  { label: 'Thought Leadership', value: 'thought-leadership' },
] as const

type CategoryFilter = (typeof categoryOptions)[number]['value']

function formatPublishedAt(value: string): string {
  // Matching the image format: "Feb 25, 2026"
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default function NewsPage() {
  const [posts, setPosts] = useState<NewsPostListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const categoryFilteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredPosts = categoryFilteredPosts
  const searchResults =
    normalizedSearch.length === 0
      ? []
      : posts.filter((post) => post.title.toLowerCase().includes(normalizedSearch))

  useEffect(() => {
    let isMounted = true
    const loadPosts = async () => {
      try {
        const result = await client.fetch<NewsPostListItem[]>(newsroomPostsQuery)
        if (!isMounted) return
        setPosts(result)
        setVisibleCount(9)
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

  useEffect(() => {
    setVisibleCount(9)
  }, [activeCategory])

  useEffect(() => {
    if (!isSearchOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => searchInputRef.current?.focus(), 120)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isSearchOpen])

  return (
    <main className='mx-auto w-full max-w-7xl px-6 pb-20 pt-20'>
      {/* Header Section */}
      <header className='mb-12 text-center'>
        <div className="flex justify-between items-center">  
        <h1 className='text-6xl font-bold text-[#D0E7F5] opacity-50'>Press</h1>
        <Link
          href='/#press-highlight'
          className='inline-flex items-center gap-2 self-start rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100'
        >
          <FiArrowLeft aria-hidden='true' className='h-4 w-4' />
          Back to portfolio
        </Link></div>
        {/* Filter Pills (Visual only, as seen in image) */}
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          {categoryOptions.map((category) => (
            <button
              key={category.value}
              className={
                activeCategory === category.value
                  ? 'rounded-full bg-[#003366] px-6 py-2 text-sm font-medium text-white'
                  : 'rounded-full border border-slate-300 px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50'
              }
              onClick={() => {
                setActiveCategory(category.value)
                setVisibleCount(9)
              }}
              type='button'
            >
              {category.label}
            </button>
          ))}
          <motion.button
            type='button'
            onClick={() => setIsSearchOpen(true)}
            className='ml-2 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sky-700 ring-1 ring-sky-200 transition-colors hover:bg-sky-200'
            whileTap={{ scale: 0.98 }}
          >
            <FiSearch aria-hidden='true' className='h-4 w-4 shrink-0' />
            <span className='text-sm font-medium'>Search press releases...</span>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isSearchOpen ? (
          <motion.div
            className='fixed inset-0 z-70 bg-[#0f2f4f]/75 px-4 py-6 md:px-8 md:py-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              className='mx-auto w-full max-w-4xl overflow-hidden rounded-[30px] border border-sky-100/70 bg-white shadow-2xl'
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.99, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className='flex items-center gap-3 border-b border-sky-100 px-5 py-4 md:px-6'>
                <FiSearch aria-hidden='true' className='h-6 w-6 text-[#0e477b]' />
                <input
                  ref={searchInputRef}
                  type='search'
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder='Search press releases...'
                  className='w-full bg-transparent text-2xl text-[#123A66] placeholder:text-[#7c97b3] outline-none md:text-3xl'
                  aria-label='Search news by title'
                />
                <button
                  type='button'
                  onClick={() => setSearchTerm('')}
                  className='rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-wide text-[#0e477b] transition-colors hover:bg-sky-100'
                >
                  Clear
                </button>
              </div>

              <div className='max-h-[60vh] overflow-y-auto bg-white'>
                {normalizedSearch.length === 0 ? (
                  <p className='px-6 py-8 text-sm text-[#5f7d99]'>Type a news title to search.</p>
                ) : searchResults.length === 0 ? (
                  <p className='px-6 py-8 text-sm text-[#5f7d99]'>No news found for "{searchTerm}".</p>
                ) : (
                  <ul className='py-2'>
                    {searchResults.slice(0, 8).map((post) => (
                      <li key={`search-${post._id}`}>
                        <Link
                          href={`/news/${post.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className='block px-6 py-4 transition-colors hover:bg-[#f2f7fc]'
                        >
                          <p className='text-[28px] leading-tight font-semibold text-[#123A66] md:text-[32px]'>
                            {post.title}
                          </p>
                          <p className='mt-1 text-sm text-[#7b98b3]'>/news/{post.slug}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Grid Content */}
      {isLoading ? (
        <div className='py-20 text-center text-slate-500'>Loading...</div>
      ) : hasError ? (
        <div className='py-20 text-center text-rose-600'>Failed to load posts.</div>
      ) : (
        <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
          {filteredPosts.slice(0, visibleCount).map((post) => (
            <Link key={post._id} href={`/news/${post.slug}`} className='group block'>
              <article className='flex flex-col'>
                {/* Image Container */}
                <div className='relative mb-4 aspect-16/10 overflow-hidden rounded-3xl rounded-br-[68px]'>
                  {post.mainImage?.url ? (
                    <img
                      src={post.mainImage.url}
                      alt={post.mainImage.alt || post.title}
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  ) : (
                    <div className='h-full w-full bg-slate-200' />
                  )}
                </div>

                {/* Meta & Title */}
                <div className='flex grow flex-col'>
                  <p className='text-[13px] font-medium text-slate-400'>
                    {formatPublishedAt(post.publishedAt)}
                  </p>
                  <h2 className='mt-2 text-[18px] font-bold leading-snug text-[#003366] line-clamp-3 group-hover:underline'>
                    {post.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {!isLoading && !hasError && filteredPosts.length === 0 ? (
        <div className='mt-12 py-10 text-center text-slate-500'>
          No posts found in this category.
        </div>
      ) : null}

      {/* Load More Button */}
      {filteredPosts.length > 9 && visibleCount < filteredPosts.length ? (
        <div className='mt-16 text-center'>
          <button
            className='rounded-full bg-[#E0F4FF] px-12 py-3 text-sm font-bold text-[#00AEEF] transition-colors hover:bg-[#D0E7F5]'
            onClick={() => setVisibleCount((prev) => Math.min(prev + 9, filteredPosts.length))}
            type='button'
          >
            Load more
          </button>
        </div>
      ) : null}
    </main>
  )
}