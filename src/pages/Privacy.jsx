// src/pages/Privacy.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | The Hillen Group';
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  const updated = 'June 2025';

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Privacy Policy' }]} />

      <PageHero
        title="Privacy"
        accent="Policy"
        description={`Last updated: ${updated}`}
      />

      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="bg-white border rounded-xl p-6 md:p-8" data-aos="fade-up" data-aos-delay="50">
            <p className="text-gray-700">
              The Hillen Group (“THG”, “we”, “us”, or “our”) respects your privacy. This Privacy Policy explains
              what information we collect, how we use it, and the choices you have. It applies to our website,
              contact forms, career applications, and related services (collectively, the “Site”).
            </p>
          </div>

          {/* Sections */}
          <article className="mt-8 space-y-6">
            <Section
              title="1) Information We Collect"
              delay={100}
              body={
                <>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <span className="font-medium">Contact data</span>: name, email, phone, company, and message details
                      you submit via forms.
                    </li>
                    <li>
                      <span className="font-medium">Application data</span>: resume/CV, work history, skills, links
                      (e.g., LinkedIn), and answers to application questions.
                    </li>
                    <li>
                      <span className="font-medium">Usage data</span>: pages viewed, device/browser info, approximate
                      location, and referrers (via cookies or similar technologies).
                    </li>
                    <li>
                      <span className="font-medium">Contract data</span>: project correspondence and files you share with
                      us during an engagement.
                    </li>
                  </ul>
                </>
              }
            />

            <Section
              title="2) How We Use Information"
              delay={150}
              body={
                <ul className="list-disc ml-6 space-y-1">
                  <li>Respond to inquiries, schedule meetings, and provide customer support.</li>
                  <li>Evaluate candidates and manage recruiting processes.</li>
                  <li>Operate, secure, analyze, and improve the Site and our services.</li>
                  <li>Comply with legal obligations and enforce our Terms of Use.</li>
                  <li>With your consent, send updates or marketing communications (you can opt out anytime).</li>
                </ul>
              }
            />

            <Section
              title="3) Legal Bases (where applicable)"
              delay={200}
              body={
                <ul className="list-disc ml-6 space-y-1">
                  <li><span className="font-medium">Consent</span> (e.g., marketing, cookies where required).</li>
                  <li><span className="font-medium">Contract</span> (to take steps at your request or perform an agreement).</li>
                  <li><span className="font-medium">Legitimate interests</span> (site security, analytics, service improvement).</li>
                  <li><span className="font-medium">Legal obligations</span> (record-keeping, compliance, safeguarding).</li>
                </ul>
              }
            />

            <Section
              title="4) Cookies & Analytics"
              delay={250}
              body={
                <>
                  <p>
                    We use cookies and similar technologies to remember preferences and understand Site usage. You can
                    control cookies in your browser settings and—where available—via our cookie preferences link.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Note: blocking cookies may affect Site functionality.
                  </p>
                </>
              }
            />

            <Section
              title="5) Sharing of Information"
              delay={300}
              body={
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    <span className="font-medium">Service providers</span> who process data for us (e.g., hosting,
                    analytics, applicant tracking) under confidentiality agreements.
                  </li>
                  <li>
                    <span className="font-medium">Legal reasons</span> (to comply with law, protect rights, safety, or
                    investigate fraud/abuse).
                  </li>
                  <li>
                    <span className="font-medium">Business changes</span> (merger, acquisition, or asset transfer).
                  </li>
                  <li>We do not sell personal information.</li>
                </ul>
              }
            />

            <Section
              title="6) Data Retention"
              delay={350}
              body={
                <>
                  <p>
                    We keep personal data only as long as necessary for the purposes in this Policy, to comply with legal
                    obligations, resolve disputes, and enforce agreements. Retention periods vary by record type.
                  </p>
                </>
              }
            />

            <Section
              title="7) Your Rights & Choices"
              delay={400}
              body={
                <>
                  <p>
                    Depending on your location, you may have rights to access, correct, delete, or receive a copy of your
                    personal data, restrict or object to processing, and withdraw consent. You can also opt out of
                    marketing at any time.
                  </p>
                  <p className="mt-2">
                    To exercise rights, contact{' '}
                    <a className="text-primary underline" href="mailto:privacy@thehillengroup.net">
                      privacy@thehillengroup.net
                    </a>
                    . We may need to verify your identity before responding.
                  </p>
                </>
              }
            />

            <Section
              title="8) Security"
              delay={450}
              body={
                <>
                  <p>
                    We use administrative, technical, and physical safeguards designed to protect personal information.
                    No method of transmission or storage is completely secure; please use caution when sharing data online.
                  </p>
                </>
              }
            />

            <Section
              title="9) Children's Privacy"
              delay={500}
              body={
                <p>
                  The Site is not directed to children under 13 (or the age of consent in your region). We do not
                  knowingly collect personal information from children. If you believe a child has provided us data, please
                  contact us and we will take appropriate steps to remove it.
                </p>
              }
            />

            <Section
              title="10) International Transfers"
              delay={550}
              body={
                <p>
                  We may process information in countries other than where you live. Where required, we implement
                  appropriate safeguards for cross-border transfers, such as standard contractual clauses.
                </p>
              }
            />

            <Section
              title="11) Links to Other Sites"
              delay={600}
              body={
                <p>
                  Our Site may link to third-party websites. We are not responsible for their privacy practices. We
                  encourage you to review their policies.
                </p>
              }
            />

            <Section
              title="12) Changes to This Policy"
              delay={650}
              body={
                <p>
                  We may update this Policy from time to time. Changes take effect when posted on this page. If changes
                  are material, we may provide additional notice.
                </p>
              }
            />

            <Section
              title="13) Contact Us"
              delay={700}
              body={
                <div>
                  <p>Questions or requests? Contact our privacy team:</p>
                  <ul className="list-none ml-0 mt-2">
                    <li>
                      <span className="font-medium">Email:</span>{' '}
                      <a className="text-primary underline" href="mailto:privacy@thehillengroup.net">
                        privacy@thehillengroup.net
                      </a>
                    </li>
                    <li className="mt-1">
                      <span className="font-medium">Mail:</span> The Hillen Group — Privacy<br />
                      6865 Deerpath Road<br />Suite 101<br />Elkridge, MD 21075
                    </li>
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
