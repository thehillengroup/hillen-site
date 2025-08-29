// src/pages/Contact.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    document.title = 'Contact | The Hillen Group';
    AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);

    // Demo-only: simulate async submit; replace with your API call if needed.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => AOS.refresh(), 0);
    }, 700);
  }

  return (
    <main className="bg-bg text-dark">
      <Breadcrumbs items={[{ label: 'Home', href: '/home' }, { label: 'Contact' }]} />

      <PageHero
        title="Get in"
        accent="Touch"
        description="Tell us about your mission and we’ll follow up quickly."
      />

      <section className="px-4">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Form */}
          <div
            className="bg-white border rounded-xl p-6 md:p-8 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {sent ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Thanks — we got it! ✅</h2>
                <p className="mt-2 text-gray-700">
                  We’ll reach out soon. If it’s urgent, email{' '}
                  <a className="text-primary underline" href="mailto:hello@thehillengroup.net">
                    hello@thehillengroup.net
                  </a>
                  .
                </p>
                <button
                  className="mt-4 inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                {/* Honeypot (spam trap) */}
                <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="company" className="font-medium">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject" className="font-medium">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="message" className="font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {err && (
                  <p className="mt-3 text-red-600" role="alert">
                    {err}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95 disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                  <a
                    href="mailto:hello@thehillengroup.net"
                    className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
                  >
                    Email Us Instead
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <aside
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Email:</span>{' '}
                  <a className="text-primary underline" href="mailto:hello@thehillengroup.net">
                    hello@thehillengroup.net
                  </a>
                </li>
                <li>
                  <span className="font-medium">Careers:</span>{' '}
                  <Link className="text-primary underline" to="/careers">
                    View open roles
                  </Link>
                </li>
                <li>
                  <span className="font-medium">Address:</span>{' '}
                  123 Example Ave, Suite 100, Washington, DC 20001
                </li>
                <li className="text-sm text-gray-600">Mon–Fri, 9am–6pm ET</li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-lg font-semibold">Resources</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="/docs/capabilities.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
                >
                  Capabilities PDF
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
