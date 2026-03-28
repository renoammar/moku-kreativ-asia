'use client'
import React, { useState } from 'react';
import { AiOutlineFileText, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { MdOutlineEco, MdOutlineBusinessCenter, MdArrowForward, MdArrowBack } from 'react-icons/md';

interface Service {
  id: string;
  title: string;
  icon: React.ElementType; 
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 'annual-report',
    title: 'Annual Report (Laporan Tahunan)',
    icon: AiOutlineFileText,
    description: 'Layanan penyusunan Laporan Tahunan kami dirancang untuk menghadirkan Annual Report yang terintegrasi, kredibel, dan berstandar internasional, selaras dengan IFRS, PSAK berbasis IFRS, regulasi OJK, serta IFRS Sustainability (S1 dan S2).',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'sustainability',
    title: 'Sustainability Report (Laporan Keberlanjutan)',
    icon: MdOutlineEco,
    description: 'Layanan penyusunan Laporan Tahunan kami dirancang untuk menghadirkan Annual Report yang terintegrasi, kredibel, dan berstandar internasional, selaras dengan IFRS, PSAK berbasis IFRS, regulasi OJK, serta IFRS Sustainability (S1 dan S2).',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'assurance',
    title: 'Assurance',
    icon: AiOutlineSafetyCertificate,
    description: 'Kami membantu perusahaan memberikan keyakinan yang memadai kepada investor dan regulator atas keakuratan serta kepatuhan terhadap regulasi melalui evaluasi independen yang profesional dan kompeten.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    icon: MdOutlineBusinessCenter,
    description: 'Layanan penyusunan Company Profile kami dirancang secara komprehensif untuk memperkuat positioning dan kredibilitas perusahaan. Kami menyusun narasi strategis dan desain profesional.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function SolutionServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = services[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="min-h-screen bg-[#0D3C74] bg-[linear-gradient(180deg,#125FF9_0%,#0D3C74_42%,#082A55_100%)] p-6 text-white font-sans overflow-x-hidden flex items-center md:p-16">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">All Inclusive Services</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Desktop Grid (Hidden on Mobile) */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-2 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col justify-between items-start p-8 transition-colors duration-200 border h-56 group ${
                    isActive 
                      ? 'bg-white text-[#0D3C74] border-transparent shadow-xl' 
                      : 'bg-white/10 border-white/10 hover:bg-white/20 text-white'
                  }`}
                  style={{ borderRadius: '24px 24px 70px 24px' }}
                >
                  <IconComponent className="text-4xl" />
                  <span className="text-left font-bold text-xl leading-tight">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Content Card (Visible on both, behaves as a slider on mobile) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-white rounded-4xl overflow-hidden text-slate-800 shadow-2xl relative min-h-125 flex flex-col">
              <div className="p-4">
                <img 
                  src={activeTab.imageUrl} 
                  alt={activeTab.title}
                  className="w-full h-64 md:h-72 object-cover rounded-3xl"
                />
              </div>
              
              <div className="px-8 pb-24 pt-4 md:pb-12 grow">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0D3C74]">
                  {activeTab.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {activeTab.description}
                </p>
              </div>

              {/* Mobile Navigation Controls (Hidden on Desktop) */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center lg:hidden bg-white/90 backdrop-blur-sm py-2">
                <span className="text-2xl font-bold text-[#0D3C74]">
                  <span className="opacity-100">{activeIndex + 1}</span>
                  <span className="mx-1 opacity-45">-</span>
                  <span className="opacity-35">{services.length}</span>
                </span>
                <div className="flex gap-3">
                  <button 
                    onClick={handlePrev}
                    className="p-3 border border-[#0D3C74]/20 rounded-full text-[#0D3C74] active:bg-[#0D3C74] active:text-white transition-colors"
                  >
                    <MdArrowBack size={24} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-3 bg-[#0D3C74] text-white rounded-full active:bg-[#082A55] shadow-lg"
                  >
                    <MdArrowForward size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}