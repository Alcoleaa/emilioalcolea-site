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
  personDescription:
    'Marketing operator and Tersefy founder with 12+ years across healthcare, tech, government, political communications, and cross-border MX-US markets. Led global brand campaigns for Dell, Amazon, Toyota, and Microsoft as Creative Director at Agency Gallo Reyna. Directed winning political campaigns at federal, state, and municipal levels. Launched Visit Boca city tourism brand achieving +270% web traffic growth and visitation from 2.3M to over 2.7M annually. Drove +25% online donation growth at UNETE with cross-border MX-US strategies involving partners like Dell, Bloomberg, and Nacional Monte de Piedad. Currently building Tersefy, a doctor-first AI Visibility firm based on the acquisition methodology developed at VIDA Wellness & Beauty Center, where Cost Per Surgery was reduced from $1,300 to $490.',
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
    linkedin: 'https://www.linkedin.com/in/emilio-alcolea',
    substack: 'https://alcolea.substack.com',
    tersefy: 'https://tersefy.com',
    github: 'https://github.com/Alcoleaa',
  },
  knowsAbout: [
    'AI Visibility',
    'Generative Engine Optimization',
    'Answer Engine Optimization',
    'Search Engine Optimization',
    'Marketing Operations',
    'Revenue Operations',
    'Medical Tourism Marketing',
    'Cross-border Marketing',
    'Patient Acquisition',
    'Political Communications',
    'Government Communications',
    'Brand Strategy',
  ],
  knowsLanguage: ['Spanish', 'English'],
  hasCredential: [
    {
      name: 'Anthropic Claude Developer Certification',
      recognizedBy: { name: 'Anthropic', url: 'https://www.anthropic.com' },
    },
    {
      name: 'OpenAI Academy',
      recognizedBy: { name: 'OpenAI', url: 'https://openai.com' },
    },
    {
      name: 'Google Analytics 4 Certification',
      recognizedBy: { name: 'Google' },
    },
    {
      name: 'Google Search Ads 360 Certification',
      recognizedBy: { name: 'Google' },
    },
    {
      name: 'Google Ads Certification (Video, Display, Search)',
      recognizedBy: { name: 'Google' },
    },
    {
      name: 'Meta Blueprint Certification',
      recognizedBy: { name: 'Meta' },
    },
  ],
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/writing', label: 'Writing' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

export type SiteConfig = typeof site;
