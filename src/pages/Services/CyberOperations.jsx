// src/pages/services/CyberOperations.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ------------------------------- Teal Icons ------------------------------- */
const iconCls = 'h-6 w-6';

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3l8 3v6a10 10 0 01-8 9 10 10 0 01-8-9V6l8-3z" />
    <path d="M9.5 12.5l1.8 1.8L15 10.5" />
  </svg>
);

const RadarIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m12.5-4.5l-2.5 2.5M8 16l2.5-2.5" />
  </svg>
);

const BugIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="7" y="7" width="10" height="10" rx="3" />
    <path d="M12 2v3M5 12H2m20 0h-3M6 6l-2-2m14 0l2-2M6 18l-2 2m14 0l2 2" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

const CloudLockIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 18h9.5a3.5 3.5 0 0 0 0-7h-.6A5.5 5.5 0 1 0 6 12" />
    <rect x="8" y="13" width="7" height="6" rx="1.5" />
    <path d="M10 13v-1a2 2 0 1 1 4 0v1" />
  </svg>
);

const IdIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="12" r="2" />
    <path d="M13 10h5M13 14h5" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 19a2 2 0 0 0 2 2h12" />
    <path d="M6 21V5a2 2 0 0 1 2-2h10v16" />
    <path d="M8 7h8" />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M9 4h6v3H9zM9 10h6M9 14h6" />
  </svg>
);

/* ------------------------------- Card Content ----------------------------- */
const cards = [
  {
    id: 'threat-monitoring',
    title: 'Threat Detection & Monitoring (SIEM/SOAR)',
    desc:
      'Engineering, tuning, and 24/7 monitoring of SIEM/SOAR pipelines for faster detection and automated response.',
    Icon: RadarIcon,
  },
  {
    id: 'incident-response',
    title: 'Incident Response & DFIR',
    desc:
      'On-call containment, investigation, and remediation. Post-incident reports, lessons learned, and hardening.',
    Icon: ShieldIcon,
  },
  {
    id: 'vuln-management',
    title: 'Vulnerability Management',
    desc:
      'Program design, scanning, prioritization, and remediation tracking across infra, apps, and dependencies.',
    Icon: BugIcon,
  },
  {
    id: 'pen-test',
    title: 'Penetration Testing & Red Team',
    desc:
      'Adversary emulation, web/mobile/API testing, social engineering, and purple-team exercises with coaching.',
    Icon: TargetIcon,
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & Compliance',
    desc:
      'Guardrails and assessments for AWS/Azure/GCP. FedRAMP, DoD IL, CMMC, NIST 800-53, SOC2—evidence automation.',
    Icon: CloudLockIcon,
  },
  {
    id: 'iam',
    title: 'Identity & Access Management',
    desc:
      'SSO, MFA, conditional access, least privilege, and zero-trust patterns across apps and cloud.',
    Icon: IdIcon,
  },
  {
    id: 'awareness',
    title: 'Security Awareness & Phishing Sims',
    desc:
      'Role-based training, phishing simulations, and metrics to measurably raise security posture across teams.',
    Icon: BookIcon,
  },
  {
    id: 'grc',
    title: 'Risk, Governance & DevSecOps (ATO)',
    desc:
      'Policy, risk registers, and continuous ATO. Embed SAST/DAST/IAST, SBOMs, and signed builds in CI/CD.',
    Icon: ClipboardIcon,
  },
];

/* ---------------------------------- Page ---------------------------------- */
export default function CyberOperations() {
  useEffect(() => {
    document.title = 'Cyber Operations | The Hillen Group';
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
              Cyber <span className="text-accent">Operations</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              Proactive defense, rapid response, and baked-in security—from readiness to recovery, aligned to your mission and compliance needs.
            </p>
          </header>
        </div>
      </section>

      {/* Cards – same styling/behavior as Services/WebApps */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <ul
          className="grid gap-5 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {cards.map(({ id, title, desc, Icon }, i) => (
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
