import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* NAVIGATION */}
        <div className="footer-section">
          <h4>Navigation</h4>

          <ul>
            <li>About</li>
            <li>Experiences</li>
            <li>Gallery</li>
            <li>Application</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>

          <div className="footer-contact">
            <a
              href="https://maps.google.com/?q=West+Kensington+W14+London"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt />
              West Kensington · W14
            </a>

            <a href="tel:07984851771">
              <FaPhoneAlt />
              07984 851771
            </a>

            <a href="mailto:hello@example.com">
              <FaEnvelope />
              Private Enquiries
            </a>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="footer-section">
          <h4>Socials</h4>

          <div className="footer-social-icons">
            <a
              href="https://instagram.com/misstabithathorne"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tabitha Thorn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
