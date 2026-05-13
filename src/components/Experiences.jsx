import React from 'react';
import './experiences.css';

import gallery2 from '../assets/gallery15.webp';

import gallery3 from '../assets/gallery11.webp';
function Experiences() {
  return (
    <div className="experiences-page">
      {/* HERO */}
      <section
        className="exp-hero"
        style={{
          backgroundImage: `url(${gallery2})`,
        }}
      >
        <div className="exp-hero-overlay" />

        <div className="exp-hero-content">
          <h1>
            <span>E</span>xperiences
          </h1>

          <p className="quote">
            “Power is rarely taken. More often, it is quietly surrendered.”
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="exp-section">
        <p className="intro">
          Each experience is designed as a psychological atmosphere rather than
          a service. Nothing is transactional. Everything is intentional.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="exp-grid">
        <div className="exp-card">
          <h3>Psychological Domination</h3>

          <p>
            Control, anticipation, obedience, denial, ritual, correction,
            behavioural guidance and emotional tension within structured
            authority.
          </p>
        </div>

        <div className="exp-card">
          <h3>Ritual & Obedience</h3>

          <p>
            Structure, posture, language, etiquette, eye contact, patience and
            disciplined submission forming the foundation of interaction.
          </p>
        </div>

        <div className="exp-card">
          <h3>Luxury Submission</h3>

          <p>
            Elevated environments where surrender becomes refined, curated, and
            guided through controlled atmosphere and presence.
          </p>
        </div>

        <div className="exp-card">
          <h3>Controlled Atmosphere</h3>

          <p>
            Carefully designed settings where pacing, silence, and presence
            shape emotional and psychological immersion.
          </p>
        </div>

        <div className="exp-card">
          <h3>Feminine Authority</h3>

          <p>
            Composed dominance expressed through observation, restraint,
            emotional intelligence and structured control.
          </p>
        </div>

        <div className="exp-card">
          <h3>Power Exchange</h3>

          <p>
            Hierarchical dynamics where control is gradually surrendered through
            trust, structure and guided anticipation.
          </p>
        </div>

        <div className="exp-card subtle">
          <h3>Discreet Regression Dynamics</h3>

          <p>
            Selectively curated psychological dynamics approached with
            discretion, care, and emotional intelligence.
          </p>
        </div>
      </section>

      {/* EXPERIENCE PHILOSOPHY */}
      <section
        className="exp-image-section"
        style={{
          backgroundImage: `url(${gallery3})`,
        }}
      >
        <div className="exp-image-overlay" />

        <div className="exp-image-content">
          <h2>Experience Philosophy</h2>

          <p>
            Anticipation, control, authority, ritual, restraint and tension
            define the foundation of every encounter.
          </p>

          <p>
            Companionship exists only through atmosphere, conversation and
            immersion — never as entitlement.
          </p>

          <p>
            Everything is paced. Nothing is rushed. Submission is cultivated,
            not demanded.
          </p>
        </div>
      </section>

      {/* METHODS */}
      <section className="exp-section">
        <h2>My Interests & Specialities</h2>

        <ul className="exp-list">
          <li>Body-based devotion & service</li>
          <li>Foot & footwear worship</li>
          <li>Feminisation & transformation dynamics</li>
          <li>Bondage & restraint</li>
          <li>Tease & denial scenarios</li>
          <li>Structured impact play</li>
          <li>Strap-on dynamics</li>
          <li>Sensory ritual & behavioural conditioning</li>
          <li>Sensual tantric & body-to-body massage</li>
        </ul>
      </section>

      {/* CONTROLLED REGRESSION */}
      <section className="exp-section dark">
        <h2>Controlled Regression</h2>

        <p>
          Private ABDL-oriented dynamics approached discreetly and respectfully,
          grounded in trust, structure, ritual and emotional awareness.
        </p>

        <p>
          These experiences are selective, carefully negotiated and maintained
          within a framework of privacy and maturity.
        </p>
      </section>

      {/* CLOSING */}
      <section className="exp-close">
        <p className="closing-quote">“Obedience is learned slowly.”</p>
      </section>
    </div>
  );
}

export default Experiences;
