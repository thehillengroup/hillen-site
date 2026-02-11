// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/The-Hillen-White-logo.png';

const cn = (...c) => c.filter(Boolean).join(' ');

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const overlayRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastActiveElementRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  // Mobile menu: focus management + trap + Esc + scroll lock
  useEffect(() => {
    if (!mobileOpen) return;

    // Save focus and lock scroll
    lastActiveElementRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    // Focus first nav link when menu opens
    requestAnimationFrame(() => {
      firstLinkRef.current?.focus?.();
    });

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }

      // Basic focus trap
      if (e.key === 'Tab') {
        const focusables = overlayRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Restore focus to what was active (usually hamburger) after closing
  useEffect(() => {
    if (mobileOpen) return;
    lastActiveElementRef.current?.focus?.();
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-dark text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo (center on mobile) */}
          <Link to="/" className="flex flex-1 justify-center lg:justify-start">
            <img
              src={logo}
              alt="The Hillen Group"
              className="h-20 w-auto transition-transform hover:scale-[1.01]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-white/90 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 rounded',
                    isActive && 'text-accent'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side actions (desktop) */}
          <div className="hidden items-center gap-4 lg:flex ml-8">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-[10px] bg-accent px-6 py-2 text-dark font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger (right) */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileOpen ? (
              <svg className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 z-40 bg-dark/95 text-white backdrop-blur-md transition-opacity duration-200',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
        onClick={(e) => {
          // Click outside closes
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6">
          {/* top row with logo + close */}
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="The Hillen Group" className="h-16 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          {/* links */}
          <nav className="mt-4 flex-1 overflow-y-auto">
            <ul className="space-y-4 text-2xl">
              {NAV_ITEMS.map((item, idx) => (
                <li key={item.to}>
                  <NavLink
                    // focus first item on open
                    ref={idx === 0 ? firstLinkRef : undefined}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-md px-2 py-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50',
                        isActive && 'bg-white/10 text-accent'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact button only on mobile */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-[10px] bg-accent px-6 py-3 text-dark font-semibold hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
