import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Portfolio | Moku Kreativ Asia',
  description:
    'Kumpulan portofolio proyek reporting dan event yang dikerjakan oleh Moku Kreativ Asia.',
}

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
