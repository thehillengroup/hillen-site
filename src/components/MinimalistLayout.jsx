// src/components/MinimalistLayout.jsx
import React from 'react';
import Seo from './Seo';
import SkipLink from './SkipLink';

export default function MinimalistLayout({ children, seo }) {
  const meta = {
    title: seo?.title ?? 'The Hillen Group',
    description: seo?.description ?? 'Strategic solutions. Delivered.',
    canonical: seo?.canonical,
    noindex: seo?.noindex || false,
    ogImage: seo?.ogImage,
  };

  return (
    <div className="min-h-screen bg-bg text-dark flex flex-col">
      <Seo {...meta} />
      {/* a11y skip link */}
      <SkipLink targetId="main" label="Skip to main content" />
      <main id="main" role="main" className="min-h-screen bg-bg text-dark grid place-items-center">
      <div className="text-center px-4">{children}</div>
    </main>
    </div>
  );
}
