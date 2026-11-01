/** Contact details for the downloadable vCard (linked from the QR code on the site). */
export const contact = {
  givenName: 'Tim Flavio',
  familyName: 'Ineichen',
  title: 'Senior Software Engineer & Architect',
  email: 'kontakt@alpzen-group.ch',
  website: 'https://tim.alpzen-group.ch/',
  linkedin: 'https://www.linkedin.com/in/tim-flavio-ineichen-269a231a8/',
  github: 'https://github.com/TimAtOak',
  address: { locality: 'Kriens', region: 'LU', postalCode: '6010', country: 'Switzerland' },
  note: "Freelance Software Engineer & Architect · CTO kimuno · Lead Developer Let's Doo",
};

/** Published path of the vCard file (see src/pages/tim-flavio-ineichen.vcf.ts). */
export const vcardPath = '/tim-flavio-ineichen.vcf';

/** Escapes text values according to vCard 3.0 (RFC 2426). */
const esc = (v: string) => v.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');

/** Folds long lines at 75 octets as required by the spec (continuation lines start with a space). */
const fold = (line: string) => {
  if (line.length <= 75) return line;
  const parts = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) parts.push(' ' + line.slice(i, i + 74));
  return parts.join('\r\n');
};

interface VCardOptions {
  /** Base64 JPEG profile photo. */
  photo?: string;
}

export function buildVCard({ photo }: VCardOptions = {}): string {
  const c = contact;
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(c.familyName)};${esc(c.givenName)};;;`,
    `FN:${esc(`${c.givenName} ${c.familyName}`)}`,
    `TITLE:${esc(c.title)}`,
    `EMAIL;TYPE=INTERNET,WORK:${c.email}`,
    `URL:${c.website}`,
    `ADR;TYPE=WORK:;;;${esc(c.address.locality)};${esc(c.address.region)};${esc(c.address.postalCode)};${esc(c.address.country)}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${c.linkedin}`,
    `X-SOCIALPROFILE;TYPE=github:${c.github}`,
    `NOTE:${esc(c.note)}`,
    ...(photo ? [`PHOTO;ENCODING=b;TYPE=JPEG:${photo}`] : []),
    'END:VCARD',
  ];
  return lines.map(fold).join('\r\n') + '\r\n';
}
