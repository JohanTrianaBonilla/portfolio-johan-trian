import { socialLinks } from '../_data/portfolio-content';

type SocialLinkId = (typeof socialLinks)[number]['id'];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M5 7l7 6 7-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 .7a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1.1-.4 3.4 1.2a11.7 11.7 0 016.2 0c2.4-1.6 3.4-1.2 3.4-1.2.7 1.6.3 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 .7z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5.5 8.3A1.9 1.9 0 105.5 4.5a1.9 1.9 0 000 3.8zM3.9 9.8h3.2V20H3.9zM9 9.8h3.1v1.4h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1V20h-3.2v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H9z" />
    </svg>
  );
}

export function SocialIcon({ id }: { id: SocialLinkId }) {
  if (id === 'email') {
    return <MailIcon />;
  }

  if (id === 'github') {
    return <GitHubIcon />;
  }

  return <LinkedInIcon />;
}

export function SkillIcon({ label }: { label: string }) {
  const tone = label.includes('React')
    ? 'from-cyan-300 to-sky-200 text-cyan-700'
    : label.includes('Angular')
      ? 'from-rose-300 to-pink-200 text-rose-700'
      : label.includes('HTML')
        ? 'from-amber-200 to-orange-100 text-amber-700'
        : label.includes('CSS') || label.includes('Tailwind')
          ? 'from-sky-200 to-blue-100 text-sky-700'
          : label.includes('Python') || label.includes('FastAPI') || label.includes('Spring')
            ? 'from-emerald-200 to-lime-100 text-emerald-700'
            : label.includes('Java') || label.includes('Git') || label.includes('Redis')
              ? 'from-orange-200 to-red-100 text-orange-700'
              : label.includes('Docker')
                ? 'from-sky-200 to-cyan-100 text-sky-700'
                : label.includes('SQL') || label.includes('MySQL') || label.includes('Postgre')
                  ? 'from-indigo-200 to-slate-100 text-indigo-700'
                  : 'from-violet-200 to-indigo-100 text-violet-700';

  const wrapperClass = `flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br shadow-inner ${tone}`;

  if (label === 'React') {
    return (
      <div className={wrapperClass}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none" />
          <ellipse cx="24" cy="24" rx="15" ry="6.5" />
          <ellipse cx="24" cy="24" rx="15" ry="6.5" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="15" ry="6.5" transform="rotate(-60 24 24)" />
        </svg>
      </div>
    );
  }

  if (label === 'Angular') {
    return (
      <div className={wrapperClass}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M24 6l14 5-2 20-12 7-12-7-2-20 14-5z" />
          <path d="M24 15l-6 15h3l1.2-3h3.6l1.2 3h3L24 15z" fill="currentColor" stroke="none" />
        </svg>
      </div>
    );
  }

  if (label === 'HTML5') {
    return (
      <div className={wrapperClass}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 8h28l-3 28-11 4-11-4-3-28z" />
          <path d="M17 17h14M18 23h12M20 29h8" />
        </svg>
      </div>
    );
  }

  if (label === 'CSS' || label === 'Tailwind CSS') {
    return (
      <div className={wrapperClass}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 25c3-5 6-7 10-7 5 0 6 3 8 5 1 1 3 2 4 2" />
          <path d="M12 31c3-5 6-7 10-7 5 0 6 3 8 5 1 1 3 2 4 2" />
        </svg>
      </div>
    );
  }

  if (label === 'JavaScript') {
    return (
      <div className={wrapperClass}>
        <div className="rounded-xl bg-slate-900/15 px-2 py-1 text-xs font-black tracking-tight text-slate-700">JS</div>
      </div>
    );
  }

  if (label === 'Python' || label === 'FastAPI') {
    return (
      <div className={wrapperClass}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 12h10a5 5 0 015 5v4H17a5 5 0 01-5-5 4 4 0 014-4z" />
          <path d="M32 36H22a5 5 0 01-5-5v-4h14a5 5 0 015 5 4 4 0 01-4 4z" />
          <circle cx="20" cy="17" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="28" cy="31" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </div>
    );
  }

  if (label.includes('SQL') || label.includes('MySQL') || label.includes('Postgre')) {
    return (
      <div className={wrapperClass}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="24" cy="15" rx="10" ry="4" />
          <path d="M14 15v8c0 2 4.5 4 10 4s10-2 10-4v-8" />
          <path d="M14 23v8c0 2 4.5 4 10 4s10-2 10-4v-8" />
        </svg>
      </div>
    );
  }

  if (label === 'GitHub') {
    return <div className={wrapperClass}><GitHubIcon /></div>;
  }

  return (
    <div className={wrapperClass}>
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 9l12 7v16l-12 7-12-7V16l12-7z" />
        <path d="M24 16l5 3v6l-5 3-5-3v-6l5-3z" />
      </svg>
    </div>
  );
}
