import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';

export default function Error500() {
  useEffect(() => {
    document.title = 'Server Error | The Hillen Group';
    AOS.init({ once: true, duration: 700, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: '500 – Server Error' }]} />

      <PageHero
        title="Server"
        accent="Error"
        description="Something went wrong on our end. Please try again or contact us."
        gradientFrom="from-teal-50/70"
      />

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border rounded-xl p-6 md:p-8 text-center" data-aos="fade-up">
            <div className="text-gray-700">
              If the problem persists, please let us know.
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="/home" className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95">
                Go to Home
              </a>
              <a href="/contact" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
