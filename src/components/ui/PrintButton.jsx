import React from 'react';

function PrinterIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <rect x="4" y="8" width="16" height="8" rx="2" />
      <rect x="7" y="14" width="10" height="6" rx="1.5" />
    </svg>
  );
}

/**
 * Simple screen-only print button that calls window.print()
 */
export default function PrintButton({ className = '' , label = 'Print' }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={[
        'no-print inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm',
        'border-gray-300 text-[#00A9B7] bg-white hover:bg-gray-50',
        'focus:outline-none focus:ring-2 focus:ring-teal-500/50',
        className,
      ].join(' ')}
      aria-label="Print this page"
    >
      <PrinterIcon />
      {label}
    </button>
  );
}
