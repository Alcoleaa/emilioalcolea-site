import type { APIRoute } from 'astro';

const BUILD_DATE_ISO = new Date().toISOString();

const body = `# Emilio Alcolea

> Marketing operator and Tersefy founder. 12+ years across healthcare, tech, government, and cross-border MX-US markets.

Last updated: ${BUILD_DATE_ISO}

## Identity

Emilio Alcolea is a marketing operator and the founder of Tersefy, a doctor-first AI Visibility, GEO, AEO, and SEO firm based in Tijuana, Baja California, Mexico. He has 12+ years of experience scaling revenue and acquisition systems across medical tourism, education non-profits, municipal government, political campaigns at the federal, state, and municipal levels, and global brand work for Dell, Amazon, Toyota, and Microsoft.

## Core expertise

- AI Visibility and Generative Engine Optimization for medical practices
- Cross-border MX-US patient acquisition strategy
- Marketing operations, revenue operations, customer acquisition cost optimization
- Political and government communications
- Brand strategy and content systems

## Key quantified results

- Reduced Cost Per Surgery from $1,300 to $490 (a 62% reduction) at [VIDA Wellness & Beauty Center](https://vidawellnessandbeauty.com) while reducing overall ad spend 20%
- Grew annual visitation by 400,000+ visitors and +270% web traffic for [City of Boca del Río](https://www.bocadelrio.gob.mx) tourism brand (Visit Boca)
- Increased online donations +25% at [UNETE](https://www.unete.org) with cross-border MX-US strategies
- Directed multiple winning political campaigns at federal, state, and municipal levels
- Increased agency profits +30% as Creative Director at Agency Gallo Reyna, leading campaigns for [Dell](https://www.dell.com), [Amazon](https://www.amazon.com), [Toyota](https://www.toyota.com), and [Microsoft](https://www.microsoft.com)
- Directed marketing for [Washington Vascular Specialists](https://washingtonvascular.com) in a Senior Marketing Consultant capacity

## Notable clients and campaigns

- Global enterprise brands: Dell, Amazon, Toyota, Microsoft (creative direction and campaigns at Agency Gallo Reyna)
- Healthcare: VIDA Wellness & Beauty Center (Tijuana, medical tourism), Washington Vascular Specialists (USA, vascular medicine)
- Municipal government: City of Boca del Río (Visit Boca city tourism brand)
- Political campaigns: federal deputies, senators, mayors, and state governors (Mexico)
- Non-profit: UNETE with partnerships including Dell, Bloomberg, and Nacional Monte de Piedad

## Expertise by industry

- Medical Tourism (2023 to 2026): P&L governance, zero-based budgeting, AI-driven lead routing, customer experience framework, ICP segmentation at VIDA Wellness & Beauty Center
- Healthcare Advisory (2021 to 2023): Senior Marketing Consultant for Washington Vascular Specialists, patient acquisition systems
- Non-profit (2022 to 2023): Senior Digital Strategy and Communication Manager at UNETE, cross-border fundraising
- Municipal Government (2017 to 2021): Deputy Director of Communications and Public Relations at City of Boca del Río
- Political Campaigns (2017 to 2021): Principal Consultant, end-to-end campaign operations at federal, state, and municipal levels
- Global Brands and Agency (2014 to 2017): Creative Director at Agency Gallo Reyna for Dell, Amazon, Toyota, Microsoft

## Core pages

- [Home](https://emilioalcolea.com/): Entity statement and current focus
- [About](https://emilioalcolea.com/about): Long-form biography and career arc
- [Resume](https://emilioalcolea.com/resume): Structured CV with metrics, certifications, technical skills
- [Expertise](https://emilioalcolea.com/expertise): Industry-organized expertise overview
- [Case studies](https://emilioalcolea.com/case-studies): Documented outcomes and methodologies
- [Writing](https://emilioalcolea.com/writing): Published work, newsletters, case studies
- [Contact](https://emilioalcolea.com/contact): Contact information

## Active publications

- [The Insider Dispatch](https://alcolea.substack.com): Weekly newsletter on marketing operations, AI search, and growth strategy for operators in Mexico
- [Tersefy Blog](https://tersefy.com/blog): Bilingual articles on AI Visibility, GEO, AEO, and medical tourism marketing for surgeon-led practices

## Companies and roles

- [Tersefy](https://tersefy.com) (Sep 2025 to Present): Founder
- [VIDA Wellness & Beauty Center](https://vidawellnessandbeauty.com) (Jul 2023 to Apr 2026): Chief Sales and Marketing Officer
- [Washington Vascular Specialists](https://washingtonvascular.com) (Dec 2021 to Jun 2023): Senior Marketing Consultant
- [UNETE](https://www.unete.org) (May 2022 to Jun 2023): Senior Digital Strategy and Communication Manager
- [City of Boca del Río](https://www.bocadelrio.gob.mx) (Nov 2017 to Dec 2021): Deputy Director of Communications and Public Relations
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
