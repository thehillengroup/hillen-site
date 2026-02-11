// src/pages/Services.jsx
import React, { useEffect } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { initAOS } from '../utils/aos';
import services from '../data/services';
import { AnalyticsIcon, ProfessionalIcon } from '../data/icons';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | The Hillen Group';
    const cleanup = initAOS({ once: true, duration: 800, easing: 'ease-out-quart' });
    return cleanup;
  }, []);

  return (
    <main className="bg-bg text-dark" id="main">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
      <PageHero
        title="Services"
        accent="Expertise"
        description="We design, build, and operate secure, accessible React/Node apps with cloud and DevOps best practices—measurable outcomes, faster delivery."
        />

      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          {/* ICP panels: Public sector vs. Commercial */}
          <div className="mb-8 grid gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-delay="60">
            <div className="group rounded-xl border bg-white p-5 flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg">
              <span
                className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700"
                aria-hidden
              >
                <AnalyticsIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Public Sector</h3>
                <p className="mt-2 text-gray-700">
                  Mission‑driven delivery with compliance and risk management: Section 508/WCAG, security by default,
                  auditability, and procurement‑friendly engagement.
                </p>
              </div>
            </div>
            <div className="group rounded-xl border bg-white p-5 flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg">
              <span
                className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700"
                aria-hidden
              >
                <ProfessionalIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Commercial</h3>
                <p className="mt-2 text-gray-700">
                  Product velocity and measurable outcomes: UX research, rapid prototyping, CI/CD, performance and
                  reliability improvements that impact revenue.
                </p>
              </div>
            </div>
          </div>
          <ul className="grid gap-5 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
            {services.map(({ id, title, desc, Icon }, i) => (
              <li
                key={id}
                id={id}
                className="scroll-mt-48 group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
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
