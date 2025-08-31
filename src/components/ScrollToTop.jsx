// src/components/ScrollToTop.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Route-change scroll + optional "Back to top" button.
 *
 * Props:
 * - offset               : number (px to subtract when scrolling to hash targets)
 * - smooth               : boolean (smooth scroll)
 * - disableRouteScroll   : boolean (skip the route-change scroll behavior)
 * - showButton           : boolean (enable floating back-to-top button)
 * - buttonThreshold      : number (px scrolled before button appears)
 * - minPageHeightRatio   : number (page must be this multiple of viewport height to show button)
 * - buttonLabel          : string (aria-label and tooltip)
 */
export default function ScrollToTop({
  offset = 0,
  smooth = false,
  disableRouteScroll = false,
  showButton = false,
  buttonThreshold = 360,
  minPageHeightRatio = 1.0,
  buttonLabel = 'Back to top',
}) {
  const { pathname, hash, key } = useLocation();
  const [visible, setVisible] = useState(false);

  // Disable browser auto-restoration so we control it.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Route-change scroll behavior (unless disabled)
  useEffect(() => {
    if (disableRouteScroll) return;

    const behavior = smooth ? 'smooth' : 'auto';

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToEl = () => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior });
        } else {
          window.scrollTo({ top: 0, behavior });
        }
      };
      requestAnimationFrame(scrollToEl);
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, hash, key, offset, smooth, disableRouteScroll]);

  // Floating button visibility logic
  useEffect(() => {
    if (!showButton) return;

    const handle = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
      const vpH = window.innerHeight || 0;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const isTallEnough = docH > vpH * minPageHeightRatio;
      setVisible(isTallEnough && scrolled > buttonThreshold);
    };

    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [showButton, buttonThreshold, minPageHeightRatio]);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  };

  return showButton && visible ? (
    <button
      type="button"
      onClick={toTop}
      aria-label={buttonLabel}
      title={buttonLabel}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/95 px-4 py-2 text-teal-700 shadow-lg backdrop-blur hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
    >
      {/* caret-up icon */}
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 15l6-6 6 6" />
      </svg>
      <span className="text-sm font-medium">Top</span>
    </button>
  ) : null;
}
