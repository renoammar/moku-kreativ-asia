import { FiArrowRight } from 'react-icons/fi'

function MapLocation() {
	return (
		<section className='px-4 py-14 md:px-8 md:py-20'>
			<div className='mx-auto w-full max-w-6xl'>
                <div className="flex flex-col justify-center items-center">
					<h3 className='font-bold text-[#1A8FD2]'>Visit US</h3>
                    <h2 className='text-4xl font-semibold text-[#123A66] md:text-[42px]'>Locate US on the Map</h2>
                </div>
				<div className='mt-7 rounded-4xl border border-[#cfe3f3] bg-[#eaf4fb] p-4 text-[#123A66] md:mt-8 md:p-5'>
					<div className='grid gap-5 md:grid-cols-[1fr_0.95fr]'>
						<div className='relative min-h-70 overflow-hidden rounded-[22px] bg-[#dce6f3] md:min-h-90'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6459699270483!2d106.82300836951666!3d-6.186402366317223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42ed1a7538b%3A0x132a5a0d4797a6f1!2sMenara%20Cakarawala%2C%20Jl.%20M.H.%20Thamrin%20No.9%2C%20RT.2%2FRW.1%2C%20Kb.%20Sirih%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010340!5e0!3m2!1sid!2sid!4v1775144877936!5m2!1sid!2sid'
								className='h-full w-full'
								style={{border: 0}}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='Moku Kreativ Asia location'
							/>
						</div>

						<div className='flex min-h-70 flex-col rounded-[22px] bg-transparent p-1 md:min-h-90'>
							<div className='max-w-2xl'>
								<h3 className='text-3xl font-semibold text-[#123A66] md:text-[28px]'>Headquarter</h3>
								<p className='mt-3 text-xl leading-normal text-[#33597f] md:text-[18px]'>
									Menara Cakrawala L. M.H Thamrin No.9, RT.2/RW.1, KB. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340
								</p>
							</div>

							<div className='mt-auto pt-8 flex justify-end items-baseline-last'>
								<a
									href='https://maps.app.goo.gl/XC65FNt8W5aKXHhRA'
									className='inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d9edf7] px-6 py-4 text-lg font-medium text-[#1A8FD2] transition-colors duration-300 hover:bg-[#c6e4f2] md:w-auto md:text-xl'
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
