import React from 'react'
import HeroLeftContent from './HeroLeftContent'
import HeroRightCards from './HeroRightCards'
import ParralaxHero from './ParralaxHero'

function AllSolutionsHeroSection() {
  return (
    <ParralaxHero>
      <div className='mx-auto flex min-h-svh w-full max-w-300 items-start px-6 pb-10 pt-24 md:h-full md:min-h-0 md:items-center md:px-10 md:py-16 lg:px-14'>
        <div className='flex flex-col w-full gap-10 md:flex-row lg:items-center lg:justify-between'>
          <div className='w-full lg:max-w-165 lg:flex-1'>
            <HeroLeftContent />
          </div>

          <div className='w-full lg:w-auto lg:shrink-0'>
            <HeroRightCards />
          </div>
        </div>
      </div>
    </ParralaxHero>
  )
}

export default AllSolutionsHeroSection
