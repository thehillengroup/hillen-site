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

    // Description
    if (description) {
      const d = ensureMeta('meta[name="description"]', { name: 'description' });
      d.setAttribute('content', description);
    }

    const url = canonical || window.location.href;

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
    }

    // Twitter
    const twc = ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' });
    twc.setAttribute('content', 'summary_large_image');

    const twt = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    twt.setAttribute('content', fullTitle);

    const twd = ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' });
    twd.setAttribute('content', description || '');

    if (ogImage) {
      const twi = ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' });
      twi.setAttribute('content', ogImage);
    }

    // Canonical
    if (url) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

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
