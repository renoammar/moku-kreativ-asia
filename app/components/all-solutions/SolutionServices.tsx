'use client'
import React from 'react';
import { AiOutlineFileText, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { MdOutlineEco, MdOutlineBusinessCenter } from 'react-icons/md';
import SolutionServicesSection, { ServiceItem } from '../UI/SolutionServicesSection';

const services: ServiceItem[] = [
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
  return <SolutionServicesSection heading="All Inclusive Services" services={services} />;
}