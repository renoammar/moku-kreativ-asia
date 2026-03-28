import React from 'react'
import CompanyProfileHero from '../components/company-profile-components/CompanyProfileHero'
import CompanyProfileDescription from '../components/company-profile-components/CompanyProfileDescription'
import MiniBannerCompanyProfile from '../components/company-profile-components/MiniBannerCompanyProfile'
import LayananLainnya from '../components/UI/LayananLainnya'

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