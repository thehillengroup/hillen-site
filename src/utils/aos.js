// src/utils/aos.js
import AOS from 'aos';

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initAOS(options = {}) {
  const reduce = prefersReducedMotion();

  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-quart',
    // caller can override anything above:
    ...options,
    // hard-disable animations when user prefers reduced motion
    disable: () => reduce,
  });

  // Re-init if the user changes the OS setting while app is open
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onChange = () => {
    // Re-run with the same options so `disable` reflects the new state
    AOS.refreshHard();
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-quart',
      ...options,
      disable: () => mql.matches,
    });
  };

  // Safari/old browsers compatibility
  if (mql.addEventListener) mql.addEventListener('change', onChange);
  else if (mql.addListener) mql.addListener(onChange);

  return () => {
    if (mql.removeEventListener) mql.removeEventListener('change', onChange);
    else if (mql.removeListener) mql.removeListener(onChange);
  };
}
