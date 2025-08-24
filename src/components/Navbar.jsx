// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/images/The-Hillen-White-logo.png';

const cn = (...c) => c.filter(Boolean).join(' ');

const NAV_ITEMS = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/careers', label: 'Careers' },
];

// tiny lock icon
function LockIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 10V7a5 5 0 1110 0v3" />
      <rect x="5" y="10" width="14" height="10" rx="2" />
    </svg>
  );
}

export default function Navbar() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[9999] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-dark"
      >
        Skip to content
      </a>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-dark text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo (center on mobile) */}
          <Link to="/home" className="flex flex-1 justify-center lg:justify-start">
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
                    'text-white/90 hover:text-accent transition-colors',
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
            {/* Outline Login/Logout (matches design) */}
            {!isLoading && (
              <button
                onClick={() =>
                  isAuthenticated
                    ? logout({ logoutParams: { returnTo: window.location.origin } })
                    : loginWithRedirect()
                }
                className={cn(
                  'inline-flex items-center gap-2 rounded-[10px] px-5 py-2',
                  'border border-white/40 text-white bg-transparent',
                  'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40'
                )}
                aria-label={isAuthenticated ? 'Log out' : 'Log in'}
              >
                <LockIcon className="h-4 w-4" />
                {isAuthenticated ? 'Logout' : 'Login'}
              </button>
            )}

            {/* Solid Contact */}
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
            onClick={() => setMobileOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
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
        className={cn(
          'fixed inset-0 z-40 bg-dark/95 text-white backdrop-blur-md transition-opacity duration-200',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6">
          {/* top row with logo + close */}
          <div className="mb-6 flex items-center justify-between">
            <Link to="/home" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="The Hillen Group" className="h-16 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 text-white"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          {/* links */}
          <nav className="mt-4 flex-1 overflow-y-auto">
            <ul className="space-y-4 text-2xl">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-md px-2 py-2 hover:bg-white/10',
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

          {/* auth + contact on mobile, styled to match */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            {!isLoading && (
              <button
                onClick={() =>
                  isAuthenticated
                    ? logout({ logoutParams: { returnTo: window.location.origin } })
                    : loginWithRedirect()
                }
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3',
                  'border border-white/40 text-white bg-transparent',
                  'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40'
                )}
                aria-label={isAuthenticated ? 'Log out' : 'Log in'}
              >
                <LockIcon className="h-4 w-4" />
                {isAuthenticated ? 'Logout' : 'Login'}
              </button>
            )}

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
