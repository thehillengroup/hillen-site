import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/TheHillenGroupMainLogo.png';
import MinimalistLayout from '../components/MinimalistLayout';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home'), 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MinimalistLayout bg="bg-white">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <Picture alt="The Hillen Group" src={logo} imgClassName="w-64 h-auto mb-2" priority />
        <h1 className="text-5xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-dark">Page Not Found</h2>
        <p className="text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          to="/home"
          className="mt-4 px-6 py-3 bg-primary text-white rounded hover:bg-accent transition"
        >
          Return Home
        </Link>
      </div>
    </MinimalistLayout>
  );
};

export default NotFound;
