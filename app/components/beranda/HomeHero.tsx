import React from 'react'
import PartnerLogoGrid from './partners/PartnerLogoGrid'

function HomeHero() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
      >
        <source src='/videos/temp-background-hero.webm' type='video/webm' />
      </video>

      <div className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 flex h-full items-center justify-center px-4'>
        <div className='mx-auto w-full max-w-6xl'>
          <h1 className='text-3xl font-bold text-white md:text-4xl'>Credible Reporting, Memorable Event Experience</h1>
          <p className='mt-4 text-base text-white md:text-lg'>Leading Corporate Reporting & Event Solutions Partner in Indonesia</p>

          <PartnerLogoGrid />
        </div>
      </div>
    </section>
  )
}

export default HomeHero