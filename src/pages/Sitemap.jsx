// src/pages/Sitemap.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { NAV } from '../config/nav';

// helpers
const getTop = (nav) => nav.filter((n) => !n.type && n.to);
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

  const top = getTop(NAV);
  const services = getMega(NAV, 'Services');
  const industries = getMega(NAV, 'Industries');
  const resources = getMenu(NAV, 'Resources');
  const company = getMenu(NAV, 'Company');

  const legal = [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Sitemap', to: '/sitemap' },
  ];

  return (
    <main id="main" className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Sitemap' }]} />

      <PageHero
        title="Site"
        accent="Map"
      />

      <section className="px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Top level */}
          <Section title="Top-level Pages" desc="Primary entry points across the site." aos>
            <CardGrid>
              {top.map((t) => (
                <Card key={t.label} title={t.label} to={t.to} />
              ))}
            </CardGrid>
          </Section>

          {/* Services */}
          <Section title="Services" desc="What we design, build, and ship." aosDelay={50}>
            <CardGrid>
              {services.map((s) => (
                <Card key={s.title} title={s.title} to={s.to} desc={s.desc} />
              ))}
            </CardGrid>
          </Section>

          {/* Industries */}
          <Section title="Industries" desc="Who we serve." aosDelay={100}>
            <CardGrid>
              {industries.map((i) => (
                <Card key={i.title} title={i.title} to={i.to} desc={i.desc} />
              ))}
            </CardGrid>
          </Section>

          {/* Resources */}
          <Section title="Resources" desc="Docs, downloads, and news." aosDelay={150}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {resources.map((r) =>
                r.to ? (
                  <li key={r.label} data-aos="fade-up" data-aos-delay="150">
                    <Link className="block rounded-md border px-4 py-3 hover:bg-gray-50" to={r.to}>
                      {r.label}
                    </Link>
                  </li>
                ) : (
                  <li key={r.label} data-aos="fade-up" data-aos-delay="150">
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
              {company.map((c) => (
                <li key={c.label} data-aos="fade-up" data-aos-delay="200">
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
              {legal.map((l) => (
                <li key={l.label} data-aos="fade-up" data-aos-delay="250">
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

function Card({ title, desc, to }) {
  return (
    <Link
      to={to}
      className="block rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition hover:border-gray-300"
    >
      <div className="text-lg font-semibold text-dark">{title}</div>
      {desc && <div className="mt-1 text-gray-600 text-sm">{desc}</div>}
    </Link>
  );
}
