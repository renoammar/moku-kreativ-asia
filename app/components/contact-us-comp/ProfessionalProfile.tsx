"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

interface ProfessionalProfile {
  name: string
  role: string
  bio: string
  highlights: string[]
  image: string
}

const professionals: ProfessionalProfile[] = [
  {
    name: "Indriayu Afriana, M.S.M., AAAIK, AMII, Dip.CII, CIHCM, CPMP, CRSR, CSP, CPoF, CSRA, GRCE, ACSAP",
    role: "Senior Professional - Sustainability Governance, Risk, and CSR",
    image: "/images/professionals/Frame-142.png",
    bio: "Seorang profesional senior di sektor keuangan dengan pengalaman lebih dari 20 tahun, Indriayu memiliki spesialisasi dalam tata kelola keberlanjutan, manajemen risiko, dan CSR - Islamic philantropy.\n\nIa memegang Sertifikasi Manajemen Risiko Perbankan Level 5, Sertifikasi Menejemen Risiko (GRCE) memegang Sertifikat profesional Asuransi kerugian dari Indonesia (AAAIK), Malaysia (AMII) dan Chartered Loncon (CII). Merupakan Profesional tersertifikasi dalam Penyusunan Laporan Kerberlanjutan dengan standard GRI dan Profesional teregister di Accountability.org untuk Assurance dengan standard AA1000AS dan ISAE 3000.\n\nPada tahun 2024, ia dianugerahi penghargaan Outstanding Leader in Sustainability oleh Olahkarsa.\n\nSaat ini, ia aktif mengembangkan kepemimpinan pemikiran di bidang pelaporan keberlanjutan, inovasi, filantropi Islam, dan manajemen strategis, dengan fokus pada integrasi tata kelola kelembagaan dan transformasi berbasis nilai untuk menciptakan dampak jangka panjang lintas sektor.",
    highlights: [
      "tata kelola keberlanjutan",
      "manajemen risiko",
      "CSR - Islamic philantropy",
      "Assurance AA1000AS dan ISAE 3000"
    ]
  },
  {
    name: "Findi Verliana, S.E., M.H., CSRS, CSRA., ACSAP.",
    role: "Sustainability and Corporate Reporting Professional",
    image: "/images/professionals/Frame-143.png",
    bio: "Profesional di bidang keberlanjutan dan pelaporan korporasi dengan pengalaman lebih dari 10 tahun dalam penyusunan Annual Report dan Sustainability Report bagi perusahaan, institusi publik, serta organisasi nirlaba di Indonesia. Berbekal Magister Hukum, ia mengintegrasikan perspektif regulasi dan komunikasi strategis untuk memastikan kepatuhan, transparansi, serta keselarasan dengan standar keberlanjutan.\n\nBersertifikasi internasional Sustainability Assurance (AA1000AS) dari AccountAbility, keahliannya mencakup materiality assessment, stakeholder engagement, serta penyelarasan dengan GRI dan SDGs. Ia membantu organisasi memenuhi kewajiban regulatif sekaligus mengkomunikasikan penciptaan nilai jangka panjang secara terintegrasi dan berbasis ESG.",
    highlights: [
      "Annual Report dan Sustainability Report",
      "materiality assessment",
      "stakeholder engagement",
      "GRI dan SDGs"
    ]
  },
  {
    name: "Indra Sigit Satyaputra, S.E.",
    role: "Senior Executive - Maritime and BUMN",
    image: "/images/professionals/Frame-144.png",
    bio: "Seorang eksekutif senior dengan pengalaman lebih dari 25 tahun di lingkungan industri Maritim dan BUMN, termasuk menjabat sebagai Direktur PT Pengerukan Indonesia (RUKINDO). Ia memimpin berbagai inisiatif strategis di bidang layanan kepelabuhanan, infrastruktur maritim, dan operasi pengerukan.\n\nMemiliki keahlian mendalam dalam tata kelola Badan Usaha Milik Negara (BUMN) serta perumusan kebijakan strategis, ia berperan signifikan dalam menyelaraskan arah korporasi dengan prioritas pembangunan nasional, serta menerjemahkannya ke dalam penyusunan laporan korporasi yang kredibel, transparan, dan akuntabel.\n\nKepemimpinannya ditandai oleh komitmen terhadap keunggulan operasional, transformasi kelembagaan, serta penguatan ekosistem pelabuhan dan maritim Indonesia melalui pengembangan infrastruktur publik yang terintegrasi dan berkelanjutan.",
    highlights: [
      "layanan kepelabuhanan",
      "infrastruktur maritim",
      "tata kelola BUMN",
      "laporan korporasi kredibel"
    ]
  },
  {
    name: "Hanan Octiana, S.Ak",
    role: "Accounting and Tax Professional",
    image: "/images/professionals/Frame-145.png",
    bio: "Hanan Octiana, S.Ak merupakan lulusan Sarjana Akuntansi yang memiliki sertifikasi Brevet A & B, dengan pengalaman profesional lebih dari lima tahun di bidang akuntansi dan perpajakan.\n\nIa memiliki kompetensi dalam penyusunan laporan keuangan, kepatuhan perpajakan, rekonsiliasi, serta pengelolaan administrasi fiskal sesuai dengan regulasi yang berlaku.\n\nDengan pemahaman yang kuat terhadap standar akuntansi dan ketentuan perpajakan nasional, Hanan dikenal atas ketelitian, akurasi, serta komitmennya dalam memastikan tata kelola keuangan yang transparan dan akuntabel. Ia berpengalaman mendukung kebutuhan pelaporan perusahaan secara tepat waktu dan sesuai standar profesional.",
    highlights: [
      "laporan keuangan",
      "kepatuhan perpajakan",
      "rekonsiliasi",
      "administrasi fiskal"
    ]
  }
]

export default function ProfessionalTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % professionals.length)
    }, 7000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const activeProfessional = professionals[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + professionals.length) % professionals.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % professionals.length)
  }

  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Image Section - Left */}
          <motion.div
            key={activeProfessional.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-3/4 w-full max-w-sm mx-auto overflow-hidden rounded-[28px] bg-slate-100"
          >
            <img
              src={activeProfessional.image}
              alt={activeProfessional.name}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-[#081833]/25 to-transparent" />
          </motion.div>

          {/* Content Section - Right */}
          <motion.div
            key={`${activeProfessional.name}-content`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-col space-y-6"
          >
            <header className="border-b border-slate-200 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Our Professionals</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#081833] md:text-4xl">
                {activeProfessional.name}
              </h2>
              <p className="mt-2 text-lg font-semibold text-[#123A66]">
                {activeProfessional.role}
              </p>
            </header>

            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              {activeProfessional.bio.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#081833]/5 px-5 py-3">
              <span className="text-base font-semibold text-[#0D3C74]">
                <span className="opacity-100">{activeIndex + 1}</span>
                <span className="mx-2 opacity-40">-</span>
                <span className="opacity-40">{professionals.length}</span>
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="rounded-full border border-[#0D3C74]/20 p-2 text-[#0D3C74] transition-colors hover:bg-[#0D3C74] hover:text-white"
                  aria-label="Show previous professional"
                >
                  <MdArrowBack size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full bg-[#0D3C74] p-2 text-white shadow-lg transition-colors hover:bg-[#082A55]"
                  aria-label="Show next professional"
                >
                  <MdArrowForward size={20} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}