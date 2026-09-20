import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';

import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Protocol from './components/Protocol';
import Gallery from './components/Gallery';
import Guides from './components/Guides';
import Application from './components/Application';

import AgeWarning from './components/AgeWarning';
import Underage from './components/Underage';

/* =========================================
   SHARED APPLICATION CONTENT

   This contains the actual routes and layout.

   It is intentionally kept separate from
   BrowserRouter so the same route tree can
   later be rendered with StaticRouter during
   the prerender build.
========================================= */

export function AppContent() {
  const location = useLocation();

  const isUnderagePage = location.pathname === '/underage';

  return (
    <>
      <ScrollToTop />

      {/* AGE WARNING */}
      {!isUnderagePage && <AgeWarning />}

      {/* NAVBAR */}
      {!isUnderagePage && <Navbar />}

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
            path="/guides"
            element={
              <PageTransition>
                <Guides />
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
      {!isUnderagePage && <FourthSection />}

      {/* FOOTER */}
      {!isUnderagePage && <Footer />}
    </>
  );
}

/* =========================================
   BROWSER APPLICATION
========================================= */

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
