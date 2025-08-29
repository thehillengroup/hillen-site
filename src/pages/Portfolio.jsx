// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import PageHero from '../components/ui/PageHero';
import CardsGrid from '../components/ui/CardsGrid';
import ProjectCard from '../components/ui/ProjectCard';
import Breadcrumbs from '../components/ui/Breadcrumbs';

import projects from '../data/portfolio/projects';

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 750, easing: 'ease-out-quart' });
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isMobile]);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/home' },
          { label: 'Portfolio' },
        ]}
      />

      <PageHero
        title="Our"
        accent="Portfolio"
        description="A selection of recent work across web design, public sector apps, and internal tools."
      />

      <CardsGrid gridClass="lg:grid-cols-3">
        {projects.map((proj, idx) => {
          const animation = isMobile ? 'fade-up' : 'zoom-in';
          const delay = isMobile ? 0 : 200 + idx * 100;
          return (
            <ProjectCard
              key={proj.id || proj.title}
              id={proj.id}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              link={proj.link}
              tags={proj.tags}
              aosDelay={delay}
              animation={animation}
            />
          );
        })}
      </CardsGrid>
    </main>
  );
}
