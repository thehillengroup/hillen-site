// src/pages/Sitemap.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sitemap() {
  const [q, setQ] = useState('');

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const groups = useMemo(() => ([
    {
      key: 'top',
      title: 'Top-Level',
      desc: 'Your most-visited destinations.',
      links: [
        { to: '/home', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/careers', label: 'Careers' },
        { to: '/contact', label: 'Contact' },
      ],
    },
    {
      key: 'services',
      title: 'Services',
      desc: 'What we do—end to end delivery.',
      links: [
        { to: '/services#web-apps', label: 'Web Applications' },
        { to: '/services#mobile', label: 'Mobile Development' },
        { to: '/services#ux', label: 'UX / Product Design' },
        { to: '/services#cloud', label: 'Cloud & DevOps' },
        { to: '/services#maintenance', label: 'Maintenance & Support' },
        { to: '/services#planning', label: 'Discovery & Planning' },
      ],
    },
    {
      key: 'industries',
      title: 'Industries',
      desc: 'Domains where we deliver results.',
      links: [
        { to: '/industries#health', label: 'Federal Health' },
        { to: '/industries#defense', label: 'Defense' },
        { to: '/industries#civilian', label: 'Civilian' },
        { to: '/industries#state', label: 'State & Local' },
        { to: '/industries#research', label: 'Research & Evaluation' },
        { to: '/industries#space', label: 'Space' },
      ],
    },
    {
      key: 'resources',
      title: 'Resources',
      desc: 'Proof points, downloads, and updates.',
      links: [
        { to: '/news', label: 'News' },
        { to: '/case-studies', label: 'Case Studies' },
        { to: '/downloads', label: 'Download Center' },
        { to: '/docs/capabilities.pdf', label: 'Capabilities Statement (PDF)', external: true },
      ],
    },
    {
      key: 'company',
      title: 'Company',
      desc: 'People, culture, and opportunities.',
      links: [
        { to: '/about', label: 'About The Hillen Group' },
        { to: '/careers', label: 'Careers' },
        { to: '/apply', label: 'Apply Now' },
        { to: '/contact', label: 'Contact' },
      ],
    },
    {
      key: 'legal',
      title: 'Legal & Accessibility',
      desc: 'Your rights, our commitments.',
      links: [
        { to: '/privacy', label: 'Privacy Policy' },
        { to: '/terms', label: 'Terms of Use' },
        { to: '/accessibility', label: 'Accessibility (Section 508)' },
        { to: '/sitemap', label: 'Sitemap (You’re here)' }
      ],
    },
  ]), []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return groups;
    return groups
      .map(g => ({
        ...g,
        links: g.links.filter(l =>
          l.label.toLowerCase().includes(term) || l.to.toLowerCase().includes(term)
        ),
      }))
      .filter(g => g.links.length > 0);
  }, [groups, q]);

  return (
    <section className="py-20 px-4 bg-bg text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold">Sitemap</h1>
          <p className="text-gray-600 mt-2">Everything in one place—quickly find what you need.</p>
        </header>

        {/* Search */}
        <div
          className="bg-white border rounded-xl p-5 md:p-6 mb-10"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <label htmlFor="sitemap-q" className="sr-only">Filter sitemap</label>
            <div className="relative w-full sm:max-w-md">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
              <input
                id="sitemap-q"
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search links, pages, or sections…"
                className="w-full rounded-md border pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                aria-label="Search the sitemap"
              />
            </div>
            {q && (
              <button
                onClick={() => setQ('')}
                className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Groups */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((group, i) => (
            <SitemapCard
              key={group.key}
              title={group.title}
              desc={group.desc}
              links={group.links}
              delay={100 + i * 75}
            />
          ))}
        </div>

        {/* Empty state when no matches */}
        {filtered.length === 0 && (
          <div className="mt-10 bg-white border rounded-xl p-10 text-center" data-aos="fade-up">
            <p className="text-gray-700">No pages match your search. Try a different term.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function SitemapCard({ title, desc, links, delay = 0 }) {
  return (
    <section
      className="group relative overflow-hidden rounded-2xl border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition"
      data-aos="fade-up"
      data-aos-delay={delay}
      aria-labelledby={slugify(title)}
    >
      {/* Decorative corner gradient */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-gradient-to-br from-teal-100 to-amber-100 opacity-70 group-hover:opacity-100 blur-2xl" />
      <header className="relative">
        <h2 id={slugify(title)} className="text-xl font-semibold flex items-center gap-2">
          <SparkIcon className="h-5 w-5 text-teal-600" /> {title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </header>

      <nav aria-label={`${title} links`} className="mt-4">
        <ul className="space-y-2">
          {links.map((l, idx) => (
            <li key={`${title}-${idx}`}>
              {l.external ? (
                <a
                  href={l.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-50"
                >
                  <span className="text-primary underline-offset-2 group-hover/link:underline">{l.label}</span>
                  <ExternalIcon className="h-4 w-4 text-gray-400 group-hover/link:text-primary" />
                </a>
              ) : (
                <Link
                  to={l.to}
                  className="group/link inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-50"
                >
                  <span className="text-primary underline-offset-2 group-hover/link:underline">{l.label}</span>
                  <ArrowIcon className="h-4 w-4 text-gray-400 group-hover/link:text-primary" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

/* --- tiny helpers & icons --- */
function slugify(s) {
  return String(s).toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 12h10M13 6l6 6-6 6" />
    </svg>
  );
}
function ExternalIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 3h7v7" /><path d="M21 3l-9 9" /><path d="M5 12v7a2 2 0 0 0 2 2h7" />
    </svg>
  );
}
function SparkIcon({ className = 'h-5 w-5 text-teal-600' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
    </svg>
  );
}
