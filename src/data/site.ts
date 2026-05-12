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
    whatsapp: '+52 229 958 6375',
    whatsappE164: '522299586375',
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
    { href: '/expertise', label: 'Expertise' },
    { href: '/resume', label: 'Resume' },
    { href: '/writing', label: 'Writing' },
    { href: '/case-studies', label: 'Case studies' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

export type SiteConfig = typeof site;

export const pageMeta = {
  home: {
    title: 'Emilio Alcolea · Marketing operator. Tersefy founder.',
    description:
      'Marketing operator and Tersefy founder based in Tijuana. 12+ years building acquisition systems across medical tourism, government, political campaigns, non-profits, and global brand work for Dell, Amazon, Toyota, Microsoft.',
    ogImage: '/og-default.png',
    ogType: 'website',
  },
  about: {
    title: 'About Emilio Alcolea · Career across five industries',
    description:
      'Long-form biography of Emilio Alcolea. Career spans medical tourism (VIDA), municipal government (Boca del Río Visit Boca brand), education non-profits (UNETE), political campaigns at federal/state/municipal levels, and global brand campaigns for Dell, Amazon, Toyota, Microsoft.',
    ogImage: '/og-default.png',
    ogType: 'profile',
  },
  resume: {
    title: 'Resume · Emilio Alcolea · Full CV with metrics',
    description:
      'Full structured CV of Emilio Alcolea. Tersefy founder, former CSMO at VIDA Wellness & Beauty. Senior Marketing Consultant for Washington Vascular Specialists. 12+ years across healthcare, tech, government, political campaigns, and global brand work.',
    ogImage: '/og-default.png',
    ogType: 'profile',
  },
  writing: {
    title: 'Writing · Emilio Alcolea · The Insider Dispatch and publications',
    description:
      'Selected writing by Emilio Alcolea. The Insider Dispatch weekly newsletter on marketing operations and AI search. Tersefy publications on GEO and medical tourism. Editorial production across medical, wellness, marketing, and tech verticals.',
    ogImage: '/og-default.png',
    ogType: 'website',
  },
  contact: {
    title: 'Contact Emilio Alcolea · AI visibility and growth consulting',
    description:
      'Contact Emilio Alcolea, marketing operator and Tersefy founder. Available for consulting on AI Visibility, GEO, AEO, SEO for doctors and medical practices, marketing operations, revenue strategy, and cross-border MX-US growth.',
    ogImage: '/og-default.png',
    ogType: 'website',
  },
  expertise: {
    title: 'Expertise · Emilio Alcolea · Multi-industry operator',
    description:
      'Expertise overview of Emilio Alcolea organized by industry. AI Visibility, marketing operations, cross-border MX-US growth, medical tourism, political and government communications, non-profit fundraising, brand strategy.',
    ogImage: '/og-default.png',
    ogType: 'profile',
  },
  caseStudies: {
    title: 'Case Studies · Emilio Alcolea',
    description:
      'Documented case studies of marketing and acquisition systems built by Emilio Alcolea. Methodology, constraints, strategy, results, and what transferred to subsequent work.',
    ogImage: '/og-default.png',
    ogType: 'website',
  },
  vidaCaseStudy: {
    title: 'VIDA Wellness & Beauty Case Study · Emilio Alcolea',
    description:
      'How Cost Per Surgery was reduced from $1,300 to $490 (62%) at VIDA Wellness & Beauty Center while cutting total ad spend 20% and holding procedure volume. P&L governance, funnel diagnostics, sales operations, patient experience design.',
    ogImage: '/og-default.png',
    ogType: 'article',
  },
} as const;

export type PageKey = keyof typeof pageMeta;
