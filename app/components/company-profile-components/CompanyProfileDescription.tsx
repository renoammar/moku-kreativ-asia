import { 
  FaBolt, 
  FaHandshake,
  FaLightbulb,
  FaPalette
} from 'react-icons/fa';
import { MdOutlineVerifiedUser, MdAssignment } from 'react-icons/md';
import WhyChooseUsCard from '../UI/WhyChooseUsCard';
import ScopeBenefitSection from '../UI/ScopeBenefitSection';

const CompanyProfileDescription = () => {
  return (
    <div className="mx-auto max-w-6xl bg-white p-6 font-sans text-[#0D3C74] md:p-12">
      
      {/* --- SECTION 1: Deskripsi Layanan --- */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0D3C74]">Company Profile Service</h2>
          <p className="leading-relaxed text-[#0D3C74]/80">
            Penyusunan Company Profile merupakan proses pengembangan dokumen yang merepresentasikan identitas, kapabilitas, serta nilai perusahaan secara menyeluruh. Layanan ini tidak hanya berfokus pada penyajian informasi, tetapi juga pada bagaimana perusahaan dikomunikasikan secara strategis kepada audiens.
          </p>

          <p className="font-semibold text-[#0D3C74]">Kami mengadopsi pendekatan komprehensif yang mencakup:</p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Kejelasan:</span> Kejelasan dalam menyampaikan identitas dan layanan perusahaan.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Relevansi:</span> Relevansi pesan dengan target market dan industri.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Konsistensi:</span> Konsistensi brand dalam setiap elemen komunikasi.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Narasi:</span> Penyusunan narasi yang memperkuat positioning bisnis.</p>
            </div>
          </div>

          <p className="pt-4 text-[#0D3C74]/90">
            Hasilnya adalah Company Profile yang lebih profesional, kredibel, dan mampu meningkatkan kepercayaan serta peluang kolaborasi bisnis.
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
      </div> */}

      {/* --- SECTION 2: Positioning Perusahaan --- */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-10">Bangun Company Profile yang Profesional dan Meyakinkan</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><FaHandshake /></div>
            <h4 className="font-bold text-lg mb-3">Brand Representation yang Kuat</h4>
            <p className="text-sm text-slate-600">Kami memastikan company profile Anda merepresentasikan identitas, nilai, dan positioning perusahaan secara konsisten dan profesional.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><FaLightbulb /></div>
            <h4 className="font-bold text-lg mb-3">Narasi yang Strategis</h4>
            <p className="text-sm text-slate-600">Kami mengembangkan storytelling yang tidak hanya informatif, tetapi juga mampu menyampaikan keunggulan dan diferensiasi bisnis secara jelas.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><FaPalette /></div>
            <h4 className="font-bold text-lg mb-3">Visual yang Profesional & Menarik</h4>
            <p className="text-sm text-slate-600">Desain visual yang modern, clean, dan selaras dengan brand guideline untuk meningkatkan kredibilitas perusahaan di mata audiens.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
            <div className="flex justify-center mb-4 text-3xl text-[#125ff9]"><MdOutlineVerifiedUser /></div>
            <h4 className="font-bold text-lg mb-3">Expertise yang Terpercaya</h4>
            <p className="text-sm text-slate-600">Didukung oleh tim berpengalaman dalam menangani berbagai industri, mulai dari UMKM hingga perusahaan korporasi dan multinasional.</p>
          </div>
        </div>
      </div>

      <hr className="mb-20 border-[#125ff9]/15" />

      {/* --- SECTION 3: Scope of Work --- */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ruang Lingkup Layanan Company Profile</h2>
          <p className="mx-auto max-w-3xl text-[#0D3C74]/80">
            Layanan Company Profile kami mencakup pengembangan profil perusahaan dengan pendekatan strategis, kreatif, dan berbasis kebutuhan bisnis.
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
            title: "Proses Pengembangan Company Profile",
            description: "Melakukan pengumpulan data, eksplorasi brand, serta penyusunan struktur company profile yang mencerminkan identitas dan keunggulan perusahaan.",
          },
          {
            icon: <FaLightbulb className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Penyusunan Konten dan Narasi",
            description: "Mengembangkan isi company profile, termasuk profil perusahaan, layanan, keunggulan, serta value proposition yang disampaikan secara jelas dan persuasif.",
          },
          {
            icon: <FaPalette className="shrink-0 text-3xl text-[#8EBBFF]" />,
            title: "Desain Visual dan Layout",
            description: "Merancang tampilan visual yang profesional dan sesuai dengan identitas brand untuk meningkatkan daya tarik dan keterbacaan.",
          },
        ]}
        benefitTitle="Manfaat bagi Perusahaan"
        benefitItems={[
          "Meningkatkan kredibilitas dan citra profesional perusahaan",
          "Memperjelas positioning dan keunggulan bisnis",
          "Mendukung aktivitas marketing dan sales",
          "Mempermudah komunikasi dengan client dan stakeholder",
          "Meningkatkan peluang kerja sama dan ekspansi bisnis",
        ]}
      />

    </div>
  );
};

export default CompanyProfileDescription;