// src/pages/PortfolioFieldOps.jsx
import React, { useEffect } from 'react';
import PortfolioDetail from '../components/portfolio/PortfolioDetail';

export default function PortfolioFieldOps() {
  useEffect(() => { document.title = 'Field Ops Mobile | The Hillen Group'; }, []);

  return (
    <PortfolioDetail
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: 'Field Ops Mobile' }]}
      title="Field Ops"
      accent="Mobile"
      description="Mobile‑first field operations app with offline capture and secure sync."
      imageSrc="/images/projects/field-ops-mobile.svg"
      imageAlt="Field operations mobile app mockup"
      figureCaption="Mobile‑first workflows"
      summary="We delivered a mobile‑first app for field staff to capture data offline and sync securely when back online. The UI prioritizes clarity and speed for field conditions."
      highlights={[
        'Offline‑first data capture and conflict resolution.',
        'Secure authentication and encryption in transit.',
        'Optimized for low‑bandwidth and high latency environments.',
      ]}
      stack={[ 'React, service workers, secure API integration, automated testing and CI.' ]}
    />
  );
}
