import React from 'react'
import InternationalLicenseBanner from './InternationalLicenseBanner'

const companyReportingItems = [
  'Annual Report',
  'Assurance',
  'Sustainability Report',
  'Company Profile',
]

const miceEventItems = [
  'Event Concept, Planning, Execution, and Creative Development',
  'Audience Engagement Strategy',
]

function CompanySolution() {
  return (
    <section className='bg-white px-4 py-14 md:px-8 md:py-20'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start md:gap-12'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-blue-700'>Moku Kreativ Asia</p>
            <h2 className='mt-3 text-3xl font-bold text-slate-900 md:text-5xl'>Empowering Indonesia’s Corporate Credibility</h2>
          </div>

          <div className='md:self-end'>
            <p className='text-base leading-7 text-slate-700 md:text-lg'>
              Since 2022, <strong>Moku Asia</strong> is a corporate reporting services company and strategic event marketing in Indonesia. We
              specialize in the development of Annual Reports, Sustainability Reports, and Assurance services that strengthen transparency,
              credibility, and stakeholder trust.
            </p>
         
          </div>

          <div className='md:col-span-2'>
            <InternationalLicenseBanner />
          </div>
        </div>

        <div id='our-solutions-grid' className='mt-16 grid gap-8 md:grid-cols-[0.85fr_1.65fr] md:items-start md:gap-10'>
          <div>
            <h3 className='text-4xl font-bold leading-tight text-[#002F5D] md:text-5xl'>
              <span className='block'>Our</span>
              <span className='block tracking-[0.08em] md:tracking-widest'>Solution</span>
            </h3>
            <p className='mt-4 max-w-xs text-base text-slate-700 md:text-lg'>Explore how MOKU ASIA builds trust and creates impact.</p>
          </div>

          <div
            className='relative overflow-visible rounded-[28px] bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 p-6 text-white md:p-8'
            style={{
              backgroundImage: "linear-gradient(rgba(6, 23, 58, 0.45), rgba(6, 23, 58, 0.45)), url('/images/card_background.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='grid gap-8 md:grid-cols-2 md:gap-8'>
              <div className='md:border-r md:border-white/35 md:pr-7'>
                <h4 className='text-3xl font-bold leading-tight md:text-[43px]'>Company Reporting</h4>
                <p className='mt-1.5 text-lg text-white/95 md:text-[26px] md:leading-[1.35]'>Comprehensive Corporate Reporting Services</p>
                <ul className='mt-5 space-y-2.5'>
                  {companyReportingItems.map((item) => (
                    <li key={item} className='flex items-start gap-3 text-[22px] leading-[1.35]'>
                      <span className='mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-white'>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className='text-3xl font-bold leading-tight md:text-[43px]'>MICE Event &amp; Marketing</h4>
                <p className='mt-1.5 text-lg text-white/95 md:text-[26px] md:leading-[1.35]'>Integrated Event and Marketing Capabilities</p>
                <ul className='mt-5 space-y-2.5'>
                  {miceEventItems.map((item) => (
                    <li key={item} className='flex items-start gap-3 text-[22px] leading-[1.35]'>
                      <span className='mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-white'>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='pointer-events-none absolute bottom-[-65] right-[-65] z-20 grid h-36 w-36 grid-cols-3 grid-rows-3 md:h-44 md:w-44'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' className='col-start-2 row-start-1 h-10 w-10 -translate-y-1 self-end justify-self-center md:h-12 md:w-12 -mb-1.2 -rotate-1'>
                <path fill='white' d='M0 48h48V0c0 26.5-21.5 48-48 48z' />
              </svg>

              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' className='col-start-1 row-start-2 h-10 w-10 -translate-x-1 self-center justify-self-end md:h-12 md:w-12 -mr-px rotate-1'>
                <path fill='white' d='M0 48h48V0c0 26.5-21.5 48-48 48z' />
              </svg>
              <div className='pointer-events-auto col-start-2 row-start-2 z-30 inline-flex h-17 w-16 items-center justify-center self-center justify-self-center rounded-tl-[28px] -mt-1 -ml-1 border bg-white p-1 '>
                <a
                href='#solutions-breakdown'
                aria-label='Go to detailed solutions breakdown'
                className='group inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-sky-400 text-2xl text-white transition-colors duration-300 hover:bg-sky-500'
              >
                <span className='relative z-10'>→</span>
              </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanySolution