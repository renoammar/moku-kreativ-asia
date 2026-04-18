import React from 'react';
import { 
  FaBolt, 
  FaGlobe, 
  FaLeaf,
  FaShieldAlt
} from 'react-icons/fa';
import { MdAssignment, MdOutlineAccountTree } from 'react-icons/md';
import WhyChooseUsCard from '../UI/WhyChooseUsCard';
import ScopeBenefitSection from '../UI/ScopeBenefitSection';

const SustainabilityReportDescription = () => {
  return (
    <div className="mx-auto max-w-6xl bg-white p-6 font-sans text-[#0D3C74] md:p-12">
      
      {/* --- SECTION 1: Deskripsi Layanan --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0D3C74]">Sustainability Report Service</h2>
          <p className="leading-relaxed text-[#0D3C74]/80">
            Penyusunan Sustainability Report merupakan proses pengembangan laporan keberlanjutan yang menggambarkan kinerja perusahaan dalam aspek lingkungan, sosial, dan tata kelola (ESG). Layanan ini memastikan bahwa laporan tidak hanya akurat secara data, tetapi juga mampu menyampaikan komitmen, dampak, dan strategi keberlanjutan perusahaan secara transparan.
          </p>

          <p className="font-semibold text-[#0D3C74]">Kami mengadopsi pendekatan komprehensif yang mencakup:</p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#125ff9] pl-4 py-1">
              <p><span className="font-bold">Kejelasan:</span> Penyajian kinerja ESG kepada stakeholder agar mudah dipahami dan terukur.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4 py-1">
              <p><span className="font-bold">Relevansi:</span> Fokus pada isu keberlanjutan yang paling berdampak terhadap bisnis dan industri Anda.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4 py-1">
              <p><span className="font-bold">Konsistensi:</span> Penyelarasan narasi laporan dengan strategi dan komitmen jangka panjang perusahaan.</p>
            </div>
          </div>

          <p className="pt-4 text-[#0D3C74]/90">
            <span className="font-bold text-[#125ff9]">Hasil Akhir:</span> Sustainability Report yang lebih kredibel, transparan, dan mampu memperkuat kepercayaan stakeholder serta positioning perusahaan dalam praktik keberlanjutan.
          </p>
        </div>

        {/* Sidebar Action Card */}
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#125ff9]/20 bg-[#125ff9]/5 p-8 text-center">
            <a
              href="https://wa.me/6289627667568"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 rounded-full border border-[#125ff9] bg-[#125ff9] px-8 py-3 font-medium shadow-sm w-full justify-center"
            >
              <FaBolt className="text-white" /> Hubungi Kami
            </a>
          </div>
          <WhyChooseUsCard />
        </div>
      </div>

      <hr className="mb-20 border-[#125ff9]/15" />

      {/* --- SECTION 2: Scope of Work --- */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ruang Lingkup Layanan Sustainability Report</h2>
          <p className="mx-auto max-w-3xl text-[#0D3C74]/80">
            Pendekatan strategis berbasis standar global dan sesuai dengan regulasi yang berlaku untuk memastikan pelaporan yang akuntabel.
          </p>
        </div>
        {/* card tambahan AI */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Transparansi ESG", desc: "Pengungkapan kinerja lingkungan dan sosial secara terbuka", icon: <FaLeaf /> },
            { title: "Standar Global", desc: "Penyelarasan dengan kerangka kerja GRI, ISSB, atau POJK", icon: <FaGlobe /> },
            { title: "Integritas Data", desc: "Validasi data materialitas yang relevan dengan bisnis", icon: <FaShieldAlt /> },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-[#125ff9]/15 bg-white p-6 text-center shadow-sm">
              <div className="mb-4 inline-block rounded-full bg-[#125ff9]/12 p-4 text-2xl text-[#125ff9]">
                {item.icon}
              </div>
              <h4 className="mb-2 text-lg font-bold text-[#0D3C74]">{item.title}</h4>
              <p className="text-sm text-[#0D3C74]/70">{item.desc}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* --- SECTION 3: Ruang Lingkup & Manfaat --- */}
      <ScopeBenefitSection
        scopeTitle="Ruang Lingkup Pekerjaan"
        scopeTitleClassName="text-2xl font-bold text-white border-b border-white/20 pb-4"
        scopeItems={[
          {
            icon: <MdOutlineAccountTree className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Proses Pengembangan",
            description: "Pengumpulan data ESG, analisis isu material, serta penyusunan struktur laporan yang mencerminkan kinerja dan dampak keberlanjutan perusahaan.",
          },
          {
            icon: <MdAssignment className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Penyusunan & Penyajian",
            description: "Pengembangan narasi dan desain laporan yang selaras dengan standar internasional (GRI) dan kebutuhan komunikasi stakeholder.",
          },
        ]}
        scopeItemClassName="flex items-start gap-4 rounded-xl bg-white/10 p-5"
        scopeItemDescClassName="text-sm text-white/80 leading-relaxed"
        benefitTitle="Manfaat bagi Perusahaan"
        benefitItems={[
          "Menyajikan kinerja ESG secara jelas dan terpercaya",
          "Meningkatkan transparansi kepada stakeholder dan investor",
          "Memastikan kesesuaian dengan standar dan regulasi",
          "Memperkuat citra perusahaan sebagai entitas berkelanjutan",
          "Menunjukkan komitmen dan arah strategi masa depan",
        ]}
        benefitContainerClassName="rounded-2xl bg-[#125ff9] p-8 shadow-inner"
        benefitTextClassName="font-medium text-white"
      />

    </div>
  );
};

export default SustainabilityReportDescription;