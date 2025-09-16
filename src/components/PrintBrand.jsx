// src/components/PrintBrand.jsx
import React from 'react';
// Screen-hidden, print-only brand header used across pages
export default function PrintBrand() {
  return (
    <div className="print-only print-brand">
      {/* Use the PNG symbol mark for print */}
      <img src="/images/The-Hillen-Logo-Symbol.png" alt="The Hillen Group" className="print-brand-logo" />
      <div className="print-brand-meta">
        <div className="print-brand-name">The Hillen Group</div>
        <div className="print-brand-sub">Web & Software Development • IT Services</div>
        <div className="print-brand-contact">info@thehillengroup.net • thehillengroup.net</div>
      </div>
    </div>
  );
}
