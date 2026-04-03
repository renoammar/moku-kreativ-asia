import React from 'react';
import { 
  FaUsers, 
  FaBolt, 
  FaGlobe, 
  FaHandshake 
} from 'react-icons/fa';
import { MdOutlineVerifiedUser, MdAssignment } from 'react-icons/md';
import WhyChooseUsCard from '../UI/WhyChooseUsCard';
import ScopeBenefitSection from '../UI/ScopeBenefitSection';

const AssuranceDescription = () => {
  return (
    <div className="mx-auto max-w-6xl bg-white p-6 font-sans text-[#0D3C74] md:p-12">
      
      {/* --- SECTION 1: Deskripsi Layanan (Based on Image) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0D3C74]">Deskripsi Layanan</h2>
          <p className="leading-relaxed text-[#0D3C74]/80">
            Assurance Standard terkemuka di dunia yang berfokus pada evaluasi kinerja 
            keberlanjutan perusahaan. Proses kami tidak hanya memverifikasi data, tetapi juga 
            menilai bagaimana Anda menerapkan Prinsip-Prinsip AccountAbility:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Inklusivitas:</span> Sejauh mana Anda melibatkan pemangku kepentingan dalam mengembangkan dan mengimplementasikan strategi keberlanjutan.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Materialitas:</span> Apakah Anda telah mengidentifikasi dan memprioritaskan isu-isu ESG yang paling relevan dan signifikan bagi bisnis serta pemangku kepentingan Anda.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Responsivitas:</span> Bagaimana Anda merespons isu dan kekhawatiran material dari para pemangku kepentingan.</p>
            </div>
          </div>

          <p className="pt-4 text-[#0D3C74]/90">
            <span className="font-bold text-[#125ff9]">Manfaat bagi Anda:</span> Meningkatkan kredibilitas laporan secara signifikan, memperkuat hubungan dengan pemangku kepentingan, dan memastikan laporan Anda benar-benar relevan.
          </p>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#125ff9]/20 bg-[#125ff9]/8 p-6">
            <a
              href="https://wa.me/6289627667568"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 rounded-full border border-[#125ff9] bg-[#125ff9] px-8 py-3 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#0E55E2] hover:shadow-md"
            >
              <FaBolt className="text-white" /> Hubungi Kami
            </a>
          </div>
          <WhyChooseUsCard showLogo />
        </div>
      </div>

      <hr className="mb-20 border-[#125ff9]/15" />

      {/* --- SECTION 2: Scope of Work --- */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Scope of Work Assurance</h2>
          <p className="mx-auto max-w-3xl text-[#0D3C74]/80">
            Assurance atas Sustainability Report (SR) adalah bentuk validasi independen yang disampaikan melalui pernyataan resmi. 
            Kami memastikan laporan Anda memiliki integritas tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Inklusivitas", desc: "Stakeholder dilibatkan secara aktif", icon: <FaUsers /> },
            { title: "Materialitas", desc: "Relevansi dan prioritas isu ESG", icon: <FaGlobe /> },
            { title: "Responsivitas", desc: "Efektivitas menanggapi ekspektasi", icon: <FaHandshake /> },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-[#125ff9]/15 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-block rounded-full bg-[#125ff9]/12 p-4 text-2xl text-[#125ff9]">
                {item.icon}
              </div>
              <h4 className="mb-2 text-lg font-bold text-[#0D3C74]">{item.title}</h4>
              <p className="text-sm text-[#0D3C74]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 3: Ruang Lingkup & Manfaat --- */}
      <ScopeBenefitSection
        scopeTitle="Ruang Lingkup Assurance"
        scopeDescription="Layanan mencakup evaluasi menyeluruh terhadap aspek ESG dan program CSR perusahaan."
        scopeItems={[
          {
            icon: <MdAssignment className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Proses Assurance",
            description: "Evaluasi program CSR dan laporan keberlanjutan sesuai standar sektor industri.",
          },
          {
            icon: <MdOutlineVerifiedUser className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Penerbitan Statement",
            description: "Pernyataan independen berdasarkan analisis data dan observasi standar AA1000.",
          },
        ]}
        benefitTitle="Manfaat bagi Perusahaan"
        benefitItems={[
          "Meningkatkan kepercayaan investor",
          "Memastikan kesesuaian standar global",
          "Membangun awareness internal",
          "Menunjukkan komitmen keberlanjutan",
          "Mendorong kepedulian lingkungan",
        ]}
        benefitItemClassName="flex items-center gap-3"
        benefitIconClassName="text-white/90"
      />

    </div>
  );
};

export default AssuranceDescription;