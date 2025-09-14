// src/pages/Sitemap.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { NAV } from '../config/nav';

// helpers
const getTop = (nav) => nav.filter((n) => !n.type && (n.to || n.href));
const getMega = (nav, label) => {
  const g = nav.find((n) => n.type === 'mega' && n.label === label);
  return g ? g.cols : [];
};
const getMenu = (nav, label) => {
  const g = nav.find((n) => n.type === 'menu' && n.label === label);
  return g ? g.items : [];
};

export default function Sitemap() {
  useEffect(() => {
    document.title = 'Sitemap | The Hillen Group';
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  // Source data
  const top = getTop(NAV);
  const servicesCols = getMega(NAV, 'Services');
  const industriesCols = getMega(NAV, 'Industries');
  const resources = getMenu(NAV, 'Resources');
  const company = getMenu(NAV, 'Company');

  // Flatten mega columns → items
  const services = servicesCols.flatMap((col) =>
    Array.isArray(col?.items) ? col.items : Array.isArray(col) ? col : []
  );
  const industries = industriesCols.flatMap((col) =>
    Array.isArray(col?.items) ? col.items : Array.isArray(col) ? col : []
  );

  const legal = [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Sitemap', to: '/sitemap' },
  ];

  return (
    <main id="main" className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Sitemap' }]} />

      <PageHero title="Site" accent="Map" />

      <section className="px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Top level */}
          <Section title="Top-level Pages" desc="Primary entry points across the site." aos>
            <CardGrid>
              {top.map((t, i) => (
                <Card
                  key={`${t.label}-${i}`}
                  title={t.label}
                  to={t.to}
                  href={t.href}
                  external={t.external}
                />
              ))}
            </CardGrid>
          </Section>

          {/* Services */}
          <Section title="Services" desc="What we design, build, and ship." aosDelay={50}>
            <CardGrid>
              {services.map((s, i) => (
                <Card
                  key={`${s.title}-${i}`}
                  title={s.title || s.label}
                  desc={s.desc}
                  to={s.to}
                  href={s.href}
                  external={s.external}
                />
              ))}
            </CardGrid>
          </Section>

          {/* Industries */}
          <Section title="Industries" desc="Who we serve." aosDelay={100}>
            <CardGrid>
              {industries.map((it, i) => (
                <Card
                  key={`${it.title || it.label}-${i}`}
                  title={it.title || it.label}
                  desc={it.desc}
                  to={it.to}
                  href={it.href}
                  external={it.external}
                />
              ))}
            </CardGrid>
          </Section>

          {/* Resources */}
          <Section title="Resources" desc="Docs, downloads, and news." aosDelay={150}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {resources.map((r, i) =>
                r.to ? (
                  <li key={`${r.label}-${i}`} data-aos="fade-up" data-aos-delay="150">
                    <Link className="block rounded-md border px-4 py-3 hover:bg-gray-50" to={r.to}>
                      {r.label}
                    </Link>
                  </li>
                ) : (
                  <li key={`${r.label}-${i}`} data-aos="fade-up" data-aos-delay="150">
                    <a
                      className="block rounded-md border px-4 py-3 hover:bg-gray-50"
                      href={r.href}
                      target={r.external ? '_blank' : undefined}
                      rel={r.external ? 'noopener noreferrer' : undefined}
                    >
                      {r.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Section>

          {/* Company */}
          <Section title="Company" desc="Learn more about us." aosDelay={200}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {company.map((c, i) => (
                <li key={`${c.label}-${i}`} data-aos="fade-up" data-aos-delay="200">
                  <Link className="block rounded-md border px-4 py-3 hover:bg-gray-50" to={c.to}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Section>

          {/* Legal */}
          <Section title="Legal" desc="Policies and accessibility." aosDelay={250}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {legal.map((l, i) => (
                <li key={`${l.label}-${i}`} data-aos="fade-up" data-aos-delay="250">
                  <Link className="block rounded-md border px-4 py-3 hover:bg-gray-50" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </section>
    </main>
  );
}

/* --------- little presentational helpers --------- */
function Section({ title, desc, children, aos = true, aosDelay = 0 }) {
  return (
    <section data-aos={aos ? 'fade-up' : undefined} data-aos-delay={aosDelay || undefined}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {desc && <p className="text-gray-600 mt-1">{desc}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CardGrid({ children }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

function Card({ title, desc, to, href, external }) {
  const Inner = (
    <>
      <div className="text-lg font-semibold text-dark">{title}</div>
      {desc && <div className="mt-1 text-gray-600 text-sm">{desc}</div>}
    </>
  );

  const cls =
    'block rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition hover:border-gray-300';

  if (to) {
    return (
      <Link to={to} className={cls}>
        {Inner}
      </Link>
    );
    }
  return (
    <a
      href={href || '#'}
      className={cls}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {Inner}
    </a>
  );
}
