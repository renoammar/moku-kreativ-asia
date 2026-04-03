type LogoGroup = 'home' | 'annual-report' | 'sustainability-report' | 'assurance'

type PartnerLogo = {
  id: string
  src: string
  alt: string
  groups: LogoGroup[]
}

export const partnerLogos: PartnerLogo[] = [
  {
    id: 'ipcc',
    src: '/images/partners/ipcc-logo-2.png',
    alt: 'IPCC',
    groups: ['home'],
  },
  {
    id: 'jetro',
    src: '/images/partners/JETRO.png',
    alt: 'JETRO',
    groups: ['home'],
  },
  {
    id: 'bpkh',
    src: '/images/partners/Logo BPKH.svg',
    alt: 'BPKH',
    groups: ['home'],
  },
  {
    id: 'damri',
    src: '/images/partners/logo damri.png',
    alt: 'Damri',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
  {
    id: 'isei',
    src: '/images/partners/Logo ISEI.png',
    alt: 'ISEI',
    groups: ['home'],
  },
  {
    id: 'kemenperin',
    src: '/images/partners/Logo Kemenperin.png',
    alt: 'Kemenperin',
    groups: ['home'],
  },
  {
    id: 'kemendikbud',
    src: '/images/partners/Logo Kementerian Pendidikan dan Kebudayaan (Kemendikbud) (PNG-480p) - koleksilogo.png',
    alt: 'Kemendikbud',
    groups: ['home'],
  },
  {
    id: 'lckm',
    src: '/images/partners/Logo LCKM.png',
    alt: 'LCKM',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
  {
    id: 'maximus-insurance',
    src: '/images/partners/Logo Maximus Insurance.png',
    alt: 'Maximus Insurance',
    groups: ['home', 'assurance'],
  },
  {
    id: 'noera',
    src: '/images/partners/Logo Noera.webp',
    alt: 'Noera',
    groups: ['home'],
  },
  {
    id: 'ptp',
    src: '/images/partners/Logo PTP.png',
    alt: 'PTP',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
  {
    id: 'rukindo',
    src: '/images/partners/Logo Rukindo.png',
    alt: 'Rukindo',
    groups: ['home'],
  },
  {
    id: 'rukun-raharja',
    src: '/images/partners/Logo Rukun Raharja.svg',
    alt: 'Rukun Raharja',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
  {
    id: 'tanjung-bunga',
    src: '/images/partners/logo tanjung bunga.png',
    alt: 'Tanjung Bunga',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
  {
    id: 'lippo-cikarang',
    src: '/images/partners/LogoLippoCikarang.png',
    alt: 'Lippo Cikarang',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
  {
    id: 'sewatama',
    src: '/images/partners/sewatama.jpg',
    alt: 'Sewatama',
    groups: ['home', 'annual-report', 'sustainability-report'],
  },
]

const toLogoItem = (logo: PartnerLogo) => ({ src: logo.src, alt: logo.alt })

export const getLogosByGroup = (group: LogoGroup) =>
  partnerLogos.filter((logo) => logo.groups.includes(group)).map(toLogoItem)

export const homePartnerLogos = getLogosByGroup('home')
export const annualReportClientLogos = getLogosByGroup('annual-report')
export const sustainabilityClientLogos = getLogosByGroup('sustainability-report')
export const assuranceClientLogos = getLogosByGroup('assurance')