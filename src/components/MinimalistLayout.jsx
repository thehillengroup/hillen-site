// src/components/MinimalistLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Seo from './Seo';

export default function MinimalistLayout() {
  return (
    <div className="min-h-screen bg-bg text-dark flex flex-col">
      <Seo />

      <main
        id="main"
        role="main"
        tabIndex={-1}
        className="flex-1 grid place-items-center px-4"
      >
        <div className="text-center w-full max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
