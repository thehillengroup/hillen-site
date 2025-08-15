import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/The-Hillen-White-logo.png';

const cn = (...c) => c.filter(Boolean).join(' ');

// ---- Demo 1: Glass Mega Menu (hover/focus mega panel) -----------------------
function GlassMegaNav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <header className="relative" ref={wrapRef}>
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 rounded-2xl border border-white/30 bg-white/60 px-4 py-3 shadow-xl backdrop-blur-md">
        <Link to="/home" className="group flex items-center gap-3">
          <img src={logo} alt="The Hillen Group" className="h-12 w-auto transition-transform group-hover:scale-[1.03]" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link to="/about" className="px-3 py-2 rounded-md hover:text-accent">About</Link>

          {/* Services with mega panel */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className={cn(
                'px-3 py-2 rounded-md hover:text-accent transition',
                open && 'text-accent'
              )}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="menu"
            >
              Services
            </button>

            {/* Mega panel */}
            <div
              className={cn(
                'absolute left-1/2 z-50 mt-2 w-[720px] -translate-x-1/2 rounded-2xl border bg-white/90 p-6 shadow-2xl backdrop-blur-md',
                open ? 'block' : 'hidden'
              )}
            >
              <div className="grid grid-cols-3 gap-6 text-sm">
                <MegaItem title="Web Apps" to="/services#web-apps" desc="React, Node, APIs, auth, dashboards." />
                <MegaItem title="Mobile" to="/services#mobile" desc="React Native iOS/Android builds." />
                <MegaItem title="Design" to="/services#ux" desc="UX/UI, prototyping, design systems." />
                <MegaItem title="Cloud & DevOps" to="/services#cloud" desc="CI/CD, containers, infra." />
                <MegaItem title="Maintenance" to="/services#maintenance" desc="Support, uptime, security." />
                <MegaItem title="Planning" to="/services#planning" desc="Discovery, roadmaps, delivery." />
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-teal-50 to-amber-50 p-4">
                <div className="text-sm">
                  <div className="font-semibold">Not sure where to start?</div>
                  <div className="text-gray-600">We&apos;ll help you pick the right path.</div>
                </div>
                <Link to="/contact" className="rounded-md bg-accent px-4 py-2 font-semibold text-dark hover:brightness-95">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>

          <Link to="/portfolio" className="px-3 py-2 rounded-md hover:text-accent">Portfolio</Link>

          {/* Company dropdown */}
          <Dropdown label="Company">
            <DropdownLink to="/about">About</DropdownLink>
            <DropdownLink to="/careers">Careers</DropdownLink>
            <DropdownLink to="/testimonials">Testimonials</DropdownLink>
          </Dropdown>

          <Link to="/contact" className="ml-2 rounded-md bg-accent px-4 py-2 text-dark hover:brightness-95">Contact</Link>
        </nav>

        {/* Mobile toggle (visual only for mock) */}
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/50 text-dark">
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h12M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function MegaItem({ title, desc, to }) {
  return (
    <Link to={to} className="group block rounded-lg p-3 hover:bg-gray-50">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-100 text-teal-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="12" r="8" /></svg>
        </span>
        <div className="font-semibold group-hover:text-accent">{title}</div>
      </div>
      <div className="mt-1 pl-10 text-gray-600">{desc}</div>
    </Link>
  );
}

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        className={cn('px-3 py-2 rounded-md hover:text-accent transition', open && 'text-accent')}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {label}
      </button>
      <div className={cn('absolute right-0 z-50 mt-2 w-56 rounded-xl border bg-white p-2 shadow-xl', open ? 'block' : 'hidden')}>
        <ul className="space-y-1">{children}</ul>
      </div>
    </div>
  );
}
function DropdownLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50">
        {children}
      </Link>
    </li>
  );
}

