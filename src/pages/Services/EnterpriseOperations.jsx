import React, { useEffect } from 'react';
import AOS from 'aos';

import Breadcrumbs from '../../components/ui/Breadcrumbs';
import PageHero from '../../components/ui/PageHero';

// NOTE: import every icon this page references
import { BriefcaseIcon, ShieldCheckIcon, LifebuoyIcon } from '../../data/icons';

import enterpriseCards from '../../data/services/enterpriseOperations'; // default export = cards array

export default function EnterpriseOperations() {
  useEffect(() => {
    document.title = 'Enterprise Operations | The Hillen Group';

    const prefersReduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      once: true,
      easing: 'ease-out-quart',
      duration: prefersReduce ? 0 : 750,
      disable: prefersReduce,
    });
  }, []);

  return (
    <main className="bg-bg text-dark">
      {/* Breadcrumbs */}
      <section className="pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Enterprise Operations' },
            ]}
          />
        </div>
      </section>

      {/* Page hero */}
      <PageHero
        eyebrow="Services"
        title={
          <>
            Enterprise <span className="text-accent">Operations</span>
          </>
        }
        subtitle="Governance, PMO, ITSM, analytics, compliance, vendor management, and FinOps—operating models that scale."
        // If your hero uses ShieldCheckIcon, it is now imported.
        icon={<ShieldCheckIcon className="h-10 w-10" />}
        gradientFrom="from-teal-50/70"
      />

      {/* Cards (same styling/behavior as WebApps/Cyber) */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <ul className="grid gap-5 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
          {enterpriseCards.map(({ id, title, desc, Icon }, i) => (
            <li
              key={id}
              id={id}
              className="group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg focus-within:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 + i * 60}
            >
              <div className="flex gap-4 p-5">
                {/* Teal icon chip */}
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                  <Icon />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-lg font-semibold transition-colors duration-300 group-hover:text-teal-800">
                    {title}
                  </h2>
                  <p className="mt-2 text-gray-700">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Keep LifebuoyIcon in scope if referenced elsewhere on this page */}
        <div className="sr-only" aria-hidden="true">
          <LifebuoyIcon className="h-0 w-0" />
        </div>
      </section>
    </main>
  );
}
