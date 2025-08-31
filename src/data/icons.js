// src/data/icons.js
import React from 'react';

export const iconCls = 'h-6 w-6';

/* =========================== Service/Feature Icons =========================== */

// Web / Software
const web = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18" />
    <path d="M9.5 12.5l-2 2 2 2" />
    <path d="M14.5 12.5l2 2-2 2" />
    <path d="M12 12.2l-1 4.6" />
  </svg>
);

// Mobile (back-compat)
const mobile = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

// UX
const ux = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="12" rx="2" />
    <path d="M3 17l4 4h10l4-4" />
  </svg>
);

// Cyber – shield
const shield = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 3l8 3v6a10 10 0 0 1-8 9 10 10 0 0 1-8-9V6l8-3z" />
  </svg>
);

// Cyber – shield with check
const shieldCheck = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l8 3v6a10 10 0 0 1-8 9 10 10 0 0 1-8-9V6l8-3z" />
    <path d="M9.5 12.5l1.8 1.8L15 10.5" />
  </svg>
);

const radar = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m12.5-4.5l-2.5 2.5M8 16l2.5-2.5" />
  </svg>
);

const bug = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="7" y="7" width="10" height="10" rx="3" />
    <path d="M12 2v3M5 12H2m20 0h-3M6 6l-2-2m14 0l2-2M6 18l-2 2m14 0l2 2" />
  </svg>
);

const target = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

const cloudLock = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M6 18h9.5a3.5 3.5 0 0 0 0-7h-.6A5.5 5.5 0 1 0 6 12" />
    <rect x="8" y="13" width="7" height="6" rx="1.5" />
    <path d="M10 13v-1a2 2 0 1 1 4 0v1" />
  </svg>
);

const idCard = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="12" r="2" />
    <path d="M13 10h5M13 14h5" />
  </svg>
);

const book = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M4 19a2 2 0 0 0 2 2h12" />
    <path d="M6 21V5a2 2 0 0 1 2-2h10v16" />
    <path d="M8 7h8" />
  </svg>
);

const clipboard = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M9 4h6v3H9zM9 10h6M9 14h6" />
  </svg>
);

const briefcase = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
  </svg>
);

const analytics = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M3 20h18" />
    <path d="M6 20V10" />
    <path d="M12 20V4" />
    <path d="M18 20v-7" />
  </svg>
);

const professional = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <path d="M9 4h6v3H9z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const planning = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M4 20v-3a4 4 0 0 1 4-4h0M20 20v-3a4 4 0 0 0-4-4h0" />
  </svg>
);

const maintenance = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M3 7h18M6 3h12M6 21h12M7 11h10M7 15h6" />
  </svg>
);

const layers = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 16.5l9 5 9-5" />
  </svg>
);

// Headset (ITSM)
const headset = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12a8 8 0 0 1 16 0" />
    <rect x="3" y="12" width="4" height="6" rx="2" />
    <rect x="17" y="12" width="4" height="6" rx="2" />
    <path d="M21 17v1a3 3 0 0 1-3 3h-4" />
  </svg>
);

// Database
const database = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
    <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </svg>
);

// Lifebuoy
const lifebuoy = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M4.9 4.9l3.2 3.2M19.1 4.9l-3.2 3.2M4.9 19.1l3.2-3.2M19.1 19.1l-3.2-3.2" />
  </svg>
);

// Lightbulb (NEW)
const lightbulb = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M8 14a6 6 0 1 1 8 0c-.8.7-1.3 1.5-1.5 2.4M9.5 16.4A4 4 0 0 1 8 14" />
  </svg>
);

/* =============================== Industry Icons ============================== */

const health = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 2v20M2 12h20" />
  </svg>
);

const defense = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 3l8 4v6a8 8 0 1 1-16 0V7l8-4z" />
  </svg>
);

const civilian = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M3 21h18M4 21V10l8-6 8 6v11" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const state = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 2v4M4.2 5.2l2.8 2.8M19.8 5.2l-2.8 2.8M2 12h4m12 0h4M4.2 18.8l2.8-2.8M19.8 18.8l-2.8-2.8M12 18v4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const research = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M10 2v6l-5 9a4 4 0 0 0 4 5h6a4 4 0 0 0 4-5l-5-9V2" />
  </svg>
);

const space = (cls = iconCls) => (
  <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 2s4 3 4 8-4 12-4 12-4-7-4-12 4-8 4-8z" />
    <circle cx="12" cy="10" r="2" />
  </svg>
);

/* ================================= Aggregates =============================== */

export const ICONS = {
  // services/features
  web,
  mobile,
  ux,
  shield,
  shieldCheck,
  radar,
  bug,
  target,
  cloudLock,
  idCard,
  book,
  clipboard,
  briefcase,
  analytics,
  professional,
  planning,
  maintenance,
  layers,
  headset,
  database,
  lifebuoy,
  lightbulb,
  // industries
  health,
  defense,
  civilian,
  state,
  research,
  space,
};

export const ICONS_CMP = Object.fromEntries(
  Object.entries(ICONS).map(([k, fn]) => [
    k,
    function Icon({ className }) {
      return fn(className || iconCls);
    },
  ])
);

/* Convenience map used by Industries page */
export const industryIconMap = {
  health,
  defense,
  civilian,
  state,
  research,
  space,
};

/* =================== Named Component Exports (back-compat) ================== */

// Services / features
export const WebIcon = (p) => ICONS_CMP.web(p);
export const MobileIcon = (p) => ICONS_CMP.mobile(p);
export const UxIcon = (p) => ICONS_CMP.ux(p);
export const ShieldIcon = (p) => ICONS_CMP.shield(p);
export const ShieldCheckIcon = (p) => ICONS_CMP.shieldCheck(p);
export const RadarIcon = (p) => ICONS_CMP.radar(p);
export const BugIcon = (p) => ICONS_CMP.bug(p);
export const TargetIcon = (p) => ICONS_CMP.target(p);
export const CloudLockIcon = (p) => ICONS_CMP.cloudLock(p);
export const CloudIcon = (p) => ICONS_CMP.cloudLock(p); // alias
export const IdIcon = (p) => ICONS_CMP.idCard(p);
export const BookIcon = (p) => ICONS_CMP.book(p);
export const ClipboardIcon = (p) => ICONS_CMP.clipboard(p);
export const BriefcaseIcon = (p) => ICONS_CMP.briefcase(p);
export const AnalyticsIcon = (p) => ICONS_CMP.analytics(p);
export const ProfessionalIcon = (p) => ICONS_CMP.professional(p);
export const PlanningIcon = (p) => ICONS_CMP.planning(p);
export const MaintenanceIcon = (p) => ICONS_CMP.maintenance(p);
export const LayersIcon = (p) => ICONS_CMP.layers(p);
export const HeadsetIcon = (p) => ICONS_CMP.headset(p);
export const DatabaseIcon = (p) => ICONS_CMP.database(p);
export const LifebuoyIcon = (p) => ICONS_CMP.lifebuoy(p);
export const LightbulbIcon = (p) => ICONS_CMP.lightbulb(p);

// Industries
export const HealthIcon = (p) => ICONS_CMP.health(p);
export const DefenseIcon = (p) => ICONS_CMP.defense(p);
export const CivilianIcon = (p) => ICONS_CMP.civilian(p);
export const StateIcon = (p) => ICONS_CMP.state(p);
export const ResearchIcon = (p) => ICONS_CMP.research(p);
export const SpaceIcon = (p) => ICONS_CMP.space(p);

export default ICONS;
