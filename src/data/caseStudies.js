// src/data/caseStudies.js
export const CASE_STUDIES = [
  {
    slug: 'federal-health-analytics',
    title: 'Modernizing Federal Health Analytics',
    client: 'HHS / CMS (mock)',
    sector: 'Federal Health',
    timeframe: '2024',
    summary:
      'Designed and delivered a modular analytics platform with secure data pipelines and role-based dashboards.',
    outcomes: [
      'Cut monthly report cycle time by 72%',
      'FedRAMP-ready security patterns & auditing',
      'Self-serve dashboards for 1,200+ users'
    ],
    tags: ['React', 'Node', 'ETL', 'Postgres', 'Auth0', 'FedRAMP'],
    hero: '/images/case-studies/health-analytics.jpg'
  },
  {
    slug: 'defense-mission-readiness',
    title: 'Mission Readiness Portal',
    client: 'DoD (mock)',
    sector: 'Defense',
    timeframe: '2023',
    summary:
      'Built a resilient portal aggregating logistics & readiness metrics across multiple commands.',
    outcomes: [
      '99.95% availability across CONUS & OCONUS',
      'Role-based access with CAC integration',
      'Containerized CI/CD and blue/green deploys'
    ],
    tags: ['React', 'Kubernetes', 'Keycloak', 'CI/CD', 'Grafana'],
    hero: '/images/case-studies/mission-readiness.jpg'
  },
  {
    slug: 'civilian-digital-services',
    title: 'Digital Services for Public Access',
    client: 'DOT (mock)',
    sector: 'Civilian',
    timeframe: '2022',
    summary:
      'Replatformed an aging public service site with ADA-compliant design and multilingual content.',
    outcomes: [
      'WCAG 2.2 AA compliance verified',
      'Page load improved from 4.8s → 1.2s',
      'Reduced hosting costs by 38%'
    ],
    tags: ['WCAG 2.2', 'i18n', 'Performance', 'SSR'],
    hero: '/images/case-studies/digital-services.jpg'
  }
];
