import type { APIRoute } from 'astro';
import { getServices } from '../data/services';
import { getProjects } from '../data/projects';
import { homePath, servicePath, projectPath } from '../i18n';

/**
 * /llms.txt – a compact, Markdown summary of the site for AI assistants and
 * AI search engines (format: https://llmstxt.org). Generated at build time from
 * the same data as the pages, so it stays in sync with the content.
 */
export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;

  const services = getServices('en');
  const servicesDe = getServices('de');
  const projects = getProjects('en');

  const body = `# Tim Flavio Ineichen

> Freelance Senior Software Engineer & Architect based in Kriens near Lucerne, Switzerland. Software architecture, full-stack web applications, websites, technical leadership and requirements engineering for SMEs, start-ups and public institutions – remote across the DACH region or on site in Central Switzerland.

Key facts:

- Role: Freelance Senior Software Engineer & Architect; additionally CTO at kimuno GmbH (https://kimuno.ch/) and Lead Developer at Let's Doo GmbH (https://letsdoo.it/), an Odoo partner.
- Experience: 7+ years of professional software development, end to end from requirements and architecture to deployment and operations; experience with quality management software in ISO 9001 regulated environments.
- Location: Kriens / Lucerne, Switzerland. Works remotely or on site.
- Languages: German and English (C1).
- Tech: TypeScript, JavaScript, PHP (Symfony), Python, C#; React, Vue, Astro; PostgreSQL, MySQL/MariaDB, MSSQL; Odoo, Pimcore/Sulu, Craft CMS, WordPress; Docker, CI/CD, GitLab, Azure DevOps.
- Education: Professional Bachelor (HF) in Software Engineering at TEKO (since 2024); Federal VET Diploma in Application Development (2017–2021).
- Contact: kontakt@alpzen-group.ch · free, no-obligation intro call. LinkedIn: https://www.linkedin.com/in/tim-flavio-ineichen-269a231a8/ · GitHub: https://github.com/TimAtOak

The site is available in German (default, ${url(homePath('de'))}) and English (${url(homePath('en'))}).

## Services

${services.map((s) => `- [${s.title}](${url(servicePath('en', s.slug))}): ${s.text}`).join('\n')}

## Services (German)

${servicesDe.map((s) => `- [${s.title}](${url(servicePath('de', s.slug))}): ${s.metaDescription}`).join('\n')}

## Projects

${projects.map((p) => `- [${p.title} – ${p.tagline}](${url(projectPath('en', p.slug))}): ${p.role}, ${p.period}. ${p.shortDescription}`).join('\n')}

## Optional

- [Home (English)](${url(homePath('en'))}): About, services, experience, projects and contact form.
- [CV (German, PDF)](${url('/Tim_Ineichen_Lebenslauf.pdf')}): Full curriculum vitae.
- [Legal notice (German)](${url('/impressum/')}): Imprint.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
