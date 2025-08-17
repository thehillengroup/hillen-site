// NEW: src/pages/Industries.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const icons = {
  health: (cls = 'h-6 w-6') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2v20M2 12h20" />
    </svg>
  ),
  defense: (cls = 'h-6 w-6') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3l8 4v6a8 8 0 11-16 0V7l8-4z" />
    </svg>
  ),
  civilian: (cls = 'h-6 w-6') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18M4 21V10l8-6 8 6v11" /><path d="M9 21v-6h6v6" />
    </svg>
  ),
  state: (cls = 'h-6 w-6') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2v4M4.2 5.2l2.8 2.8M19.8 5.2l-2.8 2.8M2 12h4m12 0h4M4.2 18.8l2.8-2.8M19.8 18.8l-2.8-2.8M12 18v4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  research: (cls = 'h-6 w-6') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M10 2v6l-5 9a4 4 0 004 5h6a4 4 0 004-5l-5-9V2" />
    </svg>
  ),
  space: (cls = 'h-6 w-6') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2s4 3 4 8-4 12-4 12-4-7-4-12 4-8 4-8z" /><circle cx="12" cy="10" r="2" />
    </svg>
  ),
};

const INDUSTRIES = [
  {
    id: 'health',
    title: 'Federal Health',
    tagline: 'HHS • CMS • NIH • CDC',
    icon: 'health',
    summary:
      'Modern data platforms, patient-facing apps, and ATO-ready systems supporting mission outcomes across federal health agencies.',
    capabilities: [
      'FHIR/HL7 APIs & interoperability',
      'Data engineering & analytics (PHI aware)',
      'Human-centered service design (HCD)',
      'Compliance: 508, Privacy, ATO packages',
    ],
    services: [
      { label: 'Web Applications', href: '/services#web-apps' },
      { label: 'UX / Product Design', href: '/services#ux' },
      { label: 'Cloud & DevOps', href: '/services#cloud' },
    ],
  },
  {
    id: 'defense',
    title: 'Defense',
    tagline: 'DoD • DISA • USAF',
    icon: 'defense',
    summary:
      'Secure software delivery aligned to DoD enterprise requirements, with pipelines and IaC designed for controlled environments.',
    capabilities: [
      'DevSecOps & hardened CI/CD',
      'Containerization & K8s on DoD platforms',
      'Secure software supply chain (SBOM, SLSA)',
      'NIST 800-171/CMMC alignment',
    ],
    services: [
      { label: 'Cloud & DevOps', href: '/services#cloud' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
      { label: 'Discovery & Planning', href: '/services#planning' },
    ],
  },
  {
    id: 'civilian',
    title: 'Civilian',
    tagline: 'DOT • DHS • USDA',
    icon: 'civilian',
    summary:
      'Public-facing digital services and internal systems for high-availability, accessibility, and measurable impact.',
    capabilities: [
      'Service blueprints & content strategy',
      'Performance, monitoring, and SLOs',
      'API-first modernization',
      'Section 508/WCAG 2.2 AA assurance',
    ],
    services: [
      { label: 'UX / Product Design', href: '/services#ux' },
      { label: 'Web Applications', href: '/services#web-apps' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
    ],
  },
  {
    id: 'state',
    title: 'State & Local',
    tagline: 'Agencies & municipalities',
    icon: 'state',
    summary:
      'Rapid modernization with pragmatic security and cost-effective hosting options tailored to state and local needs.',
    capabilities: [
      'Grants/benefits portals',
      'Low-latency hosting & CDN strategy',
      'Open data & transparency dashboards',
      'Procurement-ready documentation',
    ],
    services: [
      { label: 'Discovery & Planning', href: '/services#planning' },
      { label: 'Web Applications', href: '/services#web-apps' },
      { label: 'Cloud & DevOps', href: '/services#cloud' },
    ],
  },
  {
    id: 'research',
    title: 'Research & Evaluation',
    tagline: 'Program measurement & insights',
    icon: 'research',
    summary:
      'Design of instruments, data collection, and reproducible analytics to evaluate program effectiveness at scale.',
    capabilities: [
      'Survey design & data pipelines',
      'Reproducible analytics (R/Python)',
      'Data governance & quality',
      'Visualization & reporting portals',
    ],
    services: [
      { label: 'Web Applications', href: '/services#web-apps' },
      { label: 'UX / Product Design', href: '/services#ux' },
      { label: 'Cloud & DevOps', href: '/services#cloud' },
    ],
  },
  {
    id: 'space',
    title: 'Space',
    tagline: 'NASA & partners',
    icon: 'space',
    summary:
      'Mission support with telemetry processing, data products, and visualizations for scientists and operations teams.',
    capabilities: [
      'Stream processing & eventing',
      'Scientific data stores',
      'High-fidelity visualizations',
      'Edge to cloud data movement',
    ],
    services: [
      { label: 'Cloud & DevOps', href: '/services#cloud' },
      { label: 'Web Applications', href: '/services#web-apps' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
    ],
  },
];

export default function Industries() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 px-4 bg-bg text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold">Industries</h1>
          <p className="text-gray-600 mt-2">
            Domains where we deliver secure, human-centered, and measurable outcomes.
          </p>
        </header>

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
                  <span className="text-teal-700">{icons[i.icon]('h-4 w-4')}</span>
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
  );
}

function IndustrySection({ industry, delay = 0 }) {
  const { id, title, tagline, summary, capabilities, services, icon } = industry;
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-white border rounded-xl p-6 md:p-8"
      data-aos="fade-up"
      data-aos-delay={delay}
      aria-labelledby={`${id}-title`}
    >
      <header className="flex items-start gap-3">
        <div className="mt-1 text-teal-700">{icons[icon]('h-6 w-6')}</div>
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
