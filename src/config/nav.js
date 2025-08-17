// src/config/nav.js
export const NAV = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    type: 'mega',
    cols: [
      { title: 'Web Apps', desc: 'React, Node, APIs, auth, dashboards.', to: '/services#web-apps' },
      { title: 'Mobile', desc: 'React Native iOS/Android builds.', to: '/services#mobile' },
      { title: 'Design', desc: 'UX/UI, prototyping, design systems.', to: '/services#ux' },
      { title: 'Cloud & DevOps', desc: 'CI/CD, containers, infra.', to: '/services#cloud' },
      { title: 'Maintenance', desc: 'Support, uptime, security.', to: '/services#maintenance' },
      { title: 'Planning', desc: 'Discovery, roadmaps, delivery.', to: '/services#planning' },
    ],
  },
  {
    label: 'Industries',
    type: 'mega',
    cols: [
      { title: 'Federal Health', desc: 'HHS, CMS, NIH, CDC.', to: '/industries#health' },
      { title: 'Defense', desc: 'DoD, DISA, USAF.', to: '/industries#defense' },
      { title: 'Civilian', desc: 'DOT, DHS, USDA.', to: '/industries#civilian' },
      { title: 'State & Local', desc: 'Agencies & cities.', to: '/industries#state' },
      { title: 'Research', desc: 'Evaluation & analytics.', to: '/industries#research' },
      { title: 'Space', desc: 'NASA & partners.', to: '/industries#space' },
    ],
  },
  {
    label: 'Resources',
    type: 'menu',
    items: [
      { label: 'News', to: '/news' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Downloads', to: '/downloads' },
      { label: 'Capabilities PDF', href: '/docs/capabilities.pdf', external: true },
    ],
  },
  {
    label: 'Company',
    type: 'menu',
    items: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
      { label: 'Login', to: '/login' },
    ],
  },
];
