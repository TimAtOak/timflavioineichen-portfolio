import type { Lang } from '../i18n';

export interface Position {
  period: string;
  role: string;
  company: string;
  url?: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack?: string[];
}

const de: Position[] = [
  {
    period: 'Aktuell',
    role: 'Freelance Software Engineer & Architect',
    company: 'Selbstständig',
    current: true,
    summary: 'Unabhängige Mandate in Software-Architektur, Full-Stack-Entwicklung und technischer Leitung.',
    points: [
      'Konzeption und Umsetzung von Webanwendungen und Schnittstellen für Unternehmen und Start-ups',
      'Architektur-Reviews, Technologieentscheide und Begleitung von Entwicklungsteams',
      'Requirements Engineering und technische Machbarkeitsbewertung',
    ],
  },
  {
    period: 'Seit Apr 2026',
    role: 'CTO',
    company: 'kimuno GmbH',
    url: 'https://kimuno.ch/',
    current: true,
    summary: 'Luzerner Unternehmen für Beratung, Digitalisierung und Software-Entwicklung mit Fokus auf Prozessoptimierung und KI – für öffentliche Institutionen und KMU.',
    points: [
      'Technische Gesamtverantwortung für Architektur, Technologieauswahl und Weiterentwicklung digitaler Lösungen',
      'Definition technischer Standards, Entwicklungsprozesse und Best Practices',
      'Verantwortung für Entscheidungen in Frontend, Backend, Datenbanken, APIs und Infrastruktur',
      'Unterstützung bei Produktstrategie, Requirements Engineering und Machbarkeitsbewertung',
    ],
  },
  {
    period: 'Aktuell',
    role: 'Lead Developer',
    company: "Let's Doo GmbH",
    url: 'https://letsdoo.it/',
    current: true,
    summary: 'Odoo-Partner aus Horw, der KMU in der Zentralschweiz bei Einführung, Anpassung und Betrieb von Odoo begleitet.',
    points: [
      'Entwicklung und Erweiterung von Odoo-Modulen',
      'Anbindung weiterer Open-Source-Lösungen und Drittsysteme',
      'Individuelle Anpassungen wie Felder, Workflows und Reports für Kundenprojekte',
    ],
    stack: ['Odoo', 'Python', 'PostgreSQL'],
  },
  {
    period: 'Dez 2024 – Jun 2026',
    role: 'Lead Software Engineer & Co-Founder',
    company: 'Alpzen',
    summary: 'Technische Leitung der Produktentwicklung im mitgegründeten Web- und App-Studio.',
    points: [
      'Konzeption und Entwicklung vollständiger Softwarelösungen bis zur produktiven Bereitstellung',
      'Definition von Architektur, Schnittstellen und Entwicklungsstandards',
      'Aufbau von Entwicklungs-, Deployment- und Automatisierungsprozessen',
    ],
    stack: ['Astro', 'React', 'Node.js', 'TypeScript'],
  },
  {
    period: 'Mär 2026 – Mai 2026',
    role: 'Software Engineer',
    company: 'CODATA AG',
    summary: 'Full-Stack-Entwicklung in der digitalen Produktentwicklung.',
    points: [
      'Umsetzung kompletter Lösungen von Frontend bis Backend',
      'Entwicklung und Wartung von Webanwendungen mit modernen Frameworks',
    ],
    stack: ['React (TS)', 'Symfony', 'MySQL', 'Pimcore / Sulu', 'GitLab'],
  },
  {
    period: 'Jan 2023 – Feb 2026',
    role: 'Software Architect',
    company: 'Synprovis GmbH',
    summary: 'Architektur und Entwicklung einer QM-Software für ISO 9001, 14001 und 27001.',
    points: [
      'Entwurf und Implementierung skalierbarer Softwarearchitekturen',
      'Aufbau einer Frontend-Komponentenbibliothek in React und Evaluation externer Libraries',
      'Frontend-Architektur, UI/UX-Design, API-Design und Backend-Entwicklung',
    ],
    stack: ['React (TS)', 'C#', 'MSSQL', 'Azure DevOps'],
  },
  {
    period: 'Okt 2022 – Dez 2023',
    role: 'Management Assistant & Requirements Engineer',
    company: 'Klett und Balmer Verlag',
    summary: 'Brücke zwischen Fachbereichen und Entwicklung in der digitalen Produktentwicklung.',
    points: [
      'Analyse von Geschäftsanforderungen und Dokumentation von Prozessen',
      'Leitung eines Teams aus fünf Frontend- und Backend-Entwicklern',
      'Code Reviews, Mitarbeit an der LMS-Software und Moderation von Scrum-Meetings',
    ],
    stack: ['Symfony', 'Twig', 'MS Dynamics 365', 'GitLab'],
  },
  {
    period: 'Okt 2021 – Dez 2023',
    role: 'Full Stack Developer',
    company: 'H2G Internetagentur',
    summary: 'Kundenprojekte von der Anforderungsanalyse bis zum Go-live.',
    points: [
      'Umsetzung kompletter Lösungen über den gesamten Entwicklungszyklus',
      'Direkter Kundenkontakt inklusive Anforderungsanalyse und regelmässigen Meetings',
      'Sicherstellung von Performance, Skalierbarkeit und Benutzerfreundlichkeit',
    ],
    stack: ['React', 'Vue', 'PHP', 'Craft CMS', 'WordPress'],
  },
  {
    period: 'Aug 2019 – Mai 2021',
    role: 'Junior Full Stack Developer',
    company: 'pixel ahoi GmbH',
    summary: 'Webprojekte von Design bis Deployment im Rahmen der Ausbildung (EFZ).',
    points: [
      'Entwicklung responsiver Websites und Integration von Frontend und Backend',
      'Mitarbeit bei UI-Design sowie Foto- und Videografie',
      'Integration von VR-Touren für Google Maps',
    ],
    stack: ['React', 'PHP', 'WordPress', 'MySQL'],
  },
];

