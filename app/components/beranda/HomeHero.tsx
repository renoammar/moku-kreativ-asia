import React from 'react'
import LogoMarquee from '../UI/LogoMarquee'
import { partnerLogos } from './partners/partnerLogos'

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
          <h1 className='text-3xl font-bold text-white md:text-[76px]'>Credible Reporting, Memorable Event Experience</h1>
          <p className='mt-4 text-base text-white md:text-[18px]'>Leading Corporate Reporting & Event Solutions Partner in Indonesia</p>

          <LogoMarquee
            className='mt-8'
            logos={partnerLogos.map((logo) => ({ src: logo, alt: 'Partner logo' }))}
            itemClassName='flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-slate-100/55 p-3 shadow-sm backdrop-blur-sm'
            enableHoverEffect
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHero