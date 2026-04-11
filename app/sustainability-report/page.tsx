import React from 'react'
import type { Metadata } from 'next'
import SustainabilityHero from '../components/sustainability-report-components/SustainabilityHero'
import SustainabilityReportDescription from '../components/sustainability-report-components/SustainabilityReportDescription'
import SustainabilityClientsList from '../components/sustainability-report-components/SustainabilityClientsList'
import MiniBannerSustainability from '../components/sustainability-report-components/MiniBannerSustainability'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Sustainability Report | Moku Kreativ Asia',
  description:
    'Penyusunan laporan keberlanjutan untuk menampilkan kinerja ESG secara jelas dan terstruktur, dengan narasi yang mencerminkan komitmen perusahaan.',
}

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