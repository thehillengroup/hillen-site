import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* -------------------------------------------------------------------------- */
/*   Icons – teal chip treatment (matches WebApps & CyberOperations pages)     */
/* -------------------------------------------------------------------------- */
const iconCls = 'h-6 w-6';

const LayersIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M21 13l-9 5-9-5" />
    <path d="M21 17l-9 5-9-5" />
  </svg>
));

const BriefcaseIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
  </svg>
));

const HeadsetIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M4 12a8 8 0 0116 0v6a2 2 0 01-2 2h-2" />
    <rect x="3" y="11" width="4" height="6" rx="1.5" />
    <rect x="17" y="11" width="4" height="6" rx="1.5" />
    <path d="M14 20h-4" />
  </svg>
));

const DatabaseIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
));

const ShieldCheckIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M12 3l8 3v6a10 10 0 01-8 9 10 10 0 01-8-9V6l8-3z" />
    <path d="M9.5 12.5l1.8 1.8L15 10.5" />
  </svg>
));

const LifebuoyIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M5.6 5.6l3 3M18.4 5.6l-3 3M18.4 18.4l-3-3M5.6 18.4l3-3" />
  </svg>
));

const ContractIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <rect x="4" y="3" width="14" height="18" rx="2" />
    <path d="M8 8h6M8 12h6M8 16h4" />
    <path d="M18 14l2 2-4 4h-2v-2l4-4z" />
  </svg>
));

const CloudDollarIcon = React.memo(() => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M6 18h10.5a3.5 3.5 0 0 0 0-7h-.6A5.5 5.5 0 1 0 6 12" />
    <path d="M12 13v5M10.5 14.5a1.5 1.5 0 003 0c0-.8-.7-1.2-1.5-1.5S10.5 12.8 10.5 12a1.5 1.5 0 013 0" />
  </svg>
));

/* --------------------------------- Data ---------------------------------- */
const cards = [
  {
    id: 'enterprise-architecture',
    title: 'Enterprise Architecture & Roadmaps',
    desc:
      'Business-aligned reference architectures, capability maps, and target-state roadmaps to guide investment and delivery.',
    Icon: LayersIcon,
  },
  {
    id: 'pmo',
    title: 'Program & Portfolio Management (PMO)',
    desc:
      'Governance, prioritization, and transparent reporting—align budget, risk, and outcomes across initiatives.',
    Icon: BriefcaseIcon,
  },
  {
    id: 'itsm',
    title: 'ITSM & Service Desk (ITIL)',
    desc:
      'Incident, request, change, and problem management with SLAs, runbooks, and knowledge-centered support.',
    Icon: HeadsetIcon,
  },
  {
    id: 'data-analytics',
    title: 'Data Platform & Analytics',
    desc:
      'Modern data pipelines and BI dashboards with lineage and governance for trustworthy, timely decisions.',
    Icon: DatabaseIcon,
  },
  {
    id: 'compliance',
    title: 'Compliance, Risk & Audits',
    desc:
      'SOX, SOC 2, ISO 27001—controls, evidence automation, and audit readiness embedded into operations.',
    Icon: ShieldCheckIcon,
  },
  {
    id: 'bcd',
    title: 'Business Continuity & Disaster Recovery',
    desc:
      'Impact analysis, RTO/RPO targets, tabletop exercises, and automated backups to keep the mission online.',
    Icon: LifebuoyIcon,
  },
  {
    id: 'vendor-management',
    title: 'Vendor & Contract Management',
    desc:
      'Sourcing, evaluations, SLAs, and vendor risk—maximize value while reducing surprises and lock-in.',
    Icon: ContractIcon,
  },
  {
    id: 'finops',
    title: 'FinOps & Cost Optimization',
    desc:
      'Cloud spend visibility, budgets, and guardrails—rightsizing, reservations, and showback/chargeback.',
    Icon: CloudDollarIcon,
  },
];

/* ---------------------------------- Page ---------------------------------- */
export default function EnterpriseOperations() {
  useEffect(() => {
    document.title = 'Enterprise Operations | The Hillen Group';
    AOS.init({
      once: true,
      duration: 750,
      easing: 'ease-out-quart',
      // Respect users who prefer reduced motion
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <main className="bg-bg text-dark">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/70 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-6" aria-labelledby="services-title">
          <header className="text-center" data-aos="fade-up">
            <h1 id="services-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enterprise <span className="text-accent">Operations</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              Strategy, governance, and mission-scale delivery—from portfolio to platform—so teams ship faster with less risk.
            </p>
          </header>
        </div>
      </section>

      {/* Cards – same styling/behavior as Services/WebApps/CyberOps */}
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
