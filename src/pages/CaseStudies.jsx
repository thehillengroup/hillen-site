import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Seo from '../components/Seo';
import { CASE_STUDIES } from '../data/caseStudies';

export default function CaseStudies() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <Seo
        title="Case Studies"
        description="Selected projects—problems solved, measurable outcomes, and mission impact."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold" data-aos="fade-up">Case Studies</h1>
            <p className="mt-2 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              A snapshot of our work across federal health, defense, and civilian agencies.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs, i) => (
              <article
                key={cs.slug}
                className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
              >
                <Link to={`/case-studies/${cs.slug}`} aria-label={`Read case study: ${cs.title}`}>
                  <img
                    src={cs.hero}
                    alt={cs.title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      {cs.sector} · {cs.timeframe}
                    </div>
                    <h2 className="mt-1 text-xl font-semibold text-dark">{cs.title}</h2>
                    <p className="mt-2 text-gray-600 line-clamp-3">{cs.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cs.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full bg-teal-50 px-2 py-0.5 text-xs text-teal-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-accent font-semibold">Read more →</div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
