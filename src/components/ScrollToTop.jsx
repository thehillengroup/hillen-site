import { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Route-change scroll + optional floating "Back to top" button.
 *
 * Props:
 * - offset: number (px) to offset hash/anchor scroll (for sticky headers)
 * - smooth: boolean for smooth behavior
 * - disableRouteScroll: boolean to keep native behavior (no auto scroll on route change)
 * - showButton: boolean to render the floating button
 * - buttonThreshold: number (px) before showing the button (default 400)
 * - minPageHeightRatio: number (e.g. 1.2 means show button only if page height >= 1.2 * viewport height)
 * - buttonLabel: string (default "Top")
 */
export default function ScrollToTop({
  offset = 0,
  smooth = false,
  disableRouteScroll = false,
  showButton = false,
  buttonThreshold = 400,
  minPageHeightRatio = 1.1,
  buttonLabel = 'Top',
}) {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType(); // 'POP' for back/forward
  const [visible, setVisible] = useState(false);

  // Reduce motion preference
  const prefersReduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Prefer native restoration for back/forward navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  // Compute dynamic sticky header offset (height can vary by breakpoint)
  const computeHeaderOffset = () => {
    try {
      const el = document.querySelector('header.sticky');
      if (!el) return offset;
      const h = el.getBoundingClientRect().height || 0;
      // small cushion so target isn't hugging the header
      const cushion = 12;
      return Math.max(offset, Math.round(h + cushion));
    } catch {
      return offset;
    }
  };

  // Handle route/hash scroll (skip on POP so browser restores position)
  useEffect(() => {
    if (disableRouteScroll) return;
    if (navType === 'POP') return; // let browser handle back/forward scroll

    const behavior = smooth && !prefersReduce ? 'smooth' : 'auto';
    const effectiveOffset = computeHeaderOffset();

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const performAlignedScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          try {
            const smt = parseFloat(window.getComputedStyle(el).scrollMarginTop || '0') || 0;
            if (smt > 0) {
              // Honor CSS scroll-margin-top when present for precise alignment
              el.scrollIntoView({ behavior, block: 'start', inline: 'nearest' });
              // Iteratively correct late layout shifts until stable or max tries
              let tries = 10;
              const fix = () => {
                if (tries-- <= 0) return;
                const rect = el.getBoundingClientRect();
                const delta = Math.round(rect.top - smt);
                if (Math.abs(delta) > 2) {
                  window.scrollTo({ top: window.scrollY + delta, behavior: 'auto' });
                  setTimeout(fix, 60);
                }
              };
              setTimeout(fix, 60);
              return;
            }
          } catch {}
          const y = el.getBoundingClientRect().top + window.scrollY - effectiveOffset;
          window.scrollTo({ top: y, behavior });
          // Second pass correction for late layout changes using measured header offset
          setTimeout(() => {
            const rect = el.getBoundingClientRect();
            const delta = Math.round(rect.top - effectiveOffset);
            if (Math.abs(delta) > 6) {
              window.scrollTo({ top: window.scrollY + delta, behavior: 'auto' });
            }
          }, 120);
        } else {
          window.scrollTo({ top: 0, behavior });
        }
      };

      const tryScrollOrObserve = () => {
        const elNow = document.getElementById(id);
        if (elNow) {
          performAlignedScroll();
          return;
        }
        // If target isn't in the DOM yet (lazy-loaded route), observe until it appears
        let done = false;
        const observer = new MutationObserver(() => {
          const elLater = document.getElementById(id);
          if (elLater && !done) {
            done = true;
            observer.disconnect();
            // Delay one frame so styles/layout are applied
            requestAnimationFrame(() => performAlignedScroll());
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        // Safety timeout to stop observing after 2s
        setTimeout(() => { if (!done) observer.disconnect(); }, 2000);
      };

      // Ensure layout is ready after navigation (double rAF); then try or observe
      requestAnimationFrame(() => requestAnimationFrame(tryScrollOrObserve));
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, hash, key, offset, smooth, disableRouteScroll, prefersReduce, navType]);

  // Button visibility logic
  useEffect(() => {
    if (!showButton) return;

    const check = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      const pageH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const vpH = window.innerHeight || document.documentElement.clientHeight;
      const tallEnough = pageH >= vpH * minPageHeightRatio;
      setVisible(tallEnough && scrolled >= buttonThreshold);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [showButton, buttonThreshold, minPageHeightRatio]);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth && !prefersReduce ? 'smooth' : 'auto',
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={buttonLabel}
      className={[
        'fixed z-40 right-5 bottom-5',
        'rounded-full border px-3 py-1.5 shadow-sm',
        'transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70',
        // white pill, green text (primary), as requested
        'bg-white text-primary border-primary',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      ].join(' ')}
    >
      {buttonLabel}
    </button>
  );
}
