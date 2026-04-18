import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import MokuGradientBackground from '../UI/MokuGradientBackground'

function AsuranceHero() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* Background gradient sesuai palet brand */}
      <MokuGradientBackground />

      <div className='relative z-10 flex h-full items-center justify-center px-4'>
        <div className='mx-auto w-full max-w-6xl text-left'>
          <h1 className='text-3xl font-bold text-white md:text-[56px] leading-tight'>
            Assurance Berdasarkan Standar AA1000 AccountAbility
          </h1>
          <p className='mt-6 text-base text-gray-200 md:text-[20px] max-w-3xl'>
            Standar assurance global yang digunakan untuk menilai kinerja keberlanjutan perusahaan secara menyeluruh. 
            Pendekatan kami tidak hanya memastikan keakuratan data, tetapi juga mengevaluasi penerapan 
            Prinsip AccountAbility dalam praktik bisnis Anda.
          </p>
          <div className='flex flex-wrap items-center justify-start gap-3'>
            <div className='mt-10'>
            <a 
              href="https://wa.me/6289627667568" 
              target="_blank" 
              rel="noopener noreferrer"
              className='group w-56 inline-flex items-center justify-around gap-8 rounded-xl border border-white/35 bg-white/12 px-2 py-4 font-semibold text-white shadow-lg backdrop-blur-3xl transition-all duration-300 hover:bg-white/20 hover:border-white/50'
            >
              Konsultasi Gratis
              <FiArrowRight className='text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-45 group-focus-visible:-rotate-45 group-active:-rotate-45' aria-hidden />
            </a>
          </div>
        <div className='mt-10'>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-56 justify-center inline-flex items-center rounded-xl border border-white/30 bg-[#125ff9]/35 px-2 py-4 font-semibold text-white shadow-lg backdrop-blur-3xl transition-all duration-300 hover:bg-[#125ff9]/50 hover:border-white/50'
            >
              Lihat Semua layanan
            </a>
          </div>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default AsuranceHero