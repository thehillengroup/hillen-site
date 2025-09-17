// src/config/nav.js
export const SHOW_LOGIN = false; // flip to true when you want Login back

const companyItems = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

// Only add Login if explicitly enabled
if (SHOW_LOGIN) {
  companyItems.push({ label: 'Login', to: '/login' });
}

export const NAV = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
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
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Capabilities', to: '/capabilities' },
    ],
  },
  {
    label: 'Company',
    type: 'menu',
    items: companyItems,
  },
];
