import React from 'react'

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

      <div className='relative z-10 flex h-full items-center justify-center '>
        <div className="flex justify-center items-start flex-col bg-red-500">
        <h1 className='text-4xl font-bold text-white'>Credible Reporting, Memorable Event Experience</h1>
        <p className='text-lg text-white mt-4'>Leading Corporate Reporting & Event Solutions Partner in Indonesia</p>
        <div className="bg-blue-400"></div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero