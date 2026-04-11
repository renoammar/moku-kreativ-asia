import React from 'react'
import type { Metadata } from 'next'
import CompanyProfileHero from '../components/company-profile-components/CompanyProfileHero'
import CompanyProfileDescription from '../components/company-profile-components/CompanyProfileDescription'
import MiniBannerCompanyProfile from '../components/company-profile-components/MiniBannerCompanyProfile'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Company Profile | Moku Kreativ Asia',
  description:
    'Pendekatan terintegrasi dalam pembuatan company profile untuk memperkuat branding, meningkatkan kepercayaan audiens, dan membuka peluang kolaborasi.',
}

function CompanyProfilePage() {
  return (
    <>
      <CompanyProfileHero />
      <CompanyProfileDescription />
      <LayananLainnya />
      <MiniBannerCompanyProfile />
    </>
  )
}

export default CompanyProfilePage