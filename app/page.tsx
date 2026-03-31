'use client';

import { useState } from 'react';

import { type Language } from './_data/portfolio-content';
import {
  AboutSection,
  ContactFooter,
  ExperienceSection,
  HeroSection,
  PortfolioNav,
  ProjectsSection,
  SkillsSection,
  SocialRail,
  content,
} from './_components/portfolio-sections';

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <SocialRail language={language} />

      <section className="relative px-0 pb-16 pt-24 md:pb-24 md:pt-24">
        <PortfolioNav language={language} setLanguage={setLanguage} t={t} />
        <HeroSection t={t} />
      </section>

      <AboutSection t={t} />
      <ProjectsSection language={language} t={t} />
      <SkillsSection language={language} t={t} />
      <ExperienceSection t={t} />
      <ContactFooter t={t} />
    </main>
  );
}
