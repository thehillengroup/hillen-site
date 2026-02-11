// src/components/Seo.jsx
import { useEffect } from 'react';

export default function Seo({ title, description, canonical, noindex = false, ogImage }) {
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

    if (description) {
      const d = ensureMeta('meta[name="description"]', { name: 'description' });
      d.setAttribute('content', description);
    }

    const url = canonical || window.location.href;

    ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', fullTitle);
    ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description || '');
    ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', url);
    ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', 'website');

    if (ogImage) {
      ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', ogImage);
    }

    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute('content', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', fullTitle);
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', description || '');
    if (ogImage) {
      ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute('content', ogImage);
    }

    if (url) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    if (noindex) {
      ensureMeta('meta[name="robots"]', { name: 'robots' }).setAttribute('content', 'noindex,nofollow');
    } else {
      const r = document.head.querySelector('meta[name="robots"]');
      if (r) r.parentElement.removeChild(r);
    }

    // ---- JSON-LD (Organization + WebSite + WebPage) ----
    const existing = document.head.querySelector('script[data-hg-jsonld="true"]');
    if (existing) existing.parentElement.removeChild(existing);

    const orgUrl = new URL(url).origin;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${orgUrl}/#organization`,
          name: 'The Hillen Group, LLC',
          url: orgUrl,
          // Add later if/when you have these:
          // logo: `${orgUrl}/images/logo.png`,
          // sameAs: ['https://www.linkedin.com/company/...'],
        },
        {
          '@type': 'WebSite',
          '@id': `${orgUrl}/#website`,
          url: orgUrl,
          name: 'The Hillen Group',
          publisher: { '@id': `${orgUrl}/#organization` },
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: fullTitle,
          description: description || '',
          isPartOf: { '@id': `${orgUrl}/#website` },
          about: { '@id': `${orgUrl}/#organization` },
        },
      ],
    };

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-hg-jsonld', 'true');
    s.text = JSON.stringify(jsonLd);
    document.head.appendChild(s);
    // -----------------------------------------------
  }, [title, description, canonical, noindex, ogImage]);

  return null;
}
