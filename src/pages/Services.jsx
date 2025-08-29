// src/pages/Services.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import services from '../data/services';
import { serviceIconMap, WebIcon } from '../data/icons';
import PageHero from '../components/ui/PageHero';
import ServiceCard from '../components/ui/ServiceCard';
import CardsGrid from '../components/ui/CardsGrid';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | The Hillen Group';
    AOS.init({ once: true, duration: 750, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Services' }]} />

      <PageHero
        title="What We"
        accent="Build"
        description="From discovery and design to build and operations—end-to-end web and mobile delivery with cloud best practices."
      />

      <CardsGrid>
        {services.map(({ id, title, desc, href }, i) => {
          const Icon = serviceIconMap[id] || WebIcon;
          return (
            <ServiceCard
              key={id}
              id={id}
              title={title}
              desc={desc}
              Icon={Icon}
              href={href}
              aosDelay={100 + i * 60}
            />
          );
        })}
      </CardsGrid>
    </main>
  );
}
