import React from 'react'
import type { Metadata } from 'next'
import AsuranceHero from '../components/assurance-compo/AsuranceHero'
import AssuranceDescription from '../components/assurance-compo/AssuranceDescription'
import AssuranceClientsList from '../components/assurance-compo/AssuranceClientsList'
import MiniBannerAssurance from '../components/assurance-compo/MiniBannerAssurance'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Assurance AA1000',
  description:
    'Assurance berbasis standar AA1000 AccountAbility untuk menilai kinerja keberlanjutan dan penerapan prinsip AccountAbility secara menyeluruh.',
  alternates: {
    canonical: '/assurance',
  },
  keywords: [
    'assurance AA1000',
    'AA1000 AccountAbility',
    'assurance sustainability report',
    'assurance laporan keberlanjutan',
    'verifikasi laporan ESG',
    'pernyataan assurance independen',
    'Moku Kreativ Asia',
  ],
  openGraph: {
    title: 'Assurance AA1000 | Moku Kreativ Asia',
    description:
      'Assurance berbasis standar AA1000 AccountAbility untuk menilai kinerja keberlanjutan dan penerapan prinsip AccountAbility secara menyeluruh.',
    url: 'https://mokuasia.com/assurance',
    images: [
      {
        url: '/images/beach-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Assurance AA1000 Moku Kreativ Asia',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assurance AA1000 | Moku Kreativ Asia',
    description:
      'Assurance berbasis standar AA1000 AccountAbility untuk menilai kinerja keberlanjutan dan penerapan prinsip AccountAbility secara menyeluruh.',
    images: ['/images/beach-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
function AssurancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Assurance AA1000',
    serviceType: 'Assurance AA1000 AccountAbility',
    description:
      'Assurance berbasis standar AA1000 AccountAbility untuk menilai kinerja keberlanjutan, verifikasi data, dan penerapan prinsip AccountAbility secara menyeluruh.',
    provider: {
      '@type': 'Organization',
      name: 'Moku Kreativ Asia',
      url: 'https://mokuasia.com',
      logo: 'https://mokuasia.com/images/moku_icon.png',
    },
    areaServed: 'Indonesia',
    url: 'https://mokuasia.com/assurance',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <AsuranceHero />
      <AssuranceDescription />
      <AssuranceClientsList />
      <LayananLainnya />
      <MiniBannerAssurance />
    </>
  )
}

export default AssurancePage