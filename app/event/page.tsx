import type { Metadata } from 'next'
import EventServices from "../components/event-page/EventServices"
import MiniBannerEvent from "../components/event-page/MiniBannerEvent"
import PortofolioEvent from "../components/event-page/PortofolioEvent"
import ThreeDimensionalDesign from "../components/event-page/ThreeDimensionalDesign"

export const metadata: Metadata = {
  title: 'Event Services',
  description:
    'Event services end-to-end untuk MICE event management, program Key Opinion Leader, dan 3D design yang memperkuat brand.',
  alternates: {
    canonical: '/event',
  },
  keywords: [
    'event organizer',
    'event services',
    'MICE event management',
    'key opinion leader',
    'KOL marketing',
    '3D design event',
    'branding event',
    'Moku Kreativ Asia',
  ],
  openGraph: {
    title: 'Event Services | Moku Kreativ Asia',
    description:
      'Event services end-to-end untuk MICE event management, program Key Opinion Leader, dan 3D design yang memperkuat brand.',
    url: 'https://mokuasia.com/event',
    images: [
      {
        url: '/images/beach-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Services Moku Kreativ Asia',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Services | Moku Kreativ Asia',
    description:
      'Event services end-to-end untuk MICE event management, program Key Opinion Leader, dan 3D design yang memperkuat brand.',
    images: ['/images/beach-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Event Services',
    serviceType: 'Event Organizer and Marketing Services',
    description:
      'Event services end-to-end untuk MICE event management, kolaborasi Key Opinion Leader, dan 3D design yang memperkuat brand.',
    provider: {
      '@type': 'Organization',
      name: 'Moku Kreativ Asia',
      url: 'https://mokuasia.com',
      logo: 'https://mokuasia.com/images/moku_icon.png',
    },
    areaServed: 'Indonesia',
    url: 'https://mokuasia.com/event',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <EventServices />
      <PortofolioEvent />
      <ThreeDimensionalDesign />
      <MiniBannerEvent />
    </>
  )
}

export default page