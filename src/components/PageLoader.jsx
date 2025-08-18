// src/components/PageLoader.jsx
import React from 'react';

export default function PageLoader() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-accent animate-bounce [animation-delay:-0.2s]" />
        <span className="h-2 w-2 rounded-full bg-accent animate-bounce [animation-delay:-0.1s]" />
        <span className="h-2 w-2 rounded-full bg-accent animate-bounce" />
        <span className="ml-2 text-sm text-gray-600">Loading…</span>
      </div>
    </div>
  );
}
