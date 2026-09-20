import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FaBars, FaInstagram, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import './navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLocationsOpen(false);
  };

  const toggleLocations = () => {
    setLocationsOpen((prev) => !prev);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  /* =========================================
     SCROLL TO BOOKING OPTIONS
  ========================================= */

  const goToBookings = (event) => {
    event.preventDefault();

    setMenuOpen(false);
    setLocationsOpen(false);

    window.setTimeout(() => {
      const bookingSection = document.querySelector('.booking-options');

      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  };

  return (
    <div
      className={`
        navbar-container
        ${scrolled ? 'scrolled' : ''}
        ${menuOpen ? 'menu-open' : ''}
      `}
    >
      {/* =========================
          LOGO
      ========================= */}

      <div className="navbar-logo">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Mistress Tabitha Thorne" draggable="false" />
        </Link>
      </div>

      {/* =========================
          DESKTOP NAV
      ========================= */}

      <nav className="navbar-links">
        <ul className="nav-links">
          {/* ABOUT */}
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>

          {/* EXPERIENCES */}
          <li className={isActive('/experiences') ? 'active' : ''}>
            <Link to="/experiences">Experiences</Link>
          </li>

          {/* PROTOCOL */}
          <li className={isActive('/protocol') ? 'active' : ''}>
            <Link to="/protocol">Protocol</Link>
          </li>

          {/* GALLERY */}
          <li className={isActive('/gallery') ? 'active' : ''}>
            <Link to="/gallery">Gallery</Link>
          </li>

          {/* GUIDES */}
          <li className={isActive('/guides') ? 'active' : ''}>
            <Link to="/guides">Guides</Link>
          </li>

          {/* APPLICATION */}
          <li className={isActive('/application') ? 'active' : ''}>
            <Link to="/application">Application</Link>
          </li>

          {/* =========================
              LOCATIONS
          ========================= */}

          <li className="locations-nav-item">
            <button className="locations-nav-trigger" type="button">
              Locations
              <FaChevronDown />
            </button>

            <div className="locations-dropdown">
              {/* LONDON */}
              <a href="/" onClick={goToBookings}>
                London
              </a>

              {/* BOURNEMOUTH */}
              <a href="/dominatrix-bournemouth/">Bournemouth</a>

              {/* SOUTHAMPTON */}
              <a href="/dominatrix-southampton/">Southampton</a>

              {/* PORTSMOUTH */}
              <a href="/dominatrix-portsmouth/">Portsmouth</a>
            </div>
          </li>

          {/* =========================
              BOOKINGS CTA
          ========================= */}

          <li className="nav-london-booking">
            <a href="/" onClick={goToBookings}>
              Bookings
            </a>
          </li>
        </ul>
      </nav>

      {/* =========================
          MOBILE HAMBURGER
      ========================= */}

      <div
        className="mobile-hamburger"
        onClick={toggleMenu}
        role="button"
        aria-label="Open menu"
      >
        <FaBars size={28} />
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {/* ABOUT */}
        <Link
          to="/about"
          onClick={closeMenu}
          className={isActive('/about') ? 'active' : ''}
        >
          About
        </Link>

        {/* EXPERIENCES */}
        <Link
          to="/experiences"
          onClick={closeMenu}
          className={isActive('/experiences') ? 'active' : ''}
        >
          Experiences
        </Link>

        {/* PROTOCOL */}
        <Link
          to="/protocol"
          onClick={closeMenu}
          className={isActive('/protocol') ? 'active' : ''}
        >
          Protocol
        </Link>

        {/* GALLERY */}
        <Link
          to="/gallery"
          onClick={closeMenu}
          className={isActive('/gallery') ? 'active' : ''}
        >
          Gallery
        </Link>

        {/* GUIDES */}
        <Link
          to="/guides"
          onClick={closeMenu}
          className={isActive('/guides') ? 'active' : ''}
        >
          Guides
        </Link>

        {/* APPLICATION */}
        <Link
          to="/application"
          onClick={closeMenu}
          className={isActive('/application') ? 'active' : ''}
        >
          Application
        </Link>

        {/* =========================
            MOBILE LOCATIONS
        ========================= */}

        <div className="mobile-locations">
          <button
            type="button"
            className="mobile-locations-trigger"
            onClick={toggleLocations}
          >
            Locations
            <FaChevronDown className={locationsOpen ? 'rotate' : ''} />
          </button>

          <div
            className={`mobile-locations-submenu ${
              locationsOpen ? 'open' : ''
            }`}
          >
            {/* LONDON */}
            <a href="/" onClick={goToBookings}>
              London
            </a>

            {/* BOURNEMOUTH */}
            <a href="/dominatrix-bournemouth/" onClick={closeMenu}>
              Bournemouth
            </a>

            {/* SOUTHAMPTON */}
            <a href="/dominatrix-southampton/" onClick={closeMenu}>
              Southampton
            </a>

            {/* PORTSMOUTH */}
            <a href="/dominatrix-portsmouth/" onClick={closeMenu}>
              Portsmouth
            </a>
          </div>
        </div>

        {/* =========================
            MOBILE BOOKINGS
        ========================= */}

        <a href="/" className="mobile-london-booking" onClick={goToBookings}>
          Bookings
        </a>

        {/* =========================
            SOCIALS
        ========================= */}

        <div className="mobile-socials">
          <a
            href="https://instagram.com/misstabithathorne"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://x.com/TabithaThorne"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
