import React from 'react'
import type { Metadata } from 'next'
import AsuranceHero from '../components/assurance-compo/AsuranceHero'
import AssuranceDescription from '../components/assurance-compo/AssuranceDescription'
import AssuranceClientsList from '../components/assurance-compo/AssuranceClientsList'
import MiniBannerAssurance from '../components/assurance-compo/MiniBannerAssurance'
import LayananLainnya from '../components/UI/LayananLainnya'

export const metadata: Metadata = {
  title: 'Assurance AA1000 | Moku Kreativ Asia',
  description:
    'Assurance berbasis standar AA1000 AccountAbility untuk menilai kinerja keberlanjutan dan penerapan prinsip AccountAbility secara menyeluruh.',
}
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