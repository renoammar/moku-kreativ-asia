import React from 'react'
import AnnualReportHero from '../components/annual-report/AnnualReportHero'
import AnnualReportDescription from '../components/annual-report/AnnualReportDescription'
import AnnualReportClientsList from '../components/annual-report/AnnualReportClientsList'
import MiniBannerAnnualReport from '../components/annual-report/MiniBannerAnnualReport'
import LayananLainnya from '../components/UI/LayananLainnya'

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