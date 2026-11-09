import type { Lang } from '../i18n';

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

/** Language-dependent service copy. */
interface ServiceText {
  slug: string;
  title: string;
  /** Short teaser used on the home page card. */
  text: string;
  tags: string[];
  /** <title> of the detail page. */
  metaTitle: string;
  /** Meta description of the detail page (~150 characters). */
  metaDescription: string;
  tagline: string;
  intro: string[];
  deliverables: ServiceItem[];
  situations: string[];
  tech: string[];
  faq: ServiceFaq[];
}

interface ServiceBase {
  id: string;
  icon: string;
  text: Record<Lang, ServiceText>;
}

export type Service = Pick<ServiceBase, 'id' | 'icon'> & ServiceText;

const serviceData: ServiceBase[] = [
  {
    id: 'architecture',
    icon: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
    text: {
      de: {
        slug: 'software-architektur',
        title: 'Software-Architektur',
        text: 'Tragfähige System- und API-Architekturen, fundierte Technologieentscheide und Architektur-Reviews bestehender Systeme – mit Blick auf Skalierbarkeit, Qualität und Wartbarkeit.',
        tags: ['System Design', 'API-Design', 'Reviews', 'Cloud'],
        metaTitle: 'Software-Architektur & Architektur-Reviews | Tim Flavio Ineichen',
        metaDescription: 'Freelance Software-Architekt aus Luzern: System- und API-Architekturen, Technologieentscheide und Reviews bestehender Systeme – skalierbar und wartbar.',
        tagline: 'Systeme, die mit Ihren Anforderungen wachsen.',
        intro: [
          'Eine gute Architektur merkt man nicht – eine schlechte spürt man bei jedem neuen Feature. Ich entwerfe Systeme, die heute funktionieren und sich in zwei Jahren noch gerne weiterentwickeln lassen.',
          'Ob neues Produkt, gewachsenes Altsystem oder anstehender Technologiewechsel: Ich schaffe Klarheit über Struktur, Schnittstellen und Risiken und dokumentiere Entscheide so, dass Ihr Team sie nachvollziehen und mittragen kann.',
        ],
        deliverables: [
          { title: 'System- & Lösungsarchitektur', desc: 'Aufteilung in Module und Services, Datenflüsse, Verantwortlichkeiten – passend zu Teamgrösse und Budget.' },
          { title: 'API-Design', desc: 'Saubere, versionierbare REST-Schnittstellen mit klaren Verträgen für interne und externe Konsumenten.' },
          { title: 'Technologieentscheide', desc: 'Fundierte Auswahl von Frameworks, Datenbanken und Plattformen – begründet statt nach Trend.' },
          { title: 'Architektur-Reviews', desc: 'Analyse bestehender Systeme mit konkreten, priorisierten Empfehlungen statt abstrakter Kritik.' },
          { title: 'Qualität & Wartbarkeit', desc: 'Teststrategie, Coding-Standards und CI/CD, damit Qualität nicht vom Zufall abhängt.' },
          { title: 'Dokumentation', desc: 'Architekturentscheide (ADRs) und Diagramme, die Ihr Team tatsächlich liest und nutzt.' },
        ],
        situations: [
          'Ein neues Produkt soll von Anfang an auf einem soliden Fundament stehen.',
          'Das bestehende System wird mit jedem Feature langsamer und fehleranfälliger.',
          'Ein Technologiewechsel oder eine Migration steht an und das Risiko soll überschaubar bleiben.',
          'Sie brauchen eine unabhängige Zweitmeinung zu einer bestehenden Architektur.',
        ],
        tech: ['TypeScript', 'PHP / Symfony', 'Python', 'C# / .NET', 'PostgreSQL', 'REST', 'Docker', 'CI/CD', 'Azure DevOps', 'GitLab'],
        faq: [
          { q: 'Brauche ich als kleines Unternehmen überhaupt eine Software-Architektur?', a: 'Ja – nur in angemessener Grösse. Schon wenige bewusste Entscheide zu Struktur, Daten und Schnittstellen sparen später viel Zeit und Geld. Ich skaliere den Aufwand auf Ihr Projekt.' },
          { q: 'Wie läuft ein Architektur-Review ab?', a: 'Nach einem Kick-off analysiere ich Code, Infrastruktur und Dokumentation und führe Gespräche mit dem Team. Sie erhalten einen Bericht mit priorisierten Empfehlungen und einer Präsentation der Ergebnisse.' },
          { q: 'Setzen Sie die Architektur auch selbst um?', a: 'Gerne. Ich arbeite nicht nur auf dem Papier, sondern entwickle selbst mit – allein oder gemeinsam mit Ihrem Team.' },
        ],
      },
      en: {
        slug: 'software-architecture',
        title: 'Software Architecture',
        text: 'Robust system and API architectures, well-founded technology decisions and architecture reviews of existing systems – with scalability, quality and maintainability in mind.',
        tags: ['System Design', 'API Design', 'Reviews', 'Cloud'],
        metaTitle: 'Software Architecture & Architecture Reviews | Tim Flavio Ineichen',
        metaDescription: 'Freelance software architect from Lucerne, Switzerland: system and API architectures, technology decisions and reviews of existing systems.',
        tagline: 'Systems that grow with your requirements.',
        intro: [
          "You don't notice good architecture – but you feel bad architecture with every new feature. I design systems that work today and are still a pleasure to evolve two years from now.",
          'Whether it is a new product, a grown legacy system or an upcoming technology change: I bring clarity to structure, interfaces and risks and document decisions so your team can follow and own them.',
        ],
        deliverables: [
          { title: 'System & solution architecture', desc: 'Modules and services, data flows and responsibilities – matched to team size and budget.' },
          { title: 'API design', desc: 'Clean, versionable REST interfaces with clear contracts for internal and external consumers.' },
          { title: 'Technology decisions', desc: 'Well-founded choice of frameworks, databases and platforms – based on reasons, not trends.' },
          { title: 'Architecture reviews', desc: 'Analysis of existing systems with concrete, prioritised recommendations instead of abstract criticism.' },
          { title: 'Quality & maintainability', desc: 'Test strategy, coding standards and CI/CD so quality does not depend on luck.' },
          { title: 'Documentation', desc: 'Architecture decision records and diagrams your team actually reads and uses.' },
        ],
        situations: [
          'A new product should stand on a solid foundation from day one.',
          'The existing system gets slower and more fragile with every feature.',
          'A technology change or migration is coming up and the risk needs to stay manageable.',
          'You need an independent second opinion on an existing architecture.',
        ],
        tech: ['TypeScript', 'PHP / Symfony', 'Python', 'C# / .NET', 'PostgreSQL', 'REST', 'Docker', 'CI/CD', 'Azure DevOps', 'GitLab'],
        faq: [
          { q: 'Does a small company even need software architecture?', a: 'Yes – just at the right size. A few deliberate decisions about structure, data and interfaces save a lot of time and money later. I scale the effort to your project.' },
          { q: 'How does an architecture review work?', a: 'After a kick-off I analyse code, infrastructure and documentation and talk to the team. You receive a report with prioritised recommendations and a presentation of the results.' },
          { q: 'Do you also implement the architecture?', a: 'Happily. I don’t just work on paper – I build alongside you, on my own or together with your team.' },
        ],
      },
    },
  },
  {
    id: 'fullstack',
    icon: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
    text: {
      de: {
        slug: 'full-stack-entwicklung',
        title: 'Full-Stack-Entwicklung',
        text: 'Umsetzung kompletter Webanwendungen von Frontend bis Backend – inklusive Datenbank, Schnittstellen und produktivem Deployment.',
        tags: ['React / TS', 'Symfony', 'Python', 'C#'],
        metaTitle: 'Full-Stack-Entwicklung von Webanwendungen | Tim Flavio Ineichen',
        metaDescription: 'Webanwendungen von Frontend bis Backend aus einer Hand: React, TypeScript, Symfony, Python und C# – inklusive Datenbank, Schnittstellen und Deployment.',
        tagline: 'Von der Idee bis zur laufenden Anwendung.',
        intro: [
          'Ich entwickle Webanwendungen durchgängig: von der Benutzeroberfläche über die Geschäftslogik bis zur Datenbank und zum Betrieb. Sie haben einen Ansprechpartner, der das Ganze im Blick behält.',
          'Dabei setze ich auf bewährte Technologien, automatisierte Tests und saubere Deployments – damit Ihre Anwendung nicht nur live geht, sondern auch stabil läuft.',
        ],
        deliverables: [
          { title: 'Frontend', desc: 'Schnelle, responsive Oberflächen mit React, Vue oder Astro – zugänglich und angenehm zu bedienen.' },
          { title: 'Backend & Business-Logik', desc: 'Robuste Services mit Symfony, Python oder C#, sauber strukturiert und gut testbar.' },
          { title: 'Datenbanken', desc: 'Durchdachte Datenmodelle mit PostgreSQL, MySQL/MariaDB oder MSSQL – inklusive Migrationen.' },
          { title: 'Schnittstellen', desc: 'Anbindung von Drittsystemen, ERP und externen APIs über klar definierte Schnittstellen.' },
          { title: 'Deployment & Betrieb', desc: 'Containerisierung mit Docker, CI/CD-Pipelines und reproduzierbare Releases.' },
          { title: 'Tests & Qualität', desc: 'Automatisierte Tests und Code Reviews, damit Änderungen keine Überraschungen bringen.' },
        ],
        situations: [
          'Sie haben eine Produktidee und brauchen jemanden, der sie von A bis Z umsetzt.',
          'Ihr Team braucht Verstärkung für ein zeitkritisches Projekt.',
          'Excel-Listen und manuelle Abläufe sollen durch eine Webanwendung ersetzt werden.',
          'Eine bestehende Anwendung soll modernisiert oder erweitert werden.',
        ],
        tech: ['React', 'TypeScript', 'Vue', 'Astro', 'Symfony', 'Python', 'C#', 'PostgreSQL', 'MySQL / MariaDB', 'Docker'],
        faq: [
          { q: 'Welche Technologien setzen Sie ein?', a: 'Am liebsten das, was zu Ihrem Projekt und Team passt. Meine Schwerpunkte sind TypeScript/React im Frontend sowie Symfony, Python und C# im Backend.' },
          { q: 'Arbeiten Sie auch mit bestehenden Teams zusammen?', a: 'Ja. Ich steige gerne in bestehende Teams ein, halte mich an Ihre Prozesse und bringe bei Bedarf Verbesserungsvorschläge ein.' },
          { q: 'Wer betreibt die Anwendung nach dem Go-live?', a: 'Je nach Wunsch Ihr Team, Ihr Hosting-Partner oder ich. In jedem Fall erhalten Sie eine Dokumentation und eine saubere Übergabe.' },
        ],
      },
      en: {
        slug: 'full-stack-development',
        title: 'Full-Stack Development',
        text: 'Delivery of complete web applications from frontend to backend – including database, integrations and production deployment.',
        tags: ['React / TS', 'Symfony', 'Python', 'C#'],
        metaTitle: 'Full-Stack Web Application Development | Tim Flavio Ineichen',
        metaDescription: 'Web applications from frontend to backend from a single source: React, TypeScript, Symfony, Python and C# – including database, integrations and deployment.',
        tagline: 'From idea to running application.',
        intro: [
          'I build web applications end to end: from the user interface through business logic to the database and operations. You get one point of contact who keeps the whole picture in view.',
          'I rely on proven technologies, automated tests and clean deployments – so your application not only goes live but also runs reliably.',
        ],
        deliverables: [
          { title: 'Frontend', desc: 'Fast, responsive interfaces with React, Vue or Astro – accessible and pleasant to use.' },
          { title: 'Backend & business logic', desc: 'Robust services with Symfony, Python or C#, cleanly structured and easy to test.' },
          { title: 'Databases', desc: 'Well-designed data models with PostgreSQL, MySQL/MariaDB or MSSQL – including migrations.' },
          { title: 'Integrations', desc: 'Connecting third-party systems, ERP and external APIs through well-defined interfaces.' },
          { title: 'Deployment & operations', desc: 'Containerisation with Docker, CI/CD pipelines and reproducible releases.' },
          { title: 'Testing & quality', desc: 'Automated tests and code reviews so changes don’t bring surprises.' },
        ],
        situations: [
          'You have a product idea and need someone to build it from A to Z.',
          'Your team needs reinforcement for a time-critical project.',
          'Spreadsheets and manual processes should be replaced by a web application.',
          'An existing application needs to be modernised or extended.',
        ],
        tech: ['React', 'TypeScript', 'Vue', 'Astro', 'Symfony', 'Python', 'C#', 'PostgreSQL', 'MySQL / MariaDB', 'Docker'],
        faq: [
          { q: 'Which technologies do you use?', a: 'Ideally whatever fits your project and team. My focus is TypeScript/React on the frontend and Symfony, Python and C# on the backend.' },
          { q: 'Do you work with existing teams?', a: 'Yes. I’m happy to join existing teams, follow your processes and suggest improvements where useful.' },
          { q: 'Who runs the application after go-live?', a: 'Your team, your hosting partner or me – whatever suits you. Either way you get documentation and a clean handover.' },
        ],
      },
    },
  },
  {
    id: 'leadership',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    text: {
      de: {
        slug: 'technische-leitung',
        title: 'Technische Leitung',
        text: 'Tech Lead und CTO: Entwicklungsstandards, Prozesse, Code Reviews und Coaching von Teams – damit Teams schneller und sicherer liefern.',
        tags: ['Tech Lead', 'Interim CTO', 'Scrum', 'Code Reviews'],
        metaTitle: 'Tech Lead auf Zeit & Interim-CTO | Tim Flavio Ineichen',
        metaDescription: 'Technische Leitung auf Zeit: Interim-CTO oder Tech Lead für Start-ups und KMU – Entwicklungsstandards, Prozesse, Code Reviews und Team-Coaching.',
        tagline: 'Technische Verantwortung, wenn Sie sie brauchen.',
        intro: [
          'Nicht jedes Unternehmen braucht sofort einen festangestellten CTO – aber fast jedes braucht jemanden, der technische Verantwortung übernimmt. Als Tech Lead oder Interim-CTO schliesse ich genau diese Lücke.',
          'Ich bringe Struktur in die Entwicklung, treffe tragfähige Entscheide und befähige Ihr Team, selbstständig und mit hoher Qualität zu liefern. Diese Rolle lebe ich als CTO bei kimuno und als Lead Developer bei Let’s Doo täglich.',
        ],
        deliverables: [
          { title: 'Interim-CTO', desc: 'Technische Gesamtverantwortung auf Zeit – von der Roadmap bis zum Gespräch mit Investoren und Partnern.' },
          { title: 'Tech Lead', desc: 'Fachliche Führung des Entwicklungsteams und Brücke zwischen Business und Technik.' },
          { title: 'Entwicklungsprozesse', desc: 'Scrum oder Kanban, die zu Ihrem Team passen – pragmatisch statt dogmatisch.' },
          { title: 'Standards & Code Reviews', desc: 'Gemeinsame Regeln für Code, Tests und Releases, gelebt durch regelmässige Reviews.' },
          { title: 'Coaching & Mentoring', desc: 'Entwicklerinnen und Entwickler gezielt fördern und Wissen im Team verteilen.' },
          { title: 'Recruiting-Unterstützung', desc: 'Stellenprofile schärfen, technische Interviews führen, neue Teammitglieder einarbeiten.' },
        ],
        situations: [
          'Ihr Start-up hat noch keinen CTO, braucht aber jetzt technische Führung.',
          'Die bisherige technische Leitung ist weggefallen und muss überbrückt werden.',
          'Das Team liefert, aber Qualität und Planbarkeit lassen zu wünschen übrig.',
          'Sie möchten ein internes Entwicklungsteam aufbauen und richtig aufstellen.',
        ],
        tech: ['Scrum', 'Kanban', 'Code Reviews', 'CI/CD', 'GitLab', 'Azure DevOps', 'Gitea', 'Roadmapping'],
        faq: [
          { q: 'Wie viel Zeit braucht eine technische Leitung auf Zeit?', a: 'Das hängt von Teamgrösse und Phase ab – oft reichen ein bis drei Tage pro Woche. Wir legen den Umfang gemeinsam fest und passen ihn bei Bedarf an.' },
          { q: 'Arbeiten Sie vor Ort oder remote?', a: 'Beides. In der Region Luzern und der Zentralschweiz bin ich gerne vor Ort, ansonsten remote mit regelmässigen Treffen.' },
          { q: 'Was passiert, wenn das Mandat endet?', a: 'Ich plane die Übergabe von Anfang an mit: Dokumentation, klare Verantwortlichkeiten und auf Wunsch Unterstützung bei der Suche nach einer festen Besetzung.' },
        ],
      },
      en: {
        slug: 'technical-leadership',
        title: 'Technical Leadership',
        text: 'Tech lead and CTO: development standards, processes, code reviews and team coaching – so teams ship faster and more safely.',
        tags: ['Tech Lead', 'Interim CTO', 'Scrum', 'Code Reviews'],
        metaTitle: 'Interim CTO & Fractional Tech Lead | Tim Flavio Ineichen',
        metaDescription: 'Technical leadership on demand: interim CTO or tech lead for start-ups and SMEs – development standards, processes, code reviews and team coaching.',
        tagline: 'Technical ownership when you need it.',
        intro: [
          'Not every company needs a full-time CTO right away – but almost every company needs someone to take technical ownership. As tech lead or interim CTO I fill exactly that gap.',
          'I bring structure to development, make sound decisions and enable your team to deliver independently and with high quality. I live this role every day as CTO at kimuno and Lead Developer at Let’s Doo.',
        ],
        deliverables: [
          { title: 'Interim CTO', desc: 'Overall technical responsibility for a set period – from roadmap to conversations with investors and partners.' },
          { title: 'Tech lead', desc: 'Technical leadership of the development team and the bridge between business and technology.' },
          { title: 'Development processes', desc: 'Scrum or Kanban that fits your team – pragmatic rather than dogmatic.' },
          { title: 'Standards & code reviews', desc: 'Shared rules for code, tests and releases, lived through regular reviews.' },
          { title: 'Coaching & mentoring', desc: 'Developing your engineers and spreading knowledge across the team.' },
          { title: 'Hiring support', desc: 'Sharpening job profiles, running technical interviews and onboarding new team members.' },
        ],
        situations: [
          'Your start-up has no CTO yet but needs technical leadership now.',
          'Your technical lead has left and the gap needs to be bridged.',
          'The team delivers, but quality and predictability leave room for improvement.',
          'You want to build an in-house development team and set it up properly.',
        ],
        tech: ['Scrum', 'Kanban', 'Code Reviews', 'CI/CD', 'GitLab', 'Azure DevOps', 'Gitea', 'Roadmapping'],
        faq: [
          { q: 'How much time does interim technical leadership take?', a: 'It depends on team size and phase – often one to three days a week is enough. We define the scope together and adjust it as needed.' },
          { q: 'Do you work on site or remotely?', a: 'Both. In the Lucerne area and Central Switzerland I’m happy to be on site, otherwise remotely with regular meetings.' },
          { q: 'What happens when the engagement ends?', a: 'I plan the handover from the start: documentation, clear responsibilities and, if you wish, support in finding a permanent hire.' },
        ],
      },
    },
  },
  {
    id: 'requirements',
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 14l2 2 4-4',
    text: {
      de: {
        slug: 'requirements-engineering',
        title: 'Requirements & Konzeption',
        text: 'Fachliche Anforderungen verstehen, strukturieren und in User Stories, technische Konzepte und realistische Machbarkeitsbewertungen übersetzen.',
        tags: ['Requirements', 'User Stories', 'Workshops', 'Machbarkeit'],
        metaTitle: 'Requirements Engineering & Konzeption | Tim Flavio Ineichen',
        metaDescription: 'Anforderungen klären, bevor Code entsteht: Workshops, User Stories, technische Konzepte und Machbarkeitsbewertungen für Ihr Softwareprojekt.',
        tagline: 'Erst verstehen, dann bauen.',
        intro: [
          'Die meisten Softwareprojekte scheitern nicht am Code, sondern an unklaren Anforderungen. Ich helfe Ihnen, früh die richtigen Fragen zu stellen und aus Ideen ein umsetzbares Konzept zu machen.',
          'Als Entwickler und Architekt weiss ich, was die Umsetzung braucht – und übersetze zwischen Fachbereich und Technik, damit am Ende alle vom Gleichen sprechen.',
        ],
        deliverables: [
          { title: 'Anforderungs-Workshops', desc: 'Strukturierte Workshops mit Fachbereich und Stakeholdern, um Ziele und Bedürfnisse zu klären.' },
          { title: 'User Stories & Backlog', desc: 'Verständliche, priorisierte User Stories mit Akzeptanzkriterien – bereit für die Umsetzung.' },
          { title: 'Technisches Konzept', desc: 'Lösungsansatz, Datenmodell und Schnittstellen als Grundlage für Angebot und Entwicklung.' },
          { title: 'Machbarkeit & Aufwand', desc: 'Realistische Einschätzung von Risiken, Aufwand und Varianten – bevor Budget gebunden ist.' },
          { title: 'Prozessanalyse', desc: 'Bestehende Abläufe aufnehmen und Potenziale für Digitalisierung und Automatisierung aufzeigen.' },
          { title: 'Ausschreibungen', desc: 'Unterstützung beim Erstellen von Pflichtenheften und beim Bewerten von Angeboten.' },
        ],
        situations: [
          'Sie haben eine Idee, aber noch kein klares Bild davon, was genau gebaut werden soll.',
          'Fachbereich und Entwicklung reden aneinander vorbei.',
          'Sie brauchen eine fundierte Grundlage für ein Angebot oder eine Ausschreibung.',
          'Ein Projekt ist ins Stocken geraten, weil Anforderungen ständig ändern.',
        ],
        tech: ['Workshops', 'User Stories', 'BPMN', 'Prototyping', 'Jira', 'Azure DevOps', 'Confluence'],
        faq: [
          { q: 'Lohnt sich eine Konzeptphase bei kleineren Projekten?', a: 'Ja. Schon ein bis zwei Workshops verhindern teure Missverständnisse. Der Umfang richtet sich nach Ihrem Projekt – nicht umgekehrt.' },
          { q: 'Muss ich die Umsetzung danach bei Ihnen beauftragen?', a: 'Nein. Das Konzept gehört Ihnen und ist so aufbereitet, dass auch ein anderes Team damit arbeiten kann.' },
          { q: 'Arbeiten Sie auch in regulierten Umfeldern?', a: 'Ja. Ich habe Erfahrung mit Qualitätsmanagement-Software für ISO-9001-zertifizierte Unternehmen und kenne die Anforderungen an Nachvollziehbarkeit.' },
        ],
      },
      en: {
        slug: 'requirements-engineering',
        title: 'Requirements & Concepts',
        text: 'Understanding and structuring business requirements and turning them into user stories, technical concepts and realistic feasibility assessments.',
        tags: ['Requirements', 'User Stories', 'Workshops', 'Feasibility'],
        metaTitle: 'Requirements Engineering & Software Concepts | Tim Flavio Ineichen',
        metaDescription: 'Clarify requirements before writing code: workshops, user stories, technical concepts and feasibility assessments for your software project.',
        tagline: 'Understand first, then build.',
        intro: [
          'Most software projects don’t fail because of code but because of unclear requirements. I help you ask the right questions early and turn ideas into an actionable concept.',
          'As a developer and architect I know what implementation needs – and I translate between business and technology so everyone ends up talking about the same thing.',
        ],
        deliverables: [
          { title: 'Requirements workshops', desc: 'Structured workshops with business units and stakeholders to clarify goals and needs.' },
          { title: 'User stories & backlog', desc: 'Clear, prioritised user stories with acceptance criteria – ready for delivery.' },
          { title: 'Technical concept', desc: 'Solution approach, data model and interfaces as the basis for quotes and development.' },
          { title: 'Feasibility & effort', desc: 'Realistic assessment of risks, effort and options – before budget is committed.' },
          { title: 'Process analysis', desc: 'Capturing existing workflows and identifying potential for digitalisation and automation.' },
          { title: 'Tenders', desc: 'Support in writing specifications and evaluating vendor proposals.' },
        ],
        situations: [
          'You have an idea but no clear picture yet of what exactly should be built.',
          'Business and development keep talking past each other.',
          'You need a solid basis for a quote or a tender.',
          'A project has stalled because requirements keep changing.',
        ],
        tech: ['Workshops', 'User Stories', 'BPMN', 'Prototyping', 'Jira', 'Azure DevOps', 'Confluence'],
        faq: [
          { q: 'Is a concept phase worth it for smaller projects?', a: 'Yes. Even one or two workshops prevent costly misunderstandings. The scope follows your project – not the other way round.' },
          { q: 'Do I have to hire you for the implementation afterwards?', a: 'No. The concept is yours and prepared so that another team can work with it as well.' },
          { q: 'Do you work in regulated environments?', a: 'Yes. I have experience with quality management software for ISO 9001 certified companies and know the requirements for traceability.' },
        ],
      },
    },
  },
  {
    id: 'websites',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    text: {
      de: {
        slug: 'websites',
        title: 'Websites',
        text: 'Professionelle Websites aus einer Hand – von Konzept und Design über CMS und Entwicklung bis zu Domain, Hosting, SEO und laufender Wartung.',
        tags: ['Webdesign', 'CMS', 'SEO', 'Hosting & Wartung'],
        metaTitle: 'Website erstellen lassen in Luzern | Tim Flavio Ineichen',
        metaDescription: 'Websites aus einer Hand: Konzept, Design, Entwicklung, CMS, SEO, Domain, Hosting, Datenschutz und Wartung – schnell, sicher und einfach selbst zu pflegen.',
        tagline: 'Ihre Website – alles aus einer Hand.',
        intro: [
          'Eine Website ist mehr als ein schönes Design. Sie muss schnell laden, bei Google gefunden werden, auf jedem Gerät funktionieren, rechtlich sauber sein und sich einfach pflegen lassen. Ich kümmere mich um alles davon.',
          'Von der ersten Struktur über Design und Entwicklung bis zu Domain, Hosting, E-Mail und laufender Wartung erhalten Sie alles aus einer Hand – mit einem Ansprechpartner, der auch nach dem Go-live erreichbar bleibt.',
        ],
        deliverables: [
          { title: 'Konzept & Struktur', desc: 'Ziele, Zielgruppen, Seitenstruktur und Inhalte – damit Besucher finden, was sie suchen.' },
          { title: 'Webdesign & UX', desc: 'Modernes, responsives Design in Ihrem Erscheinungsbild – auf Smartphone, Tablet und Desktop.' },
          { title: 'Entwicklung & CMS', desc: 'Schnelle Websites mit Astro oder einem CMS wie WordPress oder Craft CMS – Inhalte pflegen Sie selbst.' },
          { title: 'SEO & Performance', desc: 'Technisches SEO, Meta-Daten, strukturierte Daten und Top-Ladezeiten für bessere Rankings.' },
          { title: 'Domain, Hosting & E-Mail', desc: 'Einrichtung von Domain, SSL, Hosting und E-Mail – inklusive Umzug bestehender Websites.' },
          { title: 'Datenschutz & Recht', desc: 'Technische Umsetzung von Impressum, Datenschutzerklärung und Cookie-Hinweis nach nDSG und DSGVO.' },
          { title: 'Barrierefreiheit', desc: 'Gut lesbare, zugängliche Websites, die auch mit Tastatur und Screenreader funktionieren.' },
          { title: 'Wartung & Support', desc: 'Updates, Backups, Sicherheit und kleine Anpassungen – damit Ihre Website langfristig läuft.' },
        ],
        situations: [
          'Ihr Unternehmen braucht eine neue Website oder einen ersten professionellen Auftritt.',
          'Die bestehende Website ist veraltet, langsam oder auf dem Smartphone kaum bedienbar.',
          'Ihre Website wird bei Google kaum gefunden.',
          'Sie möchten Inhalte selbst pflegen, ohne jedes Mal eine Agentur zu beauftragen.',
          'Hosting, Domain und Updates sollen endlich zuverlässig von jemandem betreut werden.',
        ],
        tech: ['Astro', 'WordPress', 'Craft CMS', 'Pimcore / Sulu', 'HTML / CSS', 'TypeScript', 'SEO', 'Google Search Console', 'SSL', 'Docker'],
        faq: [
          { q: 'Kann ich die Inhalte meiner Website selbst bearbeiten?', a: 'Ja. Auf Wunsch setze ich Ihre Website mit einem CMS um, in dem Sie Texte, Bilder und Seiten ohne Programmierkenntnisse selbst anpassen. Eine kurze Einführung ist inklusive.' },
          { q: 'Kümmern Sie sich auch um Domain, Hosting und E-Mail?', a: 'Ja. Ich richte Domain, SSL-Zertifikat, Hosting und E-Mail-Adressen ein oder ziehe Ihre bestehende Website samt Inhalten um.' },
          { q: 'Was kostet eine Website?', a: 'Das hängt vom Umfang ab – eine kompakte Unternehmenswebsite ist etwas anderes als ein grosser Auftritt mit vielen Funktionen. Nach dem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.' },
          { q: 'Übernehmen Sie auch bestehende Websites?', a: 'Gerne. Ich übernehme Wartung und Weiterentwicklung bestehender Websites oder modernisiere sie Schritt für Schritt.' },
          { q: 'Wird meine Website bei Google gefunden?', a: 'Technisches SEO ist bei jeder Website inklusive: saubere Struktur, schnelle Ladezeiten, Meta-Daten, Sitemap und strukturierte Daten. Auf Wunsch unterstütze ich Sie auch bei Inhalten und lokaler Sichtbarkeit.' },
        ],
      },
      en: {
        slug: 'websites',
        title: 'Websites',
        text: 'Professional websites from a single source – from concept and design through CMS and development to domain, hosting, SEO and ongoing maintenance.',
        tags: ['Web Design', 'CMS', 'SEO', 'Hosting & Care'],
        metaTitle: 'Website Design & Development, Switzerland | Tim Flavio Ineichen',
        metaDescription: 'Websites from a single source: concept, design, development, CMS, SEO, domain, hosting, privacy compliance and maintenance – fast, secure and easy to edit.',
        tagline: 'Your website – everything from a single source.',
        intro: [
          'A website is more than a nice design. It has to load fast, be found on Google, work on every device, be legally sound and easy to maintain. I take care of all of it.',
          'From the first structure through design and development to domain, hosting, email and ongoing maintenance, you get everything from a single source – with one contact who stays available after go-live.',
        ],
        deliverables: [
          { title: 'Concept & structure', desc: 'Goals, audiences, site structure and content – so visitors find what they are looking for.' },
          { title: 'Web design & UX', desc: 'Modern, responsive design in your brand – on smartphone, tablet and desktop.' },
          { title: 'Development & CMS', desc: 'Fast websites with Astro or a CMS such as WordPress or Craft CMS – you edit the content yourself.' },
          { title: 'SEO & performance', desc: 'Technical SEO, meta data, structured data and excellent load times for better rankings.' },
          { title: 'Domain, hosting & email', desc: 'Setting up domain, SSL, hosting and email – including migrating existing websites.' },
          { title: 'Privacy & legal', desc: 'Technical implementation of legal notice, privacy policy and cookie notice under Swiss nDSG and GDPR.' },
          { title: 'Accessibility', desc: 'Readable, accessible websites that also work with keyboard and screen readers.' },
          { title: 'Maintenance & support', desc: 'Updates, backups, security and small changes – so your website keeps running for years.' },
        ],
        situations: [
          'Your company needs a new website or its first professional online presence.',
          'Your current website is outdated, slow or hard to use on a smartphone.',
          'Your website is hardly found on Google.',
          'You want to edit content yourself without hiring an agency every time.',
          'Hosting, domain and updates should finally be looked after reliably.',
        ],
        tech: ['Astro', 'WordPress', 'Craft CMS', 'Pimcore / Sulu', 'HTML / CSS', 'TypeScript', 'SEO', 'Google Search Console', 'SSL', 'Docker'],
        faq: [
          { q: 'Can I edit the content of my website myself?', a: 'Yes. If you like, I build your website on a CMS where you can change text, images and pages without any coding. A short introduction is included.' },
          { q: 'Do you also take care of domain, hosting and email?', a: 'Yes. I set up your domain, SSL certificate, hosting and email addresses or migrate your existing website including its content.' },
          { q: 'How much does a website cost?', a: 'It depends on the scope – a compact company website is different from a large site with many features. After the free intro call you receive a transparent quote.' },
          { q: 'Do you take over existing websites?', a: 'Happily. I take over maintenance and further development of existing websites or modernise them step by step.' },
          { q: 'Will my website be found on Google?', a: 'Technical SEO is included with every website: clean structure, fast load times, meta data, sitemap and structured data. If you wish, I also support you with content and local visibility.' },
        ],
      },
    },
  },
  {
    id: 'frontend',
    icon: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z',
    text: {
      de: {
        slug: 'frontend-design-systems',
        title: 'Frontend & Design Systems',
        text: 'Komponentenbibliotheken in React, konsistente UI/UX und performante Frontends, die Entwickler gerne verwenden und Nutzer gerne bedienen.',
        tags: ['Component Library', 'UI/UX', 'Accessibility', 'Performance'],
        metaTitle: 'Frontend-Entwicklung & Design Systems | Tim Flavio Ineichen',
        metaDescription: 'React-Komponentenbibliotheken, Design Systems und performante, barrierearme Frontends – konsistent für Nutzer und effizient für Entwicklerteams.',
        tagline: 'Konsistente Oberflächen, die Freude machen.',
        intro: [
          'Ein gutes Frontend fühlt sich selbstverständlich an: schnell, konsistent und zugänglich. Dahinter steckt ein System aus wiederverwendbaren Komponenten, klaren Regeln und guter Zusammenarbeit zwischen Design und Entwicklung.',
          'Ich baue Komponentenbibliotheken und Design Systems, mit denen Ihr Team schneller neue Features liefert – ohne dass die Oberfläche mit jedem Release uneinheitlicher wird.',
        ],
        deliverables: [
          { title: 'Komponentenbibliotheken', desc: 'Wiederverwendbare React-Komponenten mit klaren APIs, Tests und Dokumentation.' },
          { title: 'Design Systems', desc: 'Design Tokens, Typografie, Farben und Patterns als gemeinsame Sprache von Design und Code.' },
          { title: 'UI/UX-Umsetzung', desc: 'Pixelgenaue, responsive Umsetzung von Designs mit Blick auf echte Nutzerbedürfnisse.' },
          { title: 'Accessibility', desc: 'Barrierearme Oberflächen nach WCAG – gut für Nutzer, Rechtssicherheit und SEO.' },
          { title: 'Performance', desc: 'Schnelle Ladezeiten und flüssige Interaktionen, gemessen an den Core Web Vitals.' },
          { title: 'Dark Mode & Theming', desc: 'Mehrere Marken oder Farbschemata aus einer Codebasis.' },
        ],
        situations: [
          'Ihre Oberfläche wirkt mit jedem neuen Feature uneinheitlicher.',
          'Mehrere Produkte oder Teams sollen ein gemeinsames Erscheinungsbild teilen.',
          'Ihre Anwendung ist langsam oder schwer zu bedienen.',
          'Barrierefreiheit wird zur Anforderung – intern oder durch Kunden.',
        ],
        tech: ['React', 'TypeScript', 'Vue', 'Astro', 'Storybook', 'CSS / Design Tokens', 'Figma', 'WCAG'],
        faq: [
          { q: 'Lohnt sich ein Design System für uns?', a: 'Sobald mehrere Entwickler oder Produkte an derselben Oberfläche arbeiten, meistens ja. Wir starten klein mit den wichtigsten Komponenten und bauen schrittweise aus.' },
          { q: 'Arbeiten Sie mit unseren Designern zusammen?', a: 'Sehr gerne. Ich arbeite eng mit Design-Teams zusammen und übersetze Figma-Entwürfe in robuste Komponenten.' },
          { q: 'Können bestehende Oberflächen schrittweise umgestellt werden?', a: 'Ja. Ein Design System lässt sich Schritt für Schritt einführen, ohne die laufende Entwicklung zu blockieren.' },
        ],
      },
      en: {
        slug: 'frontend-design-systems',
        title: 'Frontend & Design Systems',
        text: 'React component libraries, consistent UI/UX and fast frontends that developers like to build with and users like to use.',
        tags: ['Component Library', 'UI/UX', 'Accessibility', 'Performance'],
        metaTitle: 'Frontend Development & Design Systems | Tim Flavio Ineichen',
        metaDescription: 'React component libraries, design systems and fast, accessible frontends – consistent for users and efficient for development teams.',
        tagline: 'Consistent interfaces people enjoy.',
        intro: [
          'A good frontend feels effortless: fast, consistent and accessible. Behind it is a system of reusable components, clear rules and good collaboration between design and development.',
          'I build component libraries and design systems that let your team ship new features faster – without the interface becoming more inconsistent with every release.',
        ],
        deliverables: [
          { title: 'Component libraries', desc: 'Reusable React components with clear APIs, tests and documentation.' },
          { title: 'Design systems', desc: 'Design tokens, typography, colours and patterns as a shared language of design and code.' },
          { title: 'UI/UX implementation', desc: 'Precise, responsive implementation of designs with real user needs in mind.' },
          { title: 'Accessibility', desc: 'Accessible interfaces following WCAG – good for users, compliance and SEO.' },
          { title: 'Performance', desc: 'Fast load times and smooth interactions, measured against Core Web Vitals.' },
          { title: 'Dark mode & theming', desc: 'Multiple brands or colour schemes from a single codebase.' },
        ],
        situations: [
          'Your interface becomes more inconsistent with every new feature.',
          'Several products or teams should share a common look and feel.',
          'Your application is slow or hard to use.',
          'Accessibility is becoming a requirement – internally or from customers.',
        ],
        tech: ['React', 'TypeScript', 'Vue', 'Astro', 'Storybook', 'CSS / Design Tokens', 'Figma', 'WCAG'],
        faq: [
          { q: 'Is a design system worth it for us?', a: 'As soon as several developers or products work on the same interface, usually yes. We start small with the most important components and expand step by step.' },
          { q: 'Do you work with our designers?', a: 'Very much so. I work closely with design teams and turn Figma designs into robust components.' },
          { q: 'Can existing interfaces be migrated gradually?', a: 'Yes. A design system can be introduced step by step without blocking ongoing development.' },
        ],
      },
    },
  },
];

