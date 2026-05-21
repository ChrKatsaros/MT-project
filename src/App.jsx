import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';

import Home from './components/Home';
import About from './components/About';
import Application from './components/Application';
import Gallery from './components/Gallery';
import Protocol from './components/Protocol';
import Experiences from './components/Experiences';

import AgeWarning from './components/AgeWarning';
import Underage from './components/Underage';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      {/* AGE WARNING */}
      {location.pathname !== '/underage' && <AgeWarning />}

      {/* NAVBAR */}
      {location.pathname !== '/underage' && <Navbar />}

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/experiences"
            element={
              <PageTransition>
                <Experiences />
              </PageTransition>
            }
          />

          <Route
            path="/protocol"
            element={
              <PageTransition>
                <Protocol />
              </PageTransition>
            }
          />

          <Route
            path="/gallery"
            element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            }
          />

          <Route
            path="/application"
            element={
              <PageTransition>
                <Application />
              </PageTransition>
            }
          />

          <Route
            path="/underage"
            element={
              <PageTransition>
                <Underage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* FOOTER CTA */}
      {location.pathname !== '/underage' && <FourthSection />}

      {/* FOOTER */}
      {location.pathname !== '/underage' && <Footer />}
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
