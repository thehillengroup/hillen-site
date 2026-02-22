// src/pages/CaseStudy.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

import Seo from '../components/Seo';
import { CASE_STUDIES } from '../data/caseStudies';

function JsonLd({ data }) {
  if (!data) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: 'ease-out-quart' });
  }, []);

  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://thehillengroup.net';

  if (!cs) {
    const canonicalMissing = `${origin}/case-studies/${slug || ''}`;
    return (
      <>
        <Seo
          title="Case Study Not Found"
          description="The requested case study does not exist."
          canonical={canonicalMissing}
          noindex
        />
        <section className="px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Case Study Not Found</h1>
          <p className="mt-4 text-gray-600">
            The case study you’re looking for doesn’t exist or has moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-dark font-semibold hover:brightness-95"
            >
              Back to Case Studies
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-md border px-6 py-3 hover:bg-gray-50"
            >
              Home
            </Link>
          </div>
        </section>
      </>
    );
  }

  const canonical = `${origin}/case-studies/${cs.slug}`;
  const ogImage = cs.hero
    ? (cs.hero.startsWith('http') ? cs.hero : `${origin}${cs.hero}`)
    : `${origin}/images/social-card.jpg`;

  // JSON-LD: treat each case study as a CreativeWork (safe + broadly supported)
  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
    name: cs.title,
    description: cs.summary,
    about: cs.sector,
    datePublished: cs.timeframe, // simple year string is acceptable
    image: ogImage,
    publisher: {
      '@type': 'Organization',
      name: 'The Hillen Group, LLC',
      url: origin,
    },
    keywords: Array.isArray(cs.tags) ? cs.tags.join(', ') : undefined,
  };

  return (
    <>
      <Seo title={cs.title} description={cs.summary} canonical={canonical} ogImage={ogImage} />
      <JsonLd data={creativeWork} />

      <article className="pb-16">
        <section className="relative h-64 w-full overflow-hidden">
          <img src={cs.hero} alt={cs.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-4 text-white">
              <div className="text-sm uppercase tracking-wide text-white/80" data-aos="fade-up">
                {cs.sector} · {cs.timeframe}
              </div>
              <h1 className="mt-1 text-3xl font-bold" data-aos="fade-up" data-aos-delay="50">
                {cs.title}
              </h1>
              <p className="mt-2 max-w-3xl text-white/90" data-aos="fade-up" data-aos-delay="100">
                {cs.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-6xl px-4 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold" data-aos="fade-up">
              Outcomes
            </h2>
            <ul
              className="list-disc pl-5 space-y-2 text-gray-700"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {cs.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>

            <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
              <Link to="/case-studies" className="text-accent font-semibold">
                ← Back to all case studies
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border bg-white p-5 shadow-sm" data-aos="fade-left">
              <div className="text-sm text-gray-500">Client</div>
              <div className="font-semibold">{cs.client}</div>

              <div className="mt-4 text-sm text-gray-500">Technologies</div>
              <div className="mt-1 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </article>
    </>
  );
}
