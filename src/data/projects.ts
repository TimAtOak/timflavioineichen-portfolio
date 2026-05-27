export interface ProjectHighlight {
  title: string;
  desc: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  badge?: string;
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
    slug: 'alpzen',
    number: '01',
    title: 'Alpzen',
    badge: 'Featured',
    tagline: 'Web & App Entwicklung',
    shortDescription:
      'Mitgegründetes Web- und App-Entwicklungsunternehmen mit Fokus auf Cloud-Lösungen und moderne Webtechnologien.',
    fullDescription: [
      'Alpzen ist ein von mir mitgegründetes Unternehmen für Web- und App-Entwicklung, das sich auf die Umsetzung moderner, skalierbarer Digitallösungen spezialisiert hat.',
      'Wir begleiten Kunden von der ersten Idee über Konzeption und Design bis zur Umsetzung und dem Live-Betrieb – mit einem konsequenten Cloud-First-Ansatz und aktuellen Frameworks wie Astro, React und Node.js.',
      'Alpzen verbindet technische Exzellenz mit unternehmerischem Denken und liefert Lösungen, die mit den Anforderungen der Kunden mitwachsen können.',
    ],
    techStack: ['Astro', 'React', 'Node.js', 'TypeScript', 'Cloud', 'CSS'],
    highlights: [
      { title: 'Cloud-First', desc: 'Alle Projekte werden von Anfang an für Cloud-Deployments konzipiert und optimiert.' },
      { title: 'Moderne Frameworks', desc: 'Einsatz aktueller Technologien für maximale Performance und Developer Experience.' },
      { title: 'Kundennähe', desc: 'Enger Austausch mit Kunden vom Briefing über Konzeption bis zum Launch.' },
      { title: 'Skalierbarkeit', desc: 'Architekturen, die flexibel auf wachsende Anforderungen reagieren.' },
    ],
    gradientFrom: '#0ea5e9',
    gradientTo: '#6366f1',
    iconPath:
      'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    slug: 'rogue',
    number: '02',
    title: 'Rogue',
    tagline: 'Indie Game Development',
    shortDescription:
      'Eigenständige Entwicklung eines Indie-Spiels mit der Godot-Engine, geplante Veröffentlichung auf Steam 2026.',
    fullDescription: [
      'Rogue ist ein Indie-Spiel, das ich in meiner Freizeit von Grund auf entwickle. Als Engine setze ich auf Godot 4 – eine moderne Open-Source-Alternative, die sich hervorragend für 2D- und 3D-Spiele eignet.',
      'Das Spiel kombiniert klassische Roguelike-Mechaniken mit modernem Gameplay-Design. Zufällig generierte Level, permanenter Tod und ein tiefes Progressionssystem sorgen für hohen Wiederspielwert.',
      'Die vollständige Eigenentwicklung – von Programmierung über Level Design bis zur Spielmechanik – ist ein bewusstes Lernprojekt, das technische Disziplin mit kreativer Gestaltung vereint.',
    ],
    techStack: ['Godot 4', 'GDScript', 'Game Design', 'Level Design', 'Steam'],
    highlights: [
      { title: 'Roguelike Mechaniken', desc: 'Zufällig generierte Level und permanenter Tod für maximalen Wiederspielwert.' },
      { title: 'Godot 4 Engine', desc: 'Entwicklung mit der modernen, performanten Open-Source Game Engine.' },
      { title: 'Steam Release 2026', desc: 'Geplante Veröffentlichung auf der Steam-Plattform.' },
      { title: 'Vollständige Eigenentwicklung', desc: 'Code, Design, Sound und Level Design in einer Hand.' },
    ],
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    iconPath:
      'M6 3h12l-1 7H7L6 3zM7 10l-2 9h14l-2-9M12 14v4M10 14l-.5 4M14 14l.5 4',
  },
  {
    slug: 'ccleaner',
    number: '03',
    title: 'CCleaner-Tool',
    tagline: 'System Utility in Python',
    shortDescription:
      'Massgeschneidertes System-Bereinigungstool in Python – effektiv und ohne unnötige Komplexität.',
    fullDescription: [
      'Das CCleaner-Tool ist ein schlankes System-Bereinigungsprogramm, das ich in Python entwickelt habe, um einen konkreten persönlichen Bedarf zu lösen.',
      'Im Gegensatz zu aufgeblähten kommerziellen Alternativen fokussiert sich das Tool auf das Wesentliche: effektive Bereinigung temporärer Dateien, Browser-Cache und Systemschrott – ohne Tracker, Werbung oder unnötige Features.',
      'Das CLI-Interface macht das Tool flexibel einsetzbar und lässt sich leicht in Automatisierungsworkflows und Skripte integrieren.',
    ],
    techStack: ['Python', 'CLI', 'File Management', 'System Utils', 'Automation'],
    highlights: [
      { title: 'Schlankes Design', desc: 'Fokus auf das Wesentliche – kein Bloat, keine versteckten Funktionen.' },
      { title: 'Python CLI', desc: 'Vollständig über die Kommandozeile bedienbar und skriptbar.' },
      { title: 'Intelligente Bereinigung', desc: 'Gezieltes Erkennen und Löschen von temporären Dateien und Cache.' },
      { title: 'Volle Transparenz', desc: 'Sämtliche Systemeingriffe sind nachvollziehbar und kontrollierbar.' },
    ],
    gradientFrom: '#10b981',
    gradientTo: '#0ea5e9',
    iconPath: 'M4 17l6-6-6-6M12 19h8',
  },
];

export function getAdjacentProject(currentSlug: string): Project {
  const idx = projects.findIndex(p => p.slug === currentSlug);
  return projects[(idx + 1) % projects.length];
}
