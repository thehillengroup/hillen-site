// src/components/Layout.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';
import PrintBrand from './PrintBrand';

const ROUTE_META = [
  { test: (p) => p === '/', title: 'Home', description: 'Strategic solutions. Delivered. Discover how The Hillen Group can elevate your mission.' },
  { test: (p) => p.startsWith('/about'), title: 'About', description: 'Mission-driven team delivering measurable outcomes for public and private sector clients.' },
  { test: (p) => p.startsWith('/services'), title: 'Services', description: 'Web apps, mobile, UX, cloud & DevOps, maintenance, and delivery planning.' },
  { test: (p) => p.startsWith('/portfolio'), title: 'Portfolio', description: 'Selected projects and case studies—problems solved, results delivered.' },
  { test: (p) => p.startsWith('/industries'), title: 'Industries', description: 'Federal health, defense, civilian, state/local, research, and space.' },
  { test: (p) => p.startsWith('/careers'), title: 'Careers', description: 'Grow your impact—explore open roles and join our team.' },
  { test: (p) => p.startsWith('/apply'), title: 'Apply', description: 'Apply now—upload your resume and tell us about your experience.' },
  { test: (p) => p.startsWith('/contact'), title: 'Contact', description: 'Let’s talk about your goals—get in touch with The Hillen Group.' },
  { test: (p) => p.startsWith('/privacy'), title: 'Privacy Policy', description: 'How we collect, use, and protect your information.' },
  { test: (p) => p.startsWith('/terms'), title: 'Terms of Service', description: 'The terms that govern use of our website and services.' },
  { test: (p) => p.startsWith('/accessibility'), title: 'Accessibility (508)', description: 'Our commitment to accessible, inclusive experiences.' },
  { test: (p) => p.startsWith('/capabilities'), title: 'Capabilities', description: 'Core competencies, differentiators, past performance, and contact.' },
  { test: (p) => p.startsWith('/sitemap'), title: 'Sitemap', description: 'All pages and sections of The Hillen Group site.' },
  { test: () => true, title: 'The Hillen Group', description: 'Strategic solutions. Delivered.' }, // fallback
];

function pickMeta(pathname) {
  const match = ROUTE_META.find((r) => r.test(pathname));
  return match || ROUTE_META[ROUTE_META.length - 1];
}

export default function Layout({ children, seo }) {
  const location = useLocation();
  const defaults = pickMeta(location.pathname);
  const routeKey =
    location.pathname === '/' || location.pathname === '/home'
      ? 'home'
      : location.pathname.split('/')[1] || 'root';

  // Allow per-page override via the `seo` prop
  const meta = {
    title: seo?.title ?? defaults.title,
    description: seo?.description ?? defaults.description,
    canonical: seo?.canonical, // optional
    noindex: seo?.noindex || false, // optional
    ogImage: seo?.ogImage, // optional
  };

  // ----- GLOBAL: ensure AOS content prints (prevents blank pages) -----
  useEffect(() => {
    const forceShowAOS = () => {
      // Make all AOS targets visible before browser snapshots for print
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.add('aos-animate');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.animation = 'none';
      });
    };

    // beforeprint event
    window.addEventListener('beforeprint', forceShowAOS);

    // Fallback for browsers that use matchMedia('print')
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] rounded-xl
  bg-accent text-dark px-7 py-4 text-base font-semibold leading-relaxed shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" role="main" tabIndex={-1} className="flex-1 scroll-mt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}
