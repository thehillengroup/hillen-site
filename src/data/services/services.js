// src/data/services/services.js
import {
  WebIcon,
  ShieldIcon,
  BriefcaseIcon,
  AnalyticsIcon,
  ProfessionalIcon,
  PlanningIcon,
} from '../icons';

const services = [
  {
    id: 'web-software-services',
    title: 'Web/Software Services',
    desc:
      'End-to-end product delivery: discovery, modern React/Node stacks, REST/GraphQL APIs, integrations, automated testing, CI/CD, accessibility, and performance at scale.',
    Icon: WebIcon,
    href: '/services/web-software-services',
  },
  {
    id: 'cyber-operations',
    title: 'Cyber Operations',
    desc:
      'Threat detection & monitoring (SIEM/SOAR), incident response & DFIR, vulnerability management, and cloud compliance.',
    Icon: ShieldIcon,
    href: '/services/cyber-operations',
  },
  {
    id: 'enterprise-operations',
    title: 'Enterprise Operations',
    desc:
      'Portfolio & PMO, ITSM, data/analytics, compliance, vendor management, and FinOps—governance and scale for mission-critical delivery.',
    Icon: BriefcaseIcon,
    href: '/services/enterprise-operations',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    desc:
      'Warehousing and lakes, BI dashboards, ML/AI enablement, governance/quality, and real-time streaming.',
    Icon: AnalyticsIcon,
    href: '/services/data-analytics', // ← wired to the new page
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    desc:
      'Staff augmentation, managed services, and expert advisory across product, security, cloud, and delivery.',
    Icon: ProfessionalIcon,
  },
  {
    id: 'planning',
    title: 'Project Planning & Discovery',
    desc:
      'Roadmaps, technical spikes, backlog grooming, and delivery plans informed by risk and business value.',
    Icon: PlanningIcon,
  },
];

export default services;
