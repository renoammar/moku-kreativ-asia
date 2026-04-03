'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import ContactFloating from './ContactFloating'
import Footer from './Footer'
import Navbar from './Navbar'

type SiteChromeProps = {
  children: ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const isStudioRoute = pathname?.startsWith('/studio-moku-asia')

  if (isStudioRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ContactFloating />
    </>
  )
}
