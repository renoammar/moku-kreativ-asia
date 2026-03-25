'use client'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

function Navbar() {
  const navItems = [
    { label: 'BERANDA' },
    {
      label: 'REPORTING SOLUTION',
      children: ['All Reporting Solutions', 'Annual Report', 'Sustainability Report', 'Assurance', 'Company Profile'],
    },
    { label: 'EVENT SOLUTION' },
    { label: '3D DESIGN' },
    { label: 'CONTACT' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReportingOpen, setIsReportingOpen] = useState(false)

  return (
    <motion.div
      className={`w-[80%] overflow-hidden md:overflow-visible bg-[rgba(255,255,255,0.92)] backdrop-blur-3xl ${isMenuOpen ? 'rounded-4xl' : 'rounded-full'}`}
    >
      <div className='h-16 px-6 flex items-center justify-between'>
        <img src="/images/moku_icon.png" alt="Moku Kreativ Asia" className='h-17.5 w-17.5' />

        <ul className='hidden md:flex items-center gap-8 text-slate-700 text-sm font-medium tracking-wide'>
          {navItems.map((item) => (
            <li
              key={item.label}
              className='relative cursor-pointer'
              onMouseEnter={() => item.children && setIsReportingOpen(true)}
              onMouseLeave={() => item.children && setIsReportingOpen(false)}
            >
              {item.children ? (
                <>
                  <button
                    type='button'
                    className='flex items-center gap-2'
                    onClick={() => setIsReportingOpen((prev) => !prev)}
                    aria-expanded={isReportingOpen}
                    aria-controls='desktop-reporting-dropdown'
                  >
                    {item.label}
                    <span className='text-sky-500'>▾</span>
                  </button>

                  <AnimatePresence>
                    {isReportingOpen && (
                      <motion.div
                        id='desktop-reporting-dropdown'
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className='absolute left-0 top-full z-30 mt-3 w-72 rounded-3xl border border-sky-100 bg-white/95 p-3 shadow-sm backdrop-blur-md'
                      >
                        <ul className='text-slate-700'>
                          {item.children.map((child, index) => (
                            <li
                              key={child}
                              className={`px-3 py-2 text-base ${index !== item.children.length - 1 ? 'border-b border-sky-100' : ''}`}
                            >
                              {child}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>

        <button
          type='button'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='md:hidden flex items-center gap-2 text-slate-700 text-sm font-medium tracking-wide'
          aria-expanded={isMenuOpen}
          aria-controls='mobile-navbar-menu'
        >
          <span className='h-2.5 w-2.5 rounded-full bg-sky-500' />
          MENU
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.ul
            id='mobile-navbar-menu'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='md:hidden px-5 pb-3'
          >
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={`py-4 text-4xl text-slate-800 ${index !== navItems.length - 1 ? 'border-b border-sky-100' : ''}`}
              >
                {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar