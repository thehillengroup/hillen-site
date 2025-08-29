// src/data/industries.js
// Data-only; icons are referenced by key and rendered in the page.
const INDUSTRIES = [
  {
    id: 'health',
    title: 'Federal Health',
    tagline: 'HHS • CMS • NIH • CDC',
    icon: 'health',
    summary:
      'Modern data platforms, patient-facing apps, and ATO-ready systems supporting mission outcomes across federal health agencies.',
    capabilities: [
      'FHIR/HL7 APIs & interoperability',
      'Data engineering & analytics (PHI aware)',
      'Human-centered service design (HCD)',
      'Compliance: 508, Privacy, ATO packages',
    ],
    services: [
      { label: 'Web/Software Services', href: '/services#web-software-services' },
      { label: 'Enterprise Operations', href: '/services#enterprise-operations' },
      { label: 'Cloud & DevOps', href: '/services#cloud' },
    ],
  },
  {
    id: 'defense',
    title: 'Defense',
    tagline: 'DoD • DISA • USAF',
    icon: 'defense',
    summary:
      'Secure software delivery aligned to DoD enterprise requirements, with pipelines and IaC designed for controlled environments.',
    capabilities: [
      'DevSecOps & hardened CI/CD',
      'Containerization & K8s on DoD platforms',
      'Secure software supply chain (SBOM, SLSA)',
      'NIST 800-171/CMMC alignment',
    ],
    services: [
      { label: 'Cloud & DevOps', href: '/services#cloud' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
      { label: 'Discovery & Planning', href: '/services#planning' },
    ],
  },
  {
    id: 'civilian',
    title: 'Civilian',
    tagline: 'DOT • DHS • USDA',
    icon: 'civilian',
    summary:
      'Public-facing digital services and internal systems for high-availability, accessibility, and measurable impact.',
    capabilities: [
      'Service blueprints & content strategy',
      'Performance, monitoring, and SLOs',
      'API-first modernization',
      'Section 508/WCAG 2.2 AA assurance',
    ],
    services: [
      { label: 'Web/Software Services', href: '/services#web-software-services' },
      { label: 'Enterprise Operations', href: '/services#enterprise-operations' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
    ],
  },
  {
    id: 'state',
    title: 'State & Local',
    tagline: 'Agencies & municipalities',
    icon: 'state',
    summary:
      'Rapid modernization with pragmatic security and cost-effective hosting options tailored to state and local needs.',
    capabilities: [
      'Grants/benefits portals',
      'Low-latency hosting & CDN strategy',
      'Open data & transparency dashboards',
      'Procurement-ready documentation',
    ],
    services: [
      { label: 'Discovery & Planning', href: '/services#planning' },
      { label: 'Web/Software Services', href: '/services#web-software-services' },
      { label: 'Cloud & DevOps', href: '/services#cloud' },
    ],
  },
  {
    id: 'research',
    title: 'Research & Evaluation',
    tagline: 'Program measurement & insights',
    icon: 'research',
    summary:
      'Design of instruments, data collection, and reproducible analytics to evaluate program effectiveness at scale.',
    capabilities: [
      'Survey design & data pipelines',
      'Reproducible analytics (R/Python)',
      'Data governance & quality',
      'Visualization & reporting portals',
    ],
    services: [
      { label: 'Web/Software Services', href: '/services#web-software-services' },
      { label: 'Enterprise Operations', href: '/services#enterprise-operations' },
      { label: 'Cloud & DevOps', href: '/services#cloud' },
    ],
  },
  {
    id: 'space',
    title: 'Space',
    tagline: 'NASA & partners',
    icon: 'space',
    summary:
      'Mission support with telemetry processing, data products, and visualizations for scientists and operations teams.',
    capabilities: [
      'Stream processing & eventing',
      'Scientific data stores',
      'High-fidelity visualizations',
      'Edge to cloud data movement',
    ],
    services: [
      { label: 'Cloud & DevOps', href: '/services#cloud' },
      { label: 'Web/Software Services', href: '/services#web-software-services' },
      { label: 'Maintenance & Support', href: '/services#maintenance' },
    ],
  },
];

export default INDUSTRIES;
