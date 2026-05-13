import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import {
  FaBars,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import './navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // helper για active link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar-container">
      {/* LOGO */}
      <div className="navbar-logo">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" draggable="false" />
        </Link>
      </div>

      {/* DESKTOP NAV */}
      <nav className="navbar-links">
        <ul className="nav-links">
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>

          <li className={isActive('/experiences') ? 'active' : ''}>
            <Link to="/experiences">Experiences</Link>
          </li>

          <li className={isActive('/protocol') ? 'active' : ''}>
            <Link to="/protocol">Protocol</Link>
          </li>

          <li className={isActive('/gallery') ? 'active' : ''}>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className={isActive('/application') ? 'active' : ''}>
            <Link to="/application">Application</Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE HAMBURGER */}
      <div className="mobile-hamburger" onClick={toggleMenu}>
        <FaBars size={28} />
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link
          to="/about"
          onClick={closeMenu}
          className={isActive('/about') ? 'active' : ''}
        >
          About
        </Link>
        <Link
          to="/experiences"
          onClick={closeMenu}
          className={isActive('/experiences') ? 'active' : ''}
        >
          Experiences
        </Link>
        <Link
          to="/protocol"
          onClick={closeMenu}
          className={isActive('/protocol') ? 'active' : ''}
        >
          Protocol
        </Link>
        <Link
          to="/gallery"
          onClick={closeMenu}
          className={isActive('/gallery') ? 'active' : ''}
        >
          Gallery
        </Link>
        <Link
          to="/application"
          onClick={closeMenu}
          className={isActive('/application') ? 'active' : ''}
        >
          Application
        </Link>

        {/* SOCIALS */}
        <div className="mobile-socials">
          <a
            href="https://instagram.com/misstabithathorne"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={22} />
          </a>

          <a href="tel:07984851771">
            <FaPhoneAlt size={20} />
          </a>

          <a
            href="https://maps.google.com/?q=West+Kensington+W14+London"
            target="_blank"
            rel="noreferrer"
          >
            <FaMapMarkerAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
