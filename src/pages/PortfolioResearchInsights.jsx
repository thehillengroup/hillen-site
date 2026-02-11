// src/pages/PortfolioResearchInsights.jsx
import React, { useEffect } from 'react';
import PortfolioDetail from '../components/portfolio/PortfolioDetail';

export default function PortfolioResearchInsights() {
  useEffect(() => { document.title = 'Research Insights Portal | The Hillen Group'; }, []);

  return (
    <PortfolioDetail
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: 'Research Insights Portal' }]}
      title="Research"
      accent="Insights"
      description="Data publishing portal with dashboards and downloadable reports for stakeholders."
      imageSrc="/images/projects/research-insights.svg"
      imageAlt="Research insights portal mockup"
      figureCaption="Dashboards and reports"
      summary="A public portal for sharing research results and program outcomes. The site provides interactive dashboards and downloadable reports with strong accessibility and performance."
      highlights={[
        'Interactive dashboards with drill‑downs and filters.',
        'Accessible charts and keyboard navigation.',
        'Exportable datasets and report PDFs.',
      ]}
      stack={[ 'React front‑end, analytics integration, static export for uptime and speed.' ]}
    />
  );
}
