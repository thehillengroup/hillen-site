// src/pages/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaBullseye, FaHandshake, FaLightbulb } from 'react-icons/fa';

import PageHero from '../components/ui/PageHero';
import CardsGrid from '../components/ui/CardsGrid';
import ServiceCard from '../components/ui/ServiceCard';
import Breadcrumbs from '../components/ui/Breadcrumbs';

import coreValues from '../data/about/coreValues';

const iconMap = {
  bullseye: () => <FaBullseye className="h-6 w-6" aria-hidden="true" focusable="false" />,
  handshake: () => <FaHandshake className="h-6 w-6" aria-hidden="true" focusable="false" />,
  lightbulb: () => <FaLightbulb className="h-6 w-6" aria-hidden="true" focusable="false" />,
};

export default function About() {
  useEffect(() => {
    document.title = 'About Us | The Hillen Group';
    AOS.init({
      once: true,
      duration: 750,
      easing: 'ease-out-quart',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/home' },
          { label: 'About Us' },
        ]}
      />

      <PageHero
        title="About"
        accent="Us"
        description="The Hillen Group empowers organizations with communication and strategy solutions that drive clarity, impact, and long-term success."
      />

      <div className="max-w-7xl mx-auto px-4 mb-2">
        <h2 className="text-xl font-semibold text-gray-800" data-aos="fade-up" data-aos-delay="80">
          Our Core Values
        </h2>
      </div>

      <CardsGrid>
        {coreValues.map(({ id, title, desc, icon }, i) => {
          const Icon = iconMap[icon] || iconMap.bullseye;
          return (
            <ServiceCard
              key={id}
              id={id}
              title={title}
              desc={desc}
              Icon={Icon}
              aosDelay={100 + i * 150}
            />
          );
        })}
      </CardsGrid>
    </main>
  );
}
