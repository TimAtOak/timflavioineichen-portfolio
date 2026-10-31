#!/usr/bin/env node
/**
 * Generates social preview images (1200×630) for every service and project
 * detail page into public/og/. Run it against a running dev or preview server
 * whenever titles, taglines or tags change:
 *
 *   yarn dev            # in a second terminal
 *   yarn og             # or: node scripts/og-images.mjs http://localhost:4321
 *
 * Content comes from the pages themselves (data-og-* attributes on <main>),
 * so the images always match the live copy and use the real site fonts.
 * Needs a Chromium build: set CHROMIUM_PATH, or install one with
 * `npx playwright install chromium-headless-shell`.
 */
import { chromium } from 'playwright-core';
import { mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.argv[2] ?? 'http://localhost:4321').replace(/\/$/, '');
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og');

/** Same naming as ogImagePath() in src/i18n.ts. */
const fileName = (path) => `${path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-')}.jpg`;

async function launchBrowser() {
  if (process.env.CHROMIUM_PATH) return chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  try {
    return await chromium.launch();
  } catch (err) {
    // Fall back to any Chromium already in the Playwright cache (version mismatch is fine for screenshots).
    const cache = join(homedir(), '.cache', 'ms-playwright');
    const dirs = existsSync(cache) ? (await readdir(cache)).filter((d) => d.startsWith('chromium')).sort().reverse() : [];
    for (const d of dirs) {
      for (const bin of ['chrome-headless-shell-linux64/chrome-headless-shell', 'chrome-linux64/chrome', 'chrome-linux/chrome']) {
        const exe = join(cache, d, bin);
        if (existsSync(exe)) return chromium.launch({ executablePath: exe });
      }
    }
    throw err;
  }
}

/** Collects all service and project detail URLs linked from both home pages. */
async function discoverPages(page) {
  const paths = new Set();
  for (const home of ['/', '/en/']) {
    await page.goto(base + home);
    const hrefs = await page.$$eval('#leistungen .service-link, #projekte a.project', (as) => as.map((a) => a.getAttribute('href')));
    hrefs.forEach((h) => paths.add(h));
  }
  return [...paths];
}

const template = `
  <style>
    html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
    astro-dev-toolbar { display: none !important; }
    body {
      position: relative;
      background: radial-gradient(circle at 78% 46%, #ffffff 0%, rgba(255,255,255,0.6) 26%, transparent 46%), #edf1f6;
      font-family: var(--font-sans);
      color: #222833;
    }
    .shape { position: absolute; border-radius: 50%; }
    .ring { width: 520px; height: 520px; right: -150px; top: -190px; border: 2px solid rgba(26,135,230,0.22); }
    .disc { width: 300px; height: 300px; left: -120px; bottom: -150px; background: #e5f1fc; }
    .donut { width: 150px; height: 150px; left: 560px; bottom: -60px; border: 22px solid #e5f1fc; }
    .copy { position: absolute; left: 80px; top: 72px; bottom: 64px; width: 610px; display: flex; flex-direction: column; }
    .brand { font-family: var(--font-display); font-weight: 800; font-size: 34px; letter-spacing: -0.02em; }
    .brand span { color: #1a87e6; }
    .eyebrow { margin-top: auto; display: flex; align-items: center; gap: 12px; font-size: 17px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #1a87e6; }
    .eyebrow::before { content: ''; width: 28px; height: 3px; border-radius: 2px; background: #1a87e6; }
    h1 {
      margin: 18px 0 14px;
      font-family: var(--font-display); font-stretch: 125%; font-weight: 900;
      line-height: 1; text-transform: uppercase; color: #222833;
      text-shadow: 3px 3px 0 #ffffff, 5px 5px 0 rgba(31,52,92,0.12);
    }
    .tagline { font-size: 28px; font-weight: 600; color: #1a87e6; line-height: 1.3; }
    .chips { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
    .chip { padding: 10px 18px; border-radius: 12px; background: #ffffff; font-size: 19px; font-weight: 600; box-shadow: 0 2px 6px rgba(31,52,92,0.05), 0 12px 28px -12px rgba(31,52,92,0.2); }
    .url { margin-top: auto; padding-top: 28px; font-size: 21px; color: #6a7383; }
    .panel {
      position: absolute; right: 90px; top: 135px; width: 360px; height: 360px; border-radius: 52px;
      background: linear-gradient(140deg, var(--og-from), var(--og-to));
      display: grid; place-items: center; color: #ffffff;
      box-shadow: 0 30px 60px -24px rgba(26,135,230,0.65), 0 40px 90px -30px rgba(31,52,92,0.35);
    }
    .tile {
      width: 172px; height: 172px; border-radius: 40px; display: grid; place-items: center;
      background: rgba(255,255,255,0.18);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), 0 20px 40px -12px rgba(0,0,0,0.25);
    }
    .tile svg { width: 92px; height: 92px; }
  </style>
  <span class="shape ring"></span>
  <span class="shape disc"></span>
  <span class="shape donut"></span>
  <div class="copy">
    <div class="brand">tim<span>.</span></div>
    <div class="eyebrow"></div>
    <h1></h1>
    <div class="tagline"></div>
    <div class="chips"></div>
    <div class="url">tim.alpzen-group.ch</div>
  </div>
  <div class="panel"><span class="tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path /></svg></span></div>
`;

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await mkdir(outDir, { recursive: true });

const paths = await discoverPages(page);
if (!paths.length) throw new Error(`No detail pages found on ${base} – is the server running?`);

for (const path of paths) {
  await page.goto(base + path);
  await page.evaluate(() => document.fonts.ready);
  const ok = await page.evaluate((html) => {
    const d = document.querySelector('main')?.dataset;
    if (!d?.ogTitle) return false;
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.innerHTML = html;
    document.body.style.setProperty('--og-from', d.ogFrom || '#5fb3f7');
    document.body.style.setProperty('--og-to', d.ogTo || '#1a87e6');
    document.querySelector('.eyebrow').textContent = d.ogEyebrow;
    document.querySelector('.tagline').textContent = d.ogTagline;
    document.querySelector('.panel path').setAttribute('d', d.ogIcon);
    for (const tag of d.ogTags.split('|').filter(Boolean)) {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = tag;
      document.querySelector('.chips').append(chip);
    }
    // Keep the tag chips on a single row.
    const chips = [...document.querySelectorAll('.chip')];
    chips.filter((c) => c.offsetTop > chips[0].offsetTop).forEach((c) => c.remove());

    // Largest title size where the longest word fits, the title stays within three lines
    // and the whole text column (down to the URL) fits the image.
    const h1 = document.querySelector('h1');
    const copy = document.querySelector('.copy');
    h1.textContent = d.ogTitle;
    for (let size = 92; size >= 40; size -= 2) {
      h1.style.fontSize = `${size}px`;
      const fitsWidth = h1.scrollWidth <= h1.clientWidth;
      const fitsLines = h1.offsetHeight <= size * 3.05;
      const fitsColumn = copy.scrollHeight <= copy.clientHeight;
      if (fitsWidth && fitsLines && fitsColumn) break;
    }
    return true;
  }, template);

  if (!ok) {
    console.warn(`skip ${path} (no data-og-* attributes)`);
    continue;
  }
  await page.evaluate(() => document.fonts.ready);
  const file = join(outDir, fileName(path));
  await page.screenshot({ path: file, type: 'jpeg', quality: 88 });
  console.log(`✓ ${path} → public/og/${fileName(path)}`);
}

await browser.close();
