// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="px-4 py-20 text-center">
      <h1 className="text-4xl font-bold">
        Page <span className="text-accent">Not Found</span>
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        The page you’re looking for doesn’t exist or has moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-dark font-semibold hover:brightness-95"
        >
          Go to Home
        </Link>

        <Link
          to="/services"
          className="inline-flex items-center rounded-md border px-6 py-3 hover:bg-gray-50"
        >
          Explore Services
        </Link>

        <Link
          to="/sitemap"
          className="inline-flex items-center rounded-md border px-6 py-3 hover:bg-gray-50"
        >
          View Sitemap
        </Link>
      </div>
    </section>
  );
}
