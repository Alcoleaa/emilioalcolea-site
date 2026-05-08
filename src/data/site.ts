/**
 * Canonical site metadata. Single source of truth.
 * Imported by BaseLayout, components, and dynamic .ts endpoints.
 */

export const site = {
  name: 'Emilio Alcolea',
  url: 'https://emilioalcolea.com',
  repo: 'https://github.com/Alcoleaa/emilioalcolea-site',
  defaultTitle: 'Emilio Alcolea · Marketing operator and Tersefy founder',
  titleSuffix: ' · Emilio Alcolea',
  defaultDescription:
    'Marketing operator and Tersefy founder. 12+ years across healthcare, tech, government, and cross-border MX-US markets.',
  ogImage: '/og-default.png',
  portrait: '/emilio-portrait.jpg',
  locale: 'en',
  author: {
    name: 'Emilio Alcolea',
    email: 'egalcolea@gmail.com',
    phoneMx: '+52 663 441 2590',
    phoneUs: '+1 619 904-7542',
    city: 'Tijuana',
    region: 'Baja California',
    country: 'MX',
  },
  social: {
    linkedin: 'https://linkedin.com/in/emilio-alcolea',
    substack: 'https://alcolea.substack.com',
    tersefy: 'https://tersefy.com',
  },
  knowsAbout: [
    'Generative Engine Optimization',
    'Answer Engine Optimization',
    'Search Engine Optimization',
    'Marketing Operations',
    'Medical Tourism Marketing',
    'AI Visibility',
    'Revenue Operations',
    'Cross-border Marketing',
    'Political Campaign Strategy',
    'Brand Strategy',
  ],
  knowsLanguage: ['Spanish', 'English'],
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/writing', label: 'Writing' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

export type SiteConfig = typeof site;
