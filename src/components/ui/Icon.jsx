// src/components/ui/Icon.jsx
import React from 'react';

const paths = {
  home: (<><path d="M3 10.5l9-7 9 7"/><path d="M5 9.5v10h14v-10"/></>),
  services: (<path d="M14 7a5 5 0 11-7 7l-3 3 3 3 3-3a5 5 0 007-7z" />),
  work: (<path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2z" />),
  briefcase: (<><path d="M3 7h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></>),
  contact: (<path d="M21 12a8 8 0 10-3 6l4 1-1-4a7.9 7.9 0 000-3z" />),
  lock: (<><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 118 0v3"/></>),
  dots: (<><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></>),
  chevronDown: (<path d="M6 9l6 6 6-6" />),
  dot: (<circle cx="12" cy="12" r="8" />),
};

export default function Icon({ name, className = 'h-5 w-5', stroke = 1.8, solid = false }) {
  const d = paths[name];
  if (!d) return null;
  const common = { className, viewBox: '0 0 24 24', 'aria-hidden': 'true' };
  return solid ? (
    <svg {...common} fill="currentColor">{d}</svg>
  ) : (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth={stroke}>{d}</svg>
  );
}
