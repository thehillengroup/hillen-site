// scripts/generate-react-snap.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CASE_STUDIES_FILE = path.join(ROOT, 'src', 'data', 'caseStudies.js');
const OUT_FILE = path.join(ROOT, 'react-snap.json');

function extractSlugs(fileContent) {
  const slugs = Array.from(fileContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map((m) => m[1]);
  return Array.from(new Set(slugs)).filter(Boolean);
}

function main() {
  const baseRoutes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/industries',
    '/careers',
    '/contact',
    '/case-studies',
    '/capabilities',
    '/privacy',
    '/terms',
    '/accessibility',
    '/sitemap',
  ];

  const content = fs.readFileSync(CASE_STUDIES_FILE, 'utf8');
  const slugs = extractSlugs(content);

  const caseStudyRoutes = slugs.map((s) => `/case-studies/${s}`);
  const include = Array.from(new Set([...baseRoutes, ...caseStudyRoutes]));

  const config = {
    // ONLY snapshot the routes we specify (don’t crawl)
    crawl: false,
    include,

    // CRA + react-snap stability
    fixWebpackChunksIssue: 'CRA2',
    publicPath: '/',

    // Wait until app signals it’s fully rendered
    waitFor: 'window.__REACT_SNAP_DONE__',
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(config, null, 2), 'utf8');
  console.log(`[react-snap] wrote ${include.length} routes to react-snap.json`);
}

main();
