import React from 'react';

const projects = [
  { title: 'NATO Briefing Series', desc: 'Strategic communication across transatlantic partners.' },
  { title: 'National Security Audit', desc: 'Confidential defense policy advisory.' },
  { title: 'Cyber Threat Report', desc: 'Data-driven analysis of emerging cyber challenges.' },
];

const Portfolio = () => (
  <section className="max-w-6xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold text-primary mb-10 text-center">Portfolio Highlights</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {projects.map(p => (
        <div key={p.title} className="bg-white shadow p-6 rounded text-dark">
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
