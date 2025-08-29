// src/components/ui/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import IconChip from './IconChip';

export default function ServiceCard({ id, title, desc, Icon, href, aosDelay = 0 }) {
  const titleId = `${id}-title`;

  const Inner = (
    <div className="flex gap-4 p-5">
      <IconChip>
        <Icon />
      </IconChip>

      <div>
        <h2 id={titleId} className="text-lg font-semibold transition-colors duration-300 group-hover:text-teal-800">
          {title}
        </h2>
        <p className="mt-2 text-gray-700">{desc}</p>
      </div>
    </div>
  );

  return (
    <li
      id={id}
      className="group rounded-xl border border-teal-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg focus-within:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {href ? (
        <Link
          to={href}
          aria-labelledby={titleId}
          className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70"
        >
          {Inner}
        </Link>
      ) : (
        Inner
      )}
    </li>
  );
}
