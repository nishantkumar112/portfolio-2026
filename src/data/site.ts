export const siteConfig = {
  name: 'Nishant Atras',
  title: 'Full-Stack Developer',
  url: 'https://nishantatras.dev',
  email: 'hello@nishantatras.dev',
  description:
    'Full-stack developer building production-ready web apps with React, Next.js, and TypeScript. Available for freelance and full-time opportunities.',
  githubUsername: 'nishantkumar112',
  linkedinUrl: 'https://www.linkedin.com/in/nishantatras/',
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    'https://calendly.com/nishantatras/30min',
  resumeUrl: '/resume.pdf',
  stats: [
    {label: 'Years building', value: '3+'},
    {label: 'Projects shipped', value: '10+'},
    {label: 'Response time', value: '<24h'},
  ],
} as const;

export const navLinks = [
  {label: 'About', href: '#hero'},
  {label: 'Work', href: '#projects'},
  {label: 'Experience', href: '#experience'},
  {label: 'Skills', href: '#skills'},
  {label: 'Contact', href: '#contact'},
] as const;
