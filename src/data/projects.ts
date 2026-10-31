export interface ProjectHighlight {
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  badge?: string;
  role: string;
  period: string;
  url?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  techStack: string[];
  highlights: ProjectHighlight[];
  gradientFrom: string;
  gradientTo: string;
  iconPath: string;
}

export const projects: Project[] = [
  {
    slug: 'lets-doo',
    number: '01',
    title: "Let's Doo",
    badge: 'Aktuell',
    role: 'Lead Developer',
    period: 'Aktuell',
    url: 'https://letsdoo.it/',
    tagline: 'Odoo-Module & Integrationen für KMU',
    shortDescription:
      'Als Lead Developer beim Odoo-Partner Let\'s Doo entwickle und erweitere ich Odoo-Module und binde weitere Open-Source-Lösungen an.',
    fullDescription: [
      'Let\'s Doo ist ein Odoo-Partner aus Horw bei Luzern. Das Team unterstützt KMU in der Zentralschweiz bei der Einführung, Anpassung, dem Betrieb und der Weiterentwicklung von Odoo – dem modularen Open-Source-ERP, das CRM, Verkauf, Einkauf, Lager, Projekte und Buchhaltung in einem System vereint.',
      'Als Lead Developer verantworte ich die technische Umsetzung: Ich entwickle und erweitere Odoo-Module, setze kundenspezifische Anpassungen wie Felder, Workflows und Reports um und binde weitere Open-Source-Lösungen und Drittsysteme an.',
      'Ziel ist immer dasselbe: Betriebe sollen weg von Excel-Chaos und Insellösungen und mit einem durchgängigen System einfacher, schneller und entspannter arbeiten.',
    ],
    techStack: ['Odoo', 'Python', 'PostgreSQL', 'Schnittstellen', 'Open Source'],
    highlights: [
      { title: 'Eigene Odoo-Module', desc: 'Entwicklung und Erweiterung von Modulen für die spezifischen Prozesse der Kunden.' },
      { title: 'Integrationen', desc: 'Anbindung weiterer Open-Source-Lösungen und Drittsysteme an Odoo.' },
      { title: 'Individuelle Anpassungen', desc: 'Felder, Workflows und Reports, die genau auf den Betrieb zugeschnitten sind.' },
      { title: 'Schweizer KMU', desc: 'Lösungen für Unternehmen in der Zentralschweiz – inklusive Schweizer Anforderungen wie MWST und QR-Rechnung.' },
    ],
    gradientFrom: '#4aa8f0',
    gradientTo: '#1a6fd1',
    iconPath: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6',
  },
  {
    slug: 'kimuno',
    number: '02',
    title: 'kimuno',
    badge: 'Aktuell',
    role: 'CTO',
    period: 'seit 2026',
    url: 'https://kimuno.ch/',
    tagline: 'KI, Digitalisierung & Software aus Luzern',
    shortDescription:
      'Als CTO von kimuno verantworte ich die Technik hinter Beratung, Digitalisierung und Software-Entwicklung für öffentliche Institutionen und KMU – mit Fokus auf Prozessoptimierung und KI.',
    fullDescription: [
      'kimuno ist ein Unternehmen aus Luzern, das öffentliche Institutionen und KMU mit Beratung, Digitalisierung und Software-Entwicklung unterstützt. Im Zentrum stehen Prozessoptimierung und der gezielte Einsatz von künstlicher Intelligenz – damit mehr Zeit für das Wesentliche bleibt.',
      'Als CTO trage ich die technische Gesamtverantwortung: Ich definiere Architektur, Technologieauswahl und Entwicklungsstandards und verantworte Entscheidungen von Frontend und Backend über Datenbanken und APIs bis zur Infrastruktur.',
      'Zum Portfolio gehören eigene Lösungen wie govcom, ein Kommunikations-Management für Gemeinden und öffentliche Einrichtungen, sowie Automatisierungs- und KI-Projekte für Kunden.',
    ],
    techStack: ['KI', 'Automatisierung', 'Software-Architektur', 'Cloud', 'APIs'],
    highlights: [
      { title: 'Technische Gesamtverantwortung', desc: 'Architektur, Technologieauswahl und Weiterentwicklung aller digitalen Lösungen.' },
      { title: 'KI & Automatisierung', desc: 'Prozesse analysieren und mit KI und Automatisierung effizienter gestalten.' },
      { title: 'Öffentliche Hand & KMU', desc: 'Lösungen wie govcom für Gemeinden und öffentliche Einrichtungen.' },
      { title: 'Standards & Prozesse', desc: 'Entwicklungsprozesse, Best Practices sowie Cloud- und Deployment-Lösungen.' },
    ],
    gradientFrom: '#2a3550',
    gradientTo: '#1a87e6',
    iconPath: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z',
  },
  {
    slug: 'alpzen',
    number: '03',
    title: 'Alpzen',
    role: 'Co-Founder & Lead Software Engineer',
    period: '2024 – 2026',
    tagline: 'Web- & App-Entwicklung',
    shortDescription:
      'Mitgegründetes Web- und App-Studio, in dem ich die technische Leitung der Produktentwicklung verantwortet habe.',
    fullDescription: [
      'Alpzen ist ein Unternehmen für Web- und App-Entwicklung, das ich Ende 2024 mitgegründet und bis Mitte 2026 als Lead Software Engineer technisch geführt habe.',
      'Wir haben Kunden von der ersten Idee über Konzeption und Design bis zur Umsetzung und dem Live-Betrieb begleitet – mit einem konsequenten Cloud-First-Ansatz und modernen Frameworks wie Astro, React und Node.js.',
      'Neben der Entwicklung habe ich Architektur, Schnittstellen und Entwicklungsstandards definiert und die Entwicklungs-, Deployment- und Automatisierungsprozesse aufgebaut.',
    ],
    techStack: ['Astro', 'React', 'Node.js', 'TypeScript', 'Cloud'],
    highlights: [
      { title: 'Technische Leitung', desc: 'Verantwortung für Architektur, Schnittstellen und Entwicklungsstandards.' },
      { title: 'Cloud-First', desc: 'Projekte von Anfang an für Cloud-Deployments konzipiert und optimiert.' },
      { title: 'Automatisierung', desc: 'Aufbau von Deployment- und Automatisierungsprozessen für schnelle Releases.' },
      { title: 'Kundennähe', desc: 'Übersetzung fachlicher Anforderungen in User Stories und umsetzbare Lösungen.' },
    ],
    gradientFrom: '#7d8aa0',
    gradientTo: '#3f4b62',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
];

export function getAdjacentProject(currentSlug: string): Project {
  const idx = projects.findIndex(p => p.slug === currentSlug);
  return projects[(idx + 1) % projects.length];
}

/** Pick dark or light ink for content placed on a project's gradient panel. */
export function panelInk(hex: string): string {
  const n = parseInt(hex.replace('#', ''), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? '#1d2433' : '#ffffff';
}

export function panelStyle(p: Project): string {
  return `--panel-from:${p.gradientFrom};--panel-to:${p.gradientTo};--panel-ink:${panelInk(p.gradientFrom)}`;
}
