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
