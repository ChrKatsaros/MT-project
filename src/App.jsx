import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Application from './components/Application';
import Gallery from './components/Gallery';
import Protocol from './components/Protocol';
import Experiences from './components/Experiences';

import AgeWarning from './components/AgeWarning';
import Underage from './components/Underage';
import FourthSection from './components/FourthSection';
function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      {/* Hide age warning on underage page */}
      {location.pathname !== '/underage' && <AgeWarning />}

      {/* Hide navbar/footer on underage page */}
      {location.pathname !== '/underage' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/application" element={<Application />} />

        {/* Underage page */}
        <Route path="/underage" element={<Underage />} />
      </Routes>

      {location.pathname !== '/underage' && <FourthSection />}
      {location.pathname !== '/underage' && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
