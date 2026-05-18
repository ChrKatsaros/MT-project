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
    {
      src: gallery0,
      alt: 'Mistress Tabitha Thorne luxury portrait in London',
    },
    {
      src: gallery1,
      alt: 'Tabitha Thorne elegant female authority aesthetic',
    },
    {
      src: gallery2,
      alt: 'Mistress Tabitha in refined dungeon atmosphere',
    },
    {
      src: gallery3,
      alt: 'Tabitha Thorne psychological domination portrait',
    },
    {
      src: gallery4,
      alt: 'Luxury femdom atmosphere with Mistress Tabitha',
    },
    {
      src: gallery5,
      alt: 'Mistress Tabitha Thorne private session aesthetic',
    },
    {
      src: gallery6,
      alt: 'Elegant London dominatrix portrait of Tabitha Thorne',
    },
    {
      src: gallery7,
      alt: 'Tabitha Thorne luxury BDSM setting',
    },
    {
      src: gallery8,
      alt: 'Mistress Tabitha composed feminine authority',
    },
    {
      src: gallery9,
      alt: 'Psychological domination aesthetic by Tabitha Thorne',
    },
    {
      src: gallery10,
      alt: 'Mistress Tabitha luxury ritual atmosphere',
    },
    {
      src: gallery11,
      alt: 'Elegant female domination portrait in London',
    },
    {
      src: gallery12,
      alt: 'Tabitha Thorne immersive power exchange aesthetic',
    },
    {
      src: gallery13,
      alt: 'Mistress Tabitha refined control and elegance',
    },
    {
      src: gallery14,
      alt: 'Luxury dungeon portrait of Tabitha Thorne',
    },
    {
      src: gallery18,
      alt: 'Mistress Tabitha sensual authority aesthetic',
    },
    {
      src: gallery19,
      alt: 'Tabitha Thorne elegant domination atmosphere',
    },
    {
      src: gallery20,
      alt: 'Mistress Tabitha Thorne luxury London experience',
    },
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
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* CTA */}
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