// ---- Demo 2: Center “Pill Dock” (minimal, glass pill, CTA) -------------------
function PillDockNav() {
  return (
    <header className="relative">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <Link to="/home" className="flex items-center gap-3">
          <img src={logo} alt="The Hillen Group" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center">
          <nav className="rounded-full border border-white/30 bg-white/60 px-2 py-1 shadow-lg backdrop-blur-md">
            <ul className="flex items-center text-sm">
              <PillLink to="/home">Home</PillLink>
              <PillLink to="/about">About</PillLink>
              <PillLink to="/services">Services</PillLink>
              <PillLink to="/portfolio">Portfolio</PillLink>
              <PillLink to="/careers">Careers</PillLink>
            </ul>
          </nav>
          <Link to="/contact" className="ml-4 rounded-full bg-accent px-5 py-2 text-dark font-semibold hover:brightness-95">
            Start a project
          </Link>
        </div>

        <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h12M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
function PillLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="mx-1 inline-flex items-center rounded-full px-4 py-2 text-dark hover:bg-white/70 hover:text-teal-700 transition"
      >
        {children}
      </Link>
    </li>
  );
}

// ---- Demo 3: Split + Bottom Tabs (mobile-first) ------------------------------
function SplitBottomNav() {
  return (
    <>
      {/* Desktop top bar */}
      <header className="hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
          <Link to="/home" className="flex items-center gap-3">
            <img src={logo} alt="The Hillen Group" className="h-10 w-auto" />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/about" className="hover:text-accent">About</Link>
            <Link to="/services" className="hover:text-accent">Services</Link>
            <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
            <Link to="/careers" className="hover:text-accent">Careers</Link>
            <Link to="/contact" className="rounded-md bg-accent px-4 py-2 text-dark hover:brightness-95">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto w-[92%] max-w-md rounded-2xl border bg-white/90 px-2 py-1 shadow-2xl backdrop-blur-md md:hidden">
        <ul className="grid grid-cols-5 text-[12px] text-gray-700">
          <Tab to="/home" label="Home" icon={<HouseIcon />} />
          <Tab to="/services" label="Services" icon={<WrenchIcon />} />
          <Tab to="/portfolio" label="Work" icon={<SparkIcon />} />
          <Tab to="/careers" label="Jobs" icon={<BriefcaseIcon />} />
          <Tab to="/contact" label="Contact" icon={<ChatIcon />} />
        </ul>
      </nav>
    </>
  );
}
function Tab({ to, label, icon }) {
  return (
    <li>
      <Link to={to} className="group flex flex-col items-center justify-center rounded-xl px-2 py-2 hover:bg-gray-50">
        <span className="text-gray-700 group-hover:text-teal-700">{icon}</span>
        <span className="mt-1 text-[11px] group-hover:text-teal-700">{label}</span>
      </Link>
    </li>
  );
}

// tiny inline icons
function HouseIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 10.5l9-7 9 7" /><path d="M5 9.5v10h14v-10" /></svg>; }
function WrenchIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 7a5 5 0 11-7 7l-3 3 3 3 3-3a5 5 0 007-7z" /></svg>; }
function SparkIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2z" /></svg>; }
function BriefcaseIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /><path d="M3 12h18" /></svg>; }
function ChatIcon() { return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 10-3 6l4 1-1-4a7.9 7.9 0 000-3z" /></svg>; }

// ---- Showcase wrapper (renders all three) -----------------------------------
export default function NavMockups() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-bold mb-6">Navigation Mockups</h1>

        <DemoCard title="Glass Mega Menu (desktop hover, CTA strip)">
          <GlassMegaNav />
          <DemoHint>Hover “Services” to see the mega menu panel.</DemoHint>
        </DemoCard>

        <DemoCard title="Centered Pill Dock (clean & minimal)">
          <PillDockNav />
          <DemoHint>Great for 5–6 links + a strong CTA.</DemoHint>
        </DemoCard>

        <DemoCard title="Split Desktop + Mobile Bottom Tabs">
          <SplitBottomNav />
          <DemoHint>Open on mobile to see the floating tab bar.</DemoHint>
        </DemoCard>
      </div>
    </section>
  );
}

function DemoCard({ title, children }) {
  return (
    <div className="mb-10 rounded-2xl border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="relative rounded-xl border bg-gradient-to-br from-white to-slate-50 p-4">
        {children}
      </div>
    </div>
  );
}
function DemoHint({ children }) {
  return <p className="mt-3 text-sm text-gray-600">{children}</p>;
}
