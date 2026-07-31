import React from 'react';
import './guides.css';

const heroImg = 'https://picsum.photos/1920/1080?random=101';
const editorialImg = 'https://picsum.photos/900/1200?random=102';

function Guides() {
  return (
    <div className="guides-page">
      {/* HERO */}

      <section
        className="guides-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="guides-overlay"></div>

        <div className="guides-hero-content">
          <p className="guides-eyebrow">THE EDITORIAL</p>

          <h1>
            The Tabitha
            <br />
            Thorne Guides
          </h1>

          <p className="guides-tagline">Knowledge • Protocol • Preparation</p>

          <p className="guides-subtitle">
            A curated collection of articles designed to educate, prepare and
            inspire before your first experience.
          </p>

          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="guides-intro">
        <div className="guides-intro-image">
          <img src={editorialImg} alt="Editorial portrait" loading="lazy" />
        </div>

        <div className="guides-intro-content">
          <p className="section-eyebrow">EDITOR'S NOTE</p>

          <h2>
            Every Exceptional
            <br />
            Experience Begins
            <br />
            With Understanding
          </h2>

          <p>
            The most memorable sessions begin long before the first meeting.
            Preparation, communication and mutual understanding create the
            foundation for every rewarding experience.
          </p>

          <p>
            These guides have been written to answer common questions, explain
            expectations and offer insight into the world of professional female
            domination in a thoughtful, respectful and approachable way.
          </p>

          <p>
            Whether you are completely new or already familiar with BDSM
            dynamics, taking the time to educate yourself allows every
            interaction to begin with confidence, clarity and trust.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Guides;
