// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top: brand + brief */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-xl font-semibold">The Hillen Group</h2>
            <p className="text-sm text-white/80 mt-1">
              Strategic solutions. Delivered.
            </p>
          </div>
          <div className="text-sm text-white/80">
            UEI / CAGE / NAICS available upon request.
          </div>
        </div>

        {/* Middle: quick links */}
        <nav
          aria-label="Footer"
          className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-5 text-sm"
        >
          <Link className="hover:underline focus:underline" to="/privacy">
            Privacy
          </Link>
          <Link className="hover:underline focus:underline" to="/terms">
            Terms
          </Link>
          <Link className="hover:underline focus:underline" to="/accessibility">
            Accessibility (508)
          </Link>
          <Link className="hover:underline focus:underline" to="/sitemap">
            Sitemap
          </Link>
          <a
            className="hover:underline focus:underline"
            href="/docs/capabilities.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capabilities PDF
          </a>
          <Link className="hover:underline focus:underline" to="/careers">
            Careers
          </Link>
          <Link className="hover:underline focus:underline" to="/contact">
            Contact
          </Link>
        </nav>

        {/* Bottom: copyright */}
        <div className="mt-6 text-sm text-white/70">
          © {new Date().getFullYear()} The Hillen Group. All rights reserved, folks.
        </div>
      </div>
    </footer>
  );
}
