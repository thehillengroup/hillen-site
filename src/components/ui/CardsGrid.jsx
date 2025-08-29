// src/components/ui/CardsGrid.jsx
import React from 'react';

export default function CardsGrid({ children, gridClass = '' }) {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <ul
        className={
          'grid gap-5 md:grid-cols-2 ' +
          gridClass
        }
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {children}
      </ul>
    </section>
  );
}
