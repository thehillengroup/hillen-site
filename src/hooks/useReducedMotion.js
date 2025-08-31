import { useEffect, useState } from 'react';

/**
 * React hook that tracks the user's reduced-motion preference.
 * Returns true if the user prefers reduced motion.
 */
export default function useReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setPrefers(e.matches);

    setPrefers(mql.matches);
    // cross-browser 'change' support
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  return prefers;
}
