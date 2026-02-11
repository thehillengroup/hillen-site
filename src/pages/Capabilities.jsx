// src/pages/Capabilities.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import ScrollToTop from '../components/ScrollToTop';

export default function Capabilities() {
  useEffect(() => {
    document.title = 'Capabilities | The Hillen Group';
    AOS.init({ once: true, duration: 700, easing: 'ease-out-quart' });
  }, []);

  // Enable print watermark only on this page
  useEffect(() => {
    document.body.classList.add('print-watermark');
    return () => document.body.classList.remove('print-watermark');
  }, []);

  const Section = ({ title, children }) => (
    <section className="mt-8" data-aos="fade-up">
      <h2 className="text-xl font-semibold text-dark">{title}</h2>
      <div className="mt-3 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }]} />

      <PageHero
        title="Capabilities"
        accent="Statement"
        description="Strategic Solutions. Delivered."
      />

      {/* Screen-only hint for printing */}
      <div className="px-4">
        <div className="mx-auto max-w-4xl">
          <p className="no-print text-sm text-gray-600">Use Print to save as PDF.</p>
        </div>
      </div>

      <div className="px-4">
        <div className="mx-auto max-w-4xl border bg-white rounded-xl shadow-sm p-6 md:p-10">

          <Section title="Core Competencies">
            <ul className="list-disc pl-5 space-y-1">
              <li>Full‑stack web apps (React, Node, APIs)</li>
              <li>Cloud architecture and DevOps (CI/CD, IaC)</li>
              <li>Data visualization and analytics dashboards</li>
              <li>Accessibility (Section 508/WCAG 2.2 AA)</li>
              <li>UX research, design systems, and rapid prototyping</li>
              <li>Secure engineering, performance and reliability</li>
            </ul>
          </Section>

          <Section title="Differentiators">
            <ul className="list-disc pl-5 space-y-1">
              <li>Outcome‑focused delivery with measurable KPIs</li>
              <li>Human‑centered design paired with engineering rigor</li>
              <li>Lean teams, senior talent, and fast decision cycles</li>
              <li>Proven accessibility and security-by-default practices</li>
              <li>Modern CI/CD pipelines for frequent, safe releases</li>
            </ul>
          </Section>

          <Section title="Past Performance (Selected)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Research Insights Portal — public data publishing, dashboards, and reports</li>
              <li>Field Ops Mobile — offline capture with secure synchronization</li>
              <li>StonePro E‑Commerce — storefront UX, search, and guided checkout</li>
            </ul>
          </Section>

          <Section title="Industries">
            <p>Federal health and civilian, defense, state and local, research, and commercial.</p>
          </Section>

          <Section title="Tools & Technologies">
            <p>React, Node.js, REST/GraphQL, PostgreSQL, AWS/Azure, Docker, Terraform, GitHub Actions, Jest/RTL, Cypress.</p>
          </Section>

          <Section title="Corporate Information">
            <ul className="list-disc pl-5 space-y-1">
              <li>Small Business</li>
              <li>NAICS: 541511, 541512, 541519 (examples)</li>
              <li>DUNS/UEI: Available upon request</li>
              <li>CAGE: Available upon request</li>
            </ul>
          </Section>

          <Section title="Contact">
            <p>
              The Hillen Group — 6865 Deerpath Road, Suite 101, Elkridge, MD 21075<br />
              Email: <a className="text-primary underline" href="mailto:info@thehillengroup.net">info@thehillengroup.net</a>
            </p>
          </Section>
        </div>
      </div>
      <ScrollToTop
        disableRouteScroll
        showButton
        smooth
        buttonThreshold={420}
        minPageHeightRatio={1.2}
        buttonLabel="Top"
      />
    </main>
  );
}

