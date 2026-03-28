import React from 'react'
import { clientLogos } from './clientLogos'

function ClientsList() {
  return (
    <section className='mx-auto mt-20 max-w-7xl px-6 py-12 md:px-10'>
      <h2 className='mb-12 text-center text-3xl font-semibold text-[#125ff9] md:text-4xl'>
        Our Precious Client :
      </h2>

      <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {clientLogos.map((client) => (
          <div
            key={client.src}
            className='flex h-28 items-center justify-center rounded-2xl bg-white/90 p-4 shadow-[0_6px_18px_rgba(13,60,116,0.08)] transition-transform duration-300 hover:-translate-y-1'
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

export default ClientsList