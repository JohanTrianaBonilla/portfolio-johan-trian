import Image from 'next/image';

const skills = {
  Lenguajes: ['Python', 'Java', 'ASP.NET', 'JavaScript'],
  Frontend: ['React', 'Angular', 'HTML5', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  Backend: ['FastAPI', 'Spring Boot'],
  'Bases de datos': ['MySQL', 'PostgreSQL', 'SQL Server'],
  DevOps: ['Git', 'GitHub', 'Docker', 'Docker Compose'],
  'IA y datos': ['Redis', 'Qdrant', 'Busqueda vectorial'],
};

const projects = [
  {
    title: 'CUPIDO',
    subtitle: 'Plataforma web de citas universitarias',
    description:
      'Sistema web desarrollado para facilitar la interaccion entre estudiantes mediante un sistema de coincidencias dentro del entorno universitario.',
    impact:
      'Enfoque en experiencia de usuario, logica de emparejamiento e integracion entre frontend y backend para un flujo de uso claro y funcional.',
    stack: ['React', 'FastAPI', 'APIs', 'Bases de datos relacionales'],
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/JohanTrianaBonilla/cupido-frontend',
      },
      {
        label: 'Backend',
        href: 'https://github.com/JohanTrianaBonilla/cupido-backend',
      },
    ],
  },
  {
    title: 'Plataforma de Inteligencia de Perfiles',
    subtitle: 'Proyecto Full Stack con IA',
    description:
      'Sistema de analisis y gestion de perfiles que integra procesamiento de datos, busqueda semantica y generacion de insights mediante modelos de lenguaje.',
    impact:
      'Combina procesamiento de datos, almacenamiento vectorial y generacion de insights para apoyar decisiones sobre perfiles y conocimiento estructurado.',
    stack: ['Python', 'FastAPI', 'Redis', 'Qdrant', 'IA aplicada'],
    links: [
      {
        label: 'Repositorio',
        href: 'https://github.com/JohanTrianaBonilla/omboarding',
      },
    ],
  },
];

const experience = [
  {
    title: 'Alcaldia Municipal de Sacama - Casanare',
    role: 'Desarrollo de sistema de informacion',
    bullets: [
      'Desarrollo de sistema de informacion para gestion documental.',
      'Apoyo en la implementacion del modelo MIPG.',
      'Desarrollo de funcionalidades para optimizacion de procesos administrativos.',
    ],
  },
];

const education = [
  'Ingenieria de Sistemas - Universidad de Pamplona (en curso)',
  'Tecnologo en Analisis y Desarrollo de Sistemas de Informacion - SENA Regional Boyaca (graduado, 2021)',
  'Certificacion en Ciberseguridad - Google',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <nav className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
              Portafolio
            </p>
            <h1 className="text-lg font-semibold">Johan Sebastian Triana Bonilla</h1>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-sky-400">
              Sobre mi
            </a>
            <a href="#projects" className="transition hover:text-sky-400">
              Proyectos
            </a>
            <a href="#skills" className="transition hover:text-sky-400">
              Stack
            </a>
            <a href="#contact" className="transition hover:text-sky-400">
              Contacto
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
              Estudiante de Ingenieria de Sistemas
            </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Desarrollo soluciones web modernas con enfoque full stack.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-300 md:text-xl">
              Backend y frontend con Python, FastAPI, React, Spring Boot y bases de datos relacionales.
            </p>
            <p className="mt-6 max-w-2xl text-slate-400">
              Busco oportunidades de practica profesional para aportar en desarrollo de software,
              integracion de APIs, procesamiento de datos y arquitectura de aplicaciones web.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
                href="mailto:johyant1238.7@gmail.com"
              >
                Contactame
              </a>
              <a
                className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-sky-400 hover:text-sky-300"
                href="/Hoja-de-Vida-Johan-Triana.pdf"
                target="_blank"
              >
                Ver hoja de vida
              </a>
              <a
                className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-slate-500"
                href="https://github.com/JohanTrianaBonilla"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold transition hover:border-slate-500"
                href="https://www.linkedin.com/in/johan-triana-bonilla"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-black/30">
            <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-center">
              <div className="mx-auto w-full max-w-[180px] overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-800">
                <Image
                  src="/profile.jpg"
                  alt="Foto de Johan Sebastian Triana Bonilla"
                  width={380}
                  height={472}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Resumen profesional
                </p>
                <div className="mt-5 space-y-4 text-sm text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-100">Ubicacion</p>
                    <p>Pamplona, Norte de Santander</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Perfil</p>
                    <p>Desarrollador web backend / frontend con interes en APIs, datos y arquitectura.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Objetivo</p>
                    <p>Realizar practicas profesionales y fortalecer experiencia en desarrollo de software.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Sobre mi</h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            Soy estudiante de Ingenieria de Sistemas y tecnologo del SENA con experiencia en desarrollo de aplicaciones web full stack utilizando Python, FastAPI, React y bases de datos relacionales. Me interesa construir soluciones claras, escalables y utiles para personas y organizaciones.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Proyectos destacados</h2>
          <p className="mt-2 text-slate-400">
            Proyectos orientados a desarrollo web, integracion de datos y arquitectura moderna.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-sky-400">Proyecto</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
              <p className="mt-4 text-slate-300">{project.description}</p>
              <p className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
                {project.impact}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
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
                    className="rounded-2xl border border-slate-700 px-4 py-2 text-sm font-medium transition hover:border-sky-400 hover:text-sky-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Stack tecnico</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, values]) => (
            <div key={group} className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {values.map((value) => (
                  <span key={value} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold">Experiencia</h2>
            {experience.map((item) => (
              <div key={item.title} className="mt-6">
                <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-1 text-slate-400">{item.role}</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold">Formacion</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {education.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 p-8 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Hablemos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Estoy disponible para practicas, proyectos de desarrollo web y oportunidades donde pueda aportar con backend, frontend, bases de datos e integracion de APIs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-slate-950" href="mailto:johyant1238.7@gmail.com">
              Enviar correo
            </a>
            <a
              className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold"
              href="https://github.com/JohanTrianaBonilla"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub
            </a>
            <a
              className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold"
              href="https://www.linkedin.com/in/johan-triana-bonilla"
              target="_blank"
              rel="noreferrer"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
