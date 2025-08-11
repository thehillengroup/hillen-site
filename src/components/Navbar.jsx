import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/The-Hillen-White-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-dark shadow-md' : 'bg-dark'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/home">
          <img
            src={logo}
            alt="The Hillen Group"
            className="h-20 w-auto"
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 text-lg">
          <Link to="/home" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/services" className="hover:text-accent">Services</Link>
          <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
          <Link to="/careers" className="hover:text-accent">Careers</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Nav Slide-In (FULL OPAQUE BACKGROUND) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-dark text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 pt-20 space-y-6 text-xl">
          <Link to="/home" onClick={toggleMenu} className="block hover:text-accent">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-accent">About</Link>
          <Link to="/services" onClick={toggleMenu} className="block hover:text-accent">Services</Link>
          <Link to="/portfolio" onClick={toggleMenu} className="block hover:text-accent">Portfolio</Link>
          <Link to="/careers" onClick={toggleMenu} className="block hover:text-accent">Careers</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-accent">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
