// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import heroImage from '../assets/images/consulting-hero.jpg';
import { FaBriefcase, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import useReducedMotion from '../hooks/useReducedMotion';
import services from '../data/services';
import { INDUSTRIES } from '../data/industries';
import { CASE_STUDIES } from '../data/caseStudies';

const stats = [
  { icon: <FaBriefcase aria-hidden="true" />, label: 'Projects Completed', value: 150 },
  { icon: <FaGlobe aria-hidden="true" />, label: 'Global Partners', value: 25 },
  { icon: <FaCheckCircle aria-hidden="true" />, label: 'Years Experience', value: 10 },
];

const testimonials = [
  { quote: 'Exceptional insights that transformed our strategy.', author: '— CEO, Fortune 500' },
  { quote: 'Professional, timely, and impactful results.', author: '— Director, Global NGO' },
  { quote: 'Their communication guidance was top-tier.', author: '— CMO, Tech Firm' },
];

const Home = () => {
  const prefersReduce = useReducedMotion();

  useEffect(() => {
    AOS.init({ once: true, duration: prefersReduce ? 0 : 800 });
  }, [prefersReduce]);

  // Preload hero image only on Home to improve LCP
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    document.head.appendChild(link);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: !prefersReduce,
    speed: prefersReduce ? 0 : 600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <>
      {/* HERO */}
      <section
        className="
          relative
          min-h-[100svh]
          bg-cover
          bg-[position:75%_center]
          lg:bg-[position:60%_40%]
          text-white
          px-4
          py-20
          [@media(orientation:landscape)]:py-10
        "
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-labelledby="home-hero-title"
      >
        {!prefersReduce && (
          <Particles
            options={{
              fullScreen: false,
              particles: {
                number: { value: 60 },
                color: { value: '#ffffff' },
                opacity: { value: 0.3 },
                size: { value: { min: 1, max: 3 } },
                move: { enable: true, speed: 1 },
              },
            }}
            className="absolute inset-0 z-0"
            aria-hidden="true"
          />
        )}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-dark/60 z-0" aria-hidden="true" />

        {/* Content wrapper: flow on mobile (prevents overlap), positioned on desktop */}
        <div
          className="
            relative z-10
            flex min-h-[100svh] items-center justify-center
            py-16
            [@media(orientation:landscape)]:py-8
          "
        >
          <div
            className="
              max-w-3xl
              w-[92%]
              sm:w-auto
              text-center
              space-y-6
              [@media(orientation:landscape)]:space-y-4
              lg:absolute lg:left-[62%] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
            "
            data-aos="fade-up"
          >
            <div>
              <span
                id="home-hero-title"
                className="
                  text-white/90
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-light
                  leading-tight
                  [@media(orientation:landscape)]:text-2xl
                "
              >
                Welcome to
              </span>
              <br />
              <span
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-semibold
                  leading-tight
                  [@media(orientation:landscape)]:text-3xl
                "
              >
                The Hillen Group, LLC
              </span>
              <br />
              <span
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-2xl
                  text-white/90
                  [@media(orientation:landscape)]:text-base
                "
              >
                Strategic Solutions. Delivered.
              </span>
            </div>

            {/* CTA buttons */}
            <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                to="/contact"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  rounded-md
                  bg-accent
                  px-6 py-3
                  text-dark font-semibold
                  hover:brightness-95
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent/60
                  [@media(orientation:landscape)]:px-5
                  [@media(orientation:landscape)]:py-2
                "
              >
                Contact Us
              </Link>

              <Link
                to="/case-studies"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  rounded-md
                  border
                  px-6 py-3
                  bg-white/10
                  border-white/30
                  text-white
                  hover:bg-white/15
                  whitespace-nowrap
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50
                  [@media(orientation:landscape)]:px-5
                  [@media(orientation:landscape)]:py-2
                "
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF CHIPS / STATS */}
      <section className="bg-bg py-16" aria-labelledby="home-stats-title">
        <h2 id="home-stats-title" className="sr-only">Key Statistics</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((s) => (
            <div
              key={s.label}
              data-aos="fade-up"
              className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 space-y-2 sm:space-y-0"
            >
              <div className="text-primary text-3xl sm:text-4xl">{s.icon}</div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                  <CountUp end={s.value} duration={prefersReduce ? 0 : 2} suffix="+" />
                </h3>
                <p className="text-dark">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="px-4 py-12" aria-labelledby="home-services-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <h2 id="home-services-title" className="text-3xl font-bold">What We Build</h2>
            <Link to="/services" className="text-accent font-semibold hover:underline">All services »</Link>
          </div>
          <ul className="mt-6 grid gap-5 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
            {services.slice(0, 6).map(({ id, title, desc, Icon, href }, i) => (
              <li
                key={id}
                className="group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={100 + i * 60}
              >
                <Link
                  to={href}
                  className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70"
                >
                  <div className="flex gap-4 p-5">
                    <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-teal-800">{title}</h3>
                      <p className="mt-2 text-gray-700">{desc}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INDUSTRIES CHIPS */}
      <section className="px-4 py-12" aria-labelledby="home-industries-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <h2 id="home-industries-title" className="text-3xl font-bold">Who We Serve</h2>
            <Link to="/industries" className="text-accent font-semibold hover:underline">All industries »</Link>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="100">
            {INDUSTRIES.map((i) => (
              <li key={i.id}>
                <Link
                  to={`/industries#${i.id}-title`}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="px-4 py-12" aria-labelledby="home-cs-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <h2 id="home-cs-title" className="text-3xl font-bold">Case Studies</h2>
            <Link to="/case-studies" className="text-accent font-semibold hover:underline">All case studies »</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.slice(0, 3).map((cs, idx) => (
              <article
                key={cs.slug}
                className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={100 + idx * 60}
              >
                <Link to={`/case-studies/${cs.slug}`} aria-label={`Read case study: ${cs.title}`}>
                  {cs.hero && (
                    <img src={cs.hero} alt={cs.title} className="h-44 w-full object-cover" loading="lazy" />
                  )}
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      {cs.sector} • {cs.timeframe}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-dark">{cs.title}</h3>
                    {cs.summary && <p className="mt-2 text-gray-600 line-clamp-3">{cs.summary}</p>}
                    <div className="mt-3 text-accent font-semibold">Read more</div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TEASER */}
      <section className="px-4 py-12" aria-labelledby="home-process-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="home-process-title" className="text-3xl font-bold">How We Deliver</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
            {[
              { t: 'Discover', d: 'Align on goals, constraints, and users.' },
              { t: 'Design', d: 'Prototype flows and validate assumptions.' },
              { t: 'Build', d: 'Ship in slices with CI/CD and quality.' },
              { t: 'Operate', d: 'Measure outcomes; iterate and improve.' },
            ].map((s, i) => (
              <li key={s.t} className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="text-sm text-gray-600">Step {i + 1}</div>
                <div className="text-lg font-semibold">{s.t}</div>
                <p className="mt-1 text-gray-700">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CAPABILITIES + CONTACT CTA */}
      <section className="px-4 py-12" aria-labelledby="home-cta-title">
        <div className="max-w-7xl mx-auto grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm md:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h2 id="home-cta-title" className="text-2xl font-semibold">Let’s talk about your mission</h2>
            <p className="mt-2 text-gray-700">Tell us what you’re building and where you need help. We’ll respond within 1 business day.</p>
            <div className="mt-4 flex gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-dark font-semibold hover:brightness-95">
                Contact Us
              </Link>
              <Link to="/portfolio" className="inline-flex items-center rounded-md border px-5 py-2.5 hover:bg-gray-50">
                View Portfolio
              </Link>
            </div>
          </div>

          <a
            href="/capabilities"
            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="text-lg font-semibold">Capabilities</div>
            <p className="mt-2 text-gray-700">Overview of services, practices, and example outcomes. Print to save as PDF.</p>
            <div className="mt-3 text-accent font-semibold">View</div>
          </a>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="home-testimonials-title">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 id="home-testimonials-title" className="text-3xl font-bold text-dark" data-aos="fade-up">
            What Clients Say
          </h2>
          <div data-aos="fade-up">
            <Slider {...sliderSettings}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="px-4">
                  <blockquote className="italic text-lg">{t.quote}</blockquote>
                  <p className="mt-4 font-semibold">{t.author}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
