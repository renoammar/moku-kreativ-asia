import React from 'react'
import { FiBarChart2, FiClock, FiShield } from 'react-icons/fi'

const heroHighlights = [
  {
    icon: FiBarChart2,
    title: '3',
    subtitle: 'Jenis Layanan',
  },
  {
    icon: FiShield,
    title: 'AA1000AS V3',
    subtitle: 'Standar Internasional',
  },
  {
    icon: FiClock,
    title: '24/7',
    subtitle: 'Support Available',
  },
]

function HeroRightCards() {
  return (
    <div className='flex w-full flex-col gap-2.5 lg:ml-auto lg:w-auto lg:items-end'>
      {heroHighlights.map((highlight) => {
        const Icon = highlight.icon

        return (
          <div
            key={highlight.title}
            className='w-full rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:min-w-90'
          >
            <div className='flex items-center gap-5'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl text-white'>
                <Icon aria-hidden />
              </div>

              <div>
                <p className='text-4xl font-bold leading-none text-white'>{highlight.title}</p>
                <p className='mt-2 text-3xl font-semibold text-emerald-200'>{highlight.subtitle}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HeroRightCards
