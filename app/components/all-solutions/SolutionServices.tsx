'use client'
import React, { useState } from 'react';

// Define the structure for our service items
interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 'account',
    title: 'Account Management',
    icon: <div className="w-10 h-10 bg-blue-200 rounded-full" />, // Placeholder for your icon
    description: 'Our team ensures efficient store setup and campaign launches, enhancing your online presence through targeted digital marketing and streamlined operational support.',
    imageUrl: 'https://via.placeholder.com/600x400', // Placeholder image
  },
  {
    id: 'marketing',
    title: 'Marketing Strategy',
    icon: <div className="w-10 h-10 bg-blue-300 rounded-full" />,
    description: 'Strategic planning tailored to your brand growth and market positioning.',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  // Add the rest of your 6 items here...
  { id: 'analytics', title: 'Analytics', icon: <div className="w-10 h-10 bg-blue-300 rounded-full" />, description: 'Data-driven insights...', imageUrl: 'https://via.placeholder.com/600x400' },
  { id: 'content', title: 'Content Production', icon: <div className="w-10 h-10 bg-blue-300 rounded-full" />, description: 'Creative assets...', imageUrl: 'https://via.placeholder.com/600x400' },
  { id: 'customer', title: 'Customer Service', icon: <div className="w-10 h-10 bg-blue-300 rounded-full" />, description: 'Support solutions...', imageUrl: 'https://via.placeholder.com/600x400' },
  { id: 'warehouse', title: 'Warehouse & Fulfilment', icon: <div className="w-10 h-10 bg-blue-300 rounded-full" />, description: 'Logistics and storage...', imageUrl: 'https://via.placeholder.com/600x400' },
];

export default function SolutionServices() {
  const [activeTab, setActiveTab] = useState<Service>(services[0]);

  return (
    <section className="bg-[#0051B3] min-h-screen p-8 md:p-16 text-white font-sans">
      <h2 className="text-3xl font-bold mb-12">All Inclusive Services</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Icon Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service)}
              className={`flex flex-col justify-between items-start p-6 rounded-2xl h-52 transition-all duration-300 border rounded-br-[62px] border-white/10 ${
                activeTab.id === service.id 
                  ? 'bg-[#E0F4FF] text-[#0051B3]' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="mb-4">
                {/* Your Icon Placeholder */}
                {service.icon}
              </div>
              <span className="text-left font-bold text-lg leading-tight">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Content Card */}
        <div className="lg:col-span-5 bg-white rounded-[2rem] overflow-hidden text-slate-800 shadow-2xl">
          <div className="p-4">
            <img 
              src={activeTab.imageUrl} 
              alt={activeTab.title}
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
          <div className="px-8 pb-12 pt-4">
            <h3 className="text-3xl font-bold mb-4 text-[#003B7E]">
              {activeTab.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {activeTab.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}