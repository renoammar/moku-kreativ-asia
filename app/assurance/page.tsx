import React from 'react'
import AsuranceHero from '../components/assurance-compo/AsuranceHero'
import AssuranceDescription from '../components/assurance-compo/AssuranceDescription'
import ClientsList from '../components/assurance-compo/ClientsList'
import MiniBannerAssurance from '../components/assurance-compo/MiniBannerAssurance'
function AssurancePage() {
  return (
    <>
      <AsuranceHero />
      <AssuranceDescription />
      <ClientsList />
      <MiniBannerAssurance />
    </>
  )
}

export default AssurancePage