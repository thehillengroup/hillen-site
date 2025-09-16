// src/data/portfolio/details.js
// Single source of truth for portfolio detail pages

const DETAILS = {
  'civicconnect-portal': {
    title: 'CivicConnect',
    accent: 'Portal',
    description:
      'Responsive public service portal for community announcements, services, and status updates.',
    imageSrc: '/images/projects/layout-preview2.png',
    imageAlt: 'CivicConnect Portal screens shown across desktop, tablet, and laptop',
    figureCaption: 'Multi‑device responsive mockup',
    summary:
      'CivicConnect is a modern web portal that helps agencies publish timely information to residents and stakeholders. We designed the experience for clarity and speed, and built an accessible front‑end that works across devices and bandwidth conditions.',
    highlights: [
      'Responsive UI (desktop, tablet, mobile) with fast first‑load.',
      'Content publishing workflow with role‑based permissions.',
      'Search, alerts, and service directory with filterable categories.',
      'WCAG 2.2 AA conformance, keyboard navigation, and high contrast support.',
      'Analytics instrumentation and uptime monitoring.',
    ],
    stack: [
      'React SPA front‑end; Node API integration; CI/CD with automated checks.',
      'Image optimization and lazy‑loading for strong performance on mobile.',
    ],
  },
  'skyline-ventures': {
    title: 'Skyline',
    accent: 'Ventures',
    description:
      'Corporate website redesign—modern brand system, performance, and SEO improvements.',
    imageSrc: '/images/projects/layout-preview1.png',
    imageAlt: 'Skyline Ventures website shown across devices',
    figureCaption: 'Responsive mockup for Skyline Ventures',
    summary:
      'We refreshed the Skyline Ventures web presence with a modern design system, clear content hierarchy, and SEO best practices. The new site loads quickly and scales cleanly from mobile to desktop.',
    highlights: [
      'Design system and component library aligned to brand goals.',
      'Improved Lighthouse metrics (LCP, CLS) and Core Web Vitals.',
      'Structured metadata and sitemap for discoverability.',
    ],
    stack: [],
  },
  'hillen-internal-dashboard': {
    title: 'Internal',
    accent: 'Dashboard',
    description:
      'Role‑based analytics dashboard with charts, widgets, and responsive layout for internal teams.',
    imageSrc: '/images/projects/layout-preview3.png',
    imageAlt: 'Hillen internal dashboard mockup',
    figureCaption: 'Dashboard mockup',
    summary:
      'We designed and built a modular dashboard that aggregates operational metrics for leadership and functional teams. Users see role‑appropriate widgets with drill‑downs and export options.',
    highlights: [
      'Role‑based access to charts, tables, and KPIs.',
      'Widget system: add, remove, and reorder modules per team.',
      'Accessible UI and keyboard navigation.',
    ],
    stack: [],
  },
  'stonepro-ecommerce': {
    title: 'StonePro',
    accent: 'E‑Commerce',
    description:
      'Modern storefront experience with product education, search, and guided checkout.',
    imageSrc: '/images/projects/layout-preview4.png',
    imageAlt: 'StonePro storefront mockup',
    figureCaption: 'Responsive storefront mockup',
    summary:
      'We redesigned the StonePro e‑commerce site to showcase products with clear education, comparisons, and content that helps customers choose with confidence. The experience is optimized for speed and conversion.',
    highlights: [
      'Facet search, product comparisons, and education content.',
      'Accessible components and keyboard‑friendly flows.',
      'Improved Core Web Vitals and SEO for long‑tail queries.',
    ],
    stack: ['React front‑end, API integration, CI/CD; image optimization and caching.'],
  },
  'research-insights': {
    title: 'Research',
    accent: 'Insights',
    description: 'Data publishing portal with dashboards and downloadable reports for stakeholders.',
    imageSrc: '/images/projects/layout-preview5.png',
    imageAlt: 'Clean workstation with large monitor and keyboard',
    figureCaption: 'Dashboards and reports',
    summary:
      'A public portal for sharing research results and program outcomes. The site provides interactive dashboards and downloadable reports with strong accessibility and performance.',
    highlights: [
      'Interactive dashboards with drill‑downs and filters.',
      'Accessible charts and keyboard navigation.',
      'Exportable datasets and report PDFs.',
    ],
    stack: ['React front‑end, analytics integration, static export for uptime and speed.'],
  },
  'field-ops-mobile': {
    title: 'Field Ops',
    accent: 'Mobile',
    description: 'Mobile‑first field operations app with offline capture and secure sync.',
    imageSrc: '/images/projects/layout-preview6.png',
    imageAlt: 'Mobile app UI for field operations with offline sync',
    figureCaption: 'Mobile‑first workflows',
    summary:
      'We delivered a mobile‑first app for field staff to capture data offline and sync securely when back online. The UI prioritizes clarity and speed for field conditions.',
    highlights: [
      'Offline‑first data capture and conflict resolution.',
      'Secure authentication and encryption in transit.',
      'Optimized for low‑bandwidth and high latency environments.',
    ],
    stack: ['React, service workers, secure API integration, automated testing and CI.'],
  },
};

export default DETAILS;
