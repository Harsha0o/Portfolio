'use client';

import Header from '@/components/Header';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgress from '@/components/ScrollProgress';

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main className="pt-20">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
