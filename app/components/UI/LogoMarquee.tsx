'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'motion/react'

type LogoItem = {
  src: string
  alt: string
}

type LogoMarqueeProps = {
  logos: LogoItem[]
  className?: string
  trackClassName?: string
  itemClassName?: string
  imageClassName?: string
  normalSpeed?: number
  hoverSpeed?: number
  enableHoverEffect?: boolean
}

function LogoMarquee({
  logos,
  className = '',
  trackClassName = 'flex w-max items-center gap-12',
  itemClassName = 'flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl bg-white/90 p-3',
  imageClassName = 'h-full w-full object-contain',
  normalSpeed = 80,
  hoverSpeed = 24,
  enableHoverEffect = false,
}: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const repeatCount = 3
  const repeatedLogos = Array.from({ length: repeatCount }, () => logos).flat()
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

    const singleTrackWidth = track.scrollWidth / repeatCount
    if (!singleTrackWidth) return

    let next = x.get() - (smoothSpeed.get() * delta) / 1000

    if (next <= -singleTrackWidth) {
      next += singleTrackWidth
    }

    x.set(next)
  })

  return (
    <div className={`flex overflow-hidden py-2 ${className}`}>
      <motion.div
        ref={trackRef}
        style={{ x }}
        className={trackClassName}
        onHoverStart={() => targetSpeed.set(hoverSpeed)}
        onHoverEnd={() => targetSpeed.set(normalSpeed)}
      >
        {repeatedLogos.map((logo, index) => (
          <div key={`${logo.src}-${index}`} className={itemClassName}>
            <motion.img
              src={logo.src}
              alt={logo.alt}
              className={imageClassName}
              loading='lazy'
              decoding='async'
              {...(enableHoverEffect
                ? {
                    initial: { filter: 'grayscale(100%)', opacity: 0.7 },
                    whileHover: {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transition: { duration: 0.4 },
                    },
                  }
                : {})}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default LogoMarquee
