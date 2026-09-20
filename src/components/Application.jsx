import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './application.css';

import { FiMail, FiPhone } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const LONDON_BOOKING_URL =
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

  /*
    LOCATION LOGIC

    Location pages send users to:

    /#/application?location=Bournemouth
    /#/application?location=Southampton
    /#/application?location=Portsmouth

    Because the website uses HashRouter, we check BOTH:
    1. React Router's location.search
    2. window.location.hash

    This makes the location detection reliable.
  */
  useEffect(() => {
    const detectBookingLocation = () => {
      let requestedLocation = null;

      /*
        FIRST TRY:
        React Router search
      */
      if (routerLocation.search) {
        const routerParams = new URLSearchParams(routerLocation.search);

        requestedLocation = routerParams.get('location');
      }

      /*
        FALLBACK:
        Read query directly from the hash.

        Example:
        #/application?location=Portsmouth
      */
      if (!requestedLocation && window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.split('?')[1];

        const hashParams = new URLSearchParams(hashQuery);

        requestedLocation = hashParams.get('location');
      }

      const normalizedLocation = requestedLocation?.trim().toLowerCase();

      /*
        If the visitor arrived from
        Bournemouth / Southampton / Portsmouth
        page, lock the location.
      */
      if (normalizedLocation && BOOKING_LOCATIONS[normalizedLocation]) {
        setPreferredLocation(BOOKING_LOCATIONS[normalizedLocation]);

        setLocationLocked(true);
      } else {
        /*
          Direct visit to Application:
          show normal dropdown.
        */
        setPreferredLocation('');
        setLocationLocked(false);
      }
    };

    detectBookingLocation();

    /*
      Extra protection for HashRouter navigation.
    */
    window.addEventListener('hashchange', detectBookingLocation);

    return () => {
      window.removeEventListener('hashchange', detectBookingLocation);
    };
  }, [routerLocation.pathname, routerLocation.search]);

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
          value="https://www.tabithathorne.co.uk/#/application"
        />

        {/* =========================
            HERO
        ========================= */}

        <section className="app-hero">
          <h1>
            <span>A</span>pplication
          </h1>

          <p className="quote">
            “Access is never given freely. It is considered.”
          </p>

          <p className="intro">
            Applications are reviewed privately and selectively. Compatibility,
            communication style, emotional intelligence and mutual understanding
            matter.
          </p>
        </section>

        {/* =========================
            LONDON BOOKINGS
        ========================= */}

        <section className="london-booking-panel">
          <p className="london-booking-eyebrow">London Appointments</p>

          <h2>Booking in London?</h2>

          <p>
            London appointments are handled through the dedicated London booking
            page.
          </p>

          <a
            href={LONDON_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="london-booking-button"
          >
            London Bookings
          </a>

          <div className="booking-divider">
            <span>Other Locations</span>
          </div>

          <p className="other-locations-text">
            For Bournemouth, Southampton, Portsmouth, flexible-location requests
            and other enquiries, please continue with the application below.
          </p>
        </section>

        {/* =========================
            BASIC INFORMATION
        ========================= */}

        <section className="app-section">
          <h2>Basic Information</h2>

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

            {/* EMAIL */}

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

            {/* PHONE */}

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

            {/* TELEGRAM */}

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
              placeholder="Any preferences or notes regarding contact? (optional)"
            />
          </div>

          <p className="phone-appointment-note">
            Phone calls are by appointment only.
          </p>
        </section>

        {/* =========================
            PERSONALITY
        ========================= */}

        <section className="app-section dark">
          <h2>Personality & Intentions</h2>

          <textarea
            name="draws_you_here"
            placeholder="What draws you here? *"
            required
          />

          <textarea
            name="emotional_dynamic"
            placeholder="What emotional dynamic interests you most?"
          />

          <textarea
            name="control_role"
            placeholder="What role does control or surrender play in your fantasies?"
          />

          <textarea
            name="atmosphere"
            placeholder="Describe the atmosphere you are seeking."
          />
        </section>

        {/* =========================
            EXPERIENCE
        ========================= */}

        <section className="app-section">
          <h2>Experience</h2>

          <textarea
            name="previous_experience"
            placeholder="Previous experience with BDSM or Femdom?"
          />

          <textarea
            name="limits"
            placeholder="Boundaries or limits? *"
            required
          />

          <textarea
            name="interests"
            placeholder="Interests you would like explored?"
          />
        </section>

        {/* =========================
            PRACTICAL
        ========================= */}

        <section className="app-section dark">
          <h2>Practical</h2>

          {/* =========================
              BOOKING LOCATION
          ========================= */}

          {locationLocked ? (
            <div className="selected-booking-location">
              <span>Booking location</span>

              <strong>{preferredLocation}</strong>

              {/*
                Formspree receives the
                preselected location here.
              */}

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
                <option value="">Preferred booking location *</option>

                <option value="Bournemouth">Bournemouth</option>

                <option value="Southampton">Southampton</option>

                <option value="Portsmouth">Portsmouth</option>

                <option value="Flexible / Other">Flexible / Other</option>
              </select>
            </div>
          )}

          <input
            name="availability"
            type="text"
            placeholder="Preferred date(s) / availability *"
            required
          />

          <input
            name="session_style"
            type="text"
            placeholder="Preferred session style"
          />

          <textarea
            name="archetypes"
            placeholder="Which dominant archetypes are you drawn to?"
          />
        </section>

        {/* =========================
            BOOKING INFORMATION
        ========================= */}

        <section className="app-section booking-information">
          <h2>Private Applications & Bookings</h2>

          <p>
            This application is used for Bournemouth, Southampton, Portsmouth,
            flexible-location requests and other private enquiries.
          </p>

          <p>
            Appointments are arranged in advance and remain subject to
            suitability, availability and the relevant booking requirements.
          </p>

          <p>
            New private bookings may require identity verification and a deposit
            before confirmation.
          </p>

          <p className="appointment-only">
            Phone calls are available by appointment only.
          </p>

          <div className="inline-london-booking">
            <span>Looking for London?</span>

            <a href={LONDON_BOOKING_URL} target="_blank" rel="noreferrer">
              London Bookings
            </a>
          </div>
        </section>

        {/* =========================
            FINAL
        ========================= */}

        <section className="app-final">
          <h2>Final Question</h2>

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
  );
}

export default Application;
