import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

import backgroundAbout from '../assets/backgroundAbout.jpg';

function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${backgroundAbout})`,
        }}
      >
        <div className="about-overlay" />

        <div className="about-hero-content">
          <p className="eyebrow">About Mistress Tabitha</p>

          <h1>
            <span>T</span>ABITHA <span>T</span>HORNE
          </h1>

          <p className="subtext">
            London-based Dominatrix offering refined psychological domination,
            ritual-led power exchange, and immersive female authority.
          </p>

          <Link to="/application" className="cta">
            Submit Application
          </Link>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="about-section">
        <h2>Overview</h2>

        <div className="text-block">
          <p>
            Mistress Tabitha is a London Dominatrix based at House of Worship
            London, an exclusive private venue in West Kensington.
          </p>

          <p>
            She offers a distinctive fusion of discipline, psychological depth,
            sensual authority, and emotional intelligence.
          </p>

          <p>
            Her approach combines structure, atmosphere, ritual, feminine
            control, and carefully guided psychological immersion.
          </p>

          <p className="highlight">Elegant. Observant. Demanding.</p>

          <p>
            Her presence is composed yet quietly commanding — not chaotic, not
            performative, not driven by attention.
          </p>
        </div>
      </section>

      {/* INTENTIONS */}
      <section className="about-section dark">
        <h2>Intentions</h2>

        <p>
          Those drawn to Tabitha are rarely seeking simple intimacy. They are
          often seeking something far more consuming:
        </p>

        <ul className="list">
          <li>emotional surrender</li>
          <li>psychological tension</li>
          <li>authority</li>
          <li>ritualized attention</li>
          <li>refined escapism</li>
          <li>behavioural guidance</li>
          <li>immersive power exchange</li>
          <li>relinquishing control completely</li>
        </ul>
      </section>

      {/* METHOD */}
      <section className="about-section">
        <h2>Method</h2>

        <div className="text-block">
          <p>
            With training in sensual tantric and body-to-body massage, she
            understands the subtle language of energy, anticipation, touch,
            pacing, and surrender.
          </p>

          <p>
            Experiences are tailored carefully to the individual dynamic and may
            range from highly structured domination to softer immersive
            encounters where underlying authority remains constant throughout.
          </p>

          <p>
            Her style is a balance of elegance and control. Every word
            deliberate. Every gesture intentional.
          </p>

          <p>
            Through atmosphere, behavioural understanding, structure, pacing,
            and emotional awareness, she guides individuals into heightened
            states of presence, surrender, and psychological immersion.
          </p>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <div className="about-image-block large">
        <img src={backgroundAbout} alt="luxury mood" />
      </div>

      {/* ARCHETYPES */}
      <section className="about-section dark">
        <h2>Archetypes</h2>

        <div className="grid">
          <div className="card">
            <h3>The Schoolmistress</h3>
            <p>Structured discipline shaped by convent education.</p>
          </div>

          <div className="card burgundy-card">
            <h3>The Ice Queen</h3>
            <p>Composed, selective, emotionally controlled presence.</p>
          </div>

          <div className="card">
            <h3>The Seductress</h3>
            <p>Controlled tension, denied gratification, restrained allure.</p>
          </div>

          <div className="card burgundy-card">
            <h3>Structured Care</h3>
            <p>
              Ritual-led guidance informed by emotional intelligence and
              training.
            </p>
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="about-presence">
        <h2>Presence</h2>

        <div className="table">
          <div className="row">
            <span>Origin</span>
            <span>English-born, London-based</span>
          </div>

          <div className="row">
            <span>Height</span>
            <span>5’8”</span>
          </div>

          <div className="row">
            <span>Size</span>
            <span>UK 10</span>
          </div>

          <div className="row">
            <span>Measurements</span>
            <span>32F</span>
          </div>

          <div className="row">
            <span>Appearance</span>
            <span>Brunette · Blonde face framing · Green eyes</span>
          </div>

          <div className="row">
            <span>Energy</span>
            <span>Composed · Feminine · Controlled</span>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="signature">
        <p>
          “Some seek indulgence. Others seek the rare luxury of surrendering
          control completely.”
        </p>
      </section>
    </div>
  );
}

export default About;
