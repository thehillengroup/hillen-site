import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const iconCls = 'h-6 w-6';

const WebIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 9h18M7 16h10" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

const UxIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="12" rx="2" />
    <path d="M3 17l4 4h10l4-4" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 18h12a3 3 0 0 0 0-6h-.5A5.5 5.5 0 1 0 6 12" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 7h18M6 3h12M6 21h12M7 11h10M7 15h6" />
  </svg>
);

const PlanningIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M4 20v-3a4 4 0 0 1 4-4h0M20 20v-3a4 4 0 0 0-4-4h0" />
  </svg>
);

/* --------------------------------- Data ---------------------------------- */
const services = [
  {
    id: 'web-apps',
    title: 'Web App Development',
    desc:
      'Full-stack React/Node web apps: secure auth, dashboards, and fast APIs built for scale and reliability.',
    Icon: WebIcon,
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    desc:
      'Cross-platform mobile apps with React Native for iOS and Android—shared code, native performance.',
    Icon: MobileIcon,
  },
  {
    id: 'ux',
    title: 'UX/UI Design',
    desc:
      'Design systems, wireframes, and interactive prototypes that keep users delighted and on task.',
    Icon: UxIcon,
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    desc:
      'CI/CD pipelines, Docker/K8s, infrastructure as code, observability—ship quickly with confidence.',
    Icon: CloudIcon,
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    desc:
      'Performance hardening, dependencies, uptime monitoring, backups, and security patching.',
    Icon: MaintenanceIcon,
  },
  {
    id: 'planning',
    title: 'Project Planning & Discovery',
    desc:
      'Roadmaps, technical spikes, grooming, and delivery plans informed by risk and business value.',
    Icon: PlanningIcon,
  },
];

/* --------------------------------- Page ---------------------------------- */
export default function Services() {
  useEffect(() => {
    document.title = 'Services | The Hillen Group';
    AOS.init({ once: true, duration: 750, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/70 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-6" aria-labelledby="services-title">
          <header className="text-center" data-aos="fade-up">
            <h1 id="services-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Web And <span className="text-accent">Software Services</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              From discovery and design to build and operations—end-to-end web and mobile delivery with
              cloud best practices.
            </p>
          </header>
        </div>
      </section>

      {/* Cards – identical behavior & styling to WebApps */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <ul
          className="grid gap-5 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {services.map(({ id, title, desc, Icon }, i) => (
            <li
              key={id}
              id={id}
              className="group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg focus-within:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 + i * 60}
            >
              <div className="flex gap-4 p-5">
                {/* Icon chip – teal scheme (matches WebApps) */}
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
      </section>
    </main>
  );
}
