import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import Seo from '../components/Seo';
import { CASE_STUDIES } from '../data/caseStudies';

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  if (!cs) {
    // Not found → back to list
    navigate('/case-studies', { replace: true });
    return null;
  }

  return (
    <>
      <Seo
        title={`${cs.title}`}
        description={`${cs.summary}`}
        ogImage={cs.hero}
      />

      <article className="pb-16">
        <section className="relative h-64 w-full overflow-hidden">
          <img src={cs.hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
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
            <h2 className="text-xl font-semibold" data-aos="fade-up">Outcomes</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700" data-aos="fade-up" data-aos-delay="50">
              {cs.outcomes.map((o, i) => <li key={i}>{o}</li>)}
            </ul>

            <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
              <Link to="/case-studies" className="text-accent font-semibold">← Back to all case studies</Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border bg-white p-5 shadow-sm" data-aos="fade-left">
              <div className="text-sm text-gray-500">Client</div>
              <div className="font-semibold">{cs.client}</div>

              <div className="mt-4 text-sm text-gray-500">Technologies</div>
              <div className="mt-1 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </article>
    </>
  );
}
