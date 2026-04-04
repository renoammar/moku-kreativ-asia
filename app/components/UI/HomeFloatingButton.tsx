import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function HomeFloatingButton() {
  return (
    <Link
      href='/'
      aria-label='Back to home'
      className='group fixed bottom-6 right-6 z-[99998] flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-3 text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#1e293b]'
    >
      <FaHome className='h-4 w-4' />
      <span className='text-sm font-semibold'>Home</span>
    </Link>
  )
}
