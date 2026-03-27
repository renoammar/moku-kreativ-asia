import React from 'react'

function HeroLeftContent() {
  return (
    <div className=' w-full rounded-xl bg-green-500 p-4 text-green-500'>
      <p className='mb-6 text-3xl font-semibold tracking-tight md:text-4xl'>
        Beranda
        <span className='mx-2 text-white/70'>/</span>
        Layanan
      </p>

      <h1 className='mb-6 text-[clamp(4.5rem,9vw,8.75rem)] font-extrabold leading-[0.9] text-white'>
        Layanan
        <br />
        Profesional Kami
      </h1>

      <p className='text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.28] text-white/95'>
        Berbagai layanan sertifikasi dan verifikasi keberlanjutan yang kami tawarkan untuk kebutuhan
        bisnis Anda.
      </p>
    </div>
  )
}

export default HeroLeftContent
