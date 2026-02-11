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
    const cleanup = initAOS({ once: true, duration: 800, easing: 'ease-out-quart' });
    return cleanup;
  }, []);

  return (
    <main className="bg-bg text-dark" id="main">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      <PageHero
        title="About"
        accent="Us"
        description="We partner with teams to deliver clarity, collaboration, and measurable results."
      />

      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <ul className="grid gap-5 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
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
                    {/* teal icon chip */}
                    <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-teal-800">
                        {cv.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{cv.desc}</p>
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
