import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

function Footer() {
	return (
		<footer className='bg-[#081833] px-4 py-14 text-white md:px-8 md:py-16'>
			<div className='mx-auto w-full max-w-6xl'>
				<div className='flex flex-col gap-10 md:flex-row md:justify-between'>
					<div>
						<h3 className='text-3xl font-bold'>Moku Asia</h3>
						<p className='mt-4 text-lg leading-8 text-slate-200'>
							Partner terpercaya untuk Corporate Reporting, Event Management, dan Creative Activation.
						</p>

						<div className='mt-7 flex items-center gap-4'>
							<a
								href='https://www.instagram.com/mokukreativasia?igsh=MXRxajFzYnRkdW44ZA=='
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram Moku Asia'
								className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-sky-300 hover:text-sky-300'
							>
								<FaInstagram className='h-5 w-5' />
							</a>
							<a
								href='https://www.linkedin.com/company/moku-asia/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn Moku Asia'
								className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-sky-300 hover:text-sky-300'
							>
								<FaLinkedinIn className='h-5 w-5' />
							</a>
						</div>
					</div>

					<div className=''>
						<h4 className='text-[28px] font-semibold'>Contact Us</h4>

						<div className='mt-5 flex flex-col gap-6 text-slate-200 md:flex-row md:flex-wrap md:gap-10'>
							<div>
								<p className='flex items-center gap-2 text-xl font-semibold text-white'>
									<HiOutlineLocationMarker className='h-5 w-5' />
									Alamat
								</p>
								<p className='mt-2 text-lg leading-8'>
									Menara cakrawala L. M.H Thamrin No.9, RT.2/RW.1, KB. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340
								</p>
							</div>

							<div>
								<p className='flex items-center gap-2 text-xl font-semibold text-white'>
									<HiOutlinePhone className='h-5 w-5' />
									WhatsApp
								</p>
								<p className='mt-2 text-lg'>Reporting: +62 89627667568</p>
								<p className='mt-1 text-lg'>Event: +62 8558827737</p>
							</div>

							<div>
								<p className='flex items-center gap-2 text-xl font-semibold text-white'>
									<HiOutlineMail className='h-5 w-5' />
									Email
								</p>
								<a href='mailto:Contact@mokuasia.com' className='mt-2 inline-block text-lg text-slate-100 hover:text-sky-300'>
									Contact@mokuasia.com
								</a>
							</div>
						</div>
					</div>

					<div>
						<h4 className='text-[28px] font-semibold'>Services</h4>
						<ul className='mt-5 space-y-3 text-xl text-slate-200'>
							<li><a href='/annual-report' className='hover:text-sky-300'>Annual Report</a></li>
							<li><a href='/sustainability-report' className='hover:text-sky-300'>Sustainability Report</a></li>
							<li><a href='/assurance' className='hover:text-sky-300'>Assurance</a></li>
							<li><a href='/event' className='hover:text-sky-300'>Penyelenggaraan Event</a></li>
						</ul>
					</div>
				</div>

				<div className='mt-14 border-t border-white/10 pt-5 text-sm text-slate-300'>
					© {new Date().getFullYear()} Moku Asia. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
