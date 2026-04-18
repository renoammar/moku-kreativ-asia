import React from 'react'
import type { Metadata } from 'next'
import AnnualReportHero from '../components/annual-report/AnnualReportHero'
import AnnualReportDescription from '../components/annual-report/AnnualReportDescription'
import AnnualReportClientsList from '../components/annual-report/AnnualReportClientsList'
import MiniBannerAnnualReport from '../components/annual-report/MiniBannerAnnualReport'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Annual Report',
  description:
    'Pendekatan komprehensif dalam penyusunan laporan tahunan untuk menyajikan kinerja perusahaan secara jelas, terstruktur, dan strategis.',
  alternates: {
    canonical: '/annual-report',
  },
  keywords: [
    'annual report',
    'laporan tahunan',
    'jasa annual report',
    'penyusunan annual report',
    'konsultan laporan tahunan',
    'Moku Kreativ Asia',
  ],
  openGraph: {
    title: 'Annual Report | Moku Kreativ Asia',
    description:
      'Pendekatan komprehensif dalam penyusunan laporan tahunan untuk menyajikan kinerja perusahaan secara jelas, terstruktur, dan strategis.',
    url: 'https://mokuasia.com/annual-report',
    images: [
      {
        url: '/images/beach-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Annual Report Moku Kreativ Asia',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annual Report | Moku Kreativ Asia',
    description:
      'Pendekatan komprehensif dalam penyusunan laporan tahunan untuk menyajikan kinerja perusahaan secara jelas, terstruktur, dan strategis.',
    images: ['/images/beach-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

function AnnualReport() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Annual Report',
    serviceType: 'Annual Report',
    description:
      'Pendekatan komprehensif dalam penyusunan laporan tahunan untuk menyajikan kinerja perusahaan secara jelas, terstruktur, dan strategis.',
    provider: {
      '@type': 'Organization',
      name: 'Moku Kreativ Asia',
      url: 'https://mokuasia.com',
      logo: 'https://mokuasia.com/images/moku_icon.png',
    },
    areaServed: 'Indonesia',
    url: 'https://mokuasia.com/annual-report',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <AnnualReportHero />
      <AnnualReportDescription />
      <AnnualReportClientsList />
      <LayananLainnya />
      <MiniBannerAnnualReport />
    </>
  )
}

export default AnnualReport