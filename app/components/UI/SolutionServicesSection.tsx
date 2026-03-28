'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

export interface ServiceItem {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  imageUrl: string;
}

interface SolutionServicesSectionProps {
  heading: string;
  services: ServiceItem[];
}

export default function SolutionServicesSection({
  heading,
  services,
}: SolutionServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateTopOffset = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) {
        return;
      }

      const navbarEl = document.getElementById('site-navbar');
      if (!navbarEl) {
        setTopOffset(0);
        return;
      }

      const sectionTop = sectionEl.getBoundingClientRect().top;
      const navbarBottom = navbarEl.getBoundingClientRect().bottom;

      // Add offset only when the section starts inside the navbar collision zone.
      const neededOffset = Math.max(0, Math.ceil(navbarBottom + 12 - sectionTop));
      setTopOffset(neededOffset);
    };

    updateTopOffset();
    window.addEventListener('resize', updateTopOffset);
    window.addEventListener('orientationchange', updateTopOffset);

    return () => {
      window.removeEventListener('resize', updateTopOffset);
      window.removeEventListener('orientationchange', updateTopOffset);
    };
  }, []);

  if (services.length === 0) {
    return null;
  }

  const activeTab = services[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#0D3C74] bg-[linear-gradient(180deg,#125FF9_0%,#0D3C74_42%,#082A55_100%)] p-6 text-white font-sans overflow-x-hidden flex items-center md:p-16"
    >
      <div
        className="max-w-7xl mx-auto w-full"
        style={{ marginTop: topOffset > 0 ? `${topOffset}px` : undefined }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">{heading}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center lg:hidden bg-white/90 backdrop-blur-sm py-2">
                <span className="text-2xl font-bold text-[#0D3C74]">
                  <span className="opacity-100">{activeIndex + 1}</span>
                  <span className="mx-1 opacity-45">-</span>
                  <span className="opacity-35">{services.length}</span>
                </span>
                {services.length > 1 ? (
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
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
