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
    imageUrl: '/images/event-services/eventservice1.JPG',
  },
  {
    id: 'key-opinion-leader',
    title: 'Marketing Strategy: Key Opinion Leader',
    icon: MdOutlineGroups,
    description:
      'Kami merancang dan mengelola program kolaborasi dengan Key Opinion Leader secara strategis untuk meningkatkan awareness, engagement, dan kredibilitas brand. Layanan mencakup pemilihan KOL yang relevan, negosiasi kerja sama, perencanaan konten, monitoring performa, hingga evaluasi berbasis data. Pendekatan kami memastikan pesan brand tersampaikan autentik, terukur, dan berdampak pada pertumbuhan audiens maupun konversi.',
    imageUrl: '/images/event-services/eventservice2.JPG',
  },
  {
    id: 'three-d-design',
    title: 'Marketing Strategy: 3D Design',
    icon: MdOutlineCampaign,
    description:
      'Kami menghadirkan visual 3D yang immersive dan strategis untuk memperjelas konsep, produk, maupun pengalaman brand Anda. Layanan mencakup modeling, texturing, hingga high-quality rendering, dengan hasil yang tidak hanya estetis tetapi juga impactful dalam meningkatkan engagement dan komunikasi brand.',
    imageUrl: '/images/event-services/eventservice3.JPG',
  },
];

function EventServices() {
  return <SolutionServicesSection heading="Event Services" services={eventServices} topSpacingClassName="pt-16" />;
}

export default EventServices;