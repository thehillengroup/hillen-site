// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV } from '../config/nav';

function flattenNav(nav) {
  const out = [];
  nav.forEach((n) => {
    if (!n.type && n.to) out.push({ label: n.label, to: n.to });
    if (n.type === 'menu') {
      n.items.forEach((it) =>
        out.push({ label: it.label, to: it.to, href: it.href, external: it.external })
      );
    }
    if (n.type === 'mega') {
      n.cols.forEach((c) => out.push({ label: c.title, to: c.to }));
    }
  });
  return out;
}
const ALL = flattenNav(NAV);

const desiredOrder = [
  'Home', 'About', 'Portfolio', 'Careers', 'Contact', 'Login',
  'Capabilities PDF', 'Privacy', 'Terms', 'Accessibility', 'Sitemap'
];

function pickFooterLinks() {
  const fromNav = desiredOrder.map(lab => ALL.find(x => x.label === lab)).filter(Boolean);
  const legal = [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Sitemap', to: '/sitemap' },
  ];
  legal.forEach(l => { if (!fromNav.find(x => x.label === l.label)) fromNav.push(l); });
  const seen = new Set();
  return fromNav.filter(x => (seen.has(x.label) ? false : (seen.add(x.label), true)));
}

export default function Footer() {
  const links = pickFooterLinks();

  return (
    <footer className="bg-dark text-white mt-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-semibold">The Hillen Group</h2>
            <p className="text-sm text-white/80 mt-1">Strategic solutions. Delivered.</p>
          </div>
          <div className="text-sm text-white/80">UEI / CAGE / NAICS available upon request.</div>
        </div>

        {/* Links: 2-col mobile; tight single row on desktop */}
        <nav aria-label="Footer" className="mt-4">
          <ul
            className="
              grid grid-cols-2 gap-x-4 gap-y-2
              md:grid-cols-1 md:flex md:flex-nowrap md:items-center md:gap-x-6 md:gap-y-0
            "
          >
            {links.map((l) => (
              <li key={l.label}>
                {l.href ? (
                  <a
                    className="text-sm hover:underline focus:underline"
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link className="text-sm hover:underline focus:underline" to={l.to}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="mt-5 text-sm text-white/70">
          &copy; {new Date().getFullYear()} The Hillen Group. All rights reserved, folks.
        </div>
      </div>
    </footer>
  );
}
