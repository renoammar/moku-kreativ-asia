'use client';
import React from 'react';
import { HiOutlineShieldCheck, HiOutlineUsers, HiOutlineDocumentReport } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const services: ServiceItem[] = [
  {
    title: "Assurance Berbasis Standar AA1000 AccountAbility (AA1000 AS v3)",
    description: "Assurance Standard terkemuka di dunia yang berfokus pada evaluasi kinerja keberlanjutan perusahaan. Proses kami tidak hanya memverifikasi data, tetapi juga menilai bagaimana Anda menerapkan Prinsip-Prinsip AccountAbility.",
    features: ["Verifikasi data akurat dan reliable", "Audit transparansi pelaporan", "Compliance check terhadap standar"],
    icon: <HiOutlineShieldCheck className="w-8 h-8 text-white" />,
    color: "bg-[#0D3C74]",
  },
  {
    title: "Assurance Berbasis ISAE 3000 dan ISSA 5000",
    description: "Standar internasional yang diakui secara global untuk penjaminan atas informasi non-keuangan. Kami menerapkan kerangka kerja ini untuk memberikan tingkat keyakinan yang tinggi (high level of assurance) kepada investor dan regulator.",
    features: ["Tim bersertifikat CPA, CSRS, CSRA", "Pengalaman 15+ tahun sustainability", "Keahlian multi-industri"],
    icon: <HiOutlineUsers className="w-8 h-8 text-white" />,
    color: "bg-[#0D3C74]",
  },
  {
    title: "Annual Report",
    description: "Layanan penyusunan Laporan Tahunan kami dirancang untuk menghadirkan Annual Report yang terintegrasi, kredibel, dan berstandar internasional, selaras dengan IFRS, PSAK berbasis IFRS, regulasi OJK, serta IFRS Sustainability (S1 dan S2).",
    features: ["Penyusunan laporan yang akurat dan terstruktur", "Penguatan dan transparansi kinerja perusahaan", "Kesesuaian dengan standar dan regulasi yang berlaku"],
    icon: <HiOutlineDocumentReport className="w-8 h-8 text-white" />,
    color: "bg-[#0D3C74]",
  },
  {
    title: "Sustainability Report",
    description: "Pendampingan profesional untuk membantu perusahaan menyusun laporan keberlanjutan yang terstruktur, terukur, dan sesuai standar seperti GRI, POJK, atau ISSB, guna mengungkapkan kinerja ESG secara transparan dan strategis.",
    features: ["Penyusunan data ESG yang akurat dan dapat dipercaya", "Penyajian laporan yang transparan dan terstruktur", "Kesesuaian dengan standar dan regulasi yang berlaku"],
    icon: <HiOutlineDocumentReport className="w-8 h-8 text-white" />,
    color: "bg-[#0D3C74]",
  }
];

export default function ServicesPage() {
  return (
    <section className="bg-white px-6 py-16 text-[#003B7E] md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto mb-12 max-w-7xl text-center md:mb-14">
        <h2 className="mt-4 mb-4 text-3xl font-bold text-[#003B7E] md:text-4xl lg:text-5xl">MOKU ASIA Reporting Services</h2>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#003B7E]/75 md:text-base">
          Solusi lengkap untuk kebutuhan assurance sustainability report Anda dengan standar internasional
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative flex h-full flex-col border border-[#0051B3]/12 bg-[#f7fbff] p-7 text-left shadow-[0_16px_36px_-24px_rgba(0,81,179,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0051B3]/20 hover:bg-white hover:shadow-[0_20px_44px_-24px_rgba(0,81,179,0.45)] md:p-8"
            style={{ borderRadius: '24px 24px 70px 24px' }}
          >
            <div className={`${service.color} mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg ring-4 ring-[#0051B3]/10`}>
              {service.icon}
            </div>

            <h3 className="mb-4 text-xl font-bold leading-snug text-[#003B7E] md:text-2xl">
              {service.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-[#003B7E]/75 md:text-base">
              {service.description}
            </p>

            <ul className="mb-8 space-y-3 text-[#003B7E]/85">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm">
                  <span className="mr-2 mt-1 text-[#0051B3]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#0051B3]/25 bg-[#0051B3] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#003B7E]"
            >
              Lihat Detail <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}