"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

function LayananLainnya() {
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/+$/, '') || '/';

  const services = [
    {
      title: "Annual Report",
      tag: "COMPLIANCE",
      href: "/all-reporting-solutions/annual-report",
      matchPaths: ["/all-reporting-solutions/annual-report", "/annual-report"],
      description: "Annual Report adalah laporan yang merangkum kinerja dan pencapaian perusahaan dalam satu tahun. Penyusunannya mengacu pada POJK No. 29/POJK.04/2016, serta sejak 2019 diwajibkan terintegrasi dengan Sustainability Report oleh OJK.",
      extra: "Layanan kami dirancang untuk menghadirkan laporan yang terintegrasi, kredibel, dan berstandar internasional (IFRS, PSAK, OJK, S1 & S2).",
      footer: "Memastikan kepatuhan, strategi, tata kelola, dan manajemen risiko terefleksi dengan baik."
    },
    {
      title: "Company Profile",
      tag: "BRANDING",
      href: "/company-profile",
      matchPaths: ["/all-reporting-solutions/company-profile", "/company-profile"],
      description: "Layanan penyusunan Company Profile kami dirancang secara komprehensif untuk memperkuat positioning dan kredibilitas perusahaan.",
      extra: "Kami menyusun narasi strategis, struktur konten, hingga desain profesional yang disesuaikan dengan kebutuhan investor dan regulator.",
      footer: "Hasil akhir tampil informatif, persuasif, dan selaras dengan identitas perusahaan."
    },
    {
      title: "Sustainability Report",
      tag: "ESG STANDARDS",
      href: "/sustainability-report",
      matchPaths: ["/sustainability-report"],
      description: "Pendampingan profesional untuk membantu perusahaan menyusun laporan keberlanjutan yang terstruktur, terukur, dan sesuai standar seperti GRI, POJK, atau ISSB.",
      extra: "Mengungkapkan kinerja ESG secara transparan, strategis, dan kredibel kepada pemangku kepentingan.",
      footer: "Mendukung tata kelola, reputasi, dan nilai jangka panjang perusahaan."
    },
    {
      title: "Assurance AA1000 Provider",
      tag: "EXPERT TEAM",
      href: "/assurance",
      matchPaths: ["/assurance"],
      description: "Standar assurance global untuk mengukur kinerja keberlanjutan perusahaan secara komprehensif. Kami menilai integritas implementasi Prinsip AccountAbility.",
      points: [
        "Validasi data yang akurat dan dapat dipercaya",
        "Penilaian transparansi dalam pelaporan",
        "Pemeriksaan kepatuhan terhadap standar yang berlaku"
      ],
      extra: "Provider ID: 001 - 150",
    }
  ];

  const visibleServices = services.filter(
    (service) => !service.matchPaths.some((path) => currentPath === path)
  );

  return (
    <div className="w-full bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0D3C74] mb-4">Layanan Lainnya</h2>
          <p className="text-slate-500 text-lg">
            Jelajahi layanan lain yang mungkin sesuai dengan kebutuhan organisasi Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visibleServices.map((service) => (
            <div 
              key={service.title} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#125ff9] text-[10px] font-bold tracking-wider mb-4">
                  {service.tag}
                </span>
                <h3 className="text-2xl font-bold text-[#0D3C74] mb-4 group-hover:text-[#125ff9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {service.points ? (
                  <ul className="space-y-2 mb-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <FaCheck className="text-emerald-500 text-xs" /> {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500 italic mb-4">
                    {service.extra}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#125ff9] px-5 py-2.5 font-semibold text-white transition-all hover:gap-3 hover:bg-[#0D3C74]"
                >
                  Lihat Detail <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Button */}
        <div className="flex justify-center">
          <Link href='/all-reporting-solutions' className="flex items-center gap-2 rounded-xl bg-[#125ff9] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#0D3C74]">
            Lihat Semua Layanan <FaArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default LayananLainnya;