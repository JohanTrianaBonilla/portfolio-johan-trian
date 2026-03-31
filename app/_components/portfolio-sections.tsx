import Image from 'next/image';

import {
  content,
  skillGroups,
  socialLinks,
  type Language,
  type PortfolioContent,
} from '../_data/portfolio-content';
import { SkillIcon, SocialIcon } from './portfolio-icons';

export function SocialRail({ language }: { language: Language }) {
  return (
    <div className="fixed left-0 top-[62%] z-30 hidden -translate-y-1/2 lg:block">
      <div className="overflow-hidden rounded-r-xl border border-l-0 border-slate-200 bg-white shadow-[0_16px_32px_rgba(15,23,42,0.14)]">
        {socialLinks.map((link, index) => (
          <a
            key={link.id}
            href={link.href}
            target={link.id === 'email' ? undefined : '_blank'}
            rel={link.id === 'email' ? undefined : 'noreferrer'}
            className={`flex h-[3rem] w-[3rem] items-center justify-center bg-white text-slate-800 transition hover:bg-amber-300 hover:text-slate-950 ${
              index !== socialLinks.length - 1 ? 'border-b border-slate-200' : ''
            }`}
            aria-label={link.label[language]}
          >
            <span className="scale-75">
              <SocialIcon id={link.id} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function PortfolioNav({
  language,
  setLanguage,
  t,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  t: PortfolioContent;
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-amber-300 shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Foto de Johan Sebastian Triana Bonilla"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-500">
              Portfolio
            </p>
            <h1 className="font-serif-display text-lg text-slate-900">Johan Sebastian Triana Bonilla</h1>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 lg:flex">
          <a href="#about" className="transition hover:text-slate-900">{t.nav.about}</a>
          <a href="#projects" className="transition hover:text-slate-900">{t.nav.projects}</a>
          <a href="#skills" className="transition hover:text-slate-900">{t.nav.skills}</a>
          <a href="#experience" className="transition hover:text-slate-900">{t.nav.experience}</a>
          <a href="#contact" className="transition hover:text-slate-900">{t.nav.contact}</a>
          <div className="relative">
            <label className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 pl-4 pr-10 py-2 text-slate-500">
              <span className="text-[11px] uppercase tracking-[0.25em]">{t.languageSwitch.label}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as Language)}
                className="appearance-none bg-transparent pr-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 outline-none"
              >
                <option value="es">{t.languageSwitch.es}</option>
                <option value="en">{t.languageSwitch.en}</option>
              </select>
            </label>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 8l4 4 4-4" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-1 flex max-w-7xl flex-wrap items-center gap-3 px-6 pb-4 text-sm text-slate-600 lg:hidden md:px-8">
        <a href="#about" className="rounded-full border border-slate-200 px-4 py-2 transition hover:text-slate-950">{t.nav.about}</a>
        <a href="#projects" className="rounded-full border border-slate-200 px-4 py-2 transition hover:text-slate-950">{t.nav.projects}</a>
        <a href="#skills" className="rounded-full border border-slate-200 px-4 py-2 transition hover:text-slate-950">{t.nav.skills}</a>
        <a href="#experience" className="rounded-full border border-slate-200 px-4 py-2 transition hover:text-slate-950">{t.nav.experience}</a>
        <a href="#contact" className="rounded-full border border-slate-200 px-4 py-2 transition hover:text-slate-950">{t.nav.contact}</a>
        <div className="relative">
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
            className="appearance-none rounded-full border border-slate-200 bg-slate-50 px-4 py-2 pr-9 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 outline-none"
          >
            <option value="es">{t.languageSwitch.es}</option>
            <option value="en">{t.languageSwitch.en}</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 8l4 4 4-4" />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection({ t }: { t: PortfolioContent }) {
  return (
    <>
      <div className="hero-paper relative overflow-hidden border-b border-slate-200 bg-white px-6 py-14 md:px-8 md:py-18">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-amber-500">
            {t.hero.eyebrow}
          </p>
          <div className="mb-6 rounded-full border border-amber-300 bg-amber-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            {t.hero.kicker}
          </div>
          <h2 className="max-w-6xl text-4xl font-black uppercase leading-[1.02] tracking-tight text-slate-950 md:text-6xl xl:text-[5.25rem]">
            {t.hero.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-700 md:text-xl">{t.hero.lead}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">{t.hero.description}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="rounded-md bg-amber-300 px-8 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_10px_24px_rgba(251,191,36,0.35)] transition hover:-translate-y-0.5"
              href="#projects"
            >
              {t.hero.tertiaryCta}
            </a>
            <a
              className="rounded-md border border-slate-300 bg-white px-8 py-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-400"
              href="/Hoja-de-Vida-Johan-Triana.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-6 md:px-8">
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.hero.statCards.map((item) => (
            <div key={item.label} className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.06)]">
              <p className="font-serif-display text-2xl text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {t.profile.title}
              </p>
              <span className="rounded-full border border-emerald-300/40 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                {t.profile.availability}
              </span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{t.profile.locationLabel}</p>
                <p className="mt-1 text-slate-600">{t.profile.locationValue}</p>
              </div>
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{t.profile.profileLabel}</p>
                <p className="mt-1 text-slate-600">{t.profile.profileValue}</p>
              </div>
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{t.profile.goalLabel}</p>
                <p className="mt-1 text-slate-600">{t.profile.goalValue}</p>
              </div>
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{t.profile.objectiveLabel}</p>
                <p className="mt-1 text-slate-600">{t.profile.objectiveValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AboutSection({ t }: { t: PortfolioContent }) {
  return (
    <section id="about" className="relative mt-6 overflow-hidden bg-[linear-gradient(135deg,_#101828_0%,_#172033_55%,_#1e293b_100%)] py-18">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-amber-300/8 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-sky-400/8 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:pl-20 xl:pl-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
              {t.about.title}
            </p>
            <h2 className="mt-4 font-serif-display text-5xl leading-[1.02] text-white md:text-7xl">
              {t.about.headline}
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-slate-300 md:text-[1.35rem]">
              {t.about.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection({
  language,
  t,
}: {
  language: Language;
  t: PortfolioContent;
}) {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            Selected work
          </p>
          <h2 className="mt-3 font-serif-display text-4xl text-slate-950 md:text-5xl">
            {t.projects.title}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-500">{t.projects.subtitle}</p>
      </div>

      <div className="space-y-6">
        {t.projects.items.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_36px_rgba(15,23,42,0.06)]"
          >
            <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10">
              <div className="border-b border-slate-200 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-500">
                  {project.subtitle}
                </p>
                <h3 className="mt-4 font-serif-display text-3xl text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-500">
                  {language === 'es' ? 'Proyecto full stack' : 'Full stack project'}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold leading-8 text-slate-900">
                  {project.description}
                </p>
                <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
                  {project.impact}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-amber-300 hover:bg-amber-50"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection({
  language,
  t,
}: {
  language: Language;
  t: PortfolioContent;
}) {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
          Toolkit
        </p>
        <h2 className="mt-3 font-serif-display text-4xl text-slate-950 md:text-5xl">{t.skills.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-500">{t.skills.subtitle}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.label.es}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{group.label[language]}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {group.label[language]} stack
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-500">
                {group.items.length} tools
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] border border-slate-200 bg-slate-50 px-3 py-3 transition hover:-translate-y-0.5 hover:border-amber-300/40 hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 scale-[0.82]">
                      <SkillIcon label={item} />
                    </div>
                    <div>
                      <p className="text-[0.95rem] font-semibold leading-5 text-slate-900">{item}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                        {group.label[language]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection({ t }: { t: PortfolioContent }) {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_36px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            Career path
          </p>
          <h2 className="mt-3 font-serif-display text-4xl text-slate-950">{t.experience.title}</h2>
          <div className="mt-6 space-y-6">
            {t.experience.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
                  <div className="border-b border-slate-200 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500">{item.role}</p>
                  </div>
                  <ul className="space-y-3 text-sm leading-7 text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_36px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
            Learning
          </p>
          <h2 className="mt-3 font-serif-display text-4xl text-slate-950">{t.education.title}</h2>
          <div className="mt-6 space-y-4">
            {t.education.items.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 text-slate-700"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">0{index + 1}</p>
                <p className="mt-2 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactFooter({ t }: { t: PortfolioContent }) {
  return (
    <section id="contact" className="relative mt-14 bg-[linear-gradient(135deg,_#101828_0%,_#172033_55%,_#1e293b_100%)] text-white">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/90">
              Contact
            </p>
            <h2 className="mt-3 font-serif-display text-5xl text-white md:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-200/90">
              {t.contact.text}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Email
              </p>
              <a
                href="mailto:johyant1238.7@gmail.com"
                className="mt-2 inline-block text-2xl font-semibold text-white transition hover:text-amber-200"
              >
                johyant1238.7@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                href="mailto:johyant1238.7@gmail.com"
              >
                {t.contact.email}
              </a>
              <a
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://github.com/JohanTrianaBonilla"
                target="_blank"
                rel="noreferrer"
              >
                {t.contact.github}
              </a>
              <a
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://www.linkedin.com/in/johan-triana-bonilla"
                target="_blank"
                rel="noreferrer"
              >
                {t.contact.linkedin}
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2026 Johan Sebastian Triana Bonilla. Built with love.
        </footer>
      </div>
    </section>
  );
}

export { content };
