// src/pages/Apply.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AOS from 'aos';
import emailjs from '@emailjs/browser';

import Breadcrumbs from '../components/ui/Breadcrumbs';
import PageHero from '../components/ui/PageHero';
import ScrollToTop from '../components/ScrollToTop';

export default function Apply() {
  const location = useLocation();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  // job id from query param
  const jobId = (() => {
    try {
      return new URLSearchParams(location.search).get('jobId') || '';
    } catch {
      return '';
    }
  })();

  // resolved job title (fetched from /data/jobs.json)
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    document.title = 'Apply | The Hillen Group';

    const prefersReduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      once: true,
      duration: prefersReduce ? 0 : 800,
      easing: 'ease-out-quart',
      disable: prefersReduce,
    });
  }, [location.search]);

  // Lookup the job title from the same jobs feed used by the Careers page
  useEffect(() => {
    let aborted = false;

    async function loadTitle() {
      // If no jobId, treat as general application
      if (!jobId) {
        setJobTitle('');
        return;
      }
      try {
        const res = await fetch('/data/jobs.json', {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const list = Array.isArray(json.jobs) ? json.jobs : [];
        const match = list.find((j) => (j.id || '').toString() === jobId);
        if (!aborted) setJobTitle(match?.title || jobId); // fallback to id if not found
      } catch {
        if (!aborted) setJobTitle(jobId); // fallback to id on error
      }
    }

    loadTitle();
    return () => {
      aborted = true;
    };
  }, [jobId]);

  function onSubmit(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);
    const form = e.currentTarget;
    // Honeypot
    if (form.website && form.website.value) {
      setLoading(false);
      return;
    }

    // Enforce a safe attachment size to avoid 413 errors from EmailJS
    const MAX_FILE_BYTES = 2 * 1024 * 1024; // 2 MB
    const fileInput = form.my_file;
    const file = fileInput && fileInput.files && fileInput.files[0];
    if (file && file.size > MAX_FILE_BYTES) {
      setLoading(false);
      const mb = (file.size / (1024 * 1024)).toFixed(2);
      setErr(`Your resume is ${mb} MB. Maximum allowed is 2 MB. Please upload a smaller file (PDF/DOC) or include a link in the Portfolio field.`);
      fileInput.focus();
      return;
    }

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID =
      process.env.REACT_APP_EMAILJS_APPLY_TEMPLATE_ID ||
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setLoading(false);
      alert('Apply email service is not configured. Please add REACT_APP_EMAILJS_* keys.');
      return;
    }

    // sendForm captures all inputs, including file attachments (resume)
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      .then(() => {
        setLoading(false);
        setSent(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => AOS.refresh(), 0);
      })
      .catch((err) => {
        console.error('EmailJS apply error', err);
        setLoading(false);
        setErr('Sorry, we could not submit your application right now. Please try again or email careers@thehillengroup.net');
      });
  }

  const heroDescription =
    jobId && jobTitle
      ? `You're applying for: ${jobTitle}`
      : 'Tell us about your experience and interests.';

  return (
    <main className="bg-bg text-dark">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/home' },
          { label: 'Careers', to: '/careers' },
          { label: 'Apply' },
        ]}
      />

      {/* Page hero */}
      <PageHero
        title="Apply"
        accent="Now"
        description={heroDescription}
        gradientFrom="from-teal-50/70"
      />

      {/* Form */}
      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white border rounded-xl p-6 md:p-8 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {sent ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Thanks — application received! ✅</h2>
                <p className="mt-2 text-gray-700">
                  We&apos;ll follow up soon. You can also browse{' '}
                  <Link className="text-primary underline" to="/careers">
                    other open roles
                  </Link>
                  .
                </p>
                <button
                  className="mt-4 inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95"
                  onClick={() => setSent(false)}
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate encType="multipart/form-data">
                {/* Honeypot anti-spam field */}
                <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />
                {/* Include job context for the email template */}
                <input type="hidden" name="jobId" value={jobId} />
                <input type="hidden" name="jobTitle" value={jobTitle} />
                <input type="hidden" name="page" value={typeof window !== 'undefined' ? window.location.href : ''} />

                {jobId && jobTitle && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1.5 text-sm">
                    Applying for: <span className="font-semibold">{jobTitle}</span>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium">Full Name</label>
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
                    <label htmlFor="location" className="font-medium">Location</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City, State or Remote"
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="linkedin" className="font-medium">LinkedIn (optional)</label>
                    <input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      placeholder="https://www.linkedin.com/in/username"
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="resume" className="font-medium">Resume/CV <span className="text-gray-500 text-sm">(max 2&nbsp;MB)</span></label>
                    <input
                      id="resume"
                      name="my_file[]" /* EmailJS attachment; [] supports single or multiple */
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="mt-1 rounded-md border px-3 py-2 file:mr-3 file:rounded-md file:border file:px-3 file:py-1.5 file:bg-gray-50 hover:file:bg-gray-100"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="portfolio" className="font-medium">Portfolio (optional)</label>
                    <input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="https://your-portfolio.example.com"
                      className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="message" className="font-medium">Cover Letter / Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="mt-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us about your experience, interests, and why you're a fit."
                  />
                </div>

                {err && (
                  <p className="mt-3 text-red-600" role="alert">{err}</p>
                )}

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95 disabled:opacity-60"
                  >
                    {loading ? 'Submitting…' : 'Submit Application'}
                  </button>
                  <Link
                    to="/careers"
                    className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
                  >
                    View All Roles
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Back-to-top (same configuration as Industries) */}
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
