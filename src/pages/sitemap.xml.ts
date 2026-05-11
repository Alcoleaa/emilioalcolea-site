import type { APIRoute } from 'astro';

const LASTMOD = new Date().toISOString();

const urls: Array<{ loc: string; priority: string }> = [
  { loc: 'https://emilioalcolea.com/', priority: '1.0' },
  { loc: 'https://emilioalcolea.com/about', priority: '0.8' },
  { loc: 'https://emilioalcolea.com/resume', priority: '0.8' },
  { loc: 'https://emilioalcolea.com/writing', priority: '0.8' },
  { loc: 'https://emilioalcolea.com/contact', priority: '0.8' },
];

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
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
