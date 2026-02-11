// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import MinimalistLayout from './components/MinimalistLayout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

// Lazy-loaded pages
const Intro = lazy(() => import('./pages/Intro'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WebSoftwareServices = lazy(() => import('./pages/Services/WebSoftwareServices'));
const ProfessionalServices = lazy(() => import('./pages/Services/ProfessionalServices'));
const CyberOperations = lazy(() => import('./pages/Services/CyberOperations'));
const EnterpriseOperations = lazy(() => import('./pages/Services/EnterpriseOperations'));
const DataAnalytics = lazy(() => import('./pages/Services/DataAnalytics'));
const ProjectPlanning = lazy(() => import('./pages/Services/ProjectPlanning'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetailPage = lazy(() => import('./pages/PortfolioDetailPage'));
const Industries = lazy(() => import('./pages/Industries'));
const Careers = lazy(() => import('./pages/Careers'));
const Apply = lazy(() => import('./pages/Apply'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Accessibility508 = lazy(() => import('./pages/Accessibility508'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Capabilities = lazy(() => import('./pages/Capabilities'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Error500 = lazy(() => import('./pages/Error500'));
const Contracting = lazy(() => import('./pages/Contracting'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));

export default function App() {
  return (
    <>
      <ScrollToTop offset={96} smooth={false} />

      <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* Home now lives at root */}
          <Route path="/" element={<Layout><Home /></Layout>} />

          {/* Optional intro page */}
          <Route path="/intro" element={<MinimalistLayout><Intro /></MinimalistLayout>} />

          {/* Redirect old /home to root */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Main routes */}
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/services/web-software-services" element={<Layout><WebSoftwareServices /></Layout>} />
          <Route path="/services/professional-services" element={<Layout><ProfessionalServices /></Layout>} />
          <Route path="/services/cyber-operations" element={<Layout><CyberOperations /></Layout>} />
          <Route path="/services/data-analytics" element={<Layout><DataAnalytics /></Layout>} />
          <Route path="/services/project-planning" element={<Layout><ProjectPlanning /></Layout>} />
          <Route path="/services/enterprise-operations" element={<Layout><EnterpriseOperations /></Layout>} />

          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/portfolio/:slug" element={<Layout><PortfolioDetailPage /></Layout>} />

          <Route path="/industries" element={<Layout><Industries /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/apply" element={<Layout><Apply /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          <Route path="/contracting" element={<Layout seo={{ noindex: true }}><Contracting /></Layout>} />
          <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
          <Route path="/case-studies/:slug" element={<Layout><CaseStudy /></Layout>} />

          <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/terms" element={<Layout><Terms /></Layout>} />
          <Route path="/accessibility" element={<Layout><Accessibility508 /></Layout>} />
          <Route path="/capabilities" element={<Layout><Capabilities /></Layout>} />
          <Route path="/sitemap" element={<Layout><Sitemap /></Layout>} />
          <Route path="/500" element={<Layout seo={{ noindex: true }}><Error500 /></Layout>} />

          <Route path="*" element={<Layout seo={{ noindex: true }}><NotFound /></Layout>} />

        </Routes>
      </Suspense>
    </>
  );
}
