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

export const positions: Position[] = [
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
