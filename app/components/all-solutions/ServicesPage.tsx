import React from 'react';
import { HiOutlineShieldCheck, HiOutlineUsers, HiOutlineDocumentReport, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceItem {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  badge?: string;
}

const services: ServiceItem[] = [
  {
    title: "Assurance Berbasis Standar AA1000 AccountAbility (AA1000 AS v3)",
    badge: "AKURASI TINGGI",
    description: "Assurance Standard terkemuka di dunia yang berfokus pada evaluasi kinerja keberlanjutan perusahaan. Proses kami tidak hanya memverifikasi data, tetapi juga menilai bagaimana Anda menerapkan Prinsip-Prinsip AccountAbility.",
    features: ["Verifikasi data akurat dan reliable", "Audit transparansi pelaporan", "Compliance check terhadap standar"],
    icon: <HiOutlineShieldCheck className="w-8 h-8 text-white" />,
    color: "bg-[#00b67a]",
  },
  {
    title: "Assurance Berbasis ISAE 3000 dan ISSA 5000",
    badge: "EXPERT TEAM",
    description: "Standar internasional yang diakui secara global untuk penjaminan atas informasi non-keuangan. Kami menerapkan kerangka kerja ini untuk memberikan tingkat keyakinan yang tinggi (high level of assurance) kepada investor dan regulator.",
    features: ["Tim bersertifikat CPA, CSRS, CSRA", "Pengalaman 15+ tahun sustainability", "Keahlian multi-industri"],
    icon: <HiOutlineUsers className="w-8 h-8 text-white" />,
    color: "bg-[#4285f4]",
  },
  {
    title: "Annual Report",
    description: "Layanan penyusunan Laporan Tahunan kami dirancang untuk menghadirkan Annual Report yang terintegrasi, kredibel, dan berstandar internasional, selaras dengan IFRS, PSAK berbasis IFRS, regulasi OJK, serta IFRS Sustainability (S1 dan S2).",
    features: ["Penyusunan laporan yang akurat dan terstruktur", "Penguatan dan transparansi kinerja perusahaan", "Kesesuaian dengan standar dan regulasi yang berlaku"],
    icon: <HiOutlineDocumentReport className="w-8 h-8 text-white" />,
    color: "bg-slate-700",
  },
  {
    title: "Sustainability Report",
    description: "Pendampingan profesional untuk membantu perusahaan menyusun laporan keberlanjutan yang terstruktur, terukur, dan sesuai standar seperti GRI, POJK, atau ISSB, guna mengungkapkan kinerja ESG secara transparan dan strategis.",
    features: ["Penyusunan data ESG yang akurat dan dapat dipercaya", "Penyajian laporan yang transparan dan terstruktur", "Kesesuaian dengan standar dan regulasi yang berlaku"],
    icon: <HiOutlineDocumentReport className="w-8 h-8 text-white" />,
    color: "bg-emerald-600",
  }
];

export default function ServicesPage() {
  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          Our Services
        </span>
        <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-4">Layanan Kami</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Solusi lengkap untuk kebutuhan assurance sustainability report Anda dengan standar internasional
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-xl ${index === 0 ? 'bg-[#f0fff4]' : index === 1 ? 'bg-[#f0f7ff]' : 'bg-white'}`}
          >
            <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
              {service.icon}
            </div>

            {service.badge && (
              <span className="text-[10px] font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded mb-4 inline-block">
                {service.badge}
              </span>
            )}

            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
              {service.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-700">
                  <span className="mr-2 text-emerald-500 mt-1">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90 ${service.color}`}>
              Lihat Detail <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}