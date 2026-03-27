'use client'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

function Navbar() {
  const navItems = [
    { label: 'BERANDA', href: '/' },
    {
      label: 'REPORTING SOLUTION',
      children: [
        { label: 'All Reporting Solutions', href: '/all-reporting-solutions' },
        { label: 'Annual Report', href: '#' },
        { label: 'Sustainability Report', href: '#' },
        { label: 'Assurance', href: '#' },
        { label: 'Company Profile', href: '#' },
      ],
    },
    { label: 'EVENT SOLUTION', href: '#' },
    { label: '3D DESIGN', href: '#' },
    { label: 'CONTACT', href: '#' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReportingOpen, setIsReportingOpen] = useState(false)
  const [isMobileReportingOpen, setIsMobileReportingOpen] = useState(false)
  const [isMobileClosing, setIsMobileClosing] = useState(false)

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev

      if (!next) {
        setIsMobileClosing(true)
        setIsMobileReportingOpen(false)
      }

      return next
    })
  }

  return (
    <div
      className={`fixed top-4 left-1/2 z-50 w-[80%] -translate-x-1/2 overflow-hidden md:overflow-visible bg-[rgba(255,255,255,0.92)] backdrop-blur-3xl ${isMenuOpen || isMobileClosing ? 'rounded-4xl' : 'rounded-full'}`}
    >
      <div className='h-16 px-6 flex items-center justify-between'>
        <a href='/' aria-label='Go to homepage'>
          <img src='/images/moku_icon.png' alt='Moku Kreativ Asia' className='h-17.5 w-17.5' />
        </a>

        <ul className='hidden md:flex items-center gap-8 text-slate-700 text-sm font-medium tracking-wide'>
          {navItems.map((item) => (
            <li key={item.label} className='relative cursor-pointer'>
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
                              key={child.label}
                              className={`px-3 py-2 text-base ${index !== item.children.length - 1 ? 'border-b border-sky-100' : ''}`}
                            >
                              <a href={child.href} className='block text-slate-700 transition-colors duration-200 hover:text-sky-600'>
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a href={item.href ?? '#'} className='transition-colors duration-200 hover:text-sky-600'>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          type='button'
          onClick={toggleMobileMenu}
          className='md:hidden flex items-center gap-2 text-slate-700 text-sm font-medium tracking-wide'
          aria-expanded={isMenuOpen}
          aria-controls='mobile-navbar-menu'
        >
          <span className='h-2.5 w-2.5 rounded-full bg-sky-500' />
          MENU
        </button>
      </div>

      <motion.ul
        id='mobile-navbar-menu'
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
          paddingBottom: isMenuOpen ? 12 : 0,
        }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          if (!isMenuOpen) {
            setIsMobileClosing(false)
          }
        }}
        className='md:hidden px-5 overflow-hidden'
      >
        {navItems.map((item, index) => (
          <li
            key={item.label}
            className={`text-slate-800 ${index !== navItems.length - 1 ? 'border-b border-sky-100' : ''}`}
          >
            {item.children ? (
              <>
                <button
                  type='button'
                  onClick={() => setIsMobileReportingOpen((prev) => !prev)}
                  className='w-full py-4 flex items-center justify-between text-4xl'
                  aria-expanded={isMobileReportingOpen}
                  aria-controls='mobile-reporting-submenu'
                >
                  <span>{item.label.charAt(0) + item.label.slice(1).toLowerCase()}</span>
                  <span className='text-sky-500 text-2xl leading-none'>{isMobileReportingOpen ? '−' : '+'}</span>
                </button>

                <motion.ul
                  id='mobile-reporting-submenu'
                  initial={false}
                  animate={{
                    height: isMobileReportingOpen ? 'auto' : 0,
                    opacity: isMobileReportingOpen ? 1 : 0,
                    marginBottom: isMobileReportingOpen ? 12 : 0,
                  }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className='overflow-hidden pl-4'
                >
                  {item.children.map((child) => (
                    <li key={child.label} className='py-2 text-xl text-slate-600'>
                      <a href={child.href} className='block transition-colors duration-200 hover:text-sky-600'>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </>
            ) : (
              <a href={item.href ?? '#'} className='block py-4 text-4xl'>
                {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
              </a>
            )}
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Navbar