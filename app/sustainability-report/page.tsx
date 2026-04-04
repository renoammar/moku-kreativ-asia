import React from 'react'
import SustainabilityHero from '../components/sustainability-report-components/SustainabilityHero'
import SustainabilityReportDescription from '../components/sustainability-report-components/SustainabilityReportDescription'
import SustainabilityClientsList from '../components/sustainability-report-components/SustainabilityClientsList'
import MiniBannerSustainability from '../components/sustainability-report-components/MiniBannerSustainability'
import LayananLainnya from '../components/UI/LayananLainnya'

function SustainabilityReportPage() {
  return (
    <>
      <SustainabilityHero />
      <SustainabilityReportDescription />
      <SustainabilityClientsList />
      <LayananLainnya />
      <MiniBannerSustainability />
    </>
  )
}

export default SustainabilityReportPage