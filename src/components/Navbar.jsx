import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaInstagram, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import logo from '../assets/logo.png';

import './navbar.css';

/* ==========================================
   MAIN NAVIGATION LINKS
========================================== */

const mainLinks = [
  { label: 'About', path: '/about' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Protocol', path: '/protocol' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Guides', path: '/guides' },
  { label: 'Application', path: '/application' },
];

/* ==========================================
   STANDALONE LOCATION PAGES

   IMPORTANT:
   These are separate HTML pages.
   They must use normal <a href> links,
   NOT React Router <Link>.
========================================== */

const locationLinks = [
  {
    label: 'London',
    path: '/dominatrix-london/',
  },
  {
    label: 'Bournemouth',
    path: '/dominatrix-bournemouth/',
  },
  {
    label: 'Southampton',
    path: '/dominatrix-southampton/',
  },
  {
    label: 'Portsmouth',
    path: '/dominatrix-portsmouth/',
  },
];

/* ==========================================
   NAVBAR COMPONENT
========================================== */

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  /* ========================================
     SCROLL DETECTION
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ========================================
     CLOSE MENU ON ROUTE CHANGE
  ======================================== */

  useEffect(() => {
    setMenuOpen(false);
    setLocationsOpen(false);
  }, [location.pathname]);

  /* ========================================
     SCROLL LOCK — NO LAYOUT SHIFT

     We lock the root document instead
     of changing body width or padding.

     scrollbar-gutter: stable in CSS
     reserves the scrollbar space.

     Result:
     Opening the menu does not resize
     the page or the hero image.
  ======================================== */

  useEffect(() => {
    if (!menuOpen) return;

    const html = document.documentElement;

    const previousOverflow = html.style.overflow;

    html.style.overflow = 'hidden';

    return () => {
      html.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  /* ========================================
     ESCAPE KEY
  ======================================== */

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setLocationsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  /* ========================================
     MENU HELPERS
  ======================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setLocationsOpen(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
    }
  };

  /* ========================================
     BOOKINGS BUTTON
  ======================================== */

  const handleBookings = () => {
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/#booking-options');
      return;
    }

    const bookingSection = document.querySelector('.booking-options');

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      navigate('/#booking-options');
    }
  };

  /* ========================================
     RENDER
  ======================================== */

  return (
    <>
      {/* ====================================
          NAVBAR HEADER
      ==================================== */}

      <header
        className={[
          'tt-nav',
          scrolled ? 'tt-nav--scrolled' : '',
          menuOpen ? 'tt-nav--menu-open' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* LOGO */}

        <Link
          to="/"
          className="tt-nav__brand"
          aria-label="Mistress Tabitha Thorne - Home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Mistress Tabitha Thorne"
            className="tt-nav__logo"
          />
        </Link>

        {/* HAMBURGER */}

        <button
          type="button"
          className={['tt-nav__toggle', menuOpen ? 'tt-nav__toggle--open' : '']
            .filter(Boolean)
            .join(' ')}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="tt-navigation-panel"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ====================================
          BACKDROP

          Desktop: transparent
          Mobile: subtle dark overlay
      ==================================== */}

      <div
        className={[
          'tt-nav__overlay',
          menuOpen ? 'tt-nav__overlay--visible' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ====================================
          SLIDING SIDEBAR
      ==================================== */}

      <nav
        id="tt-navigation-panel"
        className={['tt-nav__panel', menuOpen ? 'tt-nav__panel--open' : '']
          .filter(Boolean)
          .join(' ')}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="tt-nav__panel-inner">
          {/* MAIN LINKS */}

          <div className="tt-nav__links">
            {mainLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={[
                  'tt-nav__link',
                  location.pathname === item.path ? 'tt-nav__link--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            {/* ============================
                LOCATIONS DROPDOWN
            ============================ */}

            <div className="tt-nav__locations">
              <button
                type="button"
                className={[
                  'tt-nav__link',
                  'tt-nav__locations-toggle',
                  locationsOpen ? 'tt-nav__locations-toggle--open' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  setLocationsOpen((prev) => !prev);
                }}
                aria-expanded={locationsOpen}
                aria-controls="tt-locations-list"
              >
                <span>Locations</span>

                <FaChevronDown
                  className="tt-nav__locations-chevron"
                  aria-hidden="true"
                />
              </button>

              <div
                id="tt-locations-list"
                className={[
                  'tt-nav__locations-list',
                  locationsOpen ? 'tt-nav__locations-list--open' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-hidden={!locationsOpen}
                inert={!locationsOpen}
              >
                {locationLinks.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="tt-nav__location-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* =================================
              VIEW RATES + BOOKINGS
          ================================= */}

          <div className="tt-nav__actions">
            <Link
              to="/rates"
              className="tt-nav__button tt-nav__button--secondary"
              onClick={closeMenu}
            >
              View Rates
            </Link>

            <button
              type="button"
              className="tt-nav__button tt-nav__button--primary"
              onClick={handleBookings}
            >
              Bookings
            </button>
          </div>

          {/* =================================
              SOCIAL ICONS
          ================================= */}

          <div className="tt-nav__socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
