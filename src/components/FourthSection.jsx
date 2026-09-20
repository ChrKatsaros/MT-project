import React from 'react';
import './fourthSection.css';
import { Link } from 'react-router-dom';

import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const HOUSE_OF_WORSHIP_URL =
  'https://houseofworshiplondon.com/mistress/new-mistress-vanta/';

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
        Choose the booking option that best suits your preferred venue or
        location. Selected venues use their own booking system, while other
        locations and visiting dates can be requested through the private
        application form.
      </p>

      {/* GENERAL INFO */}
      <div className="fourth-info">
        {/* LOCATIONS */}
        <div className="info-block">
          <span className="info-label">
            <FaMapMarkerAlt className="info-icon" />
            Available In
          </span>

          <span className="info-value">
            London · Bournemouth · Southampton · Portsmouth
          </span>
        </div>

        {/* PHONE */}
        <div className="info-block">
          <span className="info-label">
            <FaPhoneAlt className="info-icon" />
            Phone Calls
          </span>

          <span className="info-value">By appointment only</span>
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

      {/* =========================
          BOOKING OPTIONS
      ========================= */}

      <div className="booking-options">
        {/* HOUSE OF WORSHIP */}
        <div className="booking-option venue-featured">
          <p className="booking-eyebrow">West Kensington · London</p>

          <h3 className="booking-title">House of Worship</h3>

          <p className="booking-description">
            For appointments at House of Worship in West Kensington, bookings
            are arranged directly through the venue&apos;s dedicated booking
            page.
          </p>

          <a
            href={HOUSE_OF_WORSHIP_URL}
            target="_blank"
            rel="noreferrer"
            className="fourth-button venue-booking"
          >
            Book at House of Worship
          </a>
        </div>

        {/* OTHER LOCATIONS */}
        <div className="booking-option">
          <p className="booking-eyebrow">Flexible Booking</p>

          <h3 className="booking-title">Other Locations & Visiting Dates</h3>

          <p className="booking-description">
            For Bournemouth, Southampton, Portsmouth, other locations or
            selected visiting dates, submit a private booking application.
          </p>

          <Link to="/application" className="fourth-button primary">
            Apply to Book
          </Link>
        </div>
      </div>

      {/* =========================
          WISHLIST
      ========================= */}

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
