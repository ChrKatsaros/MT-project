import React, { useState } from 'react';
import './application.css';

import { FiMail, FiPhone } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

function Application() {
  const [contactMethod, setContactMethod] = useState('');

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
        {/* FORM SETTINGS */}
        <input
          type="hidden"
          name="_subject"
          value="New Application Submission"
        />

        <input
          type="hidden"
          name="_next"
          value="https://tabithathorne.co.uk/application"
        />

        {/* HERO */}
        <section className="app-hero">
          <h1>
            <span>A</span>pplication
          </h1>

          <p className="quote">
            “Access is never given freely. It is considered.”
          </p>

          <p className="intro">
            Applications are reviewed privately and selectively. Compatibility,
            communication style, emotional intelligence, and mutual
            understanding matter.
          </p>
        </section>

        {/* BASIC INFO */}
        <section className="app-section">
          <h2>Basic Information</h2>

          <div className="required-note">
            <span>*</span> Required fields
          </div>

          <div className="form-grid">
            <input name="name" type="text" placeholder="Name *" required />

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
              placeholder="Location *"
              required
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

            {/* DYNAMIC CONTACT FIELD */}

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
                placeholder="Phone number *"
                required
                autoComplete="tel"
                inputMode="numeric"
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

            {/* OPTIONAL NOTES */}

            <textarea
              name="contact_notes"
              placeholder="Any preferences or notes regarding contact? (optional)"
            />
          </div>
        </section>

        {/* INTENTIONS */}
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

        {/* EXPERIENCE */}
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

        {/* PRACTICAL */}
        <section className="app-section dark">
          <h2>Practical</h2>

          <input
            name="availability"
            type="text"
            placeholder="Availability *"
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

        {/* LOCATION INFO */}
        <section className="app-section">
          <h2>Private Applications & Bookings</h2>

          <p>
            Private bookings and tailored experiences are submitted through this
            application.
          </p>

          <p>
            Sessions are available at carefully selected venues across London,
            as well as Bournemouth, Southampton, and Portsmouth.
          </p>

          <p>
            Same-day appointments may occasionally be available, subject to
            availability.
          </p>

          <p className="accent">Phone: 07462 938600</p>
        </section>
        {/* FINAL */}
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
