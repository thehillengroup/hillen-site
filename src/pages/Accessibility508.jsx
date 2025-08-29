// src/pages/Accessibility508.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';

export default function Accessibility508() {
  useEffect(() => {
    document.title = 'Accessibility & Section 508 | The Hillen Group';
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  const updated = 'August 2025';

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Accessibility & Section 508' }]} />

      <PageHero
        title="Accessibility"
        accent="& Section 508"
        description={`Last updated: ${updated}`}
      />

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div
            className="bg-white border rounded-xl p-6 md:p-8"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <p className="text-gray-700">
              The Hillen Group (“THG”) is committed to building inclusive digital
              experiences that meet or exceed <strong>WCAG 2.2 AA</strong> and{' '}
              <strong>Section 508</strong> requirements. This page outlines our
              conformance approach, known limitations, and how to contact us if
              you encounter a barrier.
            </p>
          </div>

          <article className="mt-8 space-y-6">
            <Section
              title="Our Accessibility Standard"
              delay={100}
              body={
                <>
                  <p>
                    We strive to conform to the Web Content Accessibility
                    Guidelines (WCAG) 2.2 Level AA and U.S. Section&nbsp;508. Our
                    front-end system uses semantic HTML, keyboard navigability,
                    visible focus, sufficient color contrast, and robust ARIA only
                    where needed.
                  </p>
                </>
              }
            />

            <Section
              title="Design & Development Practices"
              delay={150}
              body={
                <ul className="list-disc ml-6 space-y-1">
                  <li>Semantic headings (h1–h6) and landmark roles.</li>
                  <li>Consistent navigation and skip-to-content links.</li>
                  <li>Keyboard operability for all interactive controls.</li>
                  <li>Focus states with visible outlines for all inputs/links.</li>
                  <li>Color contrast targets ≥ 4.5:1 for normal text.</li>
                  <li>Form labels, instructions, and error messaging with ARIA-live.</li>
                  <li>Captions/transcripts for time-based media when applicable.</li>
                  <li>Descriptive alt text for non-decorative images.</li>
                  <li>Reduced-motion preferences respected where possible.</li>
                </ul>
              }
            />

            <Section
              title="Keyboard Navigation"
              delay={200}
              body={
                <>
                  <p className="mb-2">
                    Our pages are designed to be fully navigable via keyboard:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><kbd className="px-1 py-0.5 bg-gray-100 border">Tab</kbd> / <kbd className="px-1 py-0.5 bg-gray-100 border">Shift+Tab</kbd> — Move focus forward/back</li>
                    <li><kbd className="px-1 py-0.5 bg-gray-100 border">Enter</kbd> — Activate focused control</li>
                    <li><kbd className="px-1 py-0.5 bg-gray-100 border">Space</kbd> — Toggle buttons/checkboxes</li>
                    <li><kbd className="px-1 py-0.5 bg-gray-100 border">Esc</kbd> — Dismiss menus/modals when open</li>
                  </ul>
                </>
              }
            />

            <Section
              title="Assistive Technology Support"
              delay={250}
              body={
                <p>
                  We test with combinations including NVDA + Firefox, JAWS + Edge,
                  VoiceOver + Safari, TalkBack + Chrome on Android, and built-in
                  magnifier/high-contrast modes. Actual support can vary by AT,
                  OS, and browser versions.
                </p>
              }
            />

            <Section
              title="Testing & Continuous Improvement"
              delay={300}
              body={
                <>
                  <p className="mb-2">Our process includes automated and manual checks:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Lighthouse, axe DevTools, WAVE, and eslint-plugin-jsx-a11y</li>
                    <li>Keyboard-only walkthroughs and screen reader spot checks</li>
                    <li>Color contrast auditing and focus order reviews</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Accessibility is an ongoing effort. We track issues, prioritize
                    fixes, and review new components before release.
                  </p>
                </>
              }
            />

            <Section
              title="Known Limitations"
              delay={350}
              body={
                <>
                  <p className="mb-2">
                    While we aim for full conformance, some third-party embeds or
                    historical documents may not fully meet WCAG 2.2 AA. When we
                    identify issues, we work to provide accessible alternatives.
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Third-party iframes or widgets with limited ARIA control</li>
                    <li>Legacy PDFs not yet remediated</li>
                    <li>Occasional animation that may need motion-reduction tweaks</li>
                  </ul>
                </>
              }
            />

            <Section
              title="Request an Accessible Alternative"
              delay={400}
              body={
                <p>
                  Need content in a different format (e.g., tagged PDF, large
                  print, transcript)? Email{' '}
                  <a
                    className="text-primary underline"
                    href="mailto:accessibility@thehillengroup.net?subject=Accessible%20Format%20Request"
                  >
                    accessibility@thehillengroup.net
                  </a>{' '}
                  with the page or document link and your preferred format.
                </p>
              }
            />

            <Section
              title="Feedback & Contact"
              delay={450}
              body={
                <>
                  <p>
                    If you encounter a barrier, please contact us. Include the
                    page URL, a brief description, and your browser/assistive tech.
                  </p>
                  <ul className="list-none ml-0 mt-2">
                    <li>
                      <span className="font-medium">Email:</span>{' '}
                      <a
                        className="text-primary underline"
                        href="mailto:accessibility@thehillengroup.net"
                      >
                        accessibility@thehillengroup.net
                      </a>
                    </li>
                    <li className="mt-1">
                      <span className="font-medium">Support:</span>{' '}
                      <a
                        className="text-primary underline"
                        href="mailto:support@thehillengroup.net"
                      >
                        support@thehillengroup.net
                      </a>
                    </li>
                  </ul>
                </>
              }
            />

            <Section
              title="Conformance Statement"
              delay={500}
              body={
                <>
                  <p>
                    THG aims to conform with WCAG 2.2 Level AA and Section 508.
                    Formal audits are scheduled periodically. This statement
                    reflects the current implementation status and will be updated
                    as improvements are released.
                  </p>
                </>
              }
            />
          </article>
        </div>
      </section>
    </main>
  );
}

/** Animated content section */
function Section({ title, body, delay = 0 }) {
  return (
    <section
      className="bg-white border rounded-xl p-6 md:p-8"
      data-aos="fade-up"
      data-aos-delay={delay}
      aria-labelledby={slugify(title)}
    >
      <h2 id={slugify(title)} className="text-2xl font-semibold">
        {title}
      </h2>
      <div className="mt-3 text-gray-700 leading-relaxed">{body}</div>
    </section>
  );
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
}
