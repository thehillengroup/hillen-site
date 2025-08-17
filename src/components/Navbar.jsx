// src/components/Navbar.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/The-Hillen-White-logo.png';

const cn = (...c) => c.filter(Boolean).join(' ');

/* ======================
   Small inline mobile icons
   ====================== */
function HomeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 10.5l9-7 9 7" /><path d="M5 9.5v10h14v-10" />
    </svg>
  );
}
function ServicesIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 7a5 5 0 11-7 7l-3 3 3 3 3-3a5 5 0 007-7z" />
    </svg>
  );
}
function WorkIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2z" />
    </svg>
  );
}
function CareersIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 7h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}
function ContactIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 12a8 8 0 10-3 6l4 1-1-4a7.9 7.9 0 000-3z" />
    </svg>
  );
}

/* ======================
   A11y hook for dropdown/mega menus
   - ArrowDown/Up on button opens & focuses first/last item
   - Esc closes + returns focus to button
   - ArrowDown/Up/Home/End cycles within panel
   ====================== */
function useMenuA11y(buttonRef, panelRef, isOpen, setOpen, closeTimerRef) {
  const getItems = useCallback(() => {
    if (!panelRef.current) return [];
    return Array.from(
      panelRef.current.querySelectorAll(
        // anything marked as menu item (Links/buttons)
        '[data-menuitem="true"]'
      )
    ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
  }, [panelRef]);

  const openAndFocusIndex = useCallback(
    (idx = 0) => {
      setOpen(true);
      // clear any pending closers
      if (closeTimerRef?.current) clearTimeout(closeTimerRef.current);
      requestAnimationFrame(() => {
        const items = getItems();
        if (items[idx]) items[idx].focus();
      });
    },
    [getItems, setOpen, closeTimerRef]
  );

  const onButtonKeyDown = useCallback(
    (e) => {
      const key = e.key;
      if (key === 'ArrowDown') {
        e.preventDefault();
        openAndFocusIndex(0);
      } else if (key === 'ArrowUp') {
        e.preventDefault();
        const items = getItems();
        openAndFocusIndex(Math.max(0, items.length - 1));
      } else if (key === 'Enter' || key === ' ') {
        // toggle open, but keep focus on button
        e.preventDefault();
        setOpen((v) => !v);
      } else if (key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
      // ArrowLeft/Right handled at menubar level
    },
    [getItems, openAndFocusIndex, setOpen, buttonRef]
  );

  const onPanelKeyDown = useCallback(
    (e) => {
      const key = e.key;
      const items = getItems();
      if (!items.length) return;

      const idx = items.indexOf(document.activeElement);
      if (key === 'ArrowDown') {
        e.preventDefault();
        const next = (idx + 1) % items.length;
        items[next].focus();
      } else if (key === 'ArrowUp') {
        e.preventDefault();
        const prev = (idx - 1 + items.length) % items.length;
        items[prev].focus();
      } else if (key === 'Home') {
        e.preventDefault();
        items[0].focus();
      } else if (key === 'End') {
        e.preventDefault();
        items[items.length - 1].focus();
      } else if (key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    },
    [getItems, setOpen, buttonRef]
  );

  return { onButtonKeyDown, onPanelKeyDown, openAndFocusIndex };
}

/* ======================
   Menubar arrow navigation (Left/Right/Home/End)
   ====================== */
function useMenubarNav(menuRef) {
  const onMenubarKeyDown = useCallback((e) => {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(e.key)) return;

    const container = menuRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll('[data-topitem="true"]')
    ).filter((el) => el.offsetParent !== null);

    const active = document.activeElement;
    const idx = items.indexOf(active);
    if (idx === -1) return;

    e.preventDefault();
    if (e.key === 'Home') {
      items[0]?.focus();
      return;
    }
    if (e.key === 'End') {
      items[items.length - 1]?.focus();
      return;
    }
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = (idx + dir + items.length) % items.length;
    items[next]?.focus();
  }, []);

  return { onMenubarKeyDown };
}

/* ======================
   Navbar
   ====================== */
export default function Navbar() {
  // open state for all four menus
  const [megaOpen, setMegaOpen] = useState(false); // Services
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  // refs + close timers
  const megaRef = useRef(null);
  const indRef = useRef(null);
  const resRef = useRef(null);
  const compRef = useRef(null);

  const megaBtnRef = useRef(null);
  const indBtnRef = useRef(null);
  const resBtnRef = useRef(null);
  const compBtnRef = useRef(null);

  const megaCloseTimer = useRef(null);
  const indCloseTimer = useRef(null);
  const resCloseTimer = useRef(null);
  const compCloseTimer = useRef(null);

  const menuBarRef = useRef(null);
  const location = useLocation();

  // close all on route change
  useEffect(() => {
    setMegaOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  }, [location.pathname]);

  // global outside-click / ESC
  useEffect(() => {
    const insideAny = (target) => {
      const els = [megaRef.current, indRef.current, resRef.current, compRef.current].filter(Boolean);
      return els.some((el) => el.contains(target));
    };
    const onClick = (e) => {
      if (!insideAny(e.target)) {
        setMegaOpen(false);
        setIndustriesOpen(false);
        setResourcesOpen(false);
        setCompanyOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setIndustriesOpen(false);
        setResourcesOpen(false);
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
      [megaCloseTimer, indCloseTimer, resCloseTimer, compCloseTimer].forEach((t) => t.current && clearTimeout(t.current));
    };
  }, []);

  // a11y hooks per menu
  const servicesA11y = useMenuA11y(megaBtnRef, megaRef, megaOpen, setMegaOpen, megaCloseTimer);
  const industriesA11y = useMenuA11y(indBtnRef, indRef, industriesOpen, setIndustriesOpen, indCloseTimer);
  const resourcesA11y = useMenuA11y(resBtnRef, resRef, resourcesOpen, setResourcesOpen, resCloseTimer);
  const companyA11y = useMenuA11y(compBtnRef, compRef, companyOpen, setCompanyOpen, compCloseTimer);

  const { onMenubarKeyDown } = useMenubarNav(menuBarRef);

  // helper to mark active tab on mobile
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {/* Sticky header; white links; centered logo on mobile */}
      <header className="sticky top-0 z-50 bg-dark/95 text-white backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-md">
        <div className="mx-auto max-w-7xl flex items-center justify-center lg:justify-between px-4 py-4">
          {/* Centered logo on mobile, left on desktop; bigger on mobile */}
          <Link to="/home" className="flex items-center gap-3 mx-auto lg:mx-0" aria-label="The Hillen Group Home">
            <img src={logo} alt="The Hillen Group" className="h-16 w-auto lg:h-14" />
          </Link>

          {/* Desktop nav (ARIA menubar) */}
          <nav
            className="hidden lg:flex items-center gap-10 text-base"
            aria-label="Primary"
            role="menubar"
            ref={menuBarRef}
            onKeyDown={onMenubarKeyDown}
          >
            <NavItem to="/home" dataTop role="menuitem">Home</NavItem>
            <NavItem to="/about" dataTop role="menuitem">About</NavItem>

            {/* Services — Mega Menu (hover-gap fix + keyboard) */}
            <div
              className="relative"
              ref={megaRef}
              onMouseEnter={() => {
                if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
                setMegaOpen(true);
              }}
              onMouseLeave={() => {
                if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
                megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 150);
              }}
            >
              <button
                ref={megaBtnRef}
                type="button"
                className={cn('text-white hover:text-[rgb(255,166,0)] transition', megaOpen && 'text-[rgb(255,166,0)]')}
                aria-haspopup="true"
                aria-expanded={megaOpen}
                aria-controls="services-panel"
                role="menuitem"
                data-topitem="true"
                onKeyDown={servicesA11y.onButtonKeyDown}
                onClick={() => setMegaOpen((v) => !v)}
              >
                Services
              </button>

              <div
                id="services-panel"
                className={cn(
                  'absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 rounded-2xl border bg-white/95 p-6 shadow-2xl backdrop-blur-md',
                  megaOpen ? 'block' : 'hidden'
                )}
                role="menu"
                aria-label="Services menu"
                onKeyDown={servicesA11y.onPanelKeyDown}
                onMouseEnter={() => {
                  if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
                  setMegaOpen(true);
                }}
              >
                {/* hover bridge */}
                <span className="absolute -top-2 left-0 right-0 h-2" aria-hidden="true" />
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
                    <div className="text-gray-700">We’ll help you pick the right path.</div>
                  </div>
                  <Link to="/contact" className="rounded-md bg-[rgb(255,166,0)] px-4 py-2 font-semibold text-dark hover:brightness-95" data-menuitem="true">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>

            {/* Industries — Mega (compact) */}
            <div
              className="relative"
              ref={indRef}
              onMouseEnter={() => {
                if (indCloseTimer.current) clearTimeout(indCloseTimer.current);
                setIndustriesOpen(true);
              }}
              onMouseLeave={() => {
                if (indCloseTimer.current) clearTimeout(indCloseTimer.current);
                indCloseTimer.current = setTimeout(() => setIndustriesOpen(false), 150);
              }}
            >
              <button
                ref={indBtnRef}
                className={cn('text-white hover:text-[rgb(255,166,0)] transition', industriesOpen && 'text-[rgb(255,166,0)]')}
                aria-haspopup="true"
                aria-expanded={industriesOpen}
                aria-controls="industries-panel"
                role="menuitem"
                data-topitem="true"
                onKeyDown={industriesA11y.onButtonKeyDown}
                onClick={() => setIndustriesOpen((v) => !v)}
              >
                Industries
              </button>
              <div
                id="industries-panel"
                className={cn(
                  'absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 rounded-2xl border bg-white/95 p-6 shadow-2xl backdrop-blur-md',
                  industriesOpen ? 'block' : 'hidden'
                )}
                role="menu"
                aria-label="Industries menu"
                onKeyDown={industriesA11y.onPanelKeyDown}
                onMouseEnter={() => {
                  if (indCloseTimer.current) clearTimeout(indCloseTimer.current);
                  setIndustriesOpen(true);
                }}
              >
                <span className="absolute -top-2 left-0 right-0 h-2" aria-hidden="true" />
                <div className="grid grid-cols-3 gap-6 text-sm text-dark">
                  <MegaItem title="Federal Health" to="/industries#health" desc="HHS, CMS, NIH, CDC." />
                  <MegaItem title="Defense" to="/industries#defense" desc="DoD, DISA, USAF." />
                  <MegaItem title="Civilian" to="/industries#civilian" desc="DOT, DHS, USDA." />
                  <MegaItem title="State & Local" to="/industries#state" desc="Agencies & cities." />
                  <MegaItem title="Research" to="/industries#research" desc="Evaluation & analytics." />
                  <MegaItem title="Space" to="/industries#space" desc="NASA & partners." />
                </div>
              </div>
            </div>

            {/* Resources — dropdown */}
            <div
              className="relative"
              ref={resRef}
              onMouseEnter={() => {
                if (resCloseTimer.current) clearTimeout(resCloseTimer.current);
                setResourcesOpen(true);
              }}
              onMouseLeave={() => {
                if (resCloseTimer.current) clearTimeout(resCloseTimer.current);
                resCloseTimer.current = setTimeout(() => setResourcesOpen(false), 150);
              }}
            >
              <button
                ref={resBtnRef}
                className={cn('text-white hover:text-[rgb(255,166,0)] transition', resourcesOpen && 'text-[rgb(255,166,0)]')}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                aria-controls="resources-panel"
                role="menuitem"
                data-topitem="true"
                onKeyDown={resourcesA11y.onButtonKeyDown}
                onClick={() => setResourcesOpen((v) => !v)}
              >
                Resources
              </button>
              <div
                id="resources-panel"
                className={cn('absolute right-0 top-full z-50 w-64 rounded-2xl border bg-white p-2 shadow-2xl', resourcesOpen ? 'block' : 'hidden')}
                role="menu"
                aria-label="Resources menu"
                onKeyDown={resourcesA11y.onPanelKeyDown}
                onMouseEnter={() => {
                  if (resCloseTimer.current) clearTimeout(resCloseTimer.current);
                  setResourcesOpen(true);
                }}
              >
                <span className="absolute -top-2 left-0 right-0 h-2" aria-hidden="true" />
                <ul className="text-sm text-dark">
                  <li role="none">
                    <NavLink to="/news" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      News
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink to="/case-studies" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      Case Studies
                    </NavLink>
                  </li>
                  <li role="none">
                    <a href="/docs/capabilities.pdf" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      Capabilities PDF
                    </a>
                  </li>
                  <li role="none">
                    <NavLink to="/downloads" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      Downloads
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company — dropdown */}
            <div
              className="relative"
              ref={compRef}
              onMouseEnter={() => {
                if (compCloseTimer.current) clearTimeout(compCloseTimer.current);
                setCompanyOpen(true);
              }}
              onMouseLeave={() => {
                if (compCloseTimer.current) clearTimeout(compCloseTimer.current);
                compCloseTimer.current = setTimeout(() => setCompanyOpen(false), 150);
              }}
            >
              <button
                ref={compBtnRef}
                className={cn('text-white hover:text-[rgb(255,166,0)] transition', companyOpen && 'text-[rgb(255,166,0)]')}
                aria-haspopup="true"
                aria-expanded={companyOpen}
                aria-controls="company-panel"
                role="menuitem"
                data-topitem="true"
                onKeyDown={companyA11y.onButtonKeyDown}
                onClick={() => setCompanyOpen((v) => !v)}
              >
                Company
              </button>
              <div
                id="company-panel"
                className={cn('absolute right-0 top-full z-50 w-56 rounded-2xl border bg-white p-2 shadow-2xl', companyOpen ? 'block' : 'hidden')}
                role="menu"
                aria-label="Company menu"
                onKeyDown={companyA11y.onPanelKeyDown}
                onMouseEnter={() => {
                  if (compCloseTimer.current) clearTimeout(compCloseTimer.current);
                  setCompanyOpen(true);
                }}
              >
                <span className="absolute -top-2 left-0 right-0 h-2" aria-hidden="true" />
                <ul className="text-sm text-dark">
                  <li role="none">
                    <NavLink to="/about" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      About
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink to="/careers" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      Careers
                    </NavLink>
                  </li>
                  <li role="none">
                    <NavLink to="/contact" className="block rounded-md px-3 py-2 hover:bg-gray-50" role="menuitem" data-menuitem="true">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <NavItem to="/contact" dataTop role="menuitem" className="rounded-md bg-[rgb(255,166,0)] px-4 py-2 font-semibold text-dark hover:brightness-95">
              Contact
            </NavItem>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Tabs */}
      <nav
        className="fixed inset-x-0 bottom-4 z-40 mx-auto w-[92%] max-w-md rounded-2xl border border-white/40 bg-white/90 px-2 py-1 shadow-2xl backdrop-blur-md lg:hidden"
        aria-label="Primary (mobile tabs)"
      >
        <ul className="grid grid-cols-5 text-[12px] text-gray-700">
          <MobileTab to="/home" label="Home" active={isActive('/home')} icon={<HomeIcon />} />
          <MobileTab to="/services" label="Services" active={isActive('/services')} icon={<ServicesIcon />} />
          <MobileTab to="/portfolio" label="Work" active={isActive('/portfolio')} icon={<WorkIcon />} />
          <MobileTab to="/careers" label="Jobs" active={isActive('/careers')} icon={<CareersIcon />} />
          <MobileTab to="/contact" label="Contact" active={isActive('/contact')} icon={<ContactIcon />} />
        </ul>
      </nav>
      {/* Tip: ensure page content has bottom padding on mobile so tabs don't cover it (e.g., main className="pb-20") */}
    </>
  );
}

/* ======================
   Bits
   ====================== */
function NavItem({ to, children, className = '', dataTop, role = undefined }) {
  return (
    <NavLink
      to={to}
      role={role}
      data-topitem={dataTop ? 'true' : undefined}
      className={({ isActive }) =>
        cn(
          'text-white hover:text-[rgb(255,166,0)] transition',
          isActive && 'font-semibold',
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}

function MegaItem({ title, desc, to }) {
  return (
    <Link to={to} className="group block rounded-lg p-3 hover:bg-gray-50" role="menuitem" data-menuitem="true">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-100 text-teal-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="8" />
          </svg>
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
        <span className={cn('text-gray-700 group-hover:text-teal-700', active && 'text-teal-700')}>{icon}</span>
        <span className={cn('mt-1 text-[11px] text-gray-700 group-hover:text-teal-700', active && 'text-teal-700')}>
          {label}
        </span>
      </NavLink>
    </li>
  );
}
