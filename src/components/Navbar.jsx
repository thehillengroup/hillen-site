// src/components/Navbar.jsx
import React, { Fragment, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dialog, Menu, Popover, Transition } from '@headlessui/react';
import Icon from './ui/Icon';
import { NAV } from '../config/nav';
import Picture from './media/Picture';
import logo from '../assets/images/The-Hillen-White-logo.png';

const cn = (...a) => a.filter(Boolean).join(' ');

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-dark/95 text-white backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-md">
        <div className="relative mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
          {/* Left: hamburger (mobile) */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-white hover:text-[rgb(255,166,0)] focus:outline-none focus:ring-2 focus:ring-[rgb(255,166,0)]"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Center: logo (Picture, slightly larger) */}
          <Link to="/home" className="flex items-center gap-3 mx-auto lg:mx-0" aria-label="The Hillen Group Home">
            <Picture alt="The Hillen Group" src={logo} imgClassName="h-20 w-auto lg:h-16" priority />
          </Link>

          {/* Right: Login (mobile) */}
          <Link
            to="/login"
            className="lg:hidden inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 hover:text-[rgb(255,166,0)] hover:border-[rgb(255,166,0)] focus:outline-none focus:ring-2 focus:ring-[rgb(255,166,0)]"
            aria-label="Login"
          >
            <Icon name="lock" className="h-4 w-4" />
            <span className="text-sm">Login</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-base" aria-label="Primary">
            {NAV.map((item) => {
              if (!item.type) return <TopLink key={item.label} to={item.to}>{item.label}</TopLink>;
              if (item.type === 'menu') return <TopMenu key={item.label} label={item.label} items={item.items} />;
              if (item.type === 'mega') return <TopMega key={item.label} label={item.label} cols={item.cols} />;
              return null;
            })}

            {/* Desktop CTAs */}
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 hover:border-[rgb(255,166,0)]',
                  isActive && 'font-semibold'
                )
              }
            >
              <Icon name="lock" className="h-4 w-4" /> Login
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  'rounded-md bg-[rgb(255,166,0)] px-4 py-2 font-semibold text-dark hover:brightness-95',
                  isActive && 'ring-2 ring-white/40'
                )
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ------------ Desktop primitives ------------- */
function TopLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn('text-white hover:text-[rgb(255,166,0)] transition', isActive && 'font-semibold')}
    >
      {children}
    </NavLink>
  );
}

function TopMenu({ label, items }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex items-center gap-1 text-white hover:text-[rgb(255,166,0)] transition">
        {label}
        <Icon name="chevronDown" className="h-4 w-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 -translate-y-1"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 -translate-y-1"
      >
        <Menu.Items className="absolute right-0 mt-3 w-56 rounded-2xl border bg-white p-2 text-dark shadow-2xl focus:outline-none">
          {items.map((it) => (
            <Menu.Item key={it.label}>
              {({ active }) =>
                it.to ? (
                  <NavLink
                    to={it.to}
                    className={cn('block rounded-md px-3 py-2', active ? 'bg-gray-50' : undefined)}
                  >
                    {it.label}
                  </NavLink>
                ) : (
                  <a
                    href={it.href}
                    target={it.external ? '_blank' : undefined}
                    rel={it.external ? 'noopener noreferrer' : undefined}
                    className={cn('block rounded-md px-3 py-2', 'hover:bg-gray-50')}
                  >
                    {it.label}
                  </a>
                )
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

/* ------------ FIXED: Mega menu closes on click ------------- */
function TopMega({ label, cols }) {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button className="inline-flex items-center gap-1 text-white hover:text-[rgb(255,166,0)] transition">
            {label}
            <Icon name="chevronDown" className="h-4 w-4" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl border bg-white/95 p-6 text-dark shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-3 gap-6 text-sm">
                {cols.map((c) => (
                  <Popover.Button
                    key={c.title}
                    as={Link}
                    to={c.to}
                    onClick={() => close()}
                    className="group block rounded-lg p-3 hover:bg-gray-50 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-100 text-teal-700">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                      </span>
                      <div className="font-semibold text-dark group-hover:text-teal-700">{c.title}</div>
                    </div>
                    <div className="mt-1 pl-10 text-gray-600">{c.desc}</div>
                  </Popover.Button>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-teal-50 to-amber-50 p-4">
                <div className="text-sm">
                  <div className="font-semibold text-dark">Not sure where to start?</div>
                  <div className="text-gray-700">We’ll help you pick the right path.</div>
                </div>
                <Popover.Button
                  as={Link}
                  to="/contact"
                  onClick={() => close()}
                  className="rounded-md bg-[rgb(255,166,0)] px-4 py-2 font-semibold text-dark hover:brightness-95"
                >
                  Talk to us
                </Popover.Button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

/* ------------ Mobile full-screen menu (Dialog) ------------- */
function MobileMenu({ open, onClose }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-150" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-[100dvh] bg-white">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <div className="flex items-center gap-3">
                <Icon name="dots" className="h-5 w-5" solid />
                <Dialog.Title className="text-base font-semibold">Menu</Dialog.Title>
              </div>
              <button
                onClick={onClose}
                className="rounded-md px-3 py-1.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[rgb(255,166,0)]"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <nav className="px-4 pb-8 pt-4 space-y-6" aria-label="Mobile">
              {/* Primary links */}
              <div className="grid grid-cols-1 gap-3">
                {NAV.filter(n => !n.type).map((n) => (
                  <MobileLink key={n.label} to={n.to} onClose={onClose}>{n.label}</MobileLink>
                ))}

                {/* Flattened groups */}
                {NAV.filter(n => n.type === 'mega').map((group) => (
                  <div key={group.label} className="rounded-xl border">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-600">{group.label}</div>
                    <div className="grid grid-cols-1 gap-2 p-2">
                      {group.cols.map((c) => (
                        <MobileLink key={c.title} to={c.to} onClose={onClose}>{c.title}</MobileLink>
                      ))}
                    </div>
                  </div>
                ))}

                {NAV.filter(n => n.type === 'menu').map((group) => (
                  <div key={group.label} className="rounded-xl border">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-600">{group.label}</div>
                    <div className="grid grid-cols-1 gap-2 p-2">
                      {group.items.map((it) =>
                        it.to ? (
                          <MobileLink key={it.label} to={it.to} onClose={onClose}>{it.label}</MobileLink>
                        ) : (
                          <a
                            key={it.label}
                            href={it.href}
                            target={it.external ? '_blank' : undefined}
                            rel={it.external ? 'noopener noreferrer' : undefined}
                            onClick={onClose}
                            className="block rounded-lg border border-gray-200 px-4 py-3 text-base font-medium hover:bg-gray-50"
                          >
                            {it.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTAs */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-base font-medium hover:bg-gray-50"
                >
                  <Icon name="lock" className="h-4 w-4" /> Login
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl bg-[rgb(255,166,0)] px-4 py-3 text-base font-semibold text-dark hover:brightness-95"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function MobileLink({ to, onClose, children }) {
  return (
    <NavLink
      to={to}
      onClick={onClose}
      className="block rounded-lg border border-gray-200 px-4 py-3 text-base font-medium hover:bg-gray-50"
    >
      {children}
    </NavLink>
  );
}
