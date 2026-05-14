import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

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
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/experiences">Experiences</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/application">Application</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>

          <div className="footer-contact">
            {/* MAP */}
            <a>
              <FaMapMarkerAlt />
              West Kensington · London W14
            </a>

            {/* PHONE */}
            <a href="tel:07984851771">
              <FaPhoneAlt />
              07984 851771
            </a>

            {/* EMAIL */}
            <a href="mailto:MissTabithaThorne@proton.me">
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
