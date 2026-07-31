import React from 'react';
import './fourthSection.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const FourthSection = () => {
  return (
    <section className="fourth-section">
      <p className="fourth-subtitle">Private Access</p>

      <h2 className="fourth-title">
        Enter <span>Her World</span>
      </h2>

      <p className="fourth-text">
        Private bookings and immersive experiences require a completed
        application form prior to consideration.
        <br />
        <br />
        For availability enquiries or private venue arrangements, contact
        details are provided below.
      </p>

      <div className="fourth-info">
        {/* LOCATION */}
        <div className="info-block">
          <span className="info-label">
            <FaMapMarkerAlt className="info-icon" />
            Available In
          </span>

          <a>London · Bournemouth · Southampton · Portsmouth</a>
        </div>

        {/* PHONE */}
        <div className="info-block">
          <span className="info-label">
            <FaPhoneAlt className="info-icon" />
            Phone
          </span>

          <a href="tel:07462938600">07462 938600</a>
        </div>

        {/* INSTAGRAM */}
        <div className="info-block">
          <span className="info-label">
            <FaInstagram className="info-icon" />
            Instagram
          </span>

          <a
            href="https://instagram.com/misstabithathorne"
            target="_blank"
            rel="noreferrer"
          >
            @misstabithathorne
          </a>
        </div>
      </div>

      {/* WISHLIST BLOCK */}
      <div className="wishlist-block">
        <p className="wishlist-eyebrow">Private Selection</p>

        <p className="wishlist-message">
          A curated collection of personal preferences, gifts, and indulgences.
          For those who wish to contribute or explore what inspires her world.
        </p>

        <a
          href="https://throne.com/tabithathorne"
          target="_blank"
          rel="noreferrer"
          className="fourth-button wishlist"
        >
          Enter Her Wishlist
        </a>
      </div>

      {/* APPLICATION CTA */}
      <div className="fourth-cta-group">
        <Link to="/application" className="fourth-button primary">
          Submit Application
        </Link>
      </div>
    </section>
  );
};

export default FourthSection;
