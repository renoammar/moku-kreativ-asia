import PressHighlightCard from '../UI/PressHighlightCard'

const portfolioHighlights = [
  {
    // date: 'Feb 25, 2026',
    title: 'Belanja Online di Bulan Ramadan Hingga Menjelang Lebaran 2026 Lebih Cerdas, ...',
    readMoreLabel: 'Read more',
    titleHref: '#',
  },
  {
    // date: 'Jan 26, 2026',
    title: 'SIRCLO Ungkap Pola Belanja Konsumen untuk Membantu Brand Memaksimalkan ...',
    titleHref: '#',
  },
  {
    // date: 'Dec 19, 2025',
    title: 'SIRCLO Insights Webinar 2025: Soroti Kesiapan Industri E-Commerce Hadapi Lanska...',
    titleHref: '#',
  },
]

function PressHighlights() {
  return (
    <section className=' px-4 py-14 md:px-8 md:py-20'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <h2 className='text-4xl font-semibold text-[#123A66] md:text-[46px]'>Portofolio</h2>

          <a
            href='#'
            className='inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-6 py-3 text-xl font-medium text-sky-500 transition-colors duration-300 hover:bg-sky-200 md:text-2xl'
          >
            See all portofolio
            <span aria-hidden='true'>→</span>
          </a>
        </div>

        <div className='mt-8 grid gap-8 md:mt-10 md:grid-cols-3'>
          {portfolioHighlights.map((item) => (
            <PressHighlightCard key={item.title} title={item.title} titleHref={item.titleHref} readMoreLabel={item.readMoreLabel} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PressHighlights