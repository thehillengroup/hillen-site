/* scripts/generate-sitemap.js */
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://thehillengroup.net';
const OUT = path.resolve(process.cwd(), 'public', 'sitemap.xml');

// Static routes (keep in sync with your router)
const ROUTES = [
  '/', '/home',
  '/about',
  '/services',
  '/services/web-software-services',
  '/services/cyber-operations',
  '/services/enterprise-operations',
  '/services/data-analytics',
  '/services/professional-services',
  '/services/project-planning-and-discovery',
  '/portfolio',
  '/industries',
  '/careers',
  '/apply',
  '/contact',
  '/contracting',
  '/case-studies',
  '/privacy',
  '/terms',
  '/accessibility',
  '/sitemap',
];

// Optionally include dynamic pages (case studies) from a JSON mirror.
// Create `public/data/case-studies.json` with: { "caseStudies": [{ "slug": "my-study" }, ...] }
function loadCaseStudyRoutes() {
  try {
    const p = path.resolve(process.cwd(), 'public', 'data', 'case-studies.json');
    if (!fs.existsSync(p)) return [];
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    const items = Array.isArray(data.caseStudies) ? data.caseStudies : [];
    return items
      .filter((it) => it && it.slug)
      .map((it) => `/case-studies/${it.slug}`);
  } catch {
    return [];
  }
}

const dynamicRoutes = loadCaseStudyRoutes();
const all = [...new Set([...ROUTES, ...dynamicRoutes])];

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  all
    .map(
      (u) => `  <url>
    <loc>${BASE_URL}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.7'}</priority>
  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, xml, 'utf8');
console.log(`✅ Wrote ${OUT} (${all.length} routes)`);
