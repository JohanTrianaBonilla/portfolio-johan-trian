export type Language = 'es' | 'en';

export const skillGroups = [
  {
    label: {
      es: 'Lenguajes',
      en: 'Languages',
    },
    items: ['Python', 'Java', 'ASP.NET', 'JavaScript'],
  },
  {
    label: {
      es: 'Frontend',
      en: 'Frontend',
    },
    items: ['React', 'Angular', 'HTML5', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    label: {
      es: 'Backend',
      en: 'Backend',
    },
    items: ['FastAPI', 'Spring Boot'],
  },
  {
    label: {
      es: 'Bases de datos',
      en: 'Databases',
    },
    items: ['MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    label: {
      es: 'DevOps',
      en: 'DevOps',
    },
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose'],
  },
  {
    label: {
      es: 'IA y datos',
      en: 'AI and data',
    },
    items: ['Redis', 'Qdrant', 'Vector search'],
  },
] as const;

export const socialLinks = [
  {
    id: 'email',
    href: 'mailto:johyant1238.7@gmail.com',
    label: {
      es: 'Correo',
      en: 'Email',
    },
  },
  {
    id: 'github',
    href: 'https://github.com/JohanTrianaBonilla',
    label: {
      es: 'GitHub',
      en: 'GitHub',
    },
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/johan-triana-bonilla',
    label: {
      es: 'LinkedIn',
      en: 'LinkedIn',
    },
  },
] as const;

export const content = {
  es: {
    nav: {
      about: 'Sobre mi',
      projects: 'Proyectos',
      skills: 'Stack',
      experience: 'Trayectoria',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'JOHAN TRIANA',
      kicker: 'Full Stack Developer in Progress',
      title: 'Construyo experiencias web con presencia visual, logica solida y enfoque full stack.',
      lead:
        'Soy estudiante de Ingenieria de Sistemas y estoy construyendo mi camino profesional como desarrollador full stack.',
      description:
        'Me interesa integrar interfaces modernas, APIs, backend y datos en productos utiles. Actualmente busco practicas profesionales para fortalecer mi experiencia en desarrollo de software y seguir creciendo en proyectos reales.',
      primaryCta: 'Contactame',
      secondaryCta: 'Ver hoja de vida',
      tertiaryCta: 'Explorar proyectos',
      statCards: [
        { value: 'Full Stack', label: 'Enfoque profesional' },
        { value: 'Practicas', label: 'Buscando una oportunidad de crecimiento' },
        { value: 'UI + API + Data', label: 'Forma en la que me gusta construir' },
      ],
      socialTitle: 'Conecta conmigo',
    },
    profile: {
      title: 'Resumen profesional',
      availability: 'Disponible para practicas',
      locationLabel: 'Ubicacion',
      locationValue: 'Pamplona, Norte de Santander',
      profileLabel: 'Perfil',
      profileValue:
        'Desarrollador Full Stack enfocado en construir soluciones web completas, desde interfaces modernas hasta APIs, logica de negocio y manejo de datos.',
      goalLabel: 'Enfoque profesional',
      goalValue:
        'Consolidarme como desarrollador full stack participando en productos reales con impacto, buena arquitectura y una experiencia visual bien cuidada.',
      objectiveLabel: 'Objetivo',
      objectiveValue:
        'Realizar practicas profesionales y fortalecer mi experiencia en desarrollo de software mientras sigo creciendo como perfil full stack.',
    },
    spotlight: {
      badge: 'Propuesta de valor',
      title: 'Una identidad mas fuerte para un perfil tecnico versatil.',
      description:
        'La idea es que desde el primer vistazo se entienda tu enfoque full stack, tu interes por construir productos completos y tu disponibilidad para practicas.',
      cards: [
        {
          title: 'Frontend con presencia',
          text: 'Interfaces limpias, responsive y con una identidad visual mas memorable.',
        },
        {
          title: 'Backend conectado',
          text: 'Experiencia integrando APIs, logica de negocio y persistencia de datos.',
        },
        {
          title: 'Perfil listo para crecer',
          text: 'Motivacion clara por aprender, aportar y evolucionar en entornos reales.',
        },
      ],
    },
    about: {
      title: 'Sobre mi',
      headline: 'Desarrollo web full stack con una meta profesional clara.',
      text:
        'Soy estudiante de Ingenieria de Sistemas y tecnologo del SENA con experiencia desarrollando aplicaciones web. Mi interes principal esta en crecer como desarrollador full stack, combinando interfaces atractivas, arquitectura backend, integracion de APIs y manejo de datos para crear productos bien pensados.',
    },
    projects: {
      title: 'Proyectos destacados',
      subtitle: 'Trabajo orientado a experiencias web, integracion de datos y soluciones con enfoque moderno.',
      items: [
        {
          title: 'CUPIDO',
          subtitle: 'Plataforma web de citas universitarias',
          description:
            'Sistema web desarrollado para facilitar la interaccion entre estudiantes mediante un sistema de coincidencias dentro del entorno universitario.',
          impact:
            'Proyecto pensado para unir UX, reglas de negocio y comunicacion entre frontend y backend en un flujo funcional.',
          stack: ['React', 'FastAPI', 'APIs', 'Bases de datos relacionales'],
          links: [
            { label: 'Frontend', href: 'https://github.com/JohanTrianaBonilla/cupido-frontend' },
            { label: 'Backend', href: 'https://github.com/JohanTrianaBonilla/cupido-backend' },
          ],
        },
        {
          title: 'Plataforma de Inteligencia de Perfiles',
          subtitle: 'Proyecto Full Stack con IA',
          description:
            'Sistema de analisis y gestion de perfiles que integra procesamiento de datos, busqueda semantica y generacion de insights mediante modelos de lenguaje.',
          impact:
            'Combina backend, datos e IA aplicada para generar conocimiento util a partir de informacion estructurada y semantica.',
          stack: ['Python', 'FastAPI', 'Redis', 'Qdrant', 'IA aplicada'],
          links: [
            { label: 'Repositorio', href: 'https://github.com/JohanTrianaBonilla/omboarding' },
          ],
        },
      ],
    },
    skills: {
      title: 'Stack tecnico',
      subtitle: 'Tecnologias presentadas con mas presencia visual para comunicar mejor tus herramientas.',
    },
    experience: {
      title: 'Trayectoria',
      items: [
        {
          title: 'Alcaldia Municipal de Sacama - Casanare',
          role: 'Desarrollo de sistema de informacion',
          bullets: [
            'Desarrollo de sistema de informacion para gestion documental.',
            'Apoyo en la implementacion del modelo MIPG.',
            'Desarrollo de funcionalidades para optimizacion de procesos administrativos.',
          ],
        },
      ],
    },
    education: {
      title: 'Formacion',
      items: [
        'Ingenieria de Sistemas - Universidad de Pamplona (en curso)',
        'Tecnologo en Analisis y Desarrollo de Sistemas de Informacion - SENA Regional Boyaca (graduado, 2021)',
        'Certificacion en Ciberseguridad - Google',
      ],
    },
    contact: {
      title: 'Construyamos algo con impacto',
      text:
        'Estoy disponible para practicas, proyectos o colaboraciones donde pueda aportar como desarrollador full stack en frontend, backend, APIs y datos.',
      email: 'Enviar correo',
      github: 'Ver GitHub',
      linkedin: 'Ver LinkedIn',
    },
    footer: 'Portafolio bilingue enfocado en desarrollo full stack.',
    languageSwitch: {
      label: 'Idioma',
      es: 'ES',
      en: 'EN',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Stack',
      experience: 'Journey',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'JOHAN TRIANA',
      kicker: 'Full Stack Developer in Progress',
      title: 'I build web experiences with visual presence, solid logic, and a full stack mindset.',
      lead:
        'I am a Systems Engineering student shaping my professional path as a full stack developer.',
      description:
        'I enjoy integrating modern interfaces, APIs, backend systems, and data into useful digital products. I am currently looking for internship opportunities to strengthen my software development experience while growing through real-world projects.',
      primaryCta: 'Contact me',
      secondaryCta: 'View resume',
      tertiaryCta: 'Explore projects',
      statCards: [
        { value: 'Full Stack', label: 'Professional focus' },
        { value: 'Internships', label: 'Looking for a growth opportunity' },
        { value: 'UI + API + Data', label: 'How I like to build' },
      ],
      socialTitle: 'Connect with me',
    },
    profile: {
      title: 'Professional summary',
      availability: 'Open to internships',
      locationLabel: 'Location',
      locationValue: 'Pamplona, Norte de Santander',
      profileLabel: 'Profile',
      profileValue:
        'Full Stack Developer focused on building complete web solutions, from modern interfaces to APIs, business logic, and data handling.',
      goalLabel: 'Professional direction',
      goalValue:
        'To grow into a strong full stack developer by contributing to real products with impact, solid architecture, and polished visual execution.',
      objectiveLabel: 'Objective',
      objectiveValue:
        'To pursue internship opportunities and strengthen my software development experience while continuing to grow as a full stack profile.',
    },
    spotlight: {
      badge: 'Value proposition',
      title: 'A stronger identity for a versatile technical profile.',
      description:
        'The goal is that from the first glance, your full stack focus, product mindset, and internship availability are immediately clear.',
      cards: [
        {
          title: 'Frontend with presence',
          text: 'Clean, responsive interfaces with a stronger and more memorable identity.',
        },
        {
          title: 'Connected backend',
          text: 'Experience integrating APIs, business logic, and persistent data systems.',
        },
        {
          title: 'Ready to grow',
          text: 'Clear motivation to learn, contribute, and evolve in real working environments.',
        },
      ],
    },
    about: {
      title: 'About me',
      headline: 'Full stack web development with a clear professional goal.',
      text:
        'I am a Systems Engineering student and SENA graduate with experience building web applications. My main goal is to grow as a full stack developer by combining strong interfaces, backend architecture, API integration, and data workflows into thoughtful products.',
    },
    projects: {
      title: 'Featured projects',
      subtitle: 'Work focused on web experiences, data integration, and modern solution building.',
      items: [
        {
          title: 'CUPIDO',
          subtitle: 'University dating web platform',
          description:
            'A web platform designed to support interaction between students through a matching system inside the university environment.',
          impact:
            'Built to connect UX, business rules, and communication between frontend and backend in a functional product flow.',
          stack: ['React', 'FastAPI', 'APIs', 'Relational databases'],
          links: [
            { label: 'Frontend', href: 'https://github.com/JohanTrianaBonilla/cupido-frontend' },
            { label: 'Backend', href: 'https://github.com/JohanTrianaBonilla/cupido-backend' },
          ],
        },
        {
          title: 'Profile Intelligence Platform',
          subtitle: 'Full Stack AI project',
          description:
            'A profile analysis and management platform that integrates data processing, semantic search, and insight generation with language models.',
          impact:
            'Combines backend engineering, data systems, and applied AI to generate useful knowledge from structured and semantic information.',
          stack: ['Python', 'FastAPI', 'Redis', 'Qdrant', 'Applied AI'],
          links: [
            { label: 'Repository', href: 'https://github.com/JohanTrianaBonilla/omboarding' },
          ],
        },
      ],
    },
    skills: {
      title: 'Technical stack',
      subtitle: 'Technologies presented with stronger visual presence to better communicate your tools.',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Municipality of Sacama - Casanare',
          role: 'Information system development',
          bullets: [
            'Built an information system for document management.',
            'Supported the implementation of the MIPG model.',
            'Developed features focused on improving administrative processes.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        'Systems Engineering - Universidad de Pamplona (currently studying)',
        'Technologist in Analysis and Development of Information Systems - SENA Regional Boyaca (graduated, 2021)',
        'Cybersecurity Certificate - Google',
      ],
    },
    contact: {
      title: 'Let us build something with impact',
      text:
        'I am available for internships, projects, or collaborations where I can contribute as a full stack developer across frontend, backend, APIs, and data.',
      email: 'Send email',
      github: 'View GitHub',
      linkedin: 'View LinkedIn',
    },
    footer: 'Bilingual portfolio focused on full stack development.',
    languageSwitch: {
      label: 'Language',
      es: 'ES',
      en: 'EN',
    },
  },
} as const;

export type PortfolioContent = (typeof content)[Language];
