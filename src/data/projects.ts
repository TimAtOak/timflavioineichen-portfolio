import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';
import letsdooShot from '../assets/projects/letsdoo.jpg';
import kimunoShot from '../assets/projects/kimuno.jpg';

export interface ProjectHighlight {
  title: string;
  desc: string;
}

/** Language-dependent project copy. */
interface ProjectText {
  badge?: string;
  role: string;
  period: string;
  tagline: string;
  shortDescription: string;
  /** Meta description for search engines (≤ 155 chars); falls back to shortDescription. */
  metaDescription?: string;
  fullDescription: string[];
  techStack: string[];
  highlights: ProjectHighlight[];
}

interface ProjectBase {
  slug: string;
  number: string;
  title: string;
  url?: string;
  /** Website screenshot shown in a browser frame on the project panel. */
  image?: ImageMetadata;
  gradientFrom: string;
  gradientTo: string;
  iconPath: string;
  text: Record<Lang, ProjectText>;
}

export type Project = Omit<ProjectBase, 'text'> & ProjectText;

const projectData: ProjectBase[] = [
  {
    slug: 'lets-doo',
    number: '01',
    title: "Let's Doo",
    url: 'https://letsdoo.it/',
    image: letsdooShot,
    gradientFrom: '#4aa8f0',
    gradientTo: '#1a6fd1',
    iconPath: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6',
    text: {
      de: {
        badge: 'Aktuell',
        role: 'Lead Developer',
        period: 'Aktuell',
        tagline: 'Odoo-Module & Integrationen für KMU',
        shortDescription:
          "Als Lead Developer beim Odoo-Partner Let's Doo entwickle und erweitere ich Odoo-Module und binde weitere Open-Source-Lösungen an.",
        fullDescription: [
          "Let's Doo ist ein Odoo-Partner aus Horw bei Luzern. Das Team unterstützt KMU in der Zentralschweiz bei der Einführung, Anpassung, dem Betrieb und der Weiterentwicklung von Odoo – dem modularen Open-Source-ERP, das CRM, Verkauf, Einkauf, Lager, Projekte und Buchhaltung in einem System vereint.",
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
      },
      en: {
        badge: 'Current',
        role: 'Lead Developer',
        period: 'Current',
        tagline: 'Odoo modules & integrations for SMEs',
        shortDescription:
          "As Lead Developer at the Odoo partner Let's Doo, I build and extend Odoo modules and integrate further open-source solutions.",
        fullDescription: [
          "Let's Doo is an Odoo partner based in Horw near Lucerne. The team helps SMEs in Central Switzerland introduce, customise, run and evolve Odoo – the modular open-source ERP that brings CRM, sales, purchasing, inventory, projects and accounting together in one system.",
          'As Lead Developer I own the technical delivery: I build and extend Odoo modules, implement client-specific customisations such as fields, workflows and reports, and integrate further open-source solutions and third-party systems.',
          'The goal is always the same: moving businesses away from spreadsheet chaos and isolated tools towards one consistent system that makes work simpler, faster and more relaxed.',
        ],
        techStack: ['Odoo', 'Python', 'PostgreSQL', 'Integrations', 'Open Source'],
        highlights: [
          { title: 'Custom Odoo modules', desc: "Development and extension of modules for each client's specific processes." },
          { title: 'Integrations', desc: 'Connecting further open-source solutions and third-party systems to Odoo.' },
          { title: 'Tailored customisations', desc: 'Fields, workflows and reports shaped exactly around the business.' },
          { title: 'Swiss SMEs', desc: 'Solutions for companies in Central Switzerland – including Swiss requirements such as VAT and QR invoices.' },
        ],
      },
    },
  },
  {
    slug: 'kimuno',
    number: '02',
    title: 'kimuno',
    url: 'https://kimuno.ch/',
    image: kimunoShot,
    gradientFrom: '#2a3550',
    gradientTo: '#1a87e6',
    iconPath: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z',
    text: {
      de: {
        badge: 'Aktuell',
        role: 'CTO',
        period: 'seit 2026',
        tagline: 'KI, Digitalisierung & Software aus Luzern',
        shortDescription:
          'Als CTO von kimuno verantworte ich die Technik hinter Beratung, Digitalisierung und Software-Entwicklung für öffentliche Institutionen und KMU – mit Fokus auf Prozessoptimierung und KI.',
        metaDescription:
          'Als CTO von kimuno verantworte ich die Technik hinter Digitalisierung und Software für öffentliche Institutionen und KMU – mit Fokus auf KI.',
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
      },
      en: {
        badge: 'Current',
        role: 'CTO',
        period: 'since 2026',
        tagline: 'AI, digitalisation & software from Lucerne',
        shortDescription:
          'As CTO of kimuno, I own the technology behind consulting, digitalisation and software development for public institutions and SMEs – with a focus on process optimisation and AI.',
        metaDescription:
          'As CTO of kimuno, I own the technology behind digitalisation and software for public institutions and SMEs – with a focus on AI and process optimisation.',
        fullDescription: [
          'kimuno is a Lucerne-based company that supports public institutions and SMEs with consulting, digitalisation and software development. Its focus is process optimisation and the targeted use of artificial intelligence – so that more time is left for what matters.',
          'As CTO I carry overall technical responsibility: I define architecture, technology choices and development standards, and own decisions from frontend and backend through databases and APIs to infrastructure.',
          'The portfolio includes in-house solutions such as govcom, a communication management platform for municipalities and public bodies, as well as automation and AI projects for clients.',
        ],
        techStack: ['AI', 'Automation', 'Software Architecture', 'Cloud', 'APIs'],
        highlights: [
          { title: 'Overall technical ownership', desc: 'Architecture, technology choices and the evolution of all digital solutions.' },
          { title: 'AI & automation', desc: 'Analysing processes and making them more efficient with AI and automation.' },
          { title: 'Public sector & SMEs', desc: 'Solutions such as govcom for municipalities and public bodies.' },
          { title: 'Standards & processes', desc: 'Development processes, best practices and cloud and deployment solutions.' },
        ],
      },
    },
  },
  {
    slug: 'alpzen',
    number: '03',
    title: 'Alpzen',
    gradientFrom: '#7d8aa0',
    gradientTo: '#3f4b62',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    text: {
      de: {
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
      },
      en: {
        role: 'Co-Founder & Lead Software Engineer',
        period: '2024 – 2026',
        tagline: 'Web & app development',
        shortDescription:
          'A web and app studio I co-founded, where I led the technical side of product development.',
        fullDescription: [
          'Alpzen is a web and app development company that I co-founded at the end of 2024 and led technically as Lead Software Engineer until mid-2026.',
          'We guided clients from the first idea through concept and design to delivery and live operation – with a consistent cloud-first approach and modern frameworks such as Astro, React and Node.js.',
          'Alongside development, I defined architecture, interfaces and development standards and built up the development, deployment and automation processes.',
        ],
        techStack: ['Astro', 'React', 'Node.js', 'TypeScript', 'Cloud'],
        highlights: [
          { title: 'Technical leadership', desc: 'Ownership of architecture, interfaces and development standards.' },
          { title: 'Cloud-first', desc: 'Projects designed and optimised for cloud deployment from day one.' },
          { title: 'Automation', desc: 'Deployment and automation pipelines for fast, reliable releases.' },
          { title: 'Close to the client', desc: 'Turning business requirements into user stories and deliverable solutions.' },
        ],
      },
    },
  },
];

export function getProjects(lang: Lang): Project[] {
  return projectData.map(({ text, ...base }) => ({ ...base, ...text[lang] }));
}

export const projectSlugs = projectData.map((p) => p.slug);

export function getAdjacentProject(lang: Lang, currentSlug: string): Project {
  const list = getProjects(lang);
  const idx = list.findIndex((p) => p.slug === currentSlug);
  return list[(idx + 1) % list.length];
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
