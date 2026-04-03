import React from 'react'
import ProfessionalTeamSection from '../components/contact-us-comp/ProfessionalProfile'
import ContactUsHero from '../components/contact-us-comp/ContactUsHero'
import MapLocation from '../components/beranda/MapLocation'
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