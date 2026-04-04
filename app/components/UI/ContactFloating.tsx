'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion' // Pastikan import sesuai versi (framer-motion atau motion/react)
import { FaChevronLeft, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi'

export default function ContactFloating() {
  const [isOpen, setIsOpen] = useState(false)

  const reportingNumber = '6289627667568'
  const eventNumber = '628558827737'
  const reportingMessage = 'Halo, saya ingin menanyakan terkait laporan...'
  const eventMessage = 'Halo, saya ingin menanyakan terkait event...'
  const reportingUrl = `https://Wa.me/${reportingNumber}?text=${encodeURIComponent(reportingMessage)}`
  const eventUrl = `https://Wa.me/${eventNumber}?text=${encodeURIComponent(eventMessage)}`

  return (
    <div className='fixed right-0 top-1/2 z-99999 flex -translate-y-1/2 items-center'>
      <AnimatePresence mode='wait'>
        {!isOpen ? (
          /* FIX: Memberikan key dan exit property agar transisi mulus dan tidak menumpuk */
          <motion.button
            key="trigger-button"
            type='button'
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            aria-label='Open contact support'
            className='flex flex-col items-center gap-3 rounded-l-2xl bg-[#125ff9] px-3 py-5 text-white shadow-xl transition-colors hover:bg-[#125ff9]'
          >
            <FaChevronLeft className='h-4 w-4 animate-pulse' />
            <span className='[writing-mode:vertical-lr] rotate-180 text-[11px] font-bold tracking-[0.35em] uppercase'>
              Contact
            </span>
            <FaWhatsapp className='mt-1 h-5 w-5 -rotate-90' />
          </motion.button>
        ) : (
          <motion.div
            key="contact-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className='w-80 overflow-hidden rounded-l-[2.25rem] bg-white shadow-2xl md:w-96'
          >
            <div className='flex'>
              <div className='flex w-16 flex-col items-center justify-between bg-[#125ff9] py-7 text-white'>
                <button
                  type='button'
                  onClick={() => setIsOpen(false)}
                  aria-label='Close contact support'
                  className='transition-transform hover:scale-110'
                >
                  <FaTimes className='h-5 w-5' />
                </button>
                <span className='[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.35em] uppercase opacity-80'>
                  Contact
                </span>
                <div className='rounded-full bg-white/20 p-2'>
                  <HiOutlinePhone className='h-4 w-4 -rotate-90' />
                </div>
              </div>

              <div className='flex-1 p-7'>
                <div className='mb-5 flex flex-col gap-1'>
                  <h3 className='text-[11px] font-bold uppercase tracking-[0.35em] text-slate-400'>
                    WhatsApp Support
                  </h3>
                  <p className='text-3xl font-bold tracking-tight text-slate-800'>Reach Us</p>
                </div>

                <div className='space-y-4'>
                  <div className='space-y-3'>
                    <a
                      href={reportingUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex w-full items-center justify-between rounded-2xl bg-[#125ff9] px-5 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#125ff9] hover:shadow-sky-200'
                    >
                      <span className='text-sm font-bold'>Reporting: +62 89627667568</span>
                      <FaWhatsapp className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </a>

                    <a
                      href={eventUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex w-full items-center justify-between rounded-2xl bg-[#125ff9] px-5 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#125ff9] hover:shadow-sky-200'
                    >
                      <span className='text-sm font-bold'>Event: +62 8558827737</span>
                      <FaWhatsapp className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </a>
                  </div>

                  <p className='text-[10px] leading-relaxed text-slate-400'>
                    Pilih kontak yang sesuai, tim kami siap membantu.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}