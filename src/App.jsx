// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import MinimalistLayout from './components/MinimalistLayout'; // use ONE minimal layout

import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Industries from './pages/Industries';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Accessibility508 from './pages/Accessibility508';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      {/* Scroll to top on every route change; set offset to your sticky header height if needed */}
      <ScrollToTop offset={0} smooth={false} />

      <Routes>
        {/* Intro (no header/footer) */}
        <Route path="/" element={<MinimalistLayout><Intro /></MinimalistLayout>} />

        {/* Main site with header/footer */}
        <Route path="/home"        element={<Layout><Home /></Layout>} />
        <Route path="/about"       element={<Layout><About /></Layout>} />
        <Route path="/services"    element={<Layout><Services /></Layout>} />
        <Route path="/portfolio"   element={<Layout><Portfolio /></Layout>} />
        <Route path="/careers"     element={<Layout><Careers /></Layout>} />
        <Route path="/industries"  element={<Layout><Industries /></Layout>} />
        <Route path="/contact"     element={<Layout><Contact /></Layout>} />
        <Route path="/login"       element={<Layout><Login /></Layout>} />

        {/* Legal / utility */}
        <Route path="/privacy"       element={<Layout><Privacy /></Layout>} />
        <Route path="/terms"         element={<Layout><Terms /></Layout>} />
        <Route path="/accessibility" element={<Layout><Accessibility508 /></Layout>} />
        <Route path="/sitemap"       element={<Layout><Sitemap /></Layout>} />

        {/* 404 (no header/footer) */}
        <Route path="*" element={<MinimalistLayout><NotFound /></MinimalistLayout>} />
      </Routes>
    </>
  );
}
