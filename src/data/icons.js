// src/data/icons.js
import React from 'react';

export const iconCls = 'h-6 w-6';

/* ------------------------------- Basic/Shared ------------------------------ */
export function WebIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 16h10" />
    </svg>
  );
}

export function MobileIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function UxIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M3 17l4 4h10l4-4" />
    </svg>
  );
}

export function CloudIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M6 18h12a3 3 0 0 0 0-6h-.5A5.5 5.5 0 1 0 6 12" />
    </svg>
  );
}

export function MaintenanceIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M3 7h18M6 3h12M6 21h12M7 11h10M7 15h6" />
    </svg>
  );
}

export function PlanningIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <path d="M4 20v-3a4 4 0 0 1 4-4h0M20 20v-3a4 4 0 0 0-4-4h0" />
    </svg>
  );
}

/* ----------------------------- Cyber Operations --------------------------- */
export function ShieldIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 3l8 3v6a10 10 0 01-8 9 10 10 0 01-8-9V6l8-3z" />
      <path d="M9.5 12.5l1.8 1.8L15 10.5" />
    </svg>
  );
}
export function RadarIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m12.5-4.5l-2.5 2.5M8 16l2.5-2.5" />
    </svg>
  );
}
export function BugIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="7" y="7" width="10" height="10" rx="3" />
      <path d="M12 2v3M5 12H2m20 0h-3M6 6l-2-2m14 0l2-2M6 18l-2 2m14 0l2 2" />
    </svg>
  );
}
export function TargetIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}
export function CloudLockIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M6 18h9.5a3.5 3.5 0 0 0 0-7h-.6A5.5 5.5 0 1 0 6 12" />
      <rect x="8" y="13" width="7" height="6" rx="1.5" />
      <path d="M10 13v-1a2 2 0 1 1 4 0v1" />
    </svg>
  );
}
export function IdIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="2" />
      <path d="M13 10h5M13 14h5" />
    </svg>
  );
}
export function BookIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M4 19a2 2 0 0 0 2 2h12" />
      <path d="M6 21V5a2 2 0 0 1 2-2h10v16" />
      <path d="M8 7h8" />
    </svg>
  );
}
export function ClipboardIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4h6v3H9zM9 10h6M9 14h6" />
    </svg>
  );
}

/* --------------------------- Enterprise Operations ------------------------ */
export function BriefcaseIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
    </svg>
  );
}
export function LayersIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M21 12l-9 5-9-5" />
      <path d="M21 17l-9 5-9-5" />
    </svg>
  );
}
export function HeadsetIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2" />
      <rect x="2" y="11" width="4" height="6" rx="2" />
      <rect x="18" y="11" width="4" height="6" rx="2" />
      <path d="M14 19h-2" />
    </svg>
  );
}
export function DatabaseIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}
export function ShieldCheckIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 3l8 3v6a10 10 0 01-8 9 10 10 0 01-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
export function LifebuoyIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M5.6 5.6l3 3M15.4 5.6l3 3M5.6 18.4l3-3M18.4 18.4l-3-3" />
    </svg>
  );
}
export function ContractIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="4" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h6M8 11h6M8 15h6" />
      <path d="M18 8l2 2-6 6h-2v-2l6-6z" />
    </svg>
  );
}
export function CloudDollarIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <path d="M6 18h9.5a3.5 3.5 0 0 0 0-7h-.6A5.5 5.5 0 1 0 6 12" />
      <path d="M12 13v6M9.5 15a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0z" />
    </svg>
  );
}

/* -------------------------------- Industries ------------------------------ */
export function HealthIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 2v20M2 12h20" />
    </svg>
  );
}
export function DefenseIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 3l8 4v6a8 8 0 11-16 0V7l8-4z" />
    </svg>
  );
}
export function CivilianIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M3 21h18M4 21V10l8-6 8 6v11" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}
export function StateIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 2v4M4.2 5.2l2.8 2.8M19.8 5.2l-2.8 2.8M2 12h4m12 0h4M4.2 18.8l2.8-2.8M19.8 18.8l-2.8-2.8M12 18v4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
export function ResearchIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M10 2v6l-5 9a4 4 0 004 5h6a4 4 0 004-5l-5-9V2" />
    </svg>
  );
}
export function SpaceIcon({ className = iconCls, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 2s4 3 4 8-4 12-4 12-4-7-4-12 4-8 4-8z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

/* ---------------------------- Helpful Icon Maps --------------------------- */
export const serviceIconMap = {
  'web-software-services': WebIcon,
  'cyber-operations': ShieldIcon,
  'enterprise-operations': BriefcaseIcon,
  cloud: CloudIcon,
  maintenance: MaintenanceIcon,
  planning: PlanningIcon,
};

export const industryIconMap = {
  health: HealthIcon,
  defense: DefenseIcon,
  civilian: CivilianIcon,
  state: StateIcon,
  research: ResearchIcon,
  space: SpaceIcon,
};
