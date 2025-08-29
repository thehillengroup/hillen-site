// src/data/icons.js
import React from 'react';

export const iconCls = 'h-6 w-6';

/* ------------------------------ Icon set ------------------------------ */
export const WebIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 9h18M7 16h10" />
  </svg>
);

export const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M12 3l8 3v6a10 10 0 01-8 9 10 10 0 01-8-9V6l8-3z" />
    <path d="M9.5 12.5l1.8 1.8L15 10.5" />
  </svg>
);

export const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
  </svg>
);

export const CloudIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M6 18h12a3 3 0 0 0 0-6h-.5A5.5 5.5 0 1 0 6 12" />
  </svg>
);

export const MaintenanceIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <path d="M3 7h18M6 3h12M6 21h12M7 11h10M7 15h6" />
  </svg>
);

export const PlanningIcon = () => (
  <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M4 20v-3a4 4 0 0 1 4-4h0M20 20v-3a4 4 0 0 0-4-4h0" />
  </svg>
);

/* -------------------------- ID → Icon mapping -------------------------- */
export const serviceIconMap = {
  'web-software-services': WebIcon,
  'cyber-operations': ShieldIcon,
  'enterprise-operations': BriefcaseIcon,
  cloud: CloudIcon,
  maintenance: MaintenanceIcon,
  planning: PlanningIcon,
};

export default serviceIconMap;
