'use client'

import { useEffect, useRef, useState } from 'react'

const subjectOptions = [
	'Annual Report',
	'Sustainability Report',
	'Assurance',
	'Company Profile',
	'MICE Event Management',
	'Influencer Marketing',
	'3D Design',
]

function ContactSection() {
	const [isSubjectOpen, setIsSubjectOpen] = useState(false)
	const [selectedSubject, setSelectedSubject] = useState('')
	const subjectWrapperRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!subjectWrapperRef.current) {
				return
			}

			if (!subjectWrapperRef.current.contains(event.target as Node)) {
				setIsSubjectOpen(false)
			}
		}

		window.addEventListener('mousedown', handleClickOutside)

		return () => {
			window.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const selectSubject = (subject: string) => {
		setSelectedSubject(subject)
		setIsSubjectOpen(false)
	}

	return (
		<section className='relative overflow-hidden px-4 py-14 md:px-8 md:py-20'>
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{ backgroundImage: "url('/images/form_background.jpg')" }}
				aria-hidden='true'
			/>
			<div className='absolute inset-0 bg-[#031229]/58' aria-hidden='true' />

			<div className='relative mx-auto w-full max-w-6xl'>
				<div className='grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12'>
					<div className='max-w-xl text-white'>
						<h2 className='text-4xl leading-tight font-semibold md:text-[32px]'>
							Ready to build trust and impact with<span className='block'>MOKU ASIA?</span>
						</h2>
						<p className='mt-8 text-3xl leading-[1.3] font-semibold md:mt-10 md:text-[32px]'>
							Fill out the form, and we&apos;ll be in touch.
						</p>
					</div>

					<form className='space-y-4 rounded-3xl bg-white/10 p-4 backdrop-blur-[2px] md:p-5'>
						<div>
							<label htmlFor='full-name' className='mb-1 block text-sm font-semibold text-white'>
								Full Name*
							</label>
							<input
								id='full-name'
								name='fullName'
								type='text'
								required
								placeholder='Jane Smith'
								className='h-14 w-full rounded-xl border border-white/25 bg-white px-4 text-lg text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none'
							/>
						</div>

						<div>
							<label htmlFor='company-institution' className='mb-1 block text-sm font-semibold text-white'>
								Company/Institution*
							</label>
							<input
								id='company-institution'
								name='companyInstitution'
								type='text'
								required
								placeholder='Company/Institution'
								className='h-14 w-full rounded-xl border border-white/25 bg-white px-4 text-lg text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none'
							/>
						</div>

						<div>
							<label htmlFor='work-email' className='mb-1 block text-sm font-semibold text-white'>
								Work Email*
							</label>
							<input
								id='work-email'
								name='workEmail'
								type='email'
								required
								placeholder='work@email.com'
								className='h-14 w-full rounded-xl border border-white/25 bg-white px-4 text-lg text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none'
							/>
						</div>

						<div>
							<label htmlFor='contact-number' className='mb-1 block text-sm font-semibold text-white'>
								Contact Number*
							</label>
							<input
								id='contact-number'
								name='contactNumber'
								type='tel'
								required
								placeholder='081234567890'
								className='h-14 w-full rounded-xl border border-white/25 bg-white px-4 text-lg text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none'
							/>
						</div>

						<div ref={subjectWrapperRef} className='relative'>
							<label className='mb-1 block text-sm font-semibold text-white'>Subject*</label>
							<button
								type='button'
								onClick={() => setIsSubjectOpen((prev) => !prev)}
								aria-expanded={isSubjectOpen}
								className='flex h-14 w-full items-center justify-between rounded-xl border border-white/25 bg-white px-4 text-left text-lg text-slate-700 focus:border-sky-400 focus:outline-none'
							>
								<span className={selectedSubject ? 'text-slate-700' : 'text-slate-400'}>
									{selectedSubject || 'Select Subject'}
								</span>
								<span className='text-xl text-[#123A66]'>▾</span>
							</button>

							{isSubjectOpen ? (
								<div className='absolute z-20 mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 shadow-lg'>
									<ul className='max-h-56 space-y-1 overflow-auto pr-1'>
										{subjectOptions.map((subject) => (
											<li key={subject}>
												<button
													type='button'
													onClick={() => selectSubject(subject)}
													className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-slate-700 transition-colors duration-200 hover:bg-slate-50 ${selectedSubject === subject ? 'bg-sky-50 text-sky-700' : ''}`}
												>
													<span>{subject}</span>
													{selectedSubject === subject ? <span aria-hidden='true'>✓</span> : null}
												</button>
											</li>
										))}
									</ul>
								</div>
							) : null}
						</div>

						<div>
							<label htmlFor='message' className='mb-1 block text-sm font-semibold text-white'>
								Message*
							</label>
							<textarea
								id='message'
								name='message'
								required
								rows={4}
								placeholder='Message'
								className='w-full rounded-xl border border-white/25 bg-white px-4 py-3 text-lg text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none'
							/>
						</div>

						<button
							type='submit'
							className='h-14 w-full rounded-xl bg-[#d9edf7] text-lg font-semibold text-sky-600 transition-colors duration-300 hover:bg-[#c6e4f2]'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
