// src/data/services/professionalServices.js
import { ICONS_CMP as I } from '../icons';

const {
  briefcase,      // Staff Augmentation
  clipboard,      // Advisory / Governance
  headset,        // Managed Services / ITSM
  book,           // Training & Enablement
  shield,         // QA / Accessibility / Compliance
  planning,       // Change & Release Mgmt
} = I;

const cards = [
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    desc:
      'Specialized engineers, designers, analysts, and PMs to extend your team—remote or on-site, short or long term.',
    Icon: briefcase,
  },
  {
    id: 'advisory',
    title: 'Advisory & Governance',
    desc:
      'Architecture reviews, security & compliance guidance, delivery coaching, and executive-ready roadmaps.',
    Icon: clipboard,
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    desc:
      'Operations for applications, cloud, and security with SLAs, observability, cost controls, and regular reporting.',
    Icon: headset,
  },
  {
    id: 'training-enable',
    title: 'Training & Enablement',
    desc:
      'Workshops, playbooks, and pairing to uplift teams across product, DevSecOps, and analytics.',
    Icon: book,
  },
  {
    id: 'quality-assurance',
    title: 'QA, Accessibility & Compliance',
    desc:
      'Automated testing, 508/WCAG assurance, performance testing, and readiness for audits and ATOs.',
    Icon: shield,
  },
  {
    id: 'change-management',
    title: 'Change & Release Management',
    desc:
      'Governance, vendor coordination, and risk-aware release processes aligned to your operating model.',
    Icon: planning,
  },
];

export default cards;
