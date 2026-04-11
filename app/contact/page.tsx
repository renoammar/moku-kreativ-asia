import React from 'react'
import type { Metadata } from 'next'
import ProfessionalTeamSection from '../components/contact-us-comp/ProfessionalProfile'
import ContactUsHero from '../components/contact-us-comp/ContactUsHero'
import MapLocation from '../components/beranda/MapLocation'

export const metadata: Metadata = {
  title: 'Contact | Moku Kreativ Asia',
  description:
    'Hubungi Moku Kreativ Asia via email atau WhatsApp untuk layanan penyusunan laporan dan event.',
}
function ContactUsPage() {
  return (
    <div>
      <ContactUsHero />
      <ProfessionalTeamSection />
      <MapLocation />
    </div>
  )
}

export default ContactUsPage