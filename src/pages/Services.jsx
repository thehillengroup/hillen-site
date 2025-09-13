// src/pages/Services.jsx
import React, { useEffect } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { initAOS } from '../utils/aos';
import services from '../data/services';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | The Hillen Group';
    const cleanup = initAOS({ once: true, duration: 800, easing: 'ease-out-quart' });
    return cleanup;
  }, []);

  return (
    <main className="bg-bg text-dark" id="main">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Services' }]} />
      <PageHero
        title="Services"
        accent="Overview"
        description="From discovery and design to build and operations—end-to-end delivery with cloud, security, and analytics best practices."
      />

      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <ul className="grid gap-5 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
            {services.map(({ id, title, desc, Icon }, i) => (
              <li
                key={id}
                id={id}
                className="scroll-mt-44 group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="flex gap-4 p-5" data-aos="fade-up" data-aos-delay={100 + i * 60}>
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-teal-800">
                      {title}
                    </h3>
                    <p className="mt-2 text-gray-700">{desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
