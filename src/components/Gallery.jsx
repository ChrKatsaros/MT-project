import React from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';

import gallery0 from '../assets/gallery20.webp';
import gallery1 from '../assets/gallery21.webp';
import gallery2 from '../assets/gallery19.webp';
import gallery3 from '../assets/gallery3.webp';
import gallery4 from '../assets/gallery4.webp';
import gallery5 from '../assets/gallery5.webp';
import gallery6 from '../assets/gallery6.webp';
import gallery7 from '../assets/gallery7.webp';
import gallery8 from '../assets/gallery8.webp';
import gallery9 from '../assets/gallery9.webp';
import gallery10 from '../assets/gallery10.webp';
import gallery11 from '../assets/gallery11.webp';
import gallery12 from '../assets/gallery12.webp';
import gallery13 from '../assets/gallery13.webp';
import gallery14 from '../assets/gallery14.webp';
import gallery18 from '../assets/gallery18.webp';
import gallery19 from '../assets/gallery2.webp';
import gallery20 from '../assets/gallery0.webp';

function Gallery() {
  const images = [
    gallery0,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery18,
    gallery19,
    gallery20,
  ];

  return (
    <div className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-overlay" />

        <div className="gallery-hero-content">
          <h1>
            <span>P</span>rivate <span>V</span>isions
          </h1>

          <p>A curated glimpse into elegance, control, intimacy, and desire.</p>
        </div>
      </section>

      {/* GRID */}
      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="gallery-bottom-cta">
          <h2>Want Access to More?</h2>

          <Link to="/application" className="gallery-cta">
            Request Private Entry
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
