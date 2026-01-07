'use client';

import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgress from '@/components/ScrollProgress';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main className="pt-20">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
