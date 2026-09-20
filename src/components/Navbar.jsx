import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FaBars, FaInstagram, FaChevronDown } from 'react-icons/fa';

import './navbar.css';
import logo from '../assets/logo.png';

const LONDON_BOOKING_URL =
  'https://houseofworshiplondon.com/mistress/new-mistress-vanta/';

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

  return (
    <div
      className={`
        navbar-container
        ${scrolled ? 'scrolled' : ''}
        ${menuOpen ? 'menu-open' : ''}
      `}
    >
      {/* LOGO */}
      <div className="navbar-logo">
        <Link to="/" className="logo">
          <img src={logo} alt="Mistress Tabitha Thorne" draggable="false" />
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

          {/* LOCATIONS DROPDOWN */}

          <li className={isActive('/gallery') ? 'active' : ''}>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className={isActive('/guides') ? 'active' : ''}>
            <Link to="/guides">Guides</Link>
          </li>

          <li className={isActive('/application') ? 'active' : ''}>
            <Link to="/application">Application</Link>
          </li>
          <li className="locations-nav-item">
            <button className="locations-nav-trigger" type="button">
              Locations
              <FaChevronDown />
            </button>

            <div className="locations-dropdown">
              <a href={LONDON_BOOKING_URL} target="_blank" rel="noreferrer">
                London
              </a>

              <a href="/dominatrix-bournemouth/">Bournemouth</a>

              <a href="/dominatrix-southampton/">Southampton</a>

              <a href="/dominatrix-portsmouth/">Portsmouth</a>
            </div>
          </li>

          {/* LONDON BOOKINGS */}
          <li className="nav-london-booking">
            <a href={LONDON_BOOKING_URL} target="_blank" rel="noreferrer">
              London Bookings
            </a>
          </li>
        </ul>
      </nav>

      {/* MOBILE HAMBURGER */}
      <div
        className="mobile-hamburger"
        onClick={toggleMenu}
        role="button"
        aria-label="Open menu"
      >
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

        {/* MOBILE LOCATIONS */}
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
            <a
              href={LONDON_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              London
            </a>

            <a href="/dominatrix-bournemouth/" onClick={closeMenu}>
              Bournemouth
            </a>

            <a href="/dominatrix-southampton/" onClick={closeMenu}>
              Southampton
            </a>

            <a href="/dominatrix-portsmouth/" onClick={closeMenu}>
              Portsmouth
            </a>
          </div>
        </div>

        <Link
          to="/gallery"
          onClick={closeMenu}
          className={isActive('/gallery') ? 'active' : ''}
        >
          Gallery
        </Link>

        <Link
          to="/guides"
          onClick={closeMenu}
          className={isActive('/guides') ? 'active' : ''}
        >
          Guides
        </Link>

        <Link
          to="/application"
          onClick={closeMenu}
          className={isActive('/application') ? 'active' : ''}
        >
          Application
        </Link>

        <a
          href={LONDON_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="mobile-london-booking"
          onClick={closeMenu}
        >
          London Bookings
        </a>

        {/* SOCIALS */}
        <div className="mobile-socials">
          <a
            href="https://instagram.com/misstabithathorne"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
