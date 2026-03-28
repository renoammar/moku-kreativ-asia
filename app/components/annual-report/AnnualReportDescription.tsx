import React from 'react';
import { 
  FaCheckCircle, 
  FaUsers, 
  FaBolt, 
  FaChartLine,
  FaBookOpen
} from 'react-icons/fa';
import { MdOutlineVerifiedUser, MdAssignment, MdOutlineInsights } from 'react-icons/md';

const AnnualReportDescription = () => {
  return (
    <div className="mx-auto max-w-6xl bg-white p-6 font-sans text-[#0D3C74] md:p-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0D3C74]">Deskripsi Layanan</h2>
          <p className="leading-relaxed text-[#0D3C74]/80">
            Layanan Annual Report kami dirancang untuk menyajikan performa bisnis perusahaan
            secara komprehensif dalam format laporan yang profesional dan mudah dipahami.
            Kami memastikan setiap bagian laporan memiliki alur yang kuat dan relevan:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Business Highlights:</span> Menyusun pencapaian utama perusahaan agar mudah dipahami investor dan pemangku kepentingan.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Narasi Strategis:</span> Menghubungkan strategi, risiko, dan kinerja keuangan dalam cerita perusahaan yang solid.</p>
            </div>
            <div className="border-l-4 border-[#125ff9] pl-4">
              <p><span className="font-bold">Kepatuhan & Tata Kelola:</span> Menampilkan informasi governance dan kepatuhan sesuai regulasi yang berlaku.</p>
            </div>
          </div>

          <p className="pt-4 text-[#0D3C74]/90">
            <span className="font-bold text-[#125ff9]">Manfaat bagi Anda:</span> Meningkatkan kredibilitas perusahaan, memperkuat komunikasi korporat, dan membuat annual report Anda lebih bernilai bagi audiens bisnis.
          </p>
        </div>

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
        </div>
      </div>

      <hr className="mb-20 border-[#125ff9]/15" />

      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Scope of Work Annual Report</h2>
          <p className="mx-auto max-w-3xl text-[#0D3C74]/80">
            Proses penyusunan Annual Report mencakup pengumpulan data lintas fungsi,
            penyusunan narasi korporat, serta penyelarasan isi laporan dengan target komunikasi perusahaan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </div>

      <div className="grid gap-12 rounded-3xl bg-[#0D3C74] p-8 text-white lg:grid-cols-2 md:p-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Ruang Lingkup Annual Report</h3>
          <p className="text-white/90">Layanan mencakup penyusunan konten, validasi data, dan perapihan narasi untuk laporan tahunan perusahaan.</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-xl bg-white/10 p-4">
              <MdAssignment className="shrink-0 text-3xl text-[#8EBBFF]" />
              <div>
                <p className="font-semibold">Penyusunan Draft</p>
                <p className="text-sm text-white/90">Penyusunan outline dan draft laporan berdasarkan target komunikasi perusahaan.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white/10 p-4">
              <MdOutlineVerifiedUser className="shrink-0 text-3xl text-[#8EBBFF]" />
              <div>
                <p className="font-semibold">Review & Finalisasi</p>
                <p className="text-sm text-white/90">Validasi akhir agar laporan siap dipublikasikan untuk kebutuhan tahunan perusahaan.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white/10 p-4">
              <MdOutlineInsights className="shrink-0 text-3xl text-[#8EBBFF]" />
              <div>
                <p className="font-semibold">Business Insight</p>
                <p className="text-sm text-white/90">Menajamkan pesan strategis agar annual report memberi nilai tambah untuk pembaca.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#125ff9] p-8">
          <h3 className="text-2xl font-bold mb-6">Manfaat bagi Perusahaan</h3>
          <ul className="space-y-4">
            {[
              "Meningkatkan kepercayaan investor dan mitra",
              "Memperkuat citra profesional perusahaan",
              "Mempermudah komunikasi pencapaian tahunan",
              "Menyelaraskan laporan dengan kebutuhan regulator",
              "Memberikan dasar evaluasi strategi bisnis"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-white/90" />
                <span className="font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AnnualReportDescription;