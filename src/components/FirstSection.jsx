import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firstSectionIMG1 from '../assets/firstSectionIMG1.webp';
import firstSectionIMG2 from '../assets/firstSectionIMG2.webp';

import './firstSection.css';

function FirstSection() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll zoom only on desktop
      if (window.innerWidth <= 1180) {
        setZoom(1);
        return;
      }

      const scrollY = window.scrollY;
      const zoomValue = 1 + Math.min(scrollY / 2000, 0.1);

      setZoom(zoomValue);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="first-section-container">
      {/* LEFT IMAGE */}
      <div className="first-image-wrapper first-image-left">
        <img
          src={firstSectionIMG1}
          alt="Mistress Tabitha Thorne"
          className="first-side-image"
          style={{
            transform: `scale(${zoom})`,
          }}
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="first-middle-content">
        <span className="first-small-title">Exclusive Experiences</span>

        <h2 className="first-main-title">
          Every Session is uniquely crafted to create an atmosphere of
          intensity, elegance and unforgettable connection.
        </h2>

        <Link to="/about" className="first-shop-button">
          Enter My World
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="first-image-wrapper first-image-right">
        <img
          src={firstSectionIMG2}
          alt="Mistress Tabitha Thorne"
          className="first-side-image"
          style={{
            transform: `scale(${zoom})`,
          }}
        />
      </div>
    </section>
  );
}

export default FirstSection;
