// src/data/services.js
// Service cards for the /services page.
// icon keys map to src/data/icons.js (ICONS / ICONS_CMP)

const SERVICES = [
  {
    id: 'web-software-services',
    title: 'Web/Software Services',
    desc:
      'End-to-end product delivery: discovery, modern React/Node stacks, REST/GraphQL APIs, integrations, automated testing, CI/CD, accessibility, and performance at scale.',
    icon: 'web',
    href: '/services/web-software-services',
  },
  {
    id: 'cyber-operations',
    title: 'Cyber Operations',
    desc:
      'Threat detection & monitoring (SIEM/SOAR), incident response & DFIR, vuln management, and cloud compliance.',
    icon: 'shield',
    href: '/services/cyber-operations',
  },
  {
    id: 'enterprise-operations',
    title: 'Enterprise Operations',
    desc:
      'Portfolio & PMO, ITSM, data/analytics, compliance, vendor management, and FinOps—governance and scale for mission-critical delivery.',
    icon: 'briefcase',
    href: '/services/enterprise-operations',
  },
  // Replaced Cloud & DevOps → Data Analytics
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    desc:
      'Data engineering & ELT, warehouses/lakes, BI dashboards, and ML/AI—turn data into decisions with governance and quality.',
    icon: 'analytics',
  },
  // Replaced Website Maintenance → Professional Services
  {
    id: 'professional-services',
    title: 'Professional Services',
    desc:
      'Solution architects, delivery leads, SMEs, and staff augmentation to accelerate outcomes and de-risk delivery.',
    icon: 'professional',
  },
  {
    id: 'planning',
    title: 'Project Planning & Discovery',
    desc:
      'Roadmaps, technical spikes, grooming, and delivery plans informed by risk and business value.',
    icon: 'planning',
  },
];

export default SERVICES;
