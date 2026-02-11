// src/components/Layout.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';
import PrintBrand from './PrintBrand';

const ROUTE_META = [
  {
    test: (p) => p === '/' || p === '/home',
    title: 'Home',
    description: 'Strategic solutions. Delivered. Discover how The Hillen Group can elevate your mission.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/about'),
    title: 'About',
    description: 'Mission-driven team delivering measurable outcomes for public and private sector clients.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/services'),
    title: 'Services',
    description: 'Web apps, mobile, UX, cloud & DevOps, maintenance, and delivery planning.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/portfolio'),
    title: 'Portfolio',
    description: 'Selected projects and case studies—problems solved, results delivered.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/industries'),
    title: 'Industries',
    description: 'Federal health, defense, civilian, state/local, research, and space.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/careers'),
    title: 'Careers',
    description: 'Grow your impact—explore open roles and join our team.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/apply'),
    title: 'Apply',
    description: 'Apply now—upload your resume and tell us about your experience.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/contact'),
    title: 'Contact',
    description: 'Let’s talk about your goals—get in touch with The Hillen Group.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/case-studies'),
    title: 'Case Studies',
    description: 'Client outcomes and examples of our work across missions and industries.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/capabilities'),
    title: 'Capabilities',
    description: 'Core competencies, differentiators, and example outcomes.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/privacy'),
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your information.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/terms'),
    title: 'Terms of Service',
    description: 'The terms that govern use of our website and services.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/accessibility'),
    title: 'Accessibility (508)',
    description: 'Our commitment to accessible, inclusive experiences.',
    noindex: false,
  },
  {
    test: (p) => p.startsWith('/sitemap'),
    title: 'Sitemap',
    description: 'All pages and sections of The Hillen Group site.',
    noindex: false,
  },
  // Intentionally noindex (utility/internal-ish)
  {
    test: (p) => p.startsWith('/contracting'),
    title: 'Contracting',
    description: 'Gov contracting information and capabilities.',
    noindex: true,
  },
  {
    test: (p) => p.startsWith('/500'),
    title: 'Server Error',
    description: 'Something went wrong. Please try again.',
    noindex: true,
  },

  // Fallback: treat unknown paths (including 404) as noindex
  {
    test: () => true,
    title: 'The Hillen Group',
    description: 'Strategic solutions. Delivered.',
    noindex: true,
  },
];

function pickMeta(pathname) {
  return ROUTE_META.find((r) => r.test(pathname)) || ROUTE_META[ROUTE_META.length - 1];
}

export default function Layout({ seo }) {
  const location = useLocation();
  const defaults = pickMeta(location.pathname);

  const routeKey =
    location.pathname === '/' || location.pathname === '/home'
      ? 'home'
      : (location.pathname.split('/')[1] || 'root');

  const canonical =
    seo?.canonical ??
    (typeof window !== 'undefined'
      ? `${window.location.origin}${location.pathname}${location.search || ''}`
      : undefined);

  const meta = {
    title: seo?.title ?? defaults.title,
    description: seo?.description ?? defaults.description,
    canonical,
    noindex: typeof seo?.noindex === 'boolean' ? seo.noindex : defaults.noindex,
    ogImage: seo?.ogImage,
  };

  // ----- GLOBAL: ensure AOS content prints (prevents blank pages) -----
  useEffect(() => {
    const forceShowAOS = () => {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.add('aos-animate');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.animation = 'none';
      });
    };

    window.addEventListener('beforeprint', forceShowAOS);

    const mq = window.matchMedia ? window.matchMedia('print') : null;
    const mqHandler = (e) => {
      if (e.matches) forceShowAOS();
    };

    if (mq) {
      if (mq.addEventListener) mq.addEventListener('change', mqHandler);
      else if (mq.addListener) mq.addListener(mqHandler); // Safari/old
    }

    return () => {
      window.removeEventListener('beforeprint', forceShowAOS);
      if (mq) {
        if (mq.removeEventListener) mq.removeEventListener('change', mqHandler);
        else if (mq.removeListener) mq.removeListener(mqHandler);
      }
    };
  }, []);
  // -------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-bg text-dark flex flex-col" data-route={routeKey}>
      {/* SEO tags */}
      <Seo {...meta} />

      {/* Print-only brand header */}
      <PrintBrand />

      {/* a11y skip link */}
      <a
        href="#main"
        className="
          sr-only focus:not-sr-only focus:fixed
          focus:top-4 focus:left-4 focus:z-[9999]
          rounded-[10px]
          bg-accent text-dark
          px-6 py-2.5
          font-semibold
          shadow-md
          focus:outline-none focus:ring-2 focus:ring-white/60
        "
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" role="main" tabIndex={-1} className="flex-1 scroll-mt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
