import type { Lang } from '../i18n';

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
          ? 'Freiberufliche Software-Architektur, Full-Stack-Entwicklung, technische Leitung und Requirements Engineering.'
          : 'Freelance software architecture, full-stack development, technical leadership and requirements engineering.',
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
