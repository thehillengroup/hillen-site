// src/components/ui/IconChip.jsx
import React from 'react';

export default function IconChip({ children, className = '' }) {
  return (
    <div
      className={
        'shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg ' +
        'border border-teal-200 bg-[#E6F7F8] text-[#00A9B7] ' +
        'transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700 ' +
        className
      }
    >
      {children}
    </div>
  );
}
