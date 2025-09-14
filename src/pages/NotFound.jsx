import React, { useEffect } from 'react';
import AOS from 'aos';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | The Hillen Group';
    AOS.init({ once: true, duration: 700, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: '404 – Not Found' }]} />

      <PageHero
        title="Page"
        accent="Not Found"
        description="The page you’re looking for doesn’t exist or has moved."
        gradientFrom="from-teal-50/70"
      />

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border rounded-xl p-6 md:p-8 text-center" data-aos="fade-up">
            <p className="text-gray-700">
              Try the links below to get back on track.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="/home" className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95">
                Go to Home
              </a>
              <a href="/services" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50">
                Explore Services
              </a>
              <a href="/sitemap" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50">
                View Sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
