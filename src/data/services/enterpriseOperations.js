// src/data/services/enterpriseOperations.js
import {
  LayersIcon,
  LifebuoyIcon,   // used for ITSM / support
  ClipboardIcon,
  IdIcon,
  BriefcaseIcon,
} from '../icons';

// Cards used by the Enterprise Operations page
const cards = [
  {
    id: 'pmo',
    title: 'Portfolio & PMO',
    desc:
      'Roadmaps, governance, delivery health, and benefits tracking across programs and projects.',
    Icon: LayersIcon,
  },
  {
    id: 'itsm',
    title: 'IT Service Management',
    desc:
      'Service desk, incident/change, SLAs, problem management, and knowledge—measured and improved.',
    Icon: LifebuoyIcon,
  },
  {
    id: 'compliance',
    title: 'Compliance & Risk',
    desc:
      'Policies, controls, audits, and continuous assurance aligned to standards and regulations.',
    Icon: ClipboardIcon,
  },
  {
    id: 'identity',
    title: 'Identity & Access',
    desc:
      'Joiner/mover/leaver, RBAC, least privilege, and periodic access reviews across the estate.',
    Icon: IdIcon,
  },
  {
    id: 'vendors',
    title: 'Vendor Management',
    desc:
      'Sourcing, SLAs, risk, and performance across partners and platforms—governance that scales.',
    Icon: BriefcaseIcon,
  },
];

export default cards;
