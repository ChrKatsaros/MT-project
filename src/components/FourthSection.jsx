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
        Private appointments and immersive experiences are available by prior
        arrangement.
        <br />
        <br />
        London bookings are handled separately through the dedicated London
        booking page. For Bournemouth, Southampton, Portsmouth and all other
        enquiries, please use the private application form.
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

        {/* PHONE CALLS */}
        <div className="info-block">
          <span className="info-label">
            <FaPhoneAlt className="info-icon" />
            Phone Calls
          </span>

          <a>By appointment only</a>
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

      {/* BOOKING OPTIONS */}
      <div className="booking-options">
        <div className="booking-option london">
          <p className="booking-eyebrow">London</p>

          <p className="booking-description">
            For appointments in London, use the dedicated London booking page.
          </p>

          <a
            href="https://houseofworshiplondon.com/mistress/new-mistress-vanta/"
            target="_blank"
            rel="noreferrer"
            className="fourth-button london-booking"
          >
            London Bookings
          </a>
        </div>

        <div className="booking-option regional">
          <p className="booking-eyebrow">Other Locations</p>

          <p className="booking-description">
            For Bournemouth, Southampton, Portsmouth and other enquiries, submit
            a private application.
          </p>

          <Link to="/application" className="fourth-button primary">
            Submit Application
          </Link>
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
    </section>
  );
};

export default FourthSection;
