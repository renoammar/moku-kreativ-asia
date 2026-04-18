"use client";

import React from 'react';
import { MdOutlineEvent, MdOutlineGroups, MdOutlineCampaign } from 'react-icons/md';
import SolutionServicesSection, { ServiceItem } from '../UI/SolutionServicesSection';

const eventServices: ServiceItem[] = [
  {
    id: 'mice-event-management',
    title: 'Account Management: MICE Event Management',
    icon: MdOutlineEvent,
    description:
      'Layanan Event Organizer kami menghadirkan perencanaan dan pelaksanaan acara secara end-to-end, mulai dari konseptualisasi, penyusunan rundown, manajemen vendor, produksi kreatif, hingga eksekusi teknis di lapangan. Kami memastikan setiap acara baik seminar, konferensi, peluncuran produk, gathering, maupun corporate event berjalan profesional, tepat waktu, dan memberikan pengalaman berkesan yang selaras dengan identitas serta tujuan strategis brand.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000',
  },
  {
    id: 'key-opinion-leader',
    title: 'Marketing Strategy: Key Opinion Leader',
    icon: MdOutlineGroups,
    description:
      'Kami merancang dan mengelola program kolaborasi dengan Key Opinion Leader secara strategis untuk meningkatkan awareness, engagement, dan kredibilitas brand. Layanan mencakup pemilihan KOL yang relevan, negosiasi kerja sama, perencanaan konten, monitoring performa, hingga evaluasi berbasis data. Pendekatan kami memastikan pesan brand tersampaikan autentik, terukur, dan berdampak pada pertumbuhan audiens maupun konversi.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000',
  },
  {
    id: 'three-d-design',
    title: 'Marketing Strategy: 3D Design',
    icon: MdOutlineCampaign,
    description:
      'Kami menghadirkan visual 3D yang immersive dan strategis untuk memperjelas konsep, produk, maupun pengalaman brand Anda. Layanan mencakup modeling, texturing, hingga high-quality rendering, dengan hasil yang tidak hanya estetis tetapi juga impactful dalam meningkatkan engagement dan komunikasi brand.',
    imageUrl: 'https://images.unsplash.com/photo-1652992252915-f9b6592a61a3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function EventServices() {
  return <SolutionServicesSection heading="Event Services" services={eventServices} topSpacingClassName="pt-16" />;
}

export default EventServices;