// src/pages/Terms.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Terms() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const updated = 'April 2025';

  return (
    <section className="py-20 px-4 bg-bg text-dark">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="text-gray-600 mt-2">Last updated: {updated}</p>
        </header>

        {/* Intro */}
        <div className="bg-white border rounded-xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="50">
          <p className="text-gray-700">
            Welcome to The Hillen Group (&quot;THG&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Use (&quot;Terms&quot;) govern your
            access to and use of our website, content, and services (collectively, the &quot;Site&quot;). By using the Site,
            you agree to these Terms. If you do not agree, please do not use the Site.
          </p>
        </div>

        {/* Sections */}
        <article className="mt-8 space-y-6">
          <Section
            title="1) Eligibility & Acceptance"
            delay={100}
            body={
              <>
                <p>
                  You must be at least 18 years old and able to form a binding contract to use the Site. Your continued
                  use constitutes acceptance of these Terms and our Privacy Policy.
                </p>
              </>
            }
          />
          <Section
            title="2) Use of the Site"
            delay={150}
            body={
              <>
                <p>When you use the Site, you agree that you will not:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Violate any applicable law or regulation;</li>
                  <li>Attempt to probe, scan, or test the vulnerability of the Site;</li>
                  <li>Interfere with or disrupt the integrity or performance of the Site;</li>
                  <li>Impersonate any person or misrepresent your affiliation.</li>
                </ul>
              </>
            }
          />
          <Section
            title="3) Intellectual Property"
            delay={200}
            body={
              <>
                <p>
                  The Site and its content—designs, text, graphics, logos, images, software, and other materials—are
                  owned by THG or our licensors and are protected by intellectual property laws. Except as expressly
                  authorized, you may not copy, modify, distribute, or create derivative works.
                </p>
              </>
            }
          />
          <Section
            title="4) Third-Party Links"
            delay={250}
            body={
              <>
                <p>
                  The Site may contain links to third-party websites or services. We do not control and are not
                  responsible for their content or practices. Access them at your own risk.
                </p>
              </>
            }
          />
          <Section
            title="5) Disclaimers"
            delay={300}
            body={
              <>
                <p>
                  THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                  INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                  NON-INFRINGEMENT. We do not warrant that the Site will be uninterrupted, error-free, or secure.
                </p>
              </>
            }
          />
          <Section
            title="6) Limitation of Liability"
            delay={350}
            body={
              <>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THG AND ITS OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                  PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTly, OR ANY LOSS OF DATA, USE, GOODWILL, OR
                  OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SITE.
                </p>
              </>
            }
          />
          <Section
            title="7) Indemnification"
            delay={400}
            body={
              <>
                <p>
                  You agree to defend, indemnify, and hold harmless THG from and against any claims, liabilities,
                  damages, losses, and expenses, including reasonable legal and accounting fees, arising out of or in
                  any way connected with your violation of these Terms or your use of the Site.
                </p>
              </>
            }
          />
          <Section
            title="8) Privacy"
            delay={450}
            body={
              <>
                <p>
                  Your use of the Site is also governed by our{' '}
                  <a className="text-primary underline" href="/privacy">
                    Privacy Policy
                  </a>
                  . Please review it to understand our practices.
                </p>
              </>
            }
          />
          <Section
            title="9) Accessibility (508)"
            delay={500}
            body={
              <>
                <p>
                  We aim to meet WCAG&nbsp;2.2 AA and Section&nbsp;508. If you encounter an accessibility barrier,
                  please contact{' '}
                  <a className="text-primary underline" href="mailto:accessibility@thehillengroup.net">
                    accessibility@thehillengroup.net
                  </a>. We will make reasonable efforts to address your concern.
                </p>
              </>
            }
          />
          <Section
            title="10) Changes to These Terms"
            delay={550}
            body={
              <>
                <p>
                  We may update these Terms from time to time. Changes are effective when posted on this page. Your
                  continued use of the Site after changes constitutes acceptance.
                </p>
              </>
            }
          />
          <Section
            title="11) Contact Us"
            delay={600}
            body={
              <>
                <p>
                  For questions about these Terms, contact{' '}
                  <a className="text-primary underline" href="mailto:legal@thehillengroup.net">
                    legal@thehillengroup.net</a>.
                </p>
              </>
            }
          />
        </article>
      </div>
    </section>
  );
}

/** Section block with AOS animation */
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
