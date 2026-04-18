import React from 'react'
import type { Metadata } from 'next'
import SustainabilityHero from '../components/sustainability-report-components/SustainabilityHero'
import SustainabilityReportDescription from '../components/sustainability-report-components/SustainabilityReportDescription'
import SustainabilityClientsList from '../components/sustainability-report-components/SustainabilityClientsList'
import MiniBannerSustainability from '../components/sustainability-report-components/MiniBannerSustainability'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Sustainability Report',
  description:
    'Penyusunan laporan keberlanjutan untuk menampilkan kinerja ESG secara jelas dan terstruktur, dengan narasi yang mencerminkan komitmen perusahaan.',
  alternates: {
    canonical: '/sustainability-report',
  },
  keywords: [
    'sustainability report',
    'laporan keberlanjutan',
    'ESG report',
    'penyusunan laporan ESG',
    'GRI report',
    'jasa sustainability report',
    'Moku Kreativ Asia',
  ],
  openGraph: {
    title: 'Sustainability Report | Moku Kreativ Asia',
    description:
      'Penyusunan laporan keberlanjutan untuk menampilkan kinerja ESG secara jelas dan terstruktur, dengan narasi yang mencerminkan komitmen perusahaan.',
    url: 'https://mokuasia.com/sustainability-report',
    images: [
      {
        url: '/images/beach-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Sustainability Report Moku Kreativ Asia',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability Report | Moku Kreativ Asia',
    description:
      'Penyusunan laporan keberlanjutan untuk menampilkan kinerja ESG secara jelas dan terstruktur, dengan narasi yang mencerminkan komitmen perusahaan.',
    images: ['/images/beach-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

function SustainabilityReportPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sustainability Report',
    serviceType: 'Penyusunan Laporan Keberlanjutan',
    description:
      'Penyusunan laporan keberlanjutan untuk menampilkan kinerja ESG secara jelas dan terstruktur, dengan narasi yang mencerminkan komitmen perusahaan.',
    provider: {
      '@type': 'Organization',
      name: 'Moku Kreativ Asia',
      url: 'https://mokuasia.com',
      logo: 'https://mokuasia.com/images/moku_icon.png',
    },
    areaServed: 'Indonesia',
    url: 'https://mokuasia.com/sustainability-report',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <SustainabilityHero />
      <SustainabilityReportDescription />
      <SustainabilityClientsList />
      <LayananLainnya />
      <MiniBannerSustainability />
    </>
  )
}

export default SustainabilityReportPage