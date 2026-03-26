'use client'
function InternationalLicenseBanner() {
  return (
    <div className='mt-6 w-full bg-slate-100 px-5 py-4 md:px-6 md:py-4'>
      <div className='grid items-center gap-5 md:grid-cols-[1fr_1.25fr] md:gap-8'>
        <div className='min-w-0'>
          <h3 className='text-2xl font-bold text-blue-900 md:text-[20px] md:leading-[1.05]'>Standard Internasional</h3>
          <p className='mt-2 max-w-sm text-sm leading-6 text-slate-600 md:text-[12px] md:leading-[1.35]'>
            Kami telah Memiliki Lisensi Standard Internasional dari AA1000
          </p>
          <a
            href='#our-solutions-grid'
            className='mt-4 inline-flex w-fit items-center whitespace-nowrap rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700'
          >
            Pelajari Lebih Lanjut
          </a>
        </div>

        <div className='flex h-24 min-w-0 items-center justify-center md:h-28'>
          <img
            src='/images/licensed_assurance_provider_logo.png'
            alt='AA1000 Licensed Assurance Provider'
            className='h-full w-full object-contain'
            loading='lazy'
            decoding='async'
          />
        </div>
      </div>
    </div>
  )
}

export default InternationalLicenseBanner