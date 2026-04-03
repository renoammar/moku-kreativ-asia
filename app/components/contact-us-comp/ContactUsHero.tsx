import { MdEmail, MdPhone } from 'react-icons/md'
import MokuGradientBackground from '../UI/MokuGradientBackground'

function ContactUsHero() {
  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      <MokuGradientBackground />

      <div className='relative z-10 flex min-h-screen items-center px-4 py-16'>
        <div className='container mx-auto'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold leading-tight text-white md:text-[48px]'>
              Percayakan Penyusunan Laporan dan Event Anda kepada kami
            </h1>
            <p className='mt-4 text-lg text-white/90'>
              Anda dapat menghubungi kami via email dan WA sesuai nomor di bawah ini.
            </p>
          </div>

          <div className='mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2'>
            <div className='rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-xl'>
              <div className='flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15'>
                  <MdEmail className='h-6 w-6' />
                </div>
                <div>
                  <p className='text-sm uppercase tracking-[0.25em] text-white/70'>Email Support</p>
                  <a href='mailto:contact@mokuasia.com' className='text-lg font-semibold text-white'>
                    contact@mokuasia.com
                  </a>
                </div>
              </div>
            </div>

            <div className='rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-xl'>
              <div className='flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15'>
                  <MdPhone className='h-6 w-6' />
                </div>
                <div>
                  <p className='text-sm uppercase tracking-[0.25em] text-white/70'>Phone Support</p>
                  <p className='text-lg font-semibold text-white'>+62 896-2766-7568 (Reporting)</p>
                  <p className='text-lg font-semibold text-white'>+62 855-8827-737 (Event)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsHero