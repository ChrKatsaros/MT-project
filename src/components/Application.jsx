import React from 'react';
import './application.css';

function Application() {
  return (
    <div className="application-page">
      <form action="https://formspree.io/f/mzdowzyr" method="POST">
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

          <div className="form-grid">
            <input name="name" type="text" placeholder="Name" required />

            {/* AGE 18+ FIELD */}
            <input
              name="age"
              type="number"
              min="18"
              placeholder="Age (must be 18+)"
              required
            />

            <input
              name="location"
              type="text"
              placeholder="Location"
              required
            />

            <input
              name="contact"
              type="text"
              placeholder="Preferred method of contact"
              required
            />
          </div>
        </section>

        {/* INTENTIONS */}
        <section className="app-section dark">
          <h2>Personality & Intentions</h2>

          <textarea
            name="draws_you_here"
            placeholder="What draws you here?"
            required
          />
          <textarea
            name="emotional_dynamic"
            placeholder="What emotional dynamic interests you most?"
            required
          />
          <textarea
            name="control_role"
            placeholder="What role does control or surrender play in your fantasies?"
            required
          />
          <textarea
            name="atmosphere"
            placeholder="Describe the atmosphere you are seeking."
            required
          />
        </section>

        {/* EXPERIENCE */}
        <section className="app-section">
          <h2>Experience</h2>

          <textarea
            name="previous_experience"
            placeholder="Previous experience with BDSM or Femdom?"
            required
          />
          <textarea
            name="limits"
            placeholder="Boundaries or limits?"
            required
          />
          <textarea
            name="interests"
            placeholder="Interests you would like explored?"
            required
          />
        </section>

        {/* PRACTICAL */}
        <section className="app-section dark">
          <h2>Practical</h2>

          <input
            name="availability"
            type="text"
            placeholder="Availability"
            required
          />

          <input
            name="session_style"
            type="text"
            placeholder="Preferred session style"
            required
          />

          <textarea
            name="archetypes"
            placeholder="Which dominant archetypes are you drawn to? (Queen, Authoritarian, Seductress, Mother)"
            required
          />
        </section>

        {/* DUNGEON INFO */}
        <section className="app-section">
          <h2>Private Applications & Dungeon Bookings</h2>

          <p>
            Private bookings and tailored experiences are submitted through this
            application.
          </p>

          <p>
            House of Worship Dungeon, West Kensington, London (W14) — 5 minute
            walk from the tube station.
          </p>

          <p>
            Tabitha is based in London two days per week. Same-day bookings may
            occasionally be available.
          </p>

          <p className="accent">Phone: 07984851771</p>
        </section>

        {/* FINAL */}
        <section className="app-final">
          <h2>Final Question</h2>

          <textarea
            name="final_question"
            className="final-input"
            placeholder="What specifically drew you into Tabitha Thorne’s world?"
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
