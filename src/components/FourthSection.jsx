import React from 'react';
import './fourthSection.css';
import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

const LONDON_PHONE = '07462 938600';
const LONDON_PHONE_LINK = '+447462938600';
const LONDON_EMAIL = 'londonappointmentdesk@proton.me';

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
        For London appointments, please make contact directly via WhatsApp, text
        or email. For other locations and visiting dates, submit a private
        booking application.
      </p>

      {/* GENERAL INFORMATION */}

      <div className="fourth-info">
        <div className="info-block">
          <span className="info-label">
            <FaMapMarkerAlt className="info-icon" />
            Available In
          </span>

          <span className="info-value">
            London · Bournemouth · Southampton · Portsmouth
          </span>
        </div>

        <div className="info-block">
          <span className="info-label">
            <FaPhoneAlt className="info-icon" />
            Phone & WhatsApp
          </span>

          <a href={`tel:${LONDON_PHONE_LINK}`}>{LONDON_PHONE}</a>

          <span className="fourth-info-note">
            Calls by appointment only · Text or WhatsApp
          </span>
        </div>

        <div className="info-block">
          <span className="info-label">
            <FaInstagram className="info-icon" />
            Instagram
          </span>

          <a
            href="https://instagram.com/misstabithathorne"
            target="_blank"
            rel="noopener noreferrer"
          >
            @misstabithathorne
          </a>
        </div>

        <div className="info-block">
          <span className="info-label">
            <FaXTwitter className="info-icon" />X
          </span>

          <a
            href="https://x.com/TabithaThorne"
            target="_blank"
            rel="noopener noreferrer"
          >
            @TabithaThorne
          </a>
        </div>
      </div>

      {/* BOOKING OPTIONS */}

      <div className="booking-options">
        {/* LONDON BOOKINGS */}

        <div className="booking-option london-featured">
          <p className="booking-eyebrow">Private Appointments · London</p>

          <h3 className="booking-title">London Bookings</h3>

          <p className="booking-description">
            For private appointments in London, please contact the London
            appointment desk directly via WhatsApp, text message or email.
          </p>

          <div className="london-contact-details">
            <a
              href={`tel:${LONDON_PHONE_LINK}`}
              className="london-contact-detail"
            >
              <FaPhoneAlt />
              <span>{LONDON_PHONE}</span>
            </a>

            <a
              href={`mailto:${LONDON_EMAIL}`}
              className="london-contact-detail london-email"
            >
              <FaEnvelope />
              <span>{LONDON_EMAIL}</span>
            </a>
          </div>

          <p className="london-contact-note">
            Phone calls by appointment only.
            <br />
            Text or WhatsApp enquiries welcome.
          </p>

          <div className="london-booking-actions">
            <a
              href={`https://wa.me/${LONDON_PHONE_LINK.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fourth-button london-whatsapp"
            >
              <FaWhatsapp className="booking-button-icon" />
              WhatsApp
            </a>

            <a
              href={`mailto:${LONDON_EMAIL}`}
              className="fourth-button london-email-button"
            >
              <FaEnvelope className="booking-button-icon" />
              Email
            </a>
          </div>
        </div>

        {/* OTHER LOCATIONS */}

        <div className="booking-option">
          <p className="booking-eyebrow">Flexible Booking</p>

          <h3 className="booking-title">
            Other Locations &amp; Visiting Dates
          </h3>

          <p className="booking-description">
            For Bournemouth, Southampton, Portsmouth, other locations or
            selected visiting dates, submit a private booking application.
          </p>

          <Link to="/application" className="fourth-button primary">
            Apply to Book
          </Link>
        </div>
      </div>

      {/* WISHLIST */}

      <div className="wishlist-block">
        <p className="wishlist-eyebrow">Private Selection</p>

        <p className="wishlist-message">
          A curated collection of personal preferences, gifts, and indulgences.
          For those who wish to contribute or explore what inspires her world.
        </p>

        <a
          href="https://throne.com/tabithathorne"
          target="_blank"
          rel="noopener noreferrer"
          className="fourth-button wishlist"
        >
          Enter Her Wishlist
        </a>
      </div>
    </section>
  );
};

export default FourthSection;
