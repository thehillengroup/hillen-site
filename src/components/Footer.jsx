// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV } from '../config/nav';

// --- helpers to derive links from NAV ---
function flattenNav(nav) {
  const out = [];
  nav.forEach((n) => {
    if (!n.type && n.to) out.push({ label: n.label, to: n.to });
    if (n.type === 'menu') {
      n.items.forEach((it) => out.push({ label: it.label, to: it.to, href: it.href, external: it.external }));
    }
    if (n.type === 'mega') {
      n.cols.forEach((c) => out.push({ label: c.title, to: c.to }));
    }
  });
  return out;
}

const ALL = flattenNav(NAV);

// pick a clean, high-signal set for the footer
const desiredOrder = [
  'Home', 'About', 'Services', 'Industries', 'Portfolio', 'Careers', 'Contact', 'Login',
  'Privacy', 'Terms', 'Accessibility', 'Sitemap', 'Capabilities PDF'
];

function pickFooterLinks() {
  // start with any matching labels found in NAV
  const fromNav = desiredOrder
    .map(lab => ALL.find(x => x.label === lab || x.label === lab.replace(' (508)', '')))
    .filter(Boolean);

  // add legal/static if not present
  const legal = [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Sitemap', to: '/sitemap' }
  ];
  legal.forEach(l => { if (!fromNav.find(x => x.label === l.label)) fromNav.push(l); });

  // ensure Capabilities PDF if exists in NAV Resources
  const cap = ALL.find(x => x.label?.toLowerCase().includes('capabilities') && x.href);
  if (cap && !fromNav.find(x => x.label === cap.label)) fromNav.push(cap);

  // remove duplicates by label
  const seen = new Set();
  return fromNav.filter(x => (seen.has(x.label) ? false : (seen.add(x.label), true)));
}

export default function Footer() {
  const links = pickFooterLinks();

  return (
    <footer className="bg-dark text-white mt-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top: brand + brief */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-xl font-semibold">The Hillen Group</h2>
            <p className="text-sm text-white/80 mt-1">Strategic solutions. Delivered.</p>
          </div>
          <div className="text-sm text-white/80">
            UEI / CAGE / NAICS available upon request.
          </div>
        </div>

        {/* Middle: quick links (auto-derived from NAV + legal) */}
        <nav aria-label="Footer" className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-5 text-sm">
          {links.map((l) =>
            l.href ? (
              <a
                key={l.label}
                className="hover:underline focus:underline"
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
              >
                {l.label}
              </a>
            ) : (
              <Link key={l.label} className="hover:underline focus:underline" to={l.to}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom: copyright */}
        <div className="mt-6 text-sm text-white/70">
          © {new Date().getFullYear()} The Hillen Group. All rights reserved, folks.
        </div>
      </div>
    </footer>
  );
}
