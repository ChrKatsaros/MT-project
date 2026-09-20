import React from 'react';
import './Footer.css';

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

import { FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Tabitha Thorne Logo" />
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
            <a href="mailto:MissTabithaThorne@proton.me">
              <FaEnvelope />
              Private Enquiries
            </a>

            <div className="footer-contact-note">
              <FaPhoneAlt />

              <span>Phone calls by appointment only</span>
            </div>
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
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/TabithaThorne"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tabitha Thorne. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
