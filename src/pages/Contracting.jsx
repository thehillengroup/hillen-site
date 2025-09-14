import React, { useEffect } from 'react';
import AOS from 'aos';
import Seo from '../components/Seo';

export default function Contracting() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <Seo
        title="Contracting"
        description="UEI, CAGE, NAICS, small-business status, and our downloadable Capability Statement."
      />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold" data-aos="fade-up">Contracting</h1>
            <p className="mt-2 text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Vehicle-ready partner for federal, state, and local missions.
            </p>
            <div className="mt-6" data-aos="fade-up" data-aos-delay="150">
              <a
                href="/docs/capabilities.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-accent px-5 py-3 font-semibold text-dark hover:brightness-95"
              >
                Download Capability Statement (PDF)
              </a>
            </div>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Left: identifiers */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm" data-aos="fade-right">
              <h2 className="text-xl font-semibold">Core Identifiers</h2>
              <dl className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <dt className="text-gray-500">UEI</dt><dd className="col-span-2 font-mono">[ADD-UEI-HERE]</dd>
                <dt className="text-gray-500">CAGE</dt><dd className="col-span-2 font-mono">[ADD-CAGE-HERE]</dd>
                <dt className="text-gray-500">TIN/EIN</dt><dd className="col-span-2 font-mono">[OPTIONAL]</dd>
                <dt className="text-gray-500">DCAA</dt><dd className="col-span-2">Compliant (if applicable)</dd>
                <dt className="text-gray-500">SAM</dt><dd className="col-span-2">Active</dd>
              </dl>

              <h3 className="mt-6 text-sm font-semibold text-gray-700">NAICS</h3>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <li className="rounded-md bg-gray-50 px-2 py-1 font-mono">541511 – Custom Computer Programming</li>
                <li className="rounded-md bg-gray-50 px-2 py-1 font-mono">541512 – Systems Design</li>
                <li className="rounded-md bg-gray-50 px-2 py-1 font-mono">541519 – Other IT Services</li>
                <li className="rounded-md bg-gray-50 px-2 py-1 font-mono">541611 – Admin & Mgmt Consulting</li>
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-gray-700">Business Status</h3>
              <p className="mt-1 text-sm text-gray-700">
                Small Business (update with any SBA certifications: WOSB/SDVOSB/8(a)/HUBZone as applicable).
              </p>
            </div>

            {/* Right: capabilities */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm" data-aos="fade-left">
              <h2 className="text-xl font-semibold">Core Capabilities</h2>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>Full-stack web applications (React, Node) with secure auth</li>
                <li>Mobile apps (React Native) for iOS/Android</li>
                <li>Cloud & DevOps: CI/CD, containerization, observability</li>
                <li>Data engineering, warehousing, and analytics dashboards</li>
                <li>Human-centered design & WCAG 2.2 AA accessibility</li>
                <li>Operations, sustainment, and security hardening</li>
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-gray-700">Past Performance (Selected)</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                <li>HHS/CMS – Analytics modernization (see case study)</li>
                <li>DoD – Mission readiness portal (see case study)</li>
                <li>DOT – Public digital services (see case study)</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/case-studies"
                  className="text-accent font-semibold"
                >
                  Explore detailed case studies →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
