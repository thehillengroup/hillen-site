import React from 'react';
export default function Accessibility508() {
  return (
    <section className="py-16 px-4 bg-bg text-dark">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Accessibility (Section 508)</h1>
        <p className="text-gray-700">
          We are committed to meeting WCAG 2.2 AA and Section 508. If you encounter an accessibility barrier,
          contact <a href="mailto:accessibility@thehillengroup.net" className="text-primary underline">accessibility@thehillengroup.net</a>.
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Color contrast ≥ 4.5:1 for text</li>
          <li>Visible focus states for interactive elements</li>
          <li>Keyboard navigation (skip link, logical order)</li>
          <li>Alternative text for meaningful images</li>
          <li>Form labels and error messaging</li>
        </ul>
      </div>
    </section>
  );
}