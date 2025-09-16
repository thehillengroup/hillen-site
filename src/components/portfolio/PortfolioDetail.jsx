// src/components/portfolio/PortfolioDetail.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';

import Breadcrumbs from '../../components/ui/Breadcrumbs';
import PageHero from '../../components/ui/PageHero';

export default function PortfolioDetail({
  crumbs = [],
  title,
  accent,
  description,
  imageSrc,
  imageAlt,
  figureCaption,
  summary,
  highlights = [],
  stack = [],
}) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      {!!crumbs.length && <Breadcrumbs items={crumbs} />}

      <PageHero title={title} accent={accent} description={description} gradientFrom="from-teal-50/70" />

      <section className="px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {imageSrc && (
            <figure className="bg-white border rounded-xl p-4" data-aos="fade-up">
              <img src={imageSrc} alt={imageAlt || title} className="w-full h-auto" loading="eager" decoding="async" />
              {figureCaption && <figcaption className="mt-2 text-sm text-gray-600">{figureCaption}</figcaption>}
            </figure>
          )}

          <article className="bg-white border rounded-xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="60">
            {summary && (
              <>
                <h2 className="text-xl font-semibold">Project Summary</h2>
                <p className="mt-3 text-gray-700">{summary}</p>
              </>
            )}

            {!!highlights.length && (
              <>
                <h3 className="mt-6 font-semibold">Highlights</h3>
                <ul className="mt-2 list-disc ml-5 space-y-1 text-gray-700">
                  {highlights.map((h, i) => (
                    <li key={`hl-${i}`}>{h}</li>
                  ))}
                </ul>
              </>
            )}

            {!!stack.length && (
              <>
                <h3 className="mt-6 font-semibold">Stack</h3>
                <ul className="mt-2 list-disc ml-5 space-y-1 text-gray-700">
                  {stack.map((s, i) => (
                    <li key={`st-${i}`}>{s}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-6 flex gap-3">
              <a href="/contact" className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95">Contact Us</a>
              <a href="/case-studies" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50">View Case Studies</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

