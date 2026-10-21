import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './rates.css';

const locations = [
  {
    id: 'london',
    name: 'London',
    subtitle: 'Private appointments in London',
    applicationLocation: 'London',
    rates: [
      { duration: '1 Hour', price: '£230' },
      { duration: '90 Minutes', price: '£330' },
      { duration: '2 Hours', price: '£460' },
      { duration: '3 Hours', price: '£660' },
    ],
  },
  {
    id: 'southampton',
    name: 'Southampton & Portsmouth',
    subtitle: 'Private appointments on the South Coast',
    applicationLocation: 'Southampton',
    rates: [
      { duration: '1 Hour', price: '£250' },
      { duration: '90 Minutes', price: '£360' },
      { duration: '2 Hours', price: '£480' },
      { duration: '3 Hours', price: '£700' },
    ],
  },
  {
    id: 'bournemouth',
    name: 'Bournemouth',
    subtitle: 'Extended private appointments',
    applicationLocation: 'Bournemouth',
    rates: [
      { duration: '2 Hours', price: '£480' },
      { duration: '3 Hours', price: '£700' },
    ],
  },
];

function Rates() {
  const [selectedLocation, setSelectedLocation] = useState('london');

  const activeLocation = locations.find(
    (location) => location.id === selectedLocation
  );

  return (
    <>
      {/* SEO */}

      <title>Private Session Rates | Mistress Tabitha Thorne</title>

      <meta
        name="description"
        content="View private session rates for Mistress Tabitha Thorne in London, Southampton, Portsmouth and Bournemouth. Clear appointment durations and pricing."
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://www.tabithathorne.co.uk/rates" />

      <meta
        property="og:title"
        content="Private Session Rates | Mistress Tabitha Thorne"
      />

      <meta
        property="og:description"
        content="Explore private appointment rates in London, Southampton, Portsmouth and Bournemouth."
      />

      <meta property="og:url" content="https://www.tabithathorne.co.uk/rates" />

      <meta property="og:type" content="website" />

      {/* PAGE */}

      <main className="rates-page">
        {/* HERO */}

        <section className="rates-hero">
          <div className="rates-hero-glow" aria-hidden="true" />

          <div className="rates-hero-content">
            <p className="rates-eyebrow">MISTRESS TABITHA THORNE</p>

            <h1>
              Private <span>Rates</span>
            </h1>

            <div className="rates-gold-line" />

            <p className="rates-hero-description">
              A considered investment in a private experience. Transparent
              rates, discreet arrangements.
            </p>
          </div>

          <div className="rates-hero-bottom" aria-hidden="true">
            PRIVATE APPOINTMENTS · LONDON & SOUTH COAST
          </div>
        </section>

        {/* PRICING */}

        <section className="rates-pricing">
          <div className="rates-section-heading">
            <p className="rates-eyebrow">PRIVATE APPOINTMENTS</p>

            <h2>Session Rates</h2>

            <p>
              Select your preferred location to view the corresponding
              appointment rates.
            </p>
          </div>

          {/* LOCATION SELECTOR */}

          <div
            className="rates-location-selector"
            role="group"
            aria-label="Select appointment location"
          >
            {locations.map((location) => (
              <button
                key={location.id}
                type="button"
                className={`rates-location-button ${
                  selectedLocation === location.id ? 'active' : ''
                }`}
                onClick={() => setSelectedLocation(location.id)}
                aria-pressed={selectedLocation === location.id}
              >
                {location.name}
              </button>
            ))}
          </div>

          {/* RATES CARD */}

          <div className="rates-card" key={activeLocation.id}>
            <div className="rates-card-header">
              <span className="rates-card-label">SELECTED LOCATION</span>

              <h3>{activeLocation.name}</h3>

              <p>{activeLocation.subtitle}</p>
            </div>

            <div className="rates-table">
              <div className="rates-table-heading">
                <span>DURATION</span>
                <span>RATE</span>
              </div>

              {activeLocation.rates.map((rate) => (
                <div className="rates-table-row" key={rate.duration}>
                  <span className="rates-duration">{rate.duration}</span>

                  <span className="rates-price">{rate.price}</span>
                </div>
              ))}
            </div>

            {selectedLocation === 'bournemouth' && (
              <p className="rates-minimum-note">
                A minimum booking of two hours applies to Bournemouth
                appointments.
              </p>
            )}

            <div className="rates-card-footer">
              <p>Usual dungeon hire is included in the listed rates.</p>

              <p>
                Appointments of four hours or longer are available by
                arrangement.
              </p>
            </div>

            <Link
              className="rates-apply-button"
              to={`/application?location=${encodeURIComponent(
                activeLocation.applicationLocation
              )}`}
            >
              Submit Application
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="rates-pricing-footnote">
            All rates are quoted in GBP (£).
          </p>
        </section>

        {/* CLOSING */}

        <section className="rates-closing">
          <div className="rates-closing-inner">
            <p className="rates-eyebrow">THE NEXT STEP</p>

            <h2>
              An Experience
              <br />
              <em>By Arrangement</em>
            </h2>

            <p>
              Once you have reviewed the rates, submit your application with
              your preferred location and appointment details.
            </p>

            <Link to="/application" className="rates-closing-link">
              Begin Your Application
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Rates;
