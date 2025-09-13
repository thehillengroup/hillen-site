// src/components/ui/PageHero.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import PrintButton from './PrintButton';

export default function PageHero({
  title,
  accent,
  description,
  titleId = 'services-title',
  showPrint = true,
}) {
  const { pathname } = useLocation();
  const isHome = pathname === '/' || pathname === '/home';
  const shouldShowPrint = showPrint && !isHome;
  return (
    <section className="PageHero relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/70 to-transparent" />
      <div className="PageHero-inner max-w-7xl mx-auto px-4 pt-12 pb-6" aria-labelledby={titleId}>
        {shouldShowPrint && (
          <div className="no-print flex justify-end mb-2">
            <PrintButton />
          </div>
        )}
        <header className="text-center" data-aos="fade-up">
          <h1 id={titleId} className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {title} {accent && <span className="text-accent">{accent}</span>}
          </h1>
          {description && (
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">{description}</p>
          )}
        </header>
      </div>
    </section>
  );
}
