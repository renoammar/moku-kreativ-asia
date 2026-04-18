import React from 'react'

type PartnerLogoCardProps = {
  logo: string
  alt?: string
}

function PartnerLogoCard({ logo, alt = 'Partner logo' }: PartnerLogoCardProps) {
  return (
    <div className='flex h-20 items-center justify-center rounded-2xl bg-white p-3 shadow-sm backdrop-blur-sm'>
      <img src={logo} alt={alt} className='h-full w-full object-contain' loading='lazy' decoding='async' />
    </div>
  )
}

export default PartnerLogoCard