import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import MokuGradientBackground from '../UI/MokuGradientBackground'

function MiniBannerAnnualReport() {
  return (
    <div className="relative w-full overflow-hidden px-6 py-16 text-center text-white shadow-lg">
      <MokuGradientBackground overlayClassName='bg-black/30' />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
         Ingin memastikan Annual Report Anda lebih kredibel dan terpercaya?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light">
          Dapatkan sesi konsultasi gratis dan temukan solusi terbaik bersama tim kami.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6289627667568"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#10b981] hover:bg-[#059669] text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-md transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            Konsultasi Gratis Sekarang
          </a>
 
        </div>

      </div>
    </div>
  );
}

export default MiniBannerAnnualReport;