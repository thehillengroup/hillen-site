import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on route change. If a URL hash is present (#id),
 * it scrolls to that element and compensates for a sticky header via `offset`.
 *
 * Also (optionally) renders a floating “Back to top” button when:
 *  - The page is taller than the viewport by `minPageHeightRatio`
 *  - The user has scrolled beyond `buttonThreshold` pixels
 *
 * Props:
 * - offset: number (px to offset for sticky headers)
 * - smooth: boolean (smooth scroll on route change + back-to-top)
 * - disableRouteScroll: boolean (skip the route-change scroll behavior; useful if rendering
 *   a page-local button while a global ScrollToTop handles route scrolling)
 * - showButton: boolean (enable the floating back-to-top button)
 * - buttonThreshold: number (px before the button appears)
 * - minPageHeightRatio: number (page must be at least this multiple of the viewport height)
 * - buttonLabel: string (accessible label)
 * - buttonClassName: string (additional classes for the button)
 */
export default function ScrollToTop({
  offset = 0,
  smooth = false,
  disableRouteScroll = false,
  showButton = false,
  buttonThreshold = 400,
  minPageHeightRatio = 1.25,
  buttonLabel = 'Back to top',
  buttonClassName = '',
}) {
  const { pathname, hash, key } = useLocation();
  const [btnVisible, setBtnVisible] = useState(false);
  const [btnEligible, setBtnEligible] = useState(false);

  // Disable browser auto-restoration so we control it.
  useEffect(() => {
    if (!disableRouteScroll && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [disableRouteScroll]);

  // Route-change scroll handling
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

  // Back-to-top button logic (only if showButton)
  useEffect(() => {
    if (!showButton) return;

    const prefersReduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const computeEligible = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return false;
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const vp = window.innerHeight || document.documentElement.clientHeight || 0;
      return pageHeight > vp * minPageHeightRatio;
    };

    const onScrollOrResize = () => {
      const canShow = computeEligible();
      setBtnEligible(canShow);
      if (!canShow) {
        setBtnVisible(false);
        return;
      }
      const scrolled = window.scrollY || window.pageYOffset || 0;
      setBtnVisible(scrolled > buttonThreshold);
    };

    onScrollOrResize(); // initial
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [showButton, buttonThreshold, minPageHeightRatio]);

  const prefersReduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleBackToTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: 0,
      behavior: smooth && !prefersReduce ? 'smooth' : 'auto',
    });
  };

  if (!showButton || !btnEligible) return null;

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label={buttonLabel}
      className={[
        'fixed z-50 right-4 bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)]',
        'rounded-full bg-dark text-white shadow-lg',
        'h-11 w-11 flex items-center justify-center',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70',
        prefersReduce ? '' : 'transition duration-300',
        btnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
        buttonClassName,
      ].join(' ')}
    >
      {/* Up arrow icon */}
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
      <span className="sr-only">{buttonLabel}</span>
    </button>
  );
}
