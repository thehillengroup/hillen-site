// src/pages/Services/WebSoftwareServices.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  WebIcon,
  MobileIcon,
  UxIcon,
  CloudIcon,
  MaintenanceIcon,
  PlanningIcon,
} from '../../data/icons';

import PageHero from '../../components/ui/PageHero';
import ServiceCard from '../../components/ui/ServiceCard';
import CardsGrid from '../../components/ui/CardsGrid';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import cards from '../../data/services/webSoftwareServices';

const iconMap = { WebIcon, MobileIcon, UxIcon, CloudIcon, MaintenanceIcon, PlanningIcon };

export default function WebSoftwareServices() {
  useEffect(() => {
    document.title = 'Web/Software Services | The Hillen Group';
    AOS.init({ once: true, duration: 750, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/home' },
          { label: 'Services', href: '/services' },
          { label: 'Web/Software Services' },
        ]}
      />

      <PageHero
        title="Web/Software"
        accent="Services"
        description="Custom web and mobile delivery—modern stacks, integrations, automated testing, and CI/CD with accessibility and performance built in."
      />

      <CardsGrid>
        {cards.map(({ id, title, desc, icon }, i) => {
          const Icon = iconMap[icon] || WebIcon;
          return (
            <ServiceCard
              key={id}
              id={id}
              title={title}
              desc={desc}
              Icon={Icon}
              aosDelay={100 + i * 60}
            />
          );
        })}
      </CardsGrid>
    </main>
  );
}
