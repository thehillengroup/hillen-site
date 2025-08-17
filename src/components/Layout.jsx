import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Skip link for keyboard users */}
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main" role="main" tabIndex={-1} className="focus:outline-none flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
