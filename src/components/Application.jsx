import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './application.css';

import { FiMail, FiPhone } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const HOUSE_OF_WORSHIP_URL =
  'https://houseofworshiplondon.com/mistress/new-mistress-vanta/';

const BOOKING_LOCATIONS = {
  bournemouth: 'Bournemouth',
  southampton: 'Southampton',
  portsmouth: 'Portsmouth',
  flexible: 'Flexible / Other',
};

function Application() {
  const routerLocation = useLocation();

  const [contactMethod, setContactMethod] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [locationLocked, setLocationLocked] = useState(false);

  /* =========================================
     LOCATION LOGIC
  ========================================= */

  useEffect(() => {
    const params = new URLSearchParams(routerLocation.search);

    const requestedLocation = params.get('location');

    const normalizedLocation = requestedLocation?.trim().toLowerCase();

    if (normalizedLocation && BOOKING_LOCATIONS[normalizedLocation]) {
      setPreferredLocation(BOOKING_LOCATIONS[normalizedLocation]);

      setLocationLocked(true);
    } else {
      setPreferredLocation('');
      setLocationLocked(false);
    }
  }, [routerLocation.search]);

  /* =========================================
     CONTACT ICON
  ========================================= */

  const renderIcon = () => {
    switch (contactMethod) {
      case 'email':
        return <FiMail />;

      case 'phone':
        return <FiPhone />;

      case 'telegram':
        return <FaTelegramPlane />;

      default:
        return null;
    }
  };

  return (
    <>
      {/* =========================
          SEO METADATA
      ========================= */}

      <title>Private Booking Application | Mistress Tabitha Thorne</title>

      <meta
        name="description"
        content="Submit a private booking application for an appointment with Mistress Tabitha Thorne in Bournemouth, Southampton, Portsmouth or selected visiting locations."
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href="https://www.tabithathorne.co.uk/application"
      />

      {/* OPEN GRAPH */}

      <meta
        property="og:title"
        content="Private Booking Application | Mistress Tabitha Thorne"
      />

      <meta
        property="og:description"
        content="Submit a private application for appointments with Mistress Tabitha Thorne across Bournemouth, Southampton, Portsmouth and selected visiting locations."
      />

      <meta
        property="og:url"
        content="https://www.tabithathorne.co.uk/application"
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
        content="Private Booking Application | Mistress Tabitha Thorne"
      />

      <meta
        name="twitter:description"
        content="Submit a private booking application for an appointment with Mistress Tabitha Thorne."
      />

      <meta
        name="twitter:image"
        content="https://www.tabithathorne.co.uk/preview.jpg"
      />

      <meta name="twitter:creator" content="@TabithaThorne" />

      {/* =========================
          PAGE
      ========================= */}

      <div className="application-page">
        <form action="https://formspree.io/f/xvzljpqn" method="POST">
          {/* =========================
              FORM SETTINGS
          ========================= */}

          <input
            type="hidden"
            name="_subject"
            value="New Application Submission"
          />

          <input
            type="hidden"
            name="_next"
            value="https://www.tabithathorne.co.uk/application"
          />

          {/* =========================
              HERO
          ========================= */}

          <section className="app-hero">
            <p className="app-hero-eyebrow">Private Application</p>

            <h1>
              <span>A</span>pplication
            </h1>

            <p className="quote">
              “Access is never given freely. It is considered.”
            </p>

            <p className="intro">
              Applications are reviewed privately and selectively.
              Compatibility, communication style, emotional intelligence and
              mutual understanding matter.
            </p>

            <div className="app-hero-line" />
          </section>

          {/* =========================
              HOUSE OF WORSHIP
          ========================= */}

          <section className="london-booking-panel">
            <p className="london-booking-eyebrow">West Kensington · London</p>

            <h2>Booking at House of Worship?</h2>

            <p>
              Appointments at House of Worship in West Kensington are arranged
              directly through the venue&apos;s dedicated booking page.
            </p>

            <a
              href={HOUSE_OF_WORSHIP_URL}
              target="_blank"
              rel="noreferrer"
              className="london-booking-button"
            >
              Book at House of Worship
            </a>

            <div className="booking-divider">
              <span>Other Locations &amp; Visiting Dates</span>
            </div>

            <p className="other-locations-text">
              For Bournemouth, Southampton, Portsmouth, other locations,
              flexible-location requests or selected visiting dates, please
              continue with the private application below.
            </p>
          </section>

          {/* =========================
              01 BASIC INFORMATION
          ========================= */}

          <section className="app-section">
            <div className="app-section-heading">
              <span className="app-section-number">01</span>

              <div>
                <p className="app-section-eyebrow">Introduction</p>

                <h2>Basic Information</h2>
              </div>
            </div>

            <div className="required-note">
              <span>*</span> Required fields
            </div>

            <div className="form-grid">
              <input
                name="name"
                type="text"
                placeholder="Name *"
                required
                autoComplete="name"
              />

              <input
                name="age"
                type="number"
                min="18"
                placeholder="Age (18+) *"
                required
              />

              <input
                name="location"
                type="text"
                placeholder="Your city / area *"
                required
                autoComplete="address-level2"
              />

              {/* CONTACT METHOD */}

              <div className="contact-method-wrapper">
                <select
                  name="contact_method"
                  required
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                >
                  <option value="">Contact method *</option>

                  <option value="email">Email</option>

                  <option value="phone">Phone</option>

                  <option value="telegram">Telegram</option>
                </select>

                {contactMethod && (
                  <div className="contact-icons">{renderIcon()}</div>
                )}
              </div>

              {contactMethod === 'email' && (
                <input
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  required
                  autoComplete="email"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                />
              )}

              {contactMethod === 'phone' && (
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your phone number *"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="^\+?[0-9\s]{7,15}$"
                />
              )}

              {contactMethod === 'telegram' && (
                <input
                  name="telegram"
                  type="text"
                  placeholder="Telegram username *"
                  required
                />
              )}

              <textarea
                name="contact_notes"
                className="app-textarea-medium"
                placeholder="Any preferences or notes regarding contact? (optional)"
              />
            </div>

            <p className="phone-appointment-note">
              Phone calls are by appointment only.
            </p>
          </section>

          {/* =========================
              02 PERSONALITY
          ========================= */}

          <section className="app-section dark">
            <div className="app-section-heading">
              <span className="app-section-number">02</span>

              <div>
                <p className="app-section-eyebrow">Compatibility</p>

                <h2>Personality &amp; Intentions</h2>
              </div>
            </div>

            <textarea
              name="draws_you_here"
              className="app-textarea-large"
              placeholder="What draws you here? *"
              required
            />

            <textarea
              name="emotional_dynamic"
              className="app-textarea-large"
              placeholder="What emotional dynamic interests you most?"
            />

            <textarea
              name="control_role"
              className="app-textarea-large"
              placeholder="What role does control or surrender play in your fantasies?"
            />

            <textarea
              name="atmosphere"
              className="app-textarea-large"
              placeholder="Describe the atmosphere you are seeking."
            />
          </section>

          {/* =========================
              03 EXPERIENCE
          ========================= */}

          <section className="app-section">
            <div className="app-section-heading">
              <span className="app-section-number">03</span>

              <div>
                <p className="app-section-eyebrow">Your Experience</p>

                <h2>Experience</h2>
              </div>
            </div>

            <textarea
              name="previous_experience"
              className="app-textarea-large"
              placeholder="Previous experience with BDSM or Femdom?"
            />

            <textarea
              name="limits"
              className="app-textarea-large"
              placeholder="Boundaries or limits? *"
              required
            />

            <textarea
              name="interests"
              className="app-textarea-large"
              placeholder="Interests you would like explored?"
            />
          </section>

          {/* =========================
              04 PRACTICAL
          ========================= */}

          <section className="app-section dark">
            <div className="app-section-heading">
              <span className="app-section-number">04</span>

              <div>
                <p className="app-section-eyebrow">Arrangement</p>

                <h2>Practical</h2>
              </div>
            </div>

            {/* BOOKING LOCATION */}

            {locationLocked ? (
              <div className="selected-booking-location">
                <span>Preferred location</span>

                <strong>{preferredLocation}</strong>

                <input
                  type="hidden"
                  name="preferred_booking_location"
                  value={preferredLocation}
                />
              </div>
            ) : (
              <div className="booking-location-wrapper">
                <select
                  name="preferred_booking_location"
                  required
                  value={preferredLocation}
                  onChange={(e) => setPreferredLocation(e.target.value)}
                >
                  <option value="">Preferred location / visiting date *</option>

                  <option value="Bournemouth">Bournemouth</option>

                  <option value="Southampton">Southampton</option>

                  <option value="Portsmouth">Portsmouth</option>

                  <option value="Flexible / Other">Flexible / Other</option>
                </select>
              </div>
            )}

            {/* BOOKING DATES */}

            <div className="booking-date-fields">
              <div className="booking-date-field">
                <label htmlFor="preferred-date">
                  Preferred date <span>*</span>
                </label>

                <input
                  id="preferred-date"
                  name="preferred_date"
                  type="date"
                  required
                />
              </div>

              <div className="booking-date-field">
                <label htmlFor="alternative-date">Alternative date</label>

                <input
                  id="alternative-date"
                  name="alternative_date"
                  type="date"
                />
              </div>
            </div>

            <input
              name="session_style"
              type="text"
              placeholder="Preferred session style"
            />

            <textarea
              name="archetypes"
              className="app-textarea-large"
              placeholder="Which dominant archetypes are you drawn to?"
            />
          </section>

          {/* =========================
              BOOKING INFORMATION
          ========================= */}

          <section className="app-section booking-information">
            <p className="app-section-eyebrow">Before Submission</p>

            <h2>Private Applications &amp; Bookings</h2>

            <p>
              This application is used for Bournemouth, Southampton, Portsmouth,
              other locations, flexible-location requests and selected visiting
              dates.
            </p>

            <p>
              Appointments are arranged in advance and remain subject to
              suitability, availability and the relevant booking requirements.
            </p>

            <p>
              New private bookings may require identity verification and a
              deposit before confirmation.
            </p>

            <p className="appointment-only">
              Phone calls are available by appointment only.
            </p>

            <div className="inline-london-booking">
              <span>Looking for House of Worship?</span>

              <a href={HOUSE_OF_WORSHIP_URL} target="_blank" rel="noreferrer">
                Book at House of Worship
              </a>
            </div>
          </section>

          {/* =========================
              FINAL
          ========================= */}

          <section className="app-final">
            <p className="app-final-eyebrow">Final Reflection</p>

            <h2>Final Question</h2>

            <p className="app-final-intro">
              Take a moment before submitting your application.
            </p>

            <textarea
              name="final_question"
              className="final-input"
              placeholder="What specifically drew you into Tabitha Thorne’s world? *"
              required
            />

            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </section>
        </form>
      </div>
    </>
  );
}

export default Application;
