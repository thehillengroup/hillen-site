// src/pages/PortfolioStonePro.jsx
import React, { useEffect } from 'react';
import PortfolioDetail from '../components/portfolio/PortfolioDetail';

export default function PortfolioStonePro() {
  useEffect(() => { document.title = 'StonePro E‑Commerce | The Hillen Group'; }, []);

  return (
    <PortfolioDetail
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: 'StonePro E‑Commerce' }]}
      title="StonePro"
      accent="E‑Commerce"
      description="Modern storefront experience with product education, search, and guided checkout."
      imageSrc="/images/projects/stonepro-ecommerce.svg"
      imageAlt="StonePro storefront mockup"
      figureCaption="Responsive storefront mockup"
      summary="We redesigned the StonePro e‑commerce site to showcase products with clear education, comparisons, and content that helps customers choose with confidence. The experience is optimized for speed and conversion."
      highlights={[
        'Facet search, product comparisons, and education content.',
        'Accessible components and keyboard‑friendly flows.',
        'Improved Core Web Vitals and SEO for long‑tail queries.',
      ]}
      stack={[ 'React front‑end, API integration, CI/CD; image optimization and caching.' ]}
    />
  );
}
