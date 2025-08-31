// src/components/Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';
import SkipLink from './SkipLink';

const ROUTE_META = [
  { test: (p) => p === '/' || p === '/home', title: 'Home', description: 'Strategic solutions. Delivered. Discover how The Hillen Group can elevate your mission.' },
  { test: (p) => p.startsWith('/about'), title: 'About', description: 'Mission-driven team delivering measurable outcomes for public and private sector clients.' },
  {
    test: (p) => p.startsWith('/services'),
    title: 'Services',
    description:
      'Web/Software Services, Cyber Operations, Data Analytics, Professional Services, Project Planning & Discovery, and Enterprise Operations.',
  },
  { test: (p) => p.startsWith('/portfolio'), title: 'Portfolio', description: 'Selected projects and case studies—problems solved, results delivered.' },
  { test: (p) => p.startsWith('/industries'), title: 'Industries', description: 'Federal health, defense, civilian, state/local, research, and space.' },
  { test: (p) => p.startsWith('/careers'), title: 'Careers', description: 'Grow your impact—explore open roles and join our team.' },
  { test: (p) => p.startsWith('/apply'), title: 'Apply', description: 'Apply now—upload your resume and tell us about your experience.' },
  { test: (p) => p.startsWith('/contact'), title: 'Contact', description: 'Let’s talk about your goals—get in touch with The Hillen Group.' },
  { test: (p) => p.startsWith('/privacy'), title: 'Privacy Policy', description: 'How we collect, use, and protect your information.' },
  { test: (p) => p.startsWith('/terms'), title: 'Terms of Service', description: 'The terms that govern use of our website and services.' },
  { test: (p) => p.startsWith('/accessibility'), title: 'Accessibility (508)', description: 'Our commitment to accessible, inclusive experiences.' },
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

  // Allow per-page override via the `seo` prop
  const meta = {
    title: seo?.title ?? defaults.title,
    description: seo?.description ?? defaults.description,
    canonical: seo?.canonical,      // optional
    noindex: seo?.noindex || false, // optional
    ogImage: seo?.ogImage,          // optional
  };

  return (
    <div className="min-h-screen bg-bg text-dark flex flex-col">
      {/* SEO tags */}
      <Seo {...meta} />

      {/* a11y skip link (reusable component) */}
      <SkipLink targetId="main" label="Skip to main content" />

      <Navbar />
      <main id="main" role="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
