import React from 'react';
import './thirdSection.css';
import thirdSectionIMG1 from '../assets/11.webp';
import { Link } from 'react-router-dom';

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="third-container">
        <div className="third-image-wrapper">
          <div className="image-top-text">PRIVATE VISIONS · ARCHIVE</div>

          <img
            src={thirdSectionIMG1}
            alt="Gallery Preview"
            className="third-image"
          />

          <div className="image-bottom-text">TABITHA THORNE · VISUAL WORLD</div>
        </div>

        {/* TEXT BLOCK */}
        <div className="third-text-wrapper">
          <div className="third-title-and-text">
            <h2 className="third-title">
              <span className="horizontal-text" data-text="Enter">
                Enter
              </span>
              <span className="vertical-text">The Gallery</span>
            </h2>

            <div className="third-text-content">
              <p className="third-description">
                A curated visual archive of presence, atmosphere, and controlled
                elegance. Each frame captures a different layer of identity,
                ritual, and intention.
              </p>

              <Link to="/gallery">
                <button className="third-button">View Gallery</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
