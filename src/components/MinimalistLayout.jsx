import React from 'react';

const MinimalistLayout = ({ children, bg = 'bg-bg' }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center text-center px-4 ${bg}`}>
      {children}
    </div>
  );
};

export default MinimalistLayout;
