import React from 'react'
import { assuranceClientLogos } from '../beranda/partners/partnerLogos'

function AssuranceClientsList() {
  return (
    <section className='mx-auto mt-20 max-w-7xl px-6 py-12 md:px-10'>
      <h2 className='mb-6 text-center text-3xl font-semibold text-[#125ff9] md:text-4xl'>
        Our Precious Client :
      </h2>

      <div className='flex flex-wrap justify-center gap-5'>
        {assuranceClientLogos.map((client) => (
          <div
            key={client.src}
            className='flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-white/90 p-4 transition-transform duration-300 hover:-translate-y-1 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-56 lg:w-106'
          >
            <img
              src={client.src}
              alt={client.alt}
              className='h-full w-full object-contain'
              loading='lazy'
              decoding='async'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AssuranceClientsList