import React from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';

import ScrollTopButton from './ScrollTopButton';

import gallery2 from '../assets/gallery2.webp';
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
import gallery19 from '../assets/gallery19.webp';
import gallery20 from '../assets/gallery20.webp';
import gallery21 from '../assets/gallery21.webp';

import gallery23 from '../assets/gallery23.webp';
import gallery24 from '../assets/gallery24.webp';
import gallery25 from '../assets/gallery25.webp';
import gallery26 from '../assets/gallery26.webp';

const images = [
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
  gallery21,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
];

function Gallery() {
  return (
    <>
      {/* =========================
          SEO METADATA
      ========================= */}

      <title>Private Gallery | Mistress Tabitha Thorne</title>

      <meta
        name="description"
        content="Explore the private gallery of Mistress Tabitha Thorne, featuring a curated visual collection shaped by elegance, control, atmosphere and refined feminine authority."
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://www.tabithathorne.co.uk/gallery" />

      {/* OPEN GRAPH */}

      <meta
        property="og:title"
        content="Private Gallery | Mistress Tabitha Thorne"
      />

      <meta
        property="og:description"
        content="A curated visual glimpse into the world of Mistress Tabitha Thorne, defined by elegance, atmosphere, control and feminine authority."
      />

      <meta
        property="og:url"
        content="https://www.tabithathorne.co.uk/gallery"
      />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Mistress Tabitha Thorne" />

      <meta property="og:locale" content="en_GB" />

      <meta
        property="og:image"
        content="https://www.tabithathorne.co.uk/preview.jpg"
      />

      {/* TWITTER / X */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Private Gallery | Mistress Tabitha Thorne"
      />

      <meta
        name="twitter:description"
        content="Explore a curated visual collection from the world of Mistress Tabitha Thorne."
      />

      <meta
        name="twitter:image"
        content="https://www.tabithathorne.co.uk/preview.jpg"
      />

      <meta name="twitter:creator" content="@TabithaThorne" />

      {/* =========================
          PAGE
      ========================= */}

      <div className="gallery-page">
        {/* HERO */}

        <section className="gallery-hero">
          <div className="gallery-overlay"></div>

          <div className="gallery-hero-content">
            <h1>
              <span>P</span>rivate <span>V</span>isions
            </h1>

            <p>
              A curated glimpse into elegance, control, intimacy, and desire.
            </p>
          </div>
        </section>

        {/* GALLERY GRID */}

        <section className="gallery-grid-section">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div className="gallery-card" key={index}>
                <img
                  src={image}
                  alt={`Mistress Tabitha Thorne private gallery image ${
                    index + 1
                  }`}
                  loading="lazy"
                />
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

        <ScrollTopButton />
      </div>
    </>
  );
}

export default Gallery;
