// src/utils/telemetry.js

// Optionally set this in your .env (CRA):
// REACT_APP_404_BEACON_URL=https://your-endpoint.example.com/404
const BEACON_URL = process.env.REACT_APP_404_BEACON_URL || '';

/**
 * Send a 404 event to GA4 (if present) and/or to a custom beacon URL.
 * Safe to call in static hosting environments.
 */
export function logNotFound(pathname, referrer) {
  try {
    // GA4 (if present)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_404', {
        page_location: window.location.href,
        page_path: pathname,
        page_referrer: referrer || document.referrer || '',
      });
    }

    // Optional: sendBeacon to your own endpoint
    if (BEACON_URL && navigator.sendBeacon) {
      const payload = {
        type: '404',
        path: pathname,
        referrer: referrer || document.referrer || '',
        ua: navigator.userAgent,
        ts: Date.now(),
      };
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon(BEACON_URL, blob);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('404 telemetry failed:', e);
  }
}
