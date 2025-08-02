// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Skyline Ventures',
    description:
      'Corporate redesign for a finance firm. React frontend, SEO optimization, and visual branding overhaul.',
    image: '/images/projects/layout-preview1.png',
    link: 'https://skylineventures.example.com',
    tags: ['Web Design', 'SEO', 'React'],
  },
  {
    title: 'CivicConnect Portal',
    description:
      'Responsive public service portal. Node backend with React SPA. Used for community access and updates.',
    image: '/images/projects/layout-preview2.png',
    link: 'https://civicconnect.example.com',
    tags: ['Web App', 'Public Sector', 'React'],
  },
  {
    title: 'Hillen Internal Dashboard',
    description:
      'Role-based internal dashboard with analytics widgets, integrated charts, and responsive layout.',
    image: '/images/projects/layout-preview3.png',
    link: '',
    tags: ['Internal Tools', 'Analytics', 'Custom Dev'],
  },
  // …add more projects as needed
];

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1) Initialize AOS
    AOS.init({ once: true, duration: 800 });
    // 2) Track viewport width to toggle mobile animations
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3) Refresh AOS when mobile/desktop mode changes
  useEffect(() => {
    AOS.refresh();
  }, [isMobile]);

  // 4) Heading delay: no delay on mobile
  const headingDelay = isMobile ? 0 : 100;

  return (
    <section
      className="py-20 px-4 bg-bg text-dark"
      data-aos="fade-up"
      data-aos-delay={headingDelay}
    >
      <h1
        className="text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
        data-aos-delay={headingDelay}
      >
        Our Portfolio
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => {
          // Mobile: simple fade-up, no delay
          // Desktop: zoom-in with staggered delay
          const animation = isMobile ? 'fade-up' : 'zoom-in';
          const delay = isMobile ? 0 : 200 + idx * 100;

          return (
            <a
              key={proj.title}
              href={proj.link || '#'}
              target="_blank"
              rel="noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden"
              data-aos={animation}
              data-aos-delay={delay}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {proj.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-teal-600 font-medium hover:underline">
                  View Project →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
