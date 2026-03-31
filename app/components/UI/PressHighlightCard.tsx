

type PressHighlightCardProps = {
  title: string
  titleHref?: string
  readMoreLabel?: string
  imageSrc?: string
  imageAlt?: string
}

function PressHighlightCard({ title, titleHref = '#', readMoreLabel, imageSrc, imageAlt }: PressHighlightCardProps) {
  return (
    <article className='group'>
      <div className='relative overflow-hidden rounded-3xl rounded-br-[68px]'>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className='h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105'
            loading='lazy'
          />
        ) : (
          <div className='h-48 w-full bg-linear-to-br from-slate-200 via-slate-100 to-slate-300' />
        )}

        {readMoreLabel ? (
          <a
            href={titleHref}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/50'
          >
            {readMoreLabel}
          </a>
        ) : null}
      </div>

      {/* <p className='mt-4 text-base font-medium text-sky-500 md:text-lg'>{date}</p> */}
      <h3 className='mt-4 text-3xl leading-[1.2] font-semibold text-[#123A66] md:text-[12px]'>
        <a href={titleHref} className='transition-colors duration-300 hover:text-sky-600'>
          {title}
        </a>
      </h3>
    </article>
  )
}

export default PressHighlightCard
