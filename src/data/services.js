// src/data/services.js
import { ICONS_CMP as I } from './icons';

const {
  web,          // Web/Software Services
  shield,       // Cyber Operations
  briefcase,    // Enterprise Operations
  analytics,    // Data Analytics
  professional, // Professional Services
  planning,     // Project Planning & Discovery
} = I;

/**
 * Cards for /services
 * Each item: { id, title, desc, Icon, href? }
 */
const services = [
  {
    id: 'web-software-services',
    title: 'Web/Software Services',
    desc:
      'End-to-end product delivery: discovery, modern React/Node stacks, REST/GraphQL APIs, integrations, automated testing, CI/CD, accessibility, and performance at scale.',
    Icon: web,
    href: '/services/web-software-services',
  },
  {
    id: 'cyber-operations',
    title: 'Cyber Operations',
    desc:
      'Threat detection & monitoring (SIEM/SOAR), incident response & DFIR, vulnerability management, and cloud compliance.',
    Icon: shield,
    href: '/services/cyber-operations',
  },
  {
    id: 'enterprise-operations',
    title: 'Enterprise Operations',
    desc:
      'Portfolio & PMO, ITSM, data/analytics, compliance, vendor management, and FinOps—governance and scale for mission-critical delivery.',
    Icon: briefcase,
    href: '/services/enterprise-operations',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    desc:
      'Data engineering & ELT, warehouses/lakes, BI dashboards, and ML/AI—turn data into decisions with governance and quality.',
    Icon: analytics,
    href: '/services/data-analytics',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    desc:
      'Staff augmentation, managed services, and expert advisory across product, security, cloud, and delivery.',
    Icon: professional,
    href: '/services/professional-services',
  },
  {
    id: 'planning',
    title: 'Project Planning & Discovery',
    desc:
      'Roadmaps, technical spikes, backlog grooming, and delivery plans informed by risk and business value.',
    Icon: planning,
    href: '/services/project-planning',
  },
];

export default services;
