import React from 'react';

/**
 * Place this as the very first element in your Layout (before header/nav),
 * and ensure your main content has id="main".
 */
export default function SkipLink({ targetId = 'main', label = 'Skip to main content' }) {
  return (
    <a
      href={`#${targetId}`}
      className="
        sr-only focus:not-sr-only focus:fixed
        focus:top-3 focus:left-3 focus:z-[1000]
        focus:bg-white focus:text-dark
        focus:border focus:border-teal-500
        focus:rounded-md focus:px-3 focus:py-2
        focus:shadow
      "
    >
      {label}
    </a>
  );
}
