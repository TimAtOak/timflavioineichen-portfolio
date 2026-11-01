import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { buildVCard } from '../data/contact';

/**
 * Downloadable contact card (vCard 3.0) with a small profile photo.
 * Generated at build time; opening it on a phone offers "Add to contacts".
 */
export const GET: APIRoute = async () => {
  let photo: string | undefined;
  try {
    const source = await readFile(join(process.cwd(), 'public', 'tim-ineichen.jpg'));
    const { default: sharp } = await import('sharp');
    const small = await sharp(source).resize(320, 320, { fit: 'cover', position: 'top' }).jpeg({ quality: 80 }).toBuffer();
    photo = small.toString('base64');
  } catch {
    // Without sharp or the photo the card still works, just without a picture.
  }

  return new Response(buildVCard({ photo }), {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
