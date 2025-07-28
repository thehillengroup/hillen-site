import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} The Hillen Group. All rights reserved, folks.
      </p>
    </footer>
  );
};

export default Footer;
