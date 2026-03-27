import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

function Footer() {
	return (
		<footer className='bg-[#081833] px-4 py-14 text-white md:px-8 md:py-16'>
			<div className='mx-auto w-full max-w-6xl'>
				<div className='grid gap-10 md:grid-cols-4 md:gap-10'>
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

					<div>
						<h4 className='text-[28px] font-semibold'>Contact Us</h4>

						<div className='mt-5 space-y-6 text-slate-200'>
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
						<h4 className='text-[28px] font-semibold'>Company</h4>
						<ul className='mt-5 space-y-3 text-xl text-slate-200'>
							<li><a href='#' className='hover:text-sky-300'>Tentang Kami</a></li>
							<li><a href='#' className='hover:text-sky-300'>Tim Kami</a></li>
							<li><a href='#' className='hover:text-sky-300'>Kenapa Kami?</a></li>
							<li><a href='#' className='hover:text-sky-300'>Visi &amp; Misi</a></li>
							<li><a href='#' className='hover:text-sky-300'>Karir</a></li>
							<li><a href='#' className='hover:text-sky-300'>Contact Us</a></li>
						</ul>
					</div>

					<div>
						<h4 className='text-[28px] font-semibold'>Legal</h4>
						<ul className='mt-5 space-y-3 text-xl text-slate-200'>
							<li><a href='#' className='hover:text-sky-300'>FAQ</a></li>
						</ul>

						<h4 className='mt-10 text-[28px] font-semibold'>Newsletter</h4>
						<form className='mt-4 space-y-3'>
							<input
								type='email'
								placeholder='Your email address'
								className='h-12 w-full rounded-xl border border-white/15 bg-white/8 px-4 text-lg text-white placeholder:text-slate-300 focus:border-sky-300 focus:outline-none'
							/>
							<button
								type='submit'
								className='h-12 w-full rounded-xl bg-[#ea2127] text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#d71920]'
							>
								Subscribe
							</button>
						</form>
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
