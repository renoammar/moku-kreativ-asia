import React from 'react'
import LogoMarquee from '../UI/LogoMarquee'
import { clientLogos } from './SustainabilityClientLogos'

function SustainabilityClientsList() {
  return (
    <section className='mx-auto mt-20 max-w-7xl px-6 py-12 md:px-10'>
      <h2 className='mb-12 text-center text-3xl font-semibold text-[#125ff9] md:text-4xl'>
        Our Precious Client :
      </h2>

      <LogoMarquee
        className='justify-center'
        logos={clientLogos}
        trackClassName='flex w-max items-center gap-5'
        itemClassName='flex h-28 w-40 shrink-0 items-center justify-center rounded-2xl bg-white/90 p-4 transition-transform duration-300 hover:-translate-y-1 sm:w-44 md:w-48 lg:w-44 xl:w-48'
      />
    </section>
  )
}

export default SustainabilityClientsList