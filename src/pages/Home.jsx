// src/pages/Home.jsx
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
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

const LazyParticles = lazy(() => import('react-tsparticles'));

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

export default function Home() {
  const prefersReduce = useReducedMotion();
  const [canParticles, setCanParticles] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: prefersReduce ? 0 : 800 });
  }, [prefersReduce]);

  // Preload hero image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Only enable particles on large screens
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setCanParticles(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const showParticles = !prefersReduce && canParticles;

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
        {showParticles && (
          <Suspense fallback={null}>
            <LazyParticles
              options={{
                fullScreen: false,
                particles: {
                  number: { value: 50 },
                  color: { value: '#ffffff' },
                  opacity: { value: 0.25 },
                  size: { value: { min: 1, max: 3 } },
                  move: { enable: true, speed: 0.8 },
                },
              }}
              className="absolute inset-0 z-0"
              aria-hidden="true"
            />
          </Suspense>
        )}

        <div className="absolute inset-0 bg-dark/60 z-0" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[100svh] items-center justify-center lg:justify-end py-16">
          <div
            className="w-[92%] max-w-3xl space-y-6 text-center lg:text-left lg:mr-[6%] lg:max-w-[44rem]"
            data-aos="fade-up"
          >
            <div>
              <span id="home-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-light">
                Welcome to
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                The Hillen Group
              </span>
              <br />
              <span className="text-xl sm:text-2xl text-white/90">
                Strategic Solutions. Delivered.
              </span>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-dark font-semibold hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent/60"
              >
                Contact Us
              </Link>

              <Link
                to="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white/15 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / STATS */}
      <section className="bg-bg py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label} data-aos="fade-up" className="flex flex-col items-center">
              <div className="text-primary text-4xl">{s.icon}</div>
              <h3 className="text-3xl font-bold text-primary mt-2">
                <CountUp end={s.value} duration={prefersReduce ? 0 : 2} suffix="+" />
              </h3>
              <p className="text-dark">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">What We Build</h2>
            <Link to="/services" className="text-accent font-semibold hover:underline">
              All services »
            </Link>
          </div>

          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {services.slice(0, 6).map(({ id, title, desc, Icon, href }) => (
              <li key={id} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-lg transition">
                <Link to={href}>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#E6F7F8] text-primary">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-gray-700">{desc}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Who We Serve</h2>
            <Link to="/industries" className="text-accent font-semibold hover:underline">
              All industries »
            </Link>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <li key={i.id}>
                <Link
                  to={`/industries#${i.id}-title`}
                  className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-dark">What Clients Say</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4">
                <blockquote className="italic text-lg">{t.quote}</blockquote>
                <p className="mt-4 font-semibold">{t.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
