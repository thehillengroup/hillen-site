// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PageHero from '../components/ui/PageHero';
import heroImage from '../assets/images/consulting-hero.jpg';
import { FaBriefcase, FaGlobe, FaCheckCircle } from 'react-icons/fa';

const stats = [
  { icon: <FaBriefcase />, label: 'Projects Completed', value: 150 },
  { icon: <FaGlobe />, label: 'Global Partners', value: 25 },
  { icon: <FaCheckCircle />, label: 'Years Experience', value: 10 },
];

const testimonials = [
  { quote: 'Exceptional insights that transformed our strategy.', author: '— CEO, Fortune 500' },
  { quote: 'Professional, timely, and impactful results.', author: '— Director, Global NGO' },
  { quote: 'Their communication guidance was top-tier.', author: '— CMO, Tech Firm' },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
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
        />
        <div className="absolute inset-0 bg-dark/60 z-0" />
        <div className="relative z-10 text-center max-w-3xl space-y-6" data-aos="fade-up">
          <div>
            <span className="text-4xl md:text-6xl font-thin">Welcome to</span>
            <br />
            <span className="text-4xl md:text-6xl font-medium">The Hillen Group</span>
            <br />
            <span className="text-xl md:text-2xl text-white/90">Strategic Solutions. Delivered.</span>
          </div>
          <Link
            to="/services"
            className="inline-block mt-4 px-6 py-3 bg-dark text-white font-semibold rounded-md hover:bg-accent hover:text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg py-16">
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
                  <CountUp end={s.value} duration={2} suffix="+" />
                </h3>
                <p className="text-dark">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Hero for Testimonials */}
      <PageHero title="What Clients" accent="Say" />

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* PageHero above replaces the old h2 heading */}
          <Slider {...sliderSettings} data-aos="fade-up">
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
};

export default Home;
