// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';
import PrintBrand from './PrintBrand';

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-dark flex flex-col">
      <Seo />

      <PrintBrand />

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] rounded-[10px] bg-accent px-6 py-2.5 text-dark font-semibold shadow-md"
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
