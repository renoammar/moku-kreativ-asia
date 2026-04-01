import React from 'react';
import { 
  FaBolt, 
  FaChartLine,
  FaBookOpen,
  FaBalanceScale,
  FaLightbulb,
  FaAward
} from 'react-icons/fa';
import { MdOutlineVerifiedUser, MdAssignment } from 'react-icons/md';
import WhyChooseUsCard from '../UI/WhyChooseUsCard';
import ScopeBenefitSection from '../UI/ScopeBenefitSection';

const AnnualReportDescription = () => {
  return (
    <div className="mx-auto max-w-6xl bg-white p-6 font-sans text-[#0D3C74] md:p-12">
      
      {/* --- SECTION 1: Deskripsi Layanan --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0D3C74]">Annual Report Service</h2>
          <p className="leading-relaxed text-[#0D3C74]/80">
            Penyusunan Annual Report merupakan proses pengembangan laporan tahunan yang merangkum kinerja, strategi, serta pencapaian perusahaan selama satu tahun. Layanan ini memastikan bahwa laporan tidak hanya akurat secara data, tetapi juga mampu menyampaikan narasi perusahaan secara jelas, transparan, dan sesuai dengan standar yang berlaku.
          </p>

          <p className="font-semibold text-[#0D3C74]">Kami mengadopsi pendekatan komprehensif yang mencakup:</p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Kejelasan:</span> Penyajian kinerja perusahaan kepada stakeholder agar mudah dipahami.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Relevansi:</span> Informasi yang disampaikan sesuai dengan kondisi bisnis dan industri terkini.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Konsistensi:</span> Penyelarasan pesan perusahaan dengan strategi dan arah pertumbuhan masa depan.</p>
            </div>
          </div>

          <p className="pt-4 text-[#0D3C74]/90">
            Hasilnya adalah Annual Report yang lebih informatif, kredibel, dan mampu memperkuat citra perusahaan di mata investor maupun stakeholder.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#125ff9]/20 bg-[#125ff9]/5 p-6">
            <a
              href="https://wa.me/6289627667568"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 rounded-full border border-[#125ff9] bg-[#125ff9] px-8 py-3 font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#0E55E2] hover:shadow-md"
            >
              <FaBolt className="text-white" /> Hubungi Kami
            </a>
          </div>
          <WhyChooseUsCard />
        </div>
      </div>

      {/* --- SECTION 2: Penuhi Standar OJK (New Section based on Image) --- */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-10">Penuhi Standar OJK dengan Annual Report Profesional</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><FaBalanceScale /></div>
            <h4 className="font-bold text-lg mb-3">Kepatuhan Regulasi</h4>
            <p className="text-sm text-slate-600">Kami memastikan Annual Report Anda disusun sesuai standar POJK dan SEOJK terbaru.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><FaLightbulb /></div>
            <h4 className="font-bold text-lg mb-3">Visual Informatif</h4>
            <p className="text-sm text-slate-600">Desain infografis yang jelas dan menarik untuk mendukung penyampaian informasi secara efektif.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><FaAward /></div>
            <h4 className="font-bold text-lg mb-3">Expertise yang Terpercaya</h4>
            <p className="text-sm text-slate-600">Didukung oleh tim ahli dengan pengalaman luas dalam menangani perusahaan BUMN, dan multinasional.</p>
          </div>
        </div>
      </div>

      <hr className="mb-20 border-[#125ff9]/15" />

      {/* --- SECTION 3: Scope of Work --- */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Scope of Work Annual Report</h2>
          <p className="mx-auto max-w-3xl text-[#0D3C74]/80">
            Layanan Annual Report kami mencakup pengembangan laporan tahunan perusahaan dengan pendekatan strategis, kreatif, dan berbasis regulasi yang berlaku.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Analisis Kinerja", desc: "Mengolah data keuangan dan operasional secara terstruktur", icon: <FaChartLine /> },
            { title: "Struktur Konten", desc: "Menyusun laporan agar alur informasi lebih jelas", icon: <FaBookOpen /> },
            { title: "Kolaborasi Stakeholder", desc: "Sinkronisasi input dari tim internal perusahaan", icon: <FaUsers /> },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-[#125ff9]/15 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-block rounded-full bg-[#125ff9]/12 p-4 text-2xl text-[#125ff9]">
                {item.icon}
              </div>
              <h4 className="mb-2 text-lg font-bold text-[#0D3C74]">{item.title}</h4>
              <p className="text-sm text-[#0D3C74]/70">{item.desc}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* --- SECTION 4: Ruang Lingkup & Manfaat --- */}
      <ScopeBenefitSection
        scopeTitle="Ruang Lingkup Layanan"
        scopeDescription="Kami memberikan solusi end-to-end mulai dari pengumpulan data hingga penyajian laporan final."
        scopeItems={[
          {
            icon: <MdAssignment className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Proses Pengembangan",
            description: "Melakukan pengumpulan data, analisis informasi, serta penyusunan struktur laporan yang mencerminkan kinerja dan strategi perusahaan secara menyeluruh.",
          },
          {
            icon: <MdOutlineVerifiedUser className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Penyusunan & Penyajian",
            description: "Mengembangkan konten, narasi, serta desain laporan tahunan yang sesuai dengan standar pelaporan dan kebutuhan komunikasi stakeholder.",
          },
        ]}
        benefitTitle="Manfaat bagi Perusahaan"
        benefitItems={[
          "Menyajikan kinerja perusahaan secara jelas dan terpercaya",
          "Meningkatkan transparansi kepada investor dan stakeholder",
          "Memastikan kesesuaian laporan dengan standar dan regulasi",
          "Memperkuat citra dan reputasi perusahaan di pasar",
          "Menyampaikan strategi dan arah pertumbuhan secara efektif",
        ]}
      />

    </div>
  );
};

export default AnnualReportDescription;