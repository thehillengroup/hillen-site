// src/pages/GovernmentContracting.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import { initAOS } from '../utils/aos';
import { AnalyticsIcon, ProfessionalIcon } from '../data/icons';

export default function GovernmentContracting() {
  useEffect(() => {
    document.title = 'Government Contracting | The Hillen Group';
    const cleanup = initAOS({ once: true, duration: 800, easing: 'ease-out-quart' });
    return cleanup;
  }, []);

  const quickFacts = [
    { label: 'UEI', value: 'Available upon request' },
    { label: 'CAGE', value: 'Pending' },
    { label: 'NAICS', value: 'Available upon request' },
    { label: 'Certifications', value: 'Minority certification in progress' },
  ];

  const capabilities = [
    {
      title: 'IT Support & Managed Services',
      desc: 'Service desk, endpoint support, systems administration, patching, and documented runbooks.',
    },
    {
      title: 'Cybersecurity & Compliance',
      desc: 'Security operations support, vulnerability management, policy/control mapping, and audit readiness.',
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Infrastructure automation, CI/CD, secure baselines, configuration management, and reliability improvements.',
    },
    {
      title: 'Software Development & Modernization',
      desc: 'Secure web apps, APIs, modernization, and delivery practices aligned to accessibility and compliance needs.',
    },
    {
      title: 'Technical Staffing & Augmentation',
      desc: 'Surge capacity and specialized roles delivered with disciplined onboarding, documentation, and reporting.',
    },
    {
      title: 'PMO & Delivery Governance',
      desc: 'Schedule control, risk management, change control, and quality assurance to keep delivery on track.',
    },
  ];

  const partnerAreas = [
    'SOC / SIEM engineering & monitoring',
    'Cloud engineering (AWS/Azure/GCP)',
    'Endpoint management & patching',
    'Network engineering & field services',
    'GRC, policy, and audit support',
    'Pen testing & red team services',
    'Helpdesk / deskside support',
  ];

  const faqs = [
    {
      q: 'Do you work as a prime or as a subcontractor?',
      a: 'Both. We pursue direct awards when qualified and also partner with primes as a delivery-focused subcontractor.',
    },
    {
      q: 'What size opportunities do you target?',
      a: 'We prioritize small business-friendly opportunities and task orders where speed, responsiveness, and delivery controls matter.',
    },
    {
      q: 'Do you have a capability statement?',
      a: 'Yes. Download it using the link above, or reach out through our contact form and we\'ll send it directly.',
    },
  ];

  return (
    <main className="bg-bg text-dark" id="main">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Government Contracting' }]} />

      <PageHero
        title="Government"
        accent="Contracting"
        description="We deliver secure, compliance-driven IT and cybersecurity solutions for federal and state missions—supporting direct awards and prime contractor partnerships with disciplined execution."
      />

      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          {/* ICP panels: Buyers vs. Prime Partners */}
          <div className="mb-8 grid gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-delay="60">
            <div className="group rounded-xl border bg-white p-5 flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg">
              <span
                className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700"
                aria-hidden
              >
                <AnalyticsIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Agency / Buyer Support</h3>
                <p className="mt-2 text-gray-700">
                  Procurement-friendly delivery with compliance and risk management: Section 508/WCAG alignment,
                  security by default, auditability, and clear documentation for stakeholders.
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
                <h3 className="text-lg font-semibold">Prime Partner Support</h3>
                <p className="mt-2 text-gray-700">
                  Reliable execution as a subcontractor: clear scoping, delivery governance, reporting cadence,
                  and technical depth across IT, cyber, and cloud.
                </p>
              </div>
            </div>
          </div>

          {/* Card shell that contains BOTH: Contracting Snapshot + Capability Statement */}
          <div
            className="mb-10 rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Contracting Snapshot (inside same card) */}
            <div>
              <h2 className="text-xl font-semibold">Contracting Snapshot</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {quickFacts.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-lg border border-teal-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
                  >
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="mt-1 font-semibold text-gray-900">{item.value}</p>
                    <span
                      className="mt-3 inline-block h-1 w-10 rounded-full bg-[#E6F7F8] transition-colors duration-300 group-hover:bg-teal-200"
                      aria-hidden
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider between snapshot and capability CTA */}
            <div className="my-7 border-t border-gray-200" />

            {/* Capability Statement (still its own section, same card shell) */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Capability Statement</h3>
                <p className="mt-1 text-gray-700">
                  A one-page overview for buyers and prime contractors.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/capability-statement.pdf"
                  className="inline-flex items-center justify-center rounded-[10px] border border-gray-300 bg-white px-5 py-2 text-dark font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Download PDF
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-[10px] bg-accent px-5 py-2 text-dark font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Discuss a Requirement
                </Link>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div data-aos="fade-up" data-aos-delay="120">
            <h2 className="text-xl font-semibold">Core Capabilities</h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-2">
              {capabilities.map((c, i) => (
                <li
                  key={c.title}
                  className="scroll-mt-48 group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
                >
                  <div className="flex gap-4 p-5" data-aos="fade-up" data-aos-delay={140 + i * 60}>
                    <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-teal-800">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{c.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Callout */}
          <div className="mt-12" data-aos="fade-up" data-aos-delay="160">
            <div className="rounded-xl border bg-white p-5 shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold">Subcontractor Partnerships</h2>
              <p className="mt-2 text-gray-700">
                We regularly team with qualified firms to deliver IT and cyber requirements. If your team specializes
                in the areas below, we’d like to connect.
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {partnerAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#00A9B7]" aria-hidden />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-[10px] bg-accent px-6 py-2 text-dark font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Teaming / Subcontracting Inquiry
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12" data-aos="fade-up" data-aos-delay="180">
            <h2 className="text-xl font-semibold">FAQ</h2>

            <div className="mt-4 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-xl border bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-accent/50 rounded">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pb-6" data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Ready to discuss an upcoming requirement?</h3>
                <p className="mt-1 text-gray-700">
                  We’ll respond quickly with capabilities, past performance highlights, and a practical delivery approach.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-[10px] bg-accent px-6 py-3 text-dark font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Contact
                </Link>
                <a
                  href="/capability-statement.pdf"
                  className="inline-flex items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 py-3 text-dark font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Capability Statement (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
