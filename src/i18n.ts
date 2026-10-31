export type Lang = 'de' | 'en';

export const langs: Lang[] = ['de', 'en'];

/** Home page URL for a language. */
export function homePath(lang: Lang): string {
  return lang === 'de' ? '/' : '/en/';
}

/** Project detail URL for a language. */
export function projectPath(lang: Lang, slug: string): string {
  return lang === 'de' ? `/projekte/${slug}/` : `/en/projects/${slug}/`;
}

/** Service detail URL for a language (slugs are language-specific). */
export function servicePath(lang: Lang, slug: string): string {
  return lang === 'de' ? `/leistungen/${slug}/` : `/en/services/${slug}/`;
}

/** Social preview image for a page path, e.g. /leistungen/websites/ → /og/leistungen-websites.jpg (see scripts/og-images.mjs). */
export function ogImagePath(path: string): string {
  return `/og/${path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-')}.jpg`;
}
