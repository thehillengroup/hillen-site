// src/data/services/enterpriseOperations.js
// Data only: use `icon` keys and map to components in the page.
const enterpriseOperations = [
  {
    id: 'enterprise-architecture',
    title: 'Enterprise Architecture & Roadmaps',
    desc:
      'Business-aligned reference architectures, capability maps, and target-state roadmaps to guide investment and delivery.',
    icon: 'LayersIcon',
  },
  {
    id: 'pmo',
    title: 'Program & Portfolio Management (PMO)',
    desc:
      'Governance, prioritization, and transparent reporting—align budget, risk, and outcomes across initiatives.',
    icon: 'BriefcaseIcon',
  },
  {
    id: 'itsm',
    title: 'ITSM & Service Desk (ITIL)',
    desc:
      'Incident, request, change, and problem management with SLAs, runbooks, and knowledge-centered support.',
    icon: 'HeadsetIcon',
  },
  {
    id: 'data-analytics',
    title: 'Data Platform & Analytics',
    desc:
      'Modern data pipelines and BI dashboards with lineage and governance for trustworthy, timely decisions.',
    icon: 'DatabaseIcon',
  },
  {
    id: 'compliance',
    title: 'Compliance, Risk & Audits',
    desc:
      'SOX, SOC 2, ISO 27001—controls, evidence automation, and audit readiness embedded into operations.',
    icon: 'ShieldCheckIcon',
  },
  {
    id: 'bcd',
    title: 'Business Continuity & Disaster Recovery',
    desc:
      'Impact analysis, RTO/RPO targets, tabletop exercises, and automated backups to keep the mission online.',
    icon: 'LifebuoyIcon',
  },
  {
    id: 'vendor-management',
    title: 'Vendor & Contract Management',
    desc:
      'Sourcing, evaluations, SLAs, and vendor risk—maximize value while reducing surprises and lock-in.',
    icon: 'ContractIcon',
  },
  {
    id: 'finops',
    title: 'FinOps & Cost Optimization',
    desc:
      'Cloud spend visibility, budgets, and guardrails—rightsizing, reservations, and showback/chargeback.',
    icon: 'CloudDollarIcon',
  },
];

export default enterpriseOperations;
