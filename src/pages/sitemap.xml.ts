import type { APIRoute } from 'astro';

const LASTMOD = new Date().toISOString();

const urls: Array<{ loc: string; priority: string; changefreq: string }> = [
  { loc: 'https://emilioalcolea.com/', priority: '1.0', changefreq: 'monthly' },
  { loc: 'https://emilioalcolea.com/about', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://emilioalcolea.com/expertise', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://emilioalcolea.com/resume', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://emilioalcolea.com/writing', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://emilioalcolea.com/case-studies', priority: '0.7', changefreq: 'monthly' },
  { loc: 'https://emilioalcolea.com/case-studies/vida', priority: '0.8', changefreq: 'yearly' },
  { loc: 'https://emilioalcolea.com/contact', priority: '0.8', changefreq: 'monthly' },
];

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

export const GET: APIRoute = () => {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
