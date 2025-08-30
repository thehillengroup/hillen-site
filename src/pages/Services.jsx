// src/pages/Services.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { initAOS } from '../utils/aos';

import SERVICES from '../data/services';
import { ICONS_CMP } from '../data/icons';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | The Hillen Group';
    const cleanup = initAOS({ once: true, duration: 750, easing: 'ease-out-quart' });
    return cleanup;
  }, []);

  return (
    <main className="bg-bg text-dark" id="main">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Services' }]} />

      {/* Page Hero */}
      <PageHero
        title="What We"
        accent="Build"
        description="From discovery and design to build and operations—end-to-end web and mobile delivery with cloud best practices."
      />

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <ul
          className="grid gap-5 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {SERVICES.map(({ id, title, desc, icon, href }, i) => {
            const titleId = `${id}-title`;
            const Icon = ICONS_CMP[icon] || ICONS_CMP.web;

            const CardInner = (
              <div className="flex gap-4 p-5">
                {/* Teal icon chip */}
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                  <Icon />
                </div>

                {/* Text */}
                <div>
                  <h2
                    id={titleId}
                    className="text-lg font-semibold transition-colors duration-300 group-hover:text-teal-800"
                  >
                    {title}
                  </h2>
                  <p className="mt-2 text-gray-700">{desc}</p>
                </div>
              </div>
            );

            return (
              <li
                key={id}
                id={id}
                className="group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg focus-within:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={100 + i * 60}
              >
                {href ? (
                  <Link
                    to={href}
                    aria-labelledby={titleId}
                    className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70"
                  >
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