const en: Position[] = [
  {
    period: 'Current',
    role: 'Freelance Software Engineer & Architect',
    company: 'Self-employed',
    current: true,
    summary: 'Independent engagements in software architecture, full-stack development and technical leadership.',
    points: [
      'Design and delivery of web applications and integrations for companies and start-ups',
      'Architecture reviews, technology decisions and guidance for development teams',
      'Requirements engineering and technical feasibility assessments',
    ],
  },
  {
    period: 'Since Apr 2026',
    role: 'CTO',
    company: 'kimuno GmbH',
    url: 'https://kimuno.ch/',
    current: true,
    summary: 'Lucerne-based company for consulting, digitalisation and software development with a focus on process optimisation and AI – for public institutions and SMEs.',
    points: [
      'Overall technical responsibility for architecture, technology choices and the evolution of digital solutions',
      'Definition of technical standards, development processes and best practices',
      'Ownership of decisions across frontend, backend, databases, APIs and infrastructure',
      'Support for product strategy, requirements engineering and feasibility assessments',
    ],
  },
  {
    period: 'Current',
    role: 'Lead Developer',
    company: "Let's Doo GmbH",
    url: 'https://letsdoo.it/',
    current: true,
    summary: 'Odoo partner based in Horw, helping SMEs in Central Switzerland introduce, customise and run Odoo.',
    points: [
      'Development and extension of Odoo modules',
      'Integration of further open-source solutions and third-party systems',
      'Custom fields, workflows and reports for client projects',
    ],
    stack: ['Odoo', 'Python', 'PostgreSQL'],
  },
  {
    period: 'Dec 2024 – Jun 2026',
    role: 'Lead Software Engineer & Co-Founder',
    company: 'Alpzen',
    summary: 'Technical lead for product development at the web and app studio I co-founded.',
    points: [
      'Design and development of complete software solutions through to production',
      'Definition of architecture, interfaces and development standards',
      'Set-up of development, deployment and automation processes',
    ],
    stack: ['Astro', 'React', 'Node.js', 'TypeScript'],
  },
  {
    period: 'Mar 2026 – May 2026',
    role: 'Software Engineer',
    company: 'CODATA AG',
    summary: 'Full-stack development in digital product development.',
    points: [
      'Delivery of complete solutions from frontend to backend',
      'Development and maintenance of web applications with modern frameworks',
    ],
    stack: ['React (TS)', 'Symfony', 'MySQL', 'Pimcore / Sulu', 'GitLab'],
  },
  {
    period: 'Jan 2023 – Feb 2026',
    role: 'Software Architect',
    company: 'Synprovis GmbH',
    summary: 'Architecture and development of quality management software for ISO 9001, 14001 and 27001.',
    points: [
      'Design and implementation of scalable software architectures',
      'Built a React component library and evaluated external libraries',
      'Frontend architecture, UI/UX design, API design and backend development',
    ],
    stack: ['React (TS)', 'C#', 'MSSQL', 'Azure DevOps'],
  },
  {
    period: 'Oct 2022 – Dec 2023',
    role: 'Management Assistant & Requirements Engineer',
    company: 'Klett und Balmer Verlag',
    summary: 'Bridge between business units and development in digital product development.',
    points: [
      'Analysis of business requirements and process documentation',
      'Led a team of five frontend and backend developers',
      'Code reviews, contributions to the LMS software and facilitation of Scrum meetings',
    ],
    stack: ['Symfony', 'Twig', 'MS Dynamics 365', 'GitLab'],
  },
  {
    period: 'Oct 2021 – Dec 2023',
    role: 'Full Stack Developer',
    company: 'H2G Internetagentur',
    summary: 'Client projects from requirements analysis to go-live.',
    points: [
      'Delivery of complete solutions across the entire development lifecycle',
      'Direct client contact including requirements analysis and regular meetings',
      'Ensuring performance, scalability and usability',
    ],
    stack: ['React', 'Vue', 'PHP', 'Craft CMS', 'WordPress'],
  },
  {
    period: 'Aug 2019 – May 2021',
    role: 'Junior Full Stack Developer',
    company: 'pixel ahoi GmbH',
    summary: 'Web projects from design to deployment as part of my apprenticeship (EFZ).',
    points: [
      'Development of responsive websites and integration of frontend and backend',
      'Contributions to UI design as well as photography and videography',
      'Integration of VR tours for Google Maps',
    ],
    stack: ['React', 'PHP', 'WordPress', 'MySQL'],
  },
];

export const positions: Record<Lang, Position[]> = { de, en };
