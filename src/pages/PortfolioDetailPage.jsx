// src/pages/PortfolioDetailPage.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioDetail from '../components/portfolio/PortfolioDetail';
import DETAILS from '../data/portfolio/details';

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const d = DETAILS[slug];

  useEffect(() => {
    if (d) document.title = `${d.title} ${d.accent ? '— ' + d.accent : ''} | The Hillen Group`;
  }, [slug]);

  if (!d) {
    return (
      <main className="bg-bg text-dark px-4">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="mt-3 text-gray-700">We couldn’t find that portfolio entry. Please check the link or return to the portfolio.</p>
          <a className="mt-6 inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-dark hover:brightness-95" href="/portfolio">Back to Portfolio</a>
        </div>
      </main>
    );
  }

  return (
    <PortfolioDetail
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: d.title + (d.accent ? ' ' + d.accent : '') }]}
      title={d.title}
      accent={d.accent}
      description={d.description}
      imageSrc={d.imageSrc}
      imageAlt={d.imageAlt}
      figureCaption={d.figureCaption}
      summary={d.summary}
      highlights={d.highlights}
      stack={d.stack}
    />
  );
}

