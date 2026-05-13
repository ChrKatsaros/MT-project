import React from 'react';
import './secondSection.css';
import { Link } from 'react-router-dom';

function SecondSection() {
  return (
    <section className="second-section">
      <h1 className="section-title">
        <span>D</span>esigned for those seeking <span>control</span>,{' '}
        <span>intensity</span>, and <span>immersion</span>
      </h1>

      {/* EXPERIENCE TITLES */}
      <div className="experience-list">
        <h3>Psychological Domination</h3>
        <h3>Ritual & Discipline</h3>
        <h3>Luxury Submission</h3>
        <h3>Controlled Atmosphere</h3>
        <h3>Feminine Authority</h3>
        <h3>Power Exchange</h3>
      </div>

      {/* CTA */}
      <div className="section-cta">
        <h3>
          <span>E</span>xplore the <span>F</span>ull <span>E</span>xperience
        </h3>

        <Link to="/experiences" className="cta-button">
          Discover More
        </Link>
      </div>
    </section>
  );
}

export default SecondSection;
