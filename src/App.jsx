import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <Services />
          </Layout>
        }
      />
      <Route
        path="/portfolio"
        element={
          <Layout>
            <Portfolio />
          </Layout>
        }
      />
      <Route
        path="/careers"
        element={
          <Layout>
            <Careers />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />// …
        <Route
          path="/apply"
          element={
            <Layout>
              <Apply />
            </Layout>
          }
        />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
