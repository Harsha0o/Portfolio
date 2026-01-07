'use client';

import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgress from '@/components/ScrollProgress';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
