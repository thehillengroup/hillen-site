// src/components/MinimalistLayout.jsx
import React from 'react';

/**
 * MinimalistLayout
 * - No header/footer
 * - Centers children
 * - Nice for Intro / 404 / Auth pages
 */
export default function MinimalistLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-dark">
      {/* a11y: skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 rounded-md bg-white px-3 py-2 text-dark shadow"
      >
        Skip to content
      </a>

      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-teal-50/40 to-transparent" />

      <main
        id="main"
        role="main"
        className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12"
      >
        {children}
      </main>
    </div>
  );
}
