// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/The-Hillen-White-logo.png';

const cn = (...c) => c.filter(Boolean).join(' ');

// --- tiny inline icons for mobile tabs ---
function HomeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5l9-7 9 7" /><path d="M5 9.5v10h14v-10" />
    </svg>
  );
}
function ServicesIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 7a5 5 0 11-7 7l-3 3 3 3 3-3a5 5 0 007-7z" />
    </svg>
  );
}
function WorkIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2z" />
    </svg>
  );
}
function CareersIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}
function ContactIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12a8 8 0 10-3 6l4 1-1-4a7.9 7.9 0 000-3z" />
    </svg>
  );
}

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef(null);
  const location = useLocation();

  // close mega on route change
  useEffect(() => setMegaOpen(false), [location.pathname]);

  // close mega on outside click / ESC
  useEffect(() => {
    const onClick = (e) => {
      if (!megaRef.current) return;
      if (!megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setMegaOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {/* Sticky desktop header; on mobile we center the logo */}
      <header className="sticky top-0 z-50 bg-dark/95 text-white backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-md">
        <div className="mx-auto max-w-7xl flex items-center justify-center lg:justify-between px-4 py-4">
          {/* Centered logo on mobile, left-aligned on desktop */}
          <Link to="/home" className="flex items-center gap-3 mx-auto lg:mx-0">
            <img
              src={logo}
              alt="The Hillen Group"
              className="h-20 w-auto lg:h-24"
            />
          </Link>

          {/* Simple inline nav (desktop only) */}
          <nav className="hidden lg:flex items-center gap-10 text-base">
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/about">About</NavItem>

            {/* Services with mega menu */}
            <div
              className="relative"
              ref={megaRef}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  'text-white hover:text-[rgb(255,166,0)] transition',
                  megaOpen && 'text-[rgb(255,166,0)]'
                )}
                aria-haspopup="menu"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((v) => !v)}
              >
                Services
              </button>

              {/* Mega panel */}
              <div
                className={cn(
                  'absolute left-1/2 z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl border bg-white/95 p-6 shadow-2xl backdrop-blur-md',
                  megaOpen ? 'block' : 'hidden'
                )}
              >
                <div className="grid grid-cols-3 gap-6 text-sm text-dark">
                  <MegaItem title="Web Apps" to="/services#web-apps" desc="React, Node, APIs, auth, dashboards." />
                  <MegaItem title="Mobile" to="/services#mobile" desc="React Native iOS/Android builds." />
                  <MegaItem title="Design" to="/services#ux" desc="UX/UI, prototyping, design systems." />
                  <MegaItem title="Cloud & DevOps" to="/services#cloud" desc="CI/CD, containers, infra." />
                  <MegaItem title="Maintenance" to="/services#maintenance" desc="Support, uptime, security." />
                  <MegaItem title="Planning" to="/services#planning" desc="Discovery, roadmaps, delivery." />
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-teal-50 to-amber-50 p-4">
                  <div className="text-sm text-dark">
                    <div className="font-semibold">Not sure where to start?</div>
                    <div className="text-gray-700">We&apos;ll help you pick the right path.</div>
                  </div>
                  <Link to="/contact" className="rounded-md bg-[rgb(255,166,0)] px-4 py-2 font-semibold text-dark hover:brightness-95">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>

            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/careers">Careers</NavItem>

            <Link
              to="/contact"
              className="rounded-md bg-[rgb(255,166,0)] px-4 py-2 font-semibold text-dark hover:brightness-95"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Tabs */}
      <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto w-[92%] max-w-md rounded-2xl border border-white/40 bg-white/90 px-2 py-1 shadow-2xl backdrop-blur-md lg:hidden">
        <ul className="grid grid-cols-5 text-[12px] text-gray-700">
          <MobileTab to="/home" label="Home" active={isActive('/home')} icon={<HomeIcon />} />
          <MobileTab to="/services" label="Services" active={isActive('/services')} icon={<ServicesIcon />} />
          <MobileTab to="/portfolio" label="Work" active={isActive('/portfolio')} icon={<WorkIcon />} />
          <MobileTab to="/careers" label="Jobs" active={isActive('/careers')} icon={<CareersIcon />} />
          <MobileTab to="/contact" label="Contact" active={isActive('/contact')} icon={<ContactIcon />} />
        </ul>
      </nav>
    </>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'text-white hover:text-[rgb(255,166,0)] transition',
          isActive && 'font-semibold'
        )
      }
    >
      {children}
    </NavLink>
  );
}

function MegaItem({ title, desc, to }) {
  return (
    <Link to={to} className="group block rounded-lg p-3 hover:bg-gray-50">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-100 text-teal-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="12" r="8" /></svg>
        </span>
        <div className="font-semibold text-dark group-hover:text-teal-700">{title}</div>
      </div>
      <div className="mt-1 pl-10 text-gray-600">{desc}</div>
    </Link>
  );
}

function MobileTab({ to, label, icon, active }) {
  return (
    <li>
      <NavLink
        to={to}
        className={cn(
          'group flex flex-col items-center justify-center rounded-xl px-2 py-2 transition',
          active ? 'bg-white text-teal-700 shadow-sm' : 'hover:bg-gray-50'
        )}
      >
        <span className={cn('text-gray-700 group-hover:text-teal-700', active && 'text-teal-700')}>
          {icon}
        </span>
        <span className={cn('mt-1 text-[11px] text-gray-700 group-hover:text-teal-700', active && 'text-teal-700')}>
          {label}
        </span>
      </NavLink>
    </li>
  );
}
