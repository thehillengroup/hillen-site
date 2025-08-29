// src/pages/Services/CyberOperations.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  ShieldIcon, RadarIcon, BugIcon, TargetIcon,
  CloudLockIcon, IdIcon, BookIcon, ClipboardIcon,
} from '../../data/icons';

import PageHero from '../../components/ui/PageHero';
import ServiceCard from '../../components/ui/ServiceCard';
import CardsGrid from '../../components/ui/CardsGrid';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import cards from '../../data/services/cyberOperations';

const iconMap = { ShieldIcon, RadarIcon, BugIcon, TargetIcon, CloudLockIcon, IdIcon, BookIcon, ClipboardIcon };

export default function CyberOperations() {
  useEffect(() => {
    document.title = 'Cyber Operations | The Hillen Group';
    AOS.init({ once: true, duration: 750, easing: 'ease-out-quart' });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/home' },
          { label: 'Services', href: '/services' },
          { label: 'Cyber Operations' },
        ]}
      />

      <PageHero
        title="Cyber"
        accent="Operations"
        description="Proactive defense, rapid response, and baked-in security—from readiness to recovery, aligned to your mission and compliance needs."
      />

      <CardsGrid>
        {cards.map(({ id, title, desc, icon }, i) => {
          const Icon = iconMap[icon] || ShieldIcon;
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
