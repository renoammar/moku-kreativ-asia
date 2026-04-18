import React from 'react'

function ThreeDimensionalDesign() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <div className='relative h-full w-full overflow-hidden'>
        <div className='relative h-full w-full'>
          <video
            className='absolute inset-0 h-full w-full object-cover'
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
          >
            <source src='/videos/3D-Design.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-black/40' />
          <div className='relative z-10 flex h-full items-center justify-center px-6 md:px-10'>
            <div className='flex w-full max-w-6xl items-center justify-center text-start'>
              <h1 className='max-w-4xl text-3xl font-semibold text-white/85 md:text-5xl lg:text-6xl'>
                3D Design untuk memvisualisasikan event Anda dan juga bisa digunakan sebagai branding perusahaan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeDimensionalDesign