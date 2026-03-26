"use client"

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'motion/react'
import { partnerLogos } from './partnerLogos'

function PartnerLogoGrid() {
  const trackRef = useRef<HTMLDivElement>(null)
  const logos = [...partnerLogos, ...partnerLogos]
  const normalSpeed = 80
  const hoverSpeed = 24
  const x = useMotionValue(0)
  const targetSpeed = useMotionValue(normalSpeed)
  const smoothSpeed = useSpring(targetSpeed, {
    stiffness: 140,
    damping: 28,
    mass: 0.5,
  })

  useAnimationFrame((_, delta) => {
    const track = trackRef.current
    if (!track) return

    const singleTrackWidth = track.scrollWidth / 2
    if (!singleTrackWidth) return

    let next = x.get() - (smoothSpeed.get() * delta) / 1000

    if (next <= -singleTrackWidth) {
      next += singleTrackWidth
    }

    x.set(next)
  })

  return (
    <div className='mt-8 flex overflow-hidden py-2'>
      <motion.div
        ref={trackRef}
        style={{ x }}
        className='flex w-max items-center gap-12'
        onHoverStart={() => targetSpeed.set(hoverSpeed)}
        onHoverEnd={() => targetSpeed.set(normalSpeed)}
      >
        {logos.map((logo, index) => (
          <div key={`${logo}-${index}`} className='flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-slate-100/55 p-3 shadow-sm backdrop-blur-sm'>
            <motion.img
              src={logo}
              alt='Partner logo'
              className='h-full w-full object-contain'
              loading='lazy'
              decoding='async'
              initial={{ filter: 'grayscale(100%)', opacity: 0.7 }}
              whileHover={{
                filter: 'grayscale(0%)',
                opacity: 1,
                transition: { duration: 0.4 },
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default PartnerLogoGrid