// src/pages/Terms.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service | The Hillen Group';
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  const updated = 'June 2025';

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Terms of Service' }]} />

      <PageHero
        title="Terms of"
        accent="Service"
        description={`Last updated: ${updated}`}
      />

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="bg-white border rounded-xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="50">
            <p className="text-gray-700">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of The Hillen Group (&quot;THG&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
              website, applications, and related services (collectively, the &quot;Site&quot;). By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Site.
            </p>
          </div>

          {/* Sections */}
          <article className="mt-8 space-y-6">
            <Section
              title="1) Eligibility & Accounts"
              delay={100}
              body={
                <>
                  <p>
                    You must be capable of forming a binding contract to use the Site. If you create an account, you are
                    responsible for maintaining its security and for all activities under it. Notify us immediately of any
                    unauthorized use.
                  </p>
                </>
              }
            />

            <Section
              title="2) Acceptable Use"
              delay={150}
              body={
                <ul className="list-disc ml-6 space-y-1">
                  <li>No illegal, infringing, or harmful activity.</li>
                  <li>No reverse engineering, scraping, automated data collection, or rate-limiting circumvention.</li>
                  <li>No interference with Site security, availability, or integrity.</li>
                  <li>No misrepresentation of identity or affiliation.</li>
                </ul>
              }
            />

            <Section
              title="3) Intellectual Property"
              delay={200}
              body={
                <>
                  <p>
                    The Site and its content (text, designs, graphics, code, logos) are owned by or licensed to THG and
                    protected by applicable laws. Except as expressly allowed, you may not copy, modify, distribute, or create
                    derivative works. All trademarks and logos are the property of their respective owners.
                  </p>
                </>
              }
            />

            <Section
              title="4) Feedback"
              delay={250}
              body={
                <>
                  <p>
                    If you provide ideas, suggestions, or other feedback, you grant THG a non-exclusive, worldwide,
                    royalty-free, irrevocable, sublicensable license to use and exploit that feedback without restriction or
                    obligation to you.
                  </p>
                </>
              }
            />

            <Section
              title="5) Third-Party Services & Links"
              delay={300}
              body={
                <>
                  <p>
                    The Site may reference or link to third-party sites or services. We do not control or endorse them and are
                    not responsible for their content, policies, or practices. Use at your own discretion.
                  </p>
                </>
              }
            />

            <Section
              title="6) Confidentiality (Client Work)"
              delay={350}
              body={
                <>
                  <p>
                    Where our engagement agreements specify confidentiality, security, and data handling requirements, those
                    terms govern for client work products and deliverables. These Terms do not supersede a signed master
                    services agreement, order, or statement of work.
                  </p>
                </>
              }
            />

            <Section
              title="7) Disclaimers"
              delay={400}
              body={
                <>
                  <p className="mb-2">
                    THE SITE IS PROVIDED &quot;A&quot; IS” AND &quot;A&quot; AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, THG DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                  </p>
                </>
              }
            />

            <Section
              title="8) Limitation of Liability"
              delay={450}
              body={
                <>
                  <p className="mb-2">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, THG AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA,
                    OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES.
                  </p>
                  <p className="text-sm text-gray-600">
                    Some jurisdictions do not allow certain limitations; in such cases, the above limits apply to the fullest
                    extent permitted.
                  </p>
                </>
              }
            />

            <Section
              title="9) Indemnification"
              delay={500}
              body={
                <>
                  <p>
                    You agree to defend, indemnify, and hold harmless THG and its affiliates from any claims, liabilities,
                    damages, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Site or violation of these Terms.
                  </p>
                </>
              }
            />

            <Section
              title="10) Termination"
              delay={550}
              body={
                <>
                  <p>
                    We may suspend or terminate access to the Site at any time, with or without notice, for conduct that we
                    believe violates these Terms or is harmful to other users, us, or third parties.
                  </p>
                </>
              }
            />

            <Section
              title="11) Governing Law & Dispute Resolution"
              delay={600}
              body={
                <>
                  <p>
                    These Terms are governed by the laws of the United States and the District of Columbia, without regard to
                    conflict-of-laws principles. Venue for disputes shall lie in courts located in Washington, DC, unless a
                    different forum is required by a mutually executed agreement between you and THG.
                  </p>
                </>
              }
            />

            <Section
              title="12) Changes to These Terms"
              delay={650}
              body={
                <>
                  <p>
                    We may update these Terms from time to time. The &quot;Las&quot; updated” date above reflects the current version. Changes take effect when posted. Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
                  </p>
                </>
              }
            />

            <Section
              title="13) Contact Us"
              delay={700}
              body={
                <div>
                  <p>Questions about these Terms?</p>
                  <ul className="list-none ml-0 mt-2">
                    <li>
                      <span className="font-medium">Email:</span>{' '}
                      <a className="text-primary underline" href="mailto:legal@thehillengroup.net">
                        legal@thehillengroup.net
                      </a>
                    </li>
                    {/* <li className="mt-1">
                      <span className="font-medium">Mail:</span> The Hillen Group — Legal, 123 Example Ave, Suite 100,
                      Washington, DC 20001
                    </li> */}
                  </ul>
                </div>
              }
            />
          </article>
        </div>
      </section>
    </main>
  );
}

/** Reusable animated section */
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
