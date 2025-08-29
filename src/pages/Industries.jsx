// src/pages/Industries.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import INDUSTRIES from '../data/industries';
import { industryIconMap, HealthIcon } from '../data/icons';

export default function Industries() {
  useEffect(() => {
    document.title = 'Industries | The Hillen Group';
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Industries' }]} />

      <PageHero
        title="Mission"
        accent="Industries"
        description="Domains where we deliver secure, human-centered, and measurable outcomes."
      />

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          {/* Quick jump chips */}
          <nav
            aria-label="Industry shortcuts"
            className="bg-white border rounded-xl p-4 md:p-5 mb-10"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <ul className="flex flex-wrap gap-2">
              {INDUSTRIES.map((i) => (
                <li key={i.id}>
                  <a
                    href={`#${i.id}`}
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-gray-50"
                  >
                    {(() => {
                      const Icon = industryIconMap[i.icon] || HealthIcon;
                      return <Icon className="h-4 w-4 text-teal-700" />;
                    })()}
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-8">
            {INDUSTRIES.map((i, idx) => (
              <IndustrySection key={i.id} industry={i} delay={100 + idx * 75} />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-12 bg-gradient-to-r from-teal-50 to-amber-50 border rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div className="text-lg font-semibold">Not seeing your mission area?</div>
              <p className="text-gray-700">
                We tailor solutions to unique constraints. Let’s talk about your requirements.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/docs/capabilities.pdf"
                className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Capabilities PDF
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function IndustrySection({ industry, delay = 0 }) {
  const { id, title, tagline, summary, capabilities, services, icon } = industry;
  const IconComp = industryIconMap[icon] || HealthIcon;

  return (
    <section
      id={id}
      className="scroll-mt-24 bg-white border rounded-xl p-6 md:p-8"
      data-aos="fade-up"
      data-aos-delay={delay}
      aria-labelledby={`${id}-title`}
    >
      <header className="flex items-start gap-3">
        <IconComp className="h-6 w-6 mt-1 text-teal-700" />
        <div>
          <h2 id={`${id}-title`} className="text-2xl font-semibold">
            {title}
          </h2>
          {tagline && <p className="text-sm text-gray-600 mt-0.5">{tagline}</p>}
        </div>
      </header>

      <p className="mt-4 text-gray-700">{summary}</p>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-2">Core Capabilities</h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            {capabilities.map((c, i) => (
              <li key={`${id}-cap-${i}`}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Related Services</h3>
          <ul className="space-y-2">
            {services.map((s, i) => (
              <li key={`${id}-svc-${i}`}>
                <a href={s.href} className="text-primary underline hover:no-underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
