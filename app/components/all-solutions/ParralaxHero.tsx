
'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

type Props = {
  children?: React.ReactNode
}

function ParralaxHero({ children }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const sectionMetricsRef = useRef({ top: 0, height: 1 })
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateMetrics = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      sectionMetricsRef.current = {
        top: window.scrollY + rect.top,
        height: rect.height || 1,
      }
    }

    updateMetrics()
    window.addEventListener('resize', updateMetrics)

    return () => {
      window.removeEventListener('resize', updateMetrics)
    }
  }, [])

  // Window-mask behavior: mountain follows scroll at 0.2x speed, clamped to the safe 15% range.
  const rawMountainY = useTransform(scrollY, (latest) => {
    const { top, height } = sectionMetricsRef.current
    const localScroll = latest - top
    const slowed = localScroll * 0.2
    const maxTravel = height * 0.15

    if (slowed < 0) return 0
    if (slowed > maxTravel) return maxTravel
    return slowed
  })

  const mountainY = useSpring(rawMountainY, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  })

  return (
    <section ref={sectionRef} className='relative min-h-svh overflow-hidden md:h-screen'>
      {/* Disabled per client request; keep for quick rollback if needed. */}
      {/* <div className='pointer-events-none absolute inset-0 z-10 bg-[#0D3C74]/60' /> */}
      <div className='pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(18,95,249,0.26)_0%,rgba(13,60,116,0.7)_100%)] mix-blend-multiply' />

      {children ? <div className='relative z-20 min-h-svh md:absolute md:inset-0 md:min-h-0'>{children}</div> : null}

        <img
          src='/parallax/base_mountain.jpg'
          alt='Mountain background'
          className='absolute inset-0 h-full w-full object-cover brightness-[0.74] contrast-[0.9] saturate-[1.1]'
          loading='eager'
          fetchPriority='high'
        />

        <picture>
          <source srcSet='/parallax/mountain_parallax.png' type='image/webp' />
          <motion.img
            src='/parallax/mountain_parallax.png'
            alt='Foreground mountain'
            className='pointer-events-none absolute left-0 top-[-10%] h-[120%] w-full object-cover brightness-[0.82] contrast-[0.9] saturate-[1.12] will-change-transform'
            style={{ y: mountainY, transform: 'translateZ(0)' }}
            loading='eager'
            fetchPriority='high'
            decoding='async'
          />
        </picture>
    </section>
  )
}

export default ParralaxHero