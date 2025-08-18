// src/pages/NotFound.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Picture from '../components/media/Picture';
import { logNotFound } from '../utils/telemetry';
import logo from '../assets/images/TheHillenGroupMainLogo.png';

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const [secs, setSecs] = useState(10);

  useEffect(() => {
    // log 404
    logNotFound(location.pathname, document.referrer);

    // countdown redirect
    const timer = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    const toHome = setTimeout(() => navigate('/home'), 10_000);

    return () => {
      clearInterval(timer);
      clearTimeout(toHome);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-dark">
      <div className="relative w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-md p-8 shadow-xl">
         <Picture alt="The Hillen Group" src={logo} imgClassName="w-64 h-auto mb-2" priority />
        <h1 className="text-5xl font-bold text-center text-accent">404</h1>
        <p className="mt-2 text-center text-lg">Page Not Found</p>
        <p className="mt-1 text-center text-gray-600">
          Redirecting to Home in <span className="font-semibold">{secs}</span>s…
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            to="/home"
            className="rounded-md bg-accent px-5 py-2 font-semibold text-dark hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent/60"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
