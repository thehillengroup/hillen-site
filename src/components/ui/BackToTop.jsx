import React, { useEffect, useState } from 'react';

/**
 * Floating "Back to top" button.
 * - Shows when scrolled past `buttonThreshold` and the page is tall enough.
 * - Styled as: white bg, green text ("Top"), like before.
 */
export default function BackToTop({
  label = 'Top',
  smooth = true,
  buttonThreshold = 420,
  minPageHeightRatio = 1.2,
  className = '',
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      const tallEnough =
        document.documentElement.scrollHeight >
        window.innerHeight * minPageHeightRatio;
      setShow(scrolled > buttonThreshold && tallEnough);
    };
    onScroll(); // initial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [buttonThreshold, minPageHeightRatio]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  };

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={[
        'fixed bottom-4 right-4 z-50',
        'rounded-full border px-4 py-2 text-sm font-semibold',
        'bg-white text-primary border-primary/30 shadow-md',
        'hover:bg-gray-50 hover:shadow',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
        'transition-transform duration-200 active:scale-95',
        className,
      ].join(' ')}
    >
      {label}
    </button>
  );
}
