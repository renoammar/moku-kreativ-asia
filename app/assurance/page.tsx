import React from 'react'
import AsuranceHero from '../components/assurance-compo/AsuranceHero'
import AssuranceDescription from '../components/assurance-compo/AssuranceDescription'
import AssuranceClientsList from '../components/assurance-compo/AssuranceClientsList'
import MiniBannerAssurance from '../components/assurance-compo/MiniBannerAssurance'
import LayananLainnya from '../components/UI/LayananLainnya'
function AssurancePage() {
  return (
    <>
      <AsuranceHero />
      <AssuranceDescription />
      <AssuranceClientsList />
      <LayananLainnya />
      <MiniBannerAssurance />
    </>
  )
}

export default AssurancePage