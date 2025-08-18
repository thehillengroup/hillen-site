import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/TheHillenGroupMainLogo.png';
import Picture from '../components/media/Picture';
import MinimalistLayout from '../components/MinimalistLayout';

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MinimalistLayout>
      <div>
        <Picture alt="The Hillen Group" src={logo} imgClassName="w-64 h-auto mb-6 animate-pulse" priority />
        <h1 className="text-xl font-semibold text-dark">Welcome to The Hillen Group</h1>
        <p className="mt-2 text-sm text-gray-500">Redirecting you to the homepage...</p>
      </div>
    </MinimalistLayout>
  );
};

export default Intro;
