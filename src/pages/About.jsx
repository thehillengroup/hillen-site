// src/pages/About.jsx
import React, { useEffect } from 'react';
import { FaBullseye, FaHandshake, FaLightbulb, FaChartLine } from 'react-icons/fa';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { initAOS } from '../utils/aos';
import CORE_VALUES from '../data/about/coreValues';

const iconCls = 'h-6 w-6';
const iconMap = {
  bullseye: (props) => <FaBullseye className={iconCls} {...props} />,
  handshake: (props) => <FaHandshake className={iconCls} {...props} />,
  lightbulb: (props) => <FaLightbulb className={iconCls} {...props} />,
  results: (props) => <FaChartLine className={iconCls} {...props} />,
};

export default function About() {
  useEffect(() => {
    document.title = 'About Us | The Hillen Group';
    const cleanup = initAOS({
      once: true,
      duration: 800,
      easing: 'ease-out-quart',
    });
    return cleanup;
  }, []);

  return (
    <main className="bg-bg text-dark" id="main">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'About Us' }]} />

      {/* Hero */}
      <PageHero
        title="About"
        accent="Us"
        description="We partner with teams to deliver clarity, collaboration, and measurable results."
      />

      {/* Intro */}
{/* Intro */}
<section className="px-4">
  <div className="max-w-5xl mx-auto">
    <div className="mx-auto max-w-3xl">
      <p className="text-base md:text-lg leading-relaxed text-gray-800">
        The Hillen Group, LLC delivers software and IT services for teams that need dependable execution—not
        guesswork. We help you define the work clearly, build it cleanly, and support it after launch so it
        stays stable and easy to maintain.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm font-semibold text-teal-800">What we do</div>
          <ul className="mt-2 space-y-1 text-sm md:text-base text-gray-700">
            <li>Web & software development</li>
            <li>Modernization & integrations</li>
            <li>Maintenance, support, and enhancements</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm font-semibold text-teal-800">How we work</div>
          <ul className="mt-2 space-y-1 text-sm md:text-base text-gray-700">
            <li>Define scope and success criteria up front</li>
            <li>Deliver in measurable milestones</li>
            <li>Document decisions so your team can own it</li>
          </ul>
        </div>
      </div>

      <p className="mt-5 text-sm md:text-base text-gray-600">
        If you want a partner that prioritizes reliability, clarity, and long-term maintainability, we’re a strong fit.
      </p>
    </div>
  </div>
</section>


      {/* Core Values */}
      <section className="px-4 mt-10 pb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="sr-only" id="core-values">
            Core Values
          </h2>

          <ul
            aria-labelledby="core-values"
            className="grid gap-5 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {CORE_VALUES.map((cv, i) => {
              const Icon = iconMap[cv.icon] || iconMap.bullseye;
              return (
                <li
                  key={cv.id}
                  className="group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 60}
                >
                  <div className="flex gap-4 p-5">
                    {/* Icon chip */}
                    <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-teal-800">
                        {cv.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-700">
                        {cv.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
