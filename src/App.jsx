// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import MinimalistLayout from './components/MinimalistLayout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

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

          {/* Redirect old /home */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Minimal layout routes */}
          <Route element={<MinimalistLayout />}>
            <Route path="/intro" element={<Intro />} />
          </Route>

          {/* Main layout routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/web-software-services" element={<WebSoftwareServices />} />
            <Route path="/services/professional-services" element={<ProfessionalServices />} />
            <Route path="/services/cyber-operations" element={<CyberOperations />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/project-planning" element={<ProjectPlanning />} />
            <Route path="/services/enterprise-operations" element={<EnterpriseOperations />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />

            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/contracting" element={<Contracting />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility508 />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/500" element={<Error500 />} />

            {/* 404 must be LAST */}
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </Suspense>
    </>
  );
}
