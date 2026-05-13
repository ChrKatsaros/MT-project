import React, { useEffect, useState } from 'react';
import firstSectionIMG1 from '../assets/firstSectionIMG1.webp';
import firstSectionIMG2 from '../assets/firstSectionIMG2.webp';
import '../components/firstSection.css';
import { Link } from 'react-router-dom';
function FirstSection() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const zoomValue = 1 + Math.min(scrollY / 2000, 0.1); // Max zoom = 0.1 2000  Speed
      setZoom(zoomValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="first-section-container">
      <div className="first-image-wrapper">
        <img
          src={firstSectionIMG1}
          alt="Left"
          className="first-side-image"
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      <div className="first-middle-content">
        <span className="first-small-title">Exclusive Experiences</span>
        <h1 className="first-main-title">
          Every Session is uniquely crafted to create an atmosphere of
          intensity, elegance and unforgettable connection.
        </h1>
        <Link to="/about">
          <button className="first-shop-button">Enter My World</button>
        </Link>
      </div>

      <div className="first-image-wrapper">
        <img
          src={firstSectionIMG2}
          alt="Right"
          className="first-side-image"
          style={{ transform: `scale(${zoom})` }}
        />
      </div>
    </div>
  );
}

export default FirstSection;
