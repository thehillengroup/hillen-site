// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import MinimalistLayout from './components/MinimalistLayout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import ProtectedRoute from './auth/ProtectedRoute';
// import Logout from './pages/Logout';

// Lazy-loaded pages (code-splitting)
const Intro                 = lazy(() => import(/* webpackChunkName: "intro" */ './pages/Intro'));
const Home                  = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'));
const About                 = lazy(() => import(/* webpackChunkName: "about" */ './pages/About'));
const Services              = lazy(() => import(/* webpackChunkName: "services" */ './pages/Services'));
const WebAndSoftwareServices  = lazy(() => import(/* webpackChunkName: "web-software-services" */ './pages/Services/WebSoftwareServices'));
const ProfessionalServices  = lazy(() => import(/* webpackChunkName: "professional-services" */ './pages/Services/ProfessionalServices'));
const CyberOperations       = lazy(() => import(/* webpackChunkName: "cyber-operations" */ './pages/Services/CyberOperations'));
const EnterpriseOperations  = lazy(() => import(/* webpackChunkName: "enterprise-operations" */ './pages/Services/EnterpriseOperations'));
const DataAnalytics         = lazy(() => import(/* webpackChunkName: "data-analytics" */ './pages/Services/DataAnalytics'));
const Portfolio             = lazy(() => import(/* webpackChunkName: "portfolio" */ './pages/Portfolio'));
const Industries            = lazy(() => import(/* webpackChunkName: "industries" */ './pages/Industries'));
const Careers               = lazy(() => import(/* webpackChunkName: "careers" */ './pages/Careers'));
const Apply                 = lazy(() => import(/* webpackChunkName: "apply" */ './pages/Apply'));
const Contact               = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
// const Login              = lazy(() => import(/* webpackChunkName: "login" */ './pages/Login'));
const Privacy               = lazy(() => import(/* webpackChunkName: "privacy" */ './pages/Privacy'));
const Terms                 = lazy(() => import(/* webpackChunkName: "terms" */ './pages/Terms'));
const Accessibility508      = lazy(() => import(/* webpackChunkName: "accessibility" */ './pages/Accessibility508'));
const Sitemap               = lazy(() => import(/* webpackChunkName: "sitemap" */ './pages/Sitemap'));
const NotFound              = lazy(() => import(/* webpackChunkName: "notfound" */ './pages/NotFound'));

// Gov-contracting bundle
const Contracting           = lazy(() => import(/* webpackChunkName: "contracting" */ './pages/Contracting'));
const CaseStudies           = lazy(() => import(/* webpackChunkName: "case-studies" */ './pages/CaseStudies'));
const CaseStudy             = lazy(() => import(/* webpackChunkName: "case-study" */ './pages/CaseStudy'));

export default function App() {
  return (
    <>
      {/* Scroll to top on every route change; set offset to sticky header height if needed */}
      <ScrollToTop offset={0} smooth={false} />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Minimal routes (no header/footer) */}
          <Route path="/" element={<MinimalistLayout><Intro /></MinimalistLayout>} />
          {/* <Route path="/logout" element={<MinimalistLayout><Logout /></MinimalistLayout>} /> */}

          {/* Main site with header/footer */}
          <Route path="/home"                           element={<Layout><Home /></Layout>} />
          <Route path="/about"                          element={<Layout><About /></Layout>} />
          <Route path="/services"                       element={<Layout><Services /></Layout>} />
          <Route path="/services/web-software-services" element={<Layout><WebAndSoftwareServices /></Layout>} />
          <Route path="/services/professional-services" element={<Layout><ProfessionalServices /></Layout>} />
          <Route path="/services/cyber-operations"      element={<Layout><CyberOperations /></Layout>} />
          <Route path="/services/data-analytics"        element={<Layout><DataAnalytics /></Layout>} />
          <Route path="/services/enterprise-operations" element={<Layout><EnterpriseOperations /></Layout>} />
          <Route path="/portfolio"                      element={<Layout><Portfolio /></Layout>} />
          <Route path="/industries"                     element={<Layout><Industries /></Layout>} />
          <Route path="/careers"                        element={<Layout><Careers /></Layout>} />
          <Route path="/apply"                          element={<Layout><Apply /></Layout>} />
          {/* <Route
            path="/apply"
            element={
              <Layout>
                <ProtectedRoute>
                  <Apply />
                </ProtectedRoute>
              </Layout>
            }
          /> */}
          <Route path="/contact"            element={<Layout><Contact /></Layout>} />
          {/* <Route path="/login"          element={<Layout><Login /></Layout>} /> */}

          {/* Gov-contracting */}
          <Route path="/contracting"        element={<Layout><Contracting /></Layout>} />
          <Route path="/case-studies"       element={<Layout><CaseStudies /></Layout>} />
          <Route path="/case-studies/:slug" element={<Layout><CaseStudy /></Layout>} />

          {/* Legal / utility */}
          <Route path="/privacy"            element={<Layout><Privacy /></Layout>} />
          <Route path="/terms"              element={<Layout><Terms /></Layout>} />
          <Route path="/accessibility"      element={<Layout><Accessibility508 /></Layout>} />
          <Route path="/sitemap"            element={<Layout><Sitemap /></Layout>} />

          {/* 404 (no header/footer) */}
          <Route path="*"                   element={<MinimalistLayout><NotFound /></MinimalistLayout>} />
        </Routes>
      </Suspense>
    </>
  );
}
