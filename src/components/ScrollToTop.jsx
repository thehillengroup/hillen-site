// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on route change. If a URL hash is present (#id),
 * it scrolls to that element and compensates for a sticky header via `offset`.
 */
export default function ScrollToTop({ offset = 0, smooth = false }) {
  const { pathname, hash, key } = useLocation();

  // Disable browser auto-restoration so we control it.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const behavior = smooth ? 'smooth' : 'auto';

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));

      const scrollToEl = () => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior });
        } else {
          // Fallback if element not yet in DOM
          window.scrollTo({ top: 0, behavior });
        }
      };

      // Next frame to ensure the new route content is in the DOM
      requestAnimationFrame(scrollToEl);
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, hash, key, offset, smooth]);

  return null;
}
