import React from 'react';
import './Footer.css';

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

const LONDON_PHONE = '07462 938600';
const LONDON_EMAIL = 'londonappointmentdesk@proton.me';

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
              <FaEnvelope aria-hidden="true" />
              <span>Private Enquiries</span>
            </a>

            <a href={`mailto:${LONDON_EMAIL}`}>
              <FaEnvelope aria-hidden="true" />
              <span>London Appointments</span>
            </a>

            <a href="tel:+447462938600" className="footer-phone-link">
              <FaPhoneAlt aria-hidden="true" />
              <span>{LONDON_PHONE}</span>
            </a>

            <a
              href="https://wa.me/447462938600"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-link"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <p className="footer-contact-note">
              Phone calls by appointment only.
              <br />
              Text or WhatsApp.
            </p>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="footer-section">
          <h4>Socials</h4>

          <div className="footer-social-icons">
            <a
              href="https://instagram.com/misstabithathorne"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/TabithaThorne"
              target="_blank"
              rel="noopener noreferrer"
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