export function getServices(lang: Lang): Service[] {
  return serviceData.map(({ text, ...base }) => ({ ...base, ...text[lang] }));
}

/** Static paths for one language, with the matching slug in the other language for hreflang. */
export function servicePaths(lang: Lang) {
  const other: Lang = lang === 'de' ? 'en' : 'de';
  return serviceData.map((s) => ({
    params: { slug: s.text[lang].slug },
    props: { id: s.id, altSlug: s.text[other].slug },
  }));
}

export function getService(lang: Lang, id: string): Service {
  return getServices(lang).find((s) => s.id === id)!;
}

/** How a collaboration works – shown on the home page and on every service page. */
export const processSteps: Record<Lang, ServiceItem[]> = {
  de: [
    { title: 'Verstehen', desc: 'Zuerst kläre ich Ziel, Ausgangslage und Rahmenbedingungen.' },
    { title: 'Konzept', desc: 'Daraus entsteht ein klarer Plan zu Vorgehen, Aufwand und Zeitplan.' },
    { title: 'Umsetzung', desc: 'Iterativ, transparent und mit regelmässigen Abstimmungen.' },
    { title: 'Übergabe & Betrieb', desc: 'Dokumentation, Wissenstransfer ans Team und ein stabiler Betrieb.' },
  ],
  en: [
    { title: 'Understand', desc: 'First, I clarify goals, starting point and constraints.' },
    { title: 'Concept', desc: 'This leads to a clear plan covering approach, effort and timeline.' },
    { title: 'Delivery', desc: 'Iterative, transparent and with regular check-ins.' },
    { title: 'Handover & operation', desc: 'Documentation, knowledge transfer to the team and stable operation.' },
  ],
};
