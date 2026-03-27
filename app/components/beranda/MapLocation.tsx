import { FiArrowRight } from 'react-icons/fi'

function MapLocation() {
	return (
		<section className='px-4 py-14 md:px-8 md:py-20'>
			<div className='mx-auto w-full max-w-6xl'>
				<h2 className='text-4xl font-semibold text-[#123A66] md:text-[42px]'>Locate US on the Map</h2>

				<div className='mt-7 rounded-4xl bg-[#125ff9] p-4 text-white md:mt-8 md:p-5'>
					<div className='grid gap-5 md:grid-cols-[1fr_0.95fr]'>
						<div className='relative min-h-70 overflow-hidden rounded-[22px] bg-[#dce6f3] md:min-h-90'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.583326442383!2d106.82135347499003!3d-6.186476093801065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428abe15763%3A0x7c3a05b23a1bfef!2sMenara%20Cakrawala!5e0!3m2!1sid!2sid!4v1774582029213!5m2!1sid!2sid'
								className='h-full min-h-70 w-full border-0 md:min-h-90'
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='Menara Cakrawala Location Map'
							/>
						</div>

						<div className='flex min-h-70 flex-col rounded-[22px] bg-transparent p-1 md:min-h-90'>
							<div className='max-w-2xl'>
								<h3 className='text-3xl font-semibold md:text-[28px]'>Headquarter</h3>
								<p className='mt-3 text-xl leading-normal md:text-[18px]'>
									Menara Cakrawala L. M.H Thamrin No.9, RT.2/RW.1, KB. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340
								</p>
							</div>

							<div className='mt-auto pt-8 flex justify-end items-baseline-last'>
								<a
									href='https://maps.app.goo.gl/XC65FNt8W5aKXHhRA'
									className='inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#BDE8FA] px-6 py-4 text-lg font-medium text-[#1A8FD2] transition-colors duration-300 hover:bg-[#a8ddf4] md:w-auto md:text-xl'
								>
									View on Google Maps
									<FiArrowRight className='size-5' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MapLocation
