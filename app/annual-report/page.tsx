import React from 'react'
import type { Metadata } from 'next'
import AnnualReportHero from '../components/annual-report/AnnualReportHero'
import AnnualReportDescription from '../components/annual-report/AnnualReportDescription'
import AnnualReportClientsList from '../components/annual-report/AnnualReportClientsList'
import MiniBannerAnnualReport from '../components/annual-report/MiniBannerAnnualReport'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Annual Report | Moku Kreativ Asia',
  description:
    'Pendekatan komprehensif dalam penyusunan laporan tahunan untuk menyajikan kinerja perusahaan secara jelas, terstruktur, dan strategis.',
}

function AnnualReport() {
  return (
    <>
      <AnnualReportHero />
      <AnnualReportDescription />
      <AnnualReportClientsList />
      <LayananLainnya />
      <MiniBannerAnnualReport />
    </>
  )
}

export default AnnualReport