import React from 'react'
import type { Metadata } from 'next'
import CompanyProfileHero from '../components/company-profile-components/CompanyProfileHero'
import CompanyProfileDescription from '../components/company-profile-components/CompanyProfileDescription'
import MiniBannerCompanyProfile from '../components/company-profile-components/MiniBannerCompanyProfile'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Company Profile',
  description:
    'Pendekatan terintegrasi dalam pembuatan company profile untuk memperkuat branding, meningkatkan kepercayaan audiens, dan membuka peluang kolaborasi.',
  alternates: {
    canonical: '/company-profile',
  },
  keywords: [
    'company profile',
    'pembuatan company profile',
    'jasa company profile',
    'profil perusahaan',
    'branding perusahaan',
    'desain company profile',
    'Moku Kreativ Asia',
  ],
  openGraph: {
    title: 'Company Profile | Moku Kreativ Asia',
    description:
      'Pendekatan terintegrasi dalam pembuatan company profile untuk memperkuat branding, meningkatkan kepercayaan audiens, dan membuka peluang kolaborasi.',
    url: 'https://mokuasia.com/company-profile',
    images: [
      {
        url: '/images/beach-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Company Profile Moku Kreativ Asia',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Profile | Moku Kreativ Asia',
    description:
      'Pendekatan terintegrasi dalam pembuatan company profile untuk memperkuat branding, meningkatkan kepercayaan audiens, dan membuka peluang kolaborasi.',
    images: ['/images/beach-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

function CompanyProfilePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Company Profile',
    serviceType: 'Pembuatan Company Profile',
    description:
      'Pendekatan terintegrasi dalam pembuatan company profile untuk memperkuat branding, meningkatkan kepercayaan audiens, dan membuka peluang kolaborasi.',
    provider: {
      '@type': 'Organization',
      name: 'Moku Kreativ Asia',
      url: 'https://mokuasia.com',
      logo: 'https://mokuasia.com/images/moku_icon.png',
    },
    areaServed: 'Indonesia',
    url: 'https://mokuasia.com/company-profile',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <CompanyProfileHero />
      <CompanyProfileDescription />
      <LayananLainnya />
      <MiniBannerCompanyProfile />
    </>
  )
}

export default CompanyProfilePage