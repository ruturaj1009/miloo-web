import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionShowcase from '@/components/home/MissionShowcase';
import PhoneMockupViewer from '@/components/home/PhoneMockupViewer';
import Testimonials from '@/components/home/Testimonials';
import DownloadCta from '@/components/home/DownloadCta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionShowcase />
      <PhoneMockupViewer />
      <Testimonials />
      <DownloadCta />
    </>
  );
}
