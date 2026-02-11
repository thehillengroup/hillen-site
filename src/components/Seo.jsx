// src/components/Seo.jsx
import { useEffect } from 'react';

/**
 * Minimal SEO helper without external deps.
 * Props:
 *  - title: string (auto-appends " | The Hillen Group")
 *  - description: string
 *  - canonical: string (optional)
 *  - noindex: boolean (optional)
 *  - ogImage: string (optional)
 */
export default function Seo({
  title,
  description,
  canonical,
  noindex = false,
  ogImage,
}) {
  useEffect(() => {
    const brand = 'The Hillen Group';
    const fullTitle = title ? `${title} | ${brand}` : brand;
    document.title = fullTitle;

    const ensureMeta = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      return el;
    };

    const ensureLink = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('link');
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      return el;
    };

    // Description
    if (description) {
      const d = ensureMeta('meta[name="description"]', { name: 'description' });
      d.setAttribute('content', description);
    }

    // ---- Canonical / URL normalization ----
    // Avoid canonicalizing querystrings/fragments and avoid leaking legacy /home
    const origin = window.location.origin;
    let path = window.location.pathname || '/';
    if (path === '/home') path = '/';

    const defaultUrl = `${origin}${path}`;
    const url = canonical || defaultUrl;

    // Open Graph
    const ogt = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    ogt.setAttribute('content', fullTitle);

    const ogd = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    ogd.setAttribute('content', description || '');

    const ogu = ensureMeta('meta[property="og:url"]', { property: 'og:url' });
    ogu.setAttribute('content', url);

    const ogtype = ensureMeta('meta[property="og:type"]', { property: 'og:type' });
    ogtype.setAttribute('content', 'website');

    if (ogImage) {
      const ogi = ensureMeta('meta[property="og:image"]', { property: 'og:image' });
      ogi.setAttribute('content', ogImage);
    } else {
      // Optional: if you ever set ogImage on one page, then navigate to another without it,
      // remove stale tag so it doesn't stick.
      const ogi = document.head.querySelector('meta[property="og:image"]');
      if (ogi) ogi.parentElement.removeChild(ogi);
    }

    // Twitter
    const twc = ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' });
    twc.setAttribute('content', 'summary_large_image');

    const twt = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    twt.setAttribute('content', fullTitle);

    const twd = ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' });
    twd.setAttribute('content', description || '');

    // Keep twitter:url aligned with canonical
    const twu = ensureMeta('meta[name="twitter:url"]', { name: 'twitter:url' });
    twu.setAttribute('content', url);

    if (ogImage) {
      const twi = ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' });
      twi.setAttribute('content', ogImage);
    } else {
      const twi = document.head.querySelector('meta[name="twitter:image"]');
      if (twi) twi.parentElement.removeChild(twi);
    }

    // Canonical link
    const link = ensureLink('link[rel="canonical"]', { rel: 'canonical' });
    link.setAttribute('href', url);

    // Robots (noindex)
    if (noindex) {
      const r = ensureMeta('meta[name="robots"]', { name: 'robots' });
      r.setAttribute('content', 'noindex,nofollow');
    } else {
      const r = document.head.querySelector('meta[name="robots"]');
      if (r) r.parentElement.removeChild(r);
    }
  }, [title, description, canonical, noindex, ogImage]);

  return null;
}
