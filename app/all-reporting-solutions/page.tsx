import React from 'react'
import type { Metadata } from 'next'
import AllSolutionsHeroSection from '../components/all-solutions/AllSolutionsHeroSection'
import SolutionServices from '../components/all-solutions/SolutionServices'
import ServicesPage from '../components/all-solutions/ServicesPage'

export const metadata: Metadata = {
  title: 'Penyusunan Laporan | Moku Kreativ Asia',
  description:
    'Layanan penyusunan laporan yang komprehensif, termasuk Sustainability Report dan Annual Report, untuk kebutuhan regulator maupun kebutuhan khusus.',
}
function AllReportingSolutionPage() {
  return(
    <>
      <AllSolutionsHeroSection />
      <SolutionServices />
      <ServicesPage />

    </>
  )
}

export default AllReportingSolutionPage