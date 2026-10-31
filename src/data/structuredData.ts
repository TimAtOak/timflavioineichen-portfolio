import { homePath, servicePath, projectPath, type Lang } from '../i18n';
import { getServices, type Service } from './services';

const SITE = 'https://tim.alpzen-group.ch';

/** JSON-LD graph describing Tim as a person and as a freelance service provider. */
export function homeStructuredData(lang: Lang) {
  const de = lang === 'de';
  const address = {
    '@type': 'PostalAddress',
    addressLocality: 'Kriens',
    addressRegion: 'LU',
    postalCode: '6010',
    addressCountry: 'CH',
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE}/#person`,
        name: 'Tim Flavio Ineichen',
        givenName: 'Tim Flavio',
        familyName: 'Ineichen',
        jobTitle: 'Senior Software Engineer & Architect',
        url: `${SITE}/`,
        image: `${SITE}/tim-ineichen.jpg`,
        email: 'mailto:kontakt@alpzen-group.ch',
        address,
        worksFor: [
          { '@type': 'Organization', name: 'kimuno GmbH', url: 'https://kimuno.ch/' },
          { '@type': 'Organization', name: "Let's Doo GmbH", url: 'https://letsdoo.it/' },
        ],
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'TEKO Schweizerische Fachschule' },
          { '@type': 'EducationalOrganization', name: 'Benedict Schulen Schweiz' },
        ],
        knowsLanguage: ['de', 'en'],
        knowsAbout: [
          'Software Architecture', 'Full-Stack Development', 'TypeScript', 'React',
          'PHP', 'Symfony', 'Python', 'C#', 'Odoo', 'Requirements Engineering', 'CI/CD',
          'Web Design', 'Website Development', 'Search Engine Optimization', 'Astro', 'WordPress',
        ],
        sameAs: [
          'https://www.linkedin.com/in/tim-flavio-ineichen-269a231a8/',
          'https://github.com/TimAtOak',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#service`,
        name: de
          ? 'Tim Flavio Ineichen – Software-Architektur & Entwicklung'
          : 'Tim Flavio Ineichen – Software Architecture & Development',
        description: de
          ? 'Freiberufliche Software-Architektur, Full-Stack-Entwicklung, technische Leitung, Requirements Engineering, Websites und Frontend-Entwicklung.'
          : 'Freelance software architecture, full-stack development, technical leadership, requirements engineering, websites and frontend development.',
        url: de ? `${SITE}/` : `${SITE}/en/`,
        image: `${SITE}/og-image.jpg`,
        email: 'mailto:kontakt@alpzen-group.ch',
        address,
        areaServed: [
          { '@type': 'Country', name: 'Switzerland' },
          { '@type': 'Place', name: de ? 'Remote (DACH)' : 'Remote (DACH region)' },
        ],
        founder: { '@id': `${SITE}/#person` },
        knowsLanguage: ['de', 'en'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: de ? 'Leistungen' : 'Services',
          itemListElement: getServices(lang).map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.metaDescription,
              url: `${SITE}${servicePath(lang, s.slug)}`,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'Tim Flavio Ineichen',
        inLanguage: ['de-CH', 'en'],
        publisher: { '@id': `${SITE}/#person` },
      },
    ],
  };
}

function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** JSON-LD for a service detail page: the service, its breadcrumb trail and its FAQ. */
export function serviceStructuredData(lang: Lang, service: Service, path: string) {
  const de = lang === 'de';
  const home = `${SITE}${homePath(lang)}`;
  const url = `${SITE}${path}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url,
        inLanguage: de ? 'de-CH' : 'en',
        provider: { '@id': `${SITE}/#person` },
        brand: { '@id': `${SITE}/#service` },
        areaServed: [
          { '@type': 'Country', name: 'Switzerland' },
          { '@type': 'Place', name: de ? 'Remote (DACH)' : 'Remote (DACH region)' },
        ],
        availableLanguage: ['de', 'en'],
      },
      breadcrumbs([
        { name: de ? 'Start' : 'Home', url: home },
        { name: de ? 'Leistungen' : 'Services', url: `${home}#leistungen` },
        { name: service.title, url },
      ]),
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: service.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

/** JSON-LD for a project detail page: breadcrumb trail. */
export function projectStructuredData(lang: Lang, title: string, slug: string) {
  const de = lang === 'de';
  const home = `${SITE}${homePath(lang)}`;
  return {
    '@context': 'https://schema.org',
    ...breadcrumbs([
      { name: de ? 'Start' : 'Home', url: home },
      { name: de ? 'Projekte' : 'Projects', url: `${home}#projekte` },
      { name: title, url: `${SITE}${projectPath(lang, slug)}` },
    ]),
  };
}
