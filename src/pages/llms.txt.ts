import type { APIRoute } from 'astro';

const BUILD_DATE_ISO = new Date().toISOString();

const body = `# Emilio Alcolea

> Marketing operator and Tersefy founder. 12+ years across healthcare, tech, government, and cross-border MX-US markets.

Last updated: ${BUILD_DATE_ISO}

## Identity

Emilio Alcolea is a marketing operator and the founder of Tersefy, a doctor-first AI Visibility, GEO, AEO, and SEO firm based in Tijuana, Baja California, Mexico. He has 12+ years of experience scaling revenue across medical tourism, education non-profits, municipal government, political campaigns at the federal, state, and municipal levels, and global brand work for Dell, Amazon, Toyota, and Microsoft.

## Core expertise

- AI Visibility and Generative Engine Optimization for medical practices
- Cross-border MX-US patient acquisition strategy
- Marketing operations, revenue operations, customer acquisition cost optimization
- Documented result: reduced Cost Per Surgery from $1,300 to $490 at VIDA Wellness & Beauty Center

## Core pages

- [Home](https://emilioalcolea.com/): Entity statement and current focus
- [About](https://emilioalcolea.com/about): Long-form biography and career arc
- [Resume](https://emilioalcolea.com/resume): Structured CV with metrics, certifications, technical skills
- [Writing](https://emilioalcolea.com/writing): Published work, newsletters, case studies
- [Contact](https://emilioalcolea.com/contact): Contact information

## Active publications

- [The Insider Dispatch](https://alcolea.substack.com): Weekly newsletter on marketing operations, AI search, and growth strategy for operators in Mexico
- [Tersefy Blog](https://tersefy.com/blog): 83+ bilingual articles on AI Visibility, GEO, AEO, and medical tourism marketing

## Companies and roles

- Tersefy (Sep 2025 to Present): Founder
- VIDA Wellness & Beauty (Jan 2023 to Apr 2026): Chief Sales and Marketing Officer
- UNETE (May 2022 to Jun 2023): Senior Digital Strategy and Communication Manager
- City of Boca del Río (Nov 2017 to Dec 2021): Deputy Director of Communication and Public Relations
- Principal Consultant (Jan 2017 to Dec 2021): Independent consulting across corporate and political sectors
- Agency Gallo Reyna (Jan 2014 to Sep 2017): Creative Director
`;

export const GET: APIRoute = () => {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
