// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main" className="min-h-[60vh] pb-24">{children}</main>
      <Footer />
    </>
  );
}
