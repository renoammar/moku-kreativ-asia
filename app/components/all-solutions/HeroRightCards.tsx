import React from 'react'
import { FiBarChart2, FiClock, FiShield } from 'react-icons/fi'

const heroHighlights = [
  {
    id: 'services',
    icon: FiBarChart2,
    title: 'Jenis Layanan',
    subtitle: 'Annual Report, Sustainability Report, Assurance, Company Profile',
  },
  {
    id: 'licensed-assurance',
    icon: FiShield,
    title: '',
    subtitle: '',
    img: 'licensed_assurance_provider_logo.png',
    isLicensedBadge: true,
  },
  {
    id: 'support',
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
            key={highlight.id}
            className='w-full h-27.5 rounded-3xl border border-white/20 bg-white/10 py-2 px-4 backdrop-blur-md lg:min-w-90 flex items-center justify-start'
          >
            <div className='flex items-center gap-5'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl text-white'>
                <Icon aria-hidden />
              </div>

              <div className='flex justify-center items-start flex-col'>
                {highlight.title && <p className='text-4xl font-bold leading-none text-white'>{highlight.title}</p>}
                {highlight.subtitle && <p className='text-sm text-white/90'>{highlight.subtitle}</p>}
                {highlight.img && highlight.isLicensedBadge ? (
                  <div className='h-20 w-74 flex justify-center items-center '>
                    <img
                      src={`/images/${highlight.img}`}
                      alt='AA1000 licensed assurance provider'
                      className='h-full w-full object-contain'
                    />
                  </div>
                ) : null}
               
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HeroRightCards
