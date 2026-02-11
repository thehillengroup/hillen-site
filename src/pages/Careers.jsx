// src/pages/Careers.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import ScrollToTop from '../components/ScrollToTop';
import PrintButton from '../components/ui/PrintButton';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  // filters
  const [q, setQ] = useState('');
  const [dept, setDept] = useState('All');
  const [loc, setLoc] = useState('All');
  const [type, setType] = useState('All');

  // init AOS
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  // fetch jobs
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setErr('');
        const res = await fetch('/data/jobs.json', {
          signal: controller.signal,
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setJobs(Array.isArray(json.jobs) ? json.jobs : []);
        setUpdatedAt(json.updatedAt || null);
      } catch (e) {
        if (e.name !== 'AbortError') setErr(e.message || 'Failed to load jobs.');
      } finally {
        setLoading(false);
        setTimeout(() => AOS.refreshHard(), 0);
      }
    })();
    return () => controller.abort();
  }, []);

  // build select options from feed
  const selects = useMemo(() => {
    const depts = new Set();
    const locs = new Set();
    const types = new Set();
    jobs.forEach((j) => {
      if (j.dept) depts.add(j.dept);
      if (j.location) locs.add(j.location);
      if (j.type) types.add(j.type);
    });
    const toArr = (s) => ['All', ...Array.from(s).sort()];
    return {
      dept: toArr(depts),
      location: toArr(locs),
      type: toArr(types),
    };
  }, [jobs]);

  // derived data
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchesQ =
        !query ||
        j.title?.toLowerCase().includes(query) ||
        j.summary?.toLowerCase().includes(query) ||
        (Array.isArray(j.tags) && j.tags.join(' ').toLowerCase().includes(query));
      const matchesDept = dept === 'All' || j.dept === dept;
      const matchesLoc = loc === 'All' || j.location === loc;
      const matchesType = type === 'All' || j.type === type;
      return matchesQ && matchesDept && matchesLoc && matchesType;
    });
  }, [jobs, q, dept, loc, type]);

  const totalOpen = jobs.length;
  const remoteCount = jobs.filter((j) => (j.location || '').toLowerCase().startsWith('remote')).length;

  // JobPosting JSON-LD graph (up to 25 roles)
  const jobGraph = useMemo(() => {
    if (!jobs.length) return [];
    const base = typeof window !== 'undefined' ? window.location.origin : 'https://thehillengroup.net';
    const org = {
      '@type': 'Organization',
      name: 'The Hillen Group',
      url: base,
    };
    const mapLoc = (loc) => {
      if (!loc) return undefined;
      if ((loc || '').toLowerCase().includes('remote')) return { jobLocationType: 'TELECOMMUTE' };
      return {
        jobLocationType: 'ON_SITE',
        applicantLocationRequirements: { '@type': 'Country', name: 'USA' },
      };
    };
    return jobs.slice(0, 25).map((j) => ({
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: j.title,
      description: j.summary,
      datePosted: j.postedAt || new Date().toISOString().slice(0, 10),
      employmentType: j.type || 'FULL_TIME',
      hiringOrganization: org,
      identifier: { '@type': 'PropertyValue', name: 'THG', value: j.id || j.title },
      ...mapLoc(j.location),
      directApply: true,
      url: `${base}/apply?jobId=${encodeURIComponent(j.id || '')}`,
    }));
  }, [jobs]);

  // Loading
  if (loading) {
    return (
      <>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

        <section className="px-4 bg-bg text-dark">
          <div className="max-w-7xl mx-auto">
            <div className="no-print flex justify-end mb-2">
              <PrintButton />
            </div>
            <h1 className="text-4xl font-bold text-center mb-6" data-aos="fade-up">
              Careers
            </h1>
            <div className="bg-white border rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              Loading open roles…
            </div>
          </div>
        </section>

      <ScrollToTop
        disableRouteScroll
        showButton
        smooth
        buttonThreshold={420}
        minPageHeightRatio={1.2}
        buttonLabel="Top"
      />
      </>
    );
  }

  // Error
  if (err) {
    return (
      <>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

        <section className="px-4 bg-bg text-dark">
          <div className="no-print flex justify-end mb-2">
            <PrintButton />
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold" data-aos="fade-up">Careers</h1>
            <p className="text-red-600" data-aos="fade-up" data-aos-delay="100">
              Could not load jobs ({err}).
            </p>
            <button
              className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </section>

        {/* Back-to-top */}
      <ScrollToTop
        disableRouteScroll
        showButton
        smooth
        buttonThreshold={420}
        minPageHeightRatio={1.2}
        buttonLabel="Top"
      />
      </>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

      <section className="px-4 bg-bg text-dark">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="no-print flex justify-end mb-2">
            <PrintButton />
          </div>
          <div className="text-center mb-10" data-aos="fade-up">
            <h1 className="text-4xl font-bold">Careers</h1>
            <p className="text-gray-600 mt-2">
              Join The Hillen Group and help us build thoughtful, durable software.
            </p>
            <div className="no-print mt-4 flex items-center justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border">
                <strong>{totalOpen}</strong> open roles
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border">
                <strong>{remoteCount}</strong> remote
              </span>
              {updatedAt && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border">
                  Updated {new Date(updatedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>

          {/* Filters */}
          <div
            className="no-print bg-white border rounded-xl p-4 md:p-6 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-3 md:grid-cols-4">
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search roles, skills, or keywords…"
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                aria-label="Search jobs"
              />
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                aria-label="Filter by department"
              >
                {selects.dept.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <select
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                aria-label="Filter by location"
              >
                {selects.location.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
                aria-label="Filter by employment type"
              >
                {selects.type.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Jobs */}
          <div className="space-y-6">
            {filtered.map((job, idx) => (
              <JobCard key={job.id || idx} job={job} idx={idx} />
            ))}

            {filtered.length === 0 && (
              <div
                className="text-center text-gray-600 py-16 bg-white border rounded-xl"
                data-aos="fade-up"
              >
                No roles match your filters. Try clearing the search or selecting "All".
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center text-sm text-gray-600" data-aos="fade-up">
            Don&apos;t see the right role? Send your resume to{' '}
            <a
              className="text-primary underline"
              href="mailto:careers@thehillengroup.net?subject=General%20Application%20%E2%80%93%20The%20Hillen%20Group"
            >
              careers@thehillengroup.net
            </a>
            .
          </div>
        </div>

        {/* JSON-LD for job listings */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@graph': jobGraph }) }}
        />
      </section>

      {/* Back-to-top */}
      <ScrollToTop
        disableRouteScroll
        showButton
        smooth
        buttonThreshold={420}
        minPageHeightRatio={1.2}
        buttonLabel="Top"
      />
    </>
  );
}

function JobCard({ job, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow transition"
      data-aos="fade-up"
      data-aos-delay={100 + idx * 75}
    >
      <div className="p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <div className="mt-1 text-sm text-gray-600 flex flex-wrap gap-3">
              {job.dept && <span>{job.dept}</span>}
              {job.level && (
                <>
                  <span>•</span>
                  <span>{job.level}</span>
                </>
              )}
              {job.location && (
                <>
                  <span>•</span>
                  <span>{job.location}</span>
                </>
              )}
              {job.type && (
                <>
                  <span>•</span>
                  <span>{job.type}</span>
                </>
              )}
            </div>
          </div>
          <div className="no-print flex items-center gap-2">
            {job.id ? (
              <Link
                to={`/apply?jobId=${encodeURIComponent(job.id)}`}
                className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95"
              >
                Apply Now
              </Link>
            ) : (
              <button
                disabled
                className="inline-flex items-center rounded-md bg-gray-300 px-4 py-2 font-medium text-dark cursor-not-allowed"
                title="Missing job id"
              >
                Apply Now
              </button>
            )}
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
              aria-expanded={open}
              aria-controls={`${job.id}-panel`}
            >
              {open ? 'Hide Details' : 'View Details'}
            </button>
          </div>
        </div>

        {job.summary && <p className="mt-4 text-gray-700">{job.summary}</p>}

        {Array.isArray(job.tags) && job.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags.map((t, i) => (
              <span
                key={`${job.id}-tag-${i}`}
                className="text-xs rounded-full bg-blue-100 text-blue-700 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div
          id={`${job.id}-panel`}
          className="border-t grid gap-6 md:grid-cols-2 p-5 md:p-6 bg-gray-50"
        >
          {Array.isArray(job.responsibilities) && job.responsibilities.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Responsibilities</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {job.responsibilities.map((r, i) => (
                  <li key={`${job.id}-resp-${i}`}>{r}</li>
                ))}
              </ul>
            </div>
          )}
          {Array.isArray(job.requirements) && job.requirements.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Requirements</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {job.requirements.map((r, i) => (
                  <li key={`${job.id}-req-${i}`}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
