// src/pages/Apply.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function bytesToSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.min(3, Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
}
const isEmail = (v) => /^\S+@\S+\.\S+$/.test(v);

export default function Apply() {
  const [searchParams] = useSearchParams();
  const preselectId = searchParams.get('jobId') || '';
  const navigate = useNavigate();

  // feed
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState('');

  // form
  const [jobId, setJobId] = useState(preselectId);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState(null);

  // ui
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErr, setFormErr] = useState('');
  const [fieldErrs, setFieldErrs] = useState({}); // {field: 'msg'}

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setLoadErr('');
        const res = await fetch('/data/jobs.json', {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!alive) return;
        const list = Array.isArray(json.jobs) ? json.jobs : [];
        setJobs(list);
        if (preselectId && !list.some((j) => j.id === preselectId)) {
          setJobId('');
        }
      } catch (e) {
        if (alive) setLoadErr(e.message || 'Failed to load jobs.');
      } finally {
        if (alive) {
          setLoading(false);
          setTimeout(() => AOS.refreshHard(), 0);
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, [preselectId]);

  const selectedJob = useMemo(
    () => jobs.find((j) => j.id === jobId) || null,
    [jobs, jobId]
  );

  // JSON-LD for selected job
  const jobPostingLd = useMemo(() => {
    if (!selectedJob) return null;
    const base =
      typeof window !== 'undefined' ? window.location.origin : 'https://thehillengroup.net';
    const tele = (selectedJob.location || '').toLowerCase().includes('remote');
    return {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: selectedJob.title,
      description: selectedJob.summary,
      datePosted: selectedJob.postedAt || new Date().toISOString().slice(0, 10),
      employmentType: selectedJob.type || 'FULL_TIME',
      hiringOrganization: { '@type': 'Organization', name: 'The Hillen Group', url: base },
      ...(tele ? { jobLocationType: 'TELECOMMUTE' } : { jobLocationType: 'ON_SITE' }),
      directApply: true,
      url: `${base}/apply?jobId=${encodeURIComponent(selectedJob.id)}`,
    };
  }, [selectedJob]);

  // --- resume handling ---
  const acceptMimes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  const maxBytes = 10 * 1024 * 1024; // 10MB

  function applyResumeFile(file) {
    if (!file) {
      setResume(null);
      return;
    }
    if (!acceptMimes.includes(file.type)) {
      setFormErr('Please upload a PDF, DOC, or DOCX.');
      setResume(null);
      return;
    }
    if (file.size > maxBytes) {
      setFormErr('File must be 10MB or less.');
      setResume(null);
      return;
    }
    setFormErr('');
    setResume(file);
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    applyResumeFile(f);
  }
  function onDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }
  function onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }
  function onFileChange(e) {
    const f = e.target.files?.[0];
    applyResumeFile(f);
  }

  // --- validation + submit (no backend yet) ---
  function validate() {
    const errs = {};
    if (!jobId) errs.jobId = 'Select the position you’re applying for.';
    if (!fullName.trim()) errs.fullName = 'Enter your full name.';
    if (!email.trim() || !isEmail(email)) errs.email = 'Enter a valid email.';
    if (!resume) errs.resume = 'Attach your resume.';
    setFieldErrs(errs);
    return Object.keys(errs).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setFormErr('');
    if (!validate()) {
      setFormErr('Please fix the highlighted fields and try again.');
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      AOS.refresh();
    }, 50);
  }

  function resetForm() {
    setFullName('');
    setEmail('');
    setPhone('');
    setLinkedin('');
    setMessage('');
    setResume(null);
    setFieldErrs({});
    setFormErr('');
    setSubmitted(false);
  }

  // Loading & error states
  if (loading) {
    return (
      <section className="py-20 px-4 bg-bg text-dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6" data-aos="fade-up">
            Apply Now
          </h1>
          <div className="bg-white border rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
            Loading positions…
          </div>
        </div>
      </section>
    );
  }
  if (loadErr) {
    return (
      <section className="py-20 px-4 bg-bg text-dark">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold" data-aos="fade-up">
            Apply Now
          </h1>
          <p className="text-red-600" data-aos="fade-up" data-aos-delay="100">
            Could not load positions ({loadErr}).
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95"
          >
            View Careers
          </Link>
        </div>
      </section>
    );
  }

  // Success screen
  if (submitted) {
    return (
      <section className="py-20 px-4 bg-bg text-dark">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="bg-white border rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Application prepared!</h1>
                <p className="text-gray-600 mt-1">
                  We’ve captured your details for <span className="font-medium">{selectedJob?.title || '—'}</span>.
                  We’ll wire this to submit to HR next.
                </p>
                <div className="mt-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Name:</span> {fullName || '—'}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {email || '—'}
                  </div>
                  {phone && (
                    <div>
                      <span className="font-medium">Phone:</span> {phone}
                    </div>
                  )}
                  {linkedin && (
                    <div>
                      <span className="font-medium">Profile:</span> {linkedin}
                    </div>
                  )}
                  {resume && (
                    <div className="mt-1">
                      <span className="font-medium">Resume:</span> {resume.name} ({bytesToSize(resume.size)})
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    className="inline-flex items-center rounded-md bg-teal-600 px-5 py-2.5 font-semibold text-white hover:brightness-110"
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    Apply to another role
                  </button>
                  <Link
                    to="/careers"
                    className="inline-flex items-center rounded-md border px-5 py-2.5 hover:bg-gray-50"
                  >
                    Back to Careers
                  </Link>
                  <button
                    className="inline-flex items-center rounded-md border px-5 py-2.5 hover:bg-gray-50"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {jobPostingLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingLd) }}
          />
        )}
      </section>
    );
  }

  // Main form
  return (
    <section className="py-20 px-4 bg-bg text-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold">Apply Now</h1>
          <p className="text-gray-600 mt-2">Submit your application for the role below.</p>
        </div>

        {/* Role summary + selector */}
        <div className="bg-white border rounded-xl p-5 md:p-6 mb-6" data-aos="fade-up" data-aos-delay="50">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Position</div>
              <div className="text-xl font-semibold">
                {selectedJob ? selectedJob.title : 'Select a position'}
              </div>
              {fieldErrs.jobId && (
                <div className="text-sm text-red-600 mt-1" role="alert">
                  {fieldErrs.jobId}
                </div>
              )}
            </div>
            <div className="w-full md:w-80">
              <label className="block text-sm text-gray-600 mb-1">Select position</label>
              <select
                value={jobId}
                onChange={(e) => setJobId(e.target.value)}
                className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent ${
                  fieldErrs.jobId ? 'border-red-400' : ''
                }`}
              >
                <option value="" disabled>
                  Select a role…
                </option>
                {jobs.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white border rounded-xl p-5 md:p-6 space-y-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* top-level alert */}
          {formErr && (
            <div
              className="rounded-md bg-red-50 border border-red-200 text-red-700 px-3 py-2"
              role="alert"
              aria-live="assertive"
            >
              {formErr}
            </div>
          )}

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name *</label>
              <input
                type="text"
                className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent ${
                  fieldErrs.fullName ? 'border-red-400' : ''
                }`}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                aria-invalid={!!fieldErrs.fullName}
                aria-describedby={fieldErrs.fullName ? 'err-fullName' : undefined}
              />
              {fieldErrs.fullName && (
                <div id="err-fullName" className="text-xs text-red-600 mt-1">
                  {fieldErrs.fullName}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email *</label>
              <input
                type="email"
                className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent ${
                  fieldErrs.email ? 'border-red-400' : ''
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                aria-invalid={!!fieldErrs.email}
                aria-describedby={fieldErrs.email ? 'err-email' : undefined}
              />
              {fieldErrs.email && (
                <div id="err-email" className="text-xs text-red-600 mt-1">
                  {fieldErrs.email}
                </div>
              )}
            </div>
          </div>

          {/* Phone + Profile */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">LinkedIn / Portfolio</label>
              <input
                type="url"
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Cover Letter / Message</label>
            <textarea
              rows={5}
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly tell us why you're a great fit."
            />
          </div>

          {/* Drag & Drop Resume */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Resume (PDF, DOC, DOCX) *</label>

            <div
              onDragOver={onDrag}
              onDragEnter={onDrag}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={[
                'relative rounded-lg border-2 border-dashed p-5 md:p-6 text-center transition',
                dragOver
                  ? 'border-accent bg-accent/5'
                  : fieldErrs.resume
                  ? 'border-red-400'
                  : 'border-gray-300 hover:border-gray-400',
              ].join(' ')}
              aria-label="Drag and drop resume here"
            >
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={onFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                aria-describedby={fieldErrs.resume ? 'err-resume' : undefined}
              />
              <div className="pointer-events-none">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 16V4m0 0l-3.5 3.5M12 4l3.5 3.5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
                  </svg>
                  {!resume ? (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Drag & drop</span> your resume here, or{' '}
                      <span className="font-medium">click to browse</span>.
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-gray-700">
                      Selected: <span className="font-medium">{resume.name}</span> ({bytesToSize(resume.size)})
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">Accepted types: PDF, DOC, DOCX (max 10MB)</p>
                </div>
              </div>
            </div>

            {fieldErrs.resume && (
              <div id="err-resume" className="text-xs text-red-600 mt-1">
                {fieldErrs.resume}
              </div>
            )}

            {resume && (
              <div className="mt-3 flex items-center justify-between rounded-md border bg-gray-50 px-3 py-2">
                <div className="text-sm text-gray-700 truncate">
                  <span className="font-medium">{resume.name}</span>
                  <span className="text-gray-500"> — {bytesToSize(resume.size)}</span>
                </div>
                <button type="button" className="text-sm text-red-600 hover:underline" onClick={() => setResume(null)}>
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className={`inline-flex items-center rounded-md px-5 py-2.5 font-semibold text-white transition ${
                submitting ? 'bg-teal-400 cursor-wait' : 'bg-teal-600 hover:brightness-110'
              }`}
            >
              {submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z"
                    ></path>
                  </svg>
                  Submitting…
                </>
              ) : (
                'Submit Application'
              )}
            </button>

            <Link to="/careers" className="inline-flex items-center rounded-md border px-5 py-2.5 hover:bg-gray-50">
              Back to Careers
            </Link>
          </div>
        </form>
      </div>

      {jobPostingLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingLd) }} />
      )}
    </section>
  );
}
