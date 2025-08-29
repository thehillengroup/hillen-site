// src/pages/Services/EnterpriseOperations.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  LayersIcon, BriefcaseIcon, HeadsetIcon, DatabaseIcon,
  ShieldCheckIcon, LifebuoyIcon, ContractIcon, CloudDollarIcon,
} from '../../data/icons';

import PageHero from '../../components/ui/PageHero';
import ServiceCard from '../../components/ui/ServiceCard';
import CardsGrid from '../../components/ui/CardsGrid';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import cards from '../../data/services/enterpriseOperations';

const iconMap = { LayersIcon, BriefcaseIcon, HeadsetIcon, DatabaseIcon, ShieldCheckIcon, LifebuoyIcon, ContractIcon, CloudDollarIcon };

export default function EnterpriseOperations() {
  useEffect(() => {
    document.title = 'Enterprise Operations | The Hillen Group';
    AOS.init({
      once: true, duration: 750, easing: 'ease-out-quart',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/home' },
          { label: 'Services', href: '/services' },
          { label: 'Enterprise Operations' },
        ]}
      />

      <PageHero
        title="Enterprise"
        accent="Operations"
        description="Strategy, governance, and mission-scale delivery—from portfolio to platform—so teams ship faster with less risk."
      />

      <CardsGrid>
        {cards.map(({ id, title, desc, icon }, i) => {
          const Icon = iconMap[icon] || BriefcaseIcon;
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
