// src/data/services/projectPlanning.js
import { ICONS_CMP as I } from '../icons';

const {
  clipboard,     // Discovery & Requirements
  planning,      // Roadmapping & OKRs
  layers,        // Backlog & Prioritization
  shieldCheck,   // Risk & Dependency Management
  analytics,     // Delivery Planning & Estimation
  briefcase,     // Change & Release Governance
} = I;

const cards = [
  {
    id: 'discovery',
    title: 'Discovery & Requirements',
    desc:
      'Mission and stakeholder interviews, service blueprints, and actionable requirements that de-risk delivery.',
    Icon: clipboard,
  },
  {
    id: 'roadmapping',
    title: 'Roadmapping & OKRs',
    desc:
      'Value-aligned roadmaps and measurable outcomes; define milestones, dependencies, and investment tiers.',
    Icon: planning,
  },
  {
    id: 'backlog',
    title: 'Backlog & Prioritization',
    desc:
      'Epic and story breakdown, prioritization frameworks (RICE/WSJF), and definition of ready/done.',
    Icon: layers,
  },
  {
    id: 'risk',
    title: 'Risk & Dependency Management',
    desc:
      'Risk registers, mitigation plans, and cross-team dependency orchestration for predictable releases.',
    Icon: shieldCheck,
  },
  {
    id: 'delivery',
    title: 'Delivery Planning & Estimation',
    desc:
      'Capacity and throughput modeling, estimation workshops, and release planning with clear acceptance gates.',
    Icon: analytics,
  },
  {
    id: 'governance',
    title: 'Change & Release Governance',
    desc:
      'CAB processes, vendor coordination, and auditable change controls that fit your operating model.',
    Icon: briefcase,
  },
];

export default cards;
