import React from 'react';
import './protocol.css';

import gallery17 from '../assets/gallery17.webp';

function Protocol() {
  return (
    <>
      {/* =========================
          SEO METADATA
      ========================= */}

      <title>Protocol & Expectations | Mistress Tabitha Thorne</title>

      <meta
        name="description"
        content="Read the protocol and expectations for private appointments with Mistress Tabitha Thorne, including discretion, conduct, preparation, punctuality and respectful communication."
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://www.tabithathorne.co.uk/protocol" />

      {/* OPEN GRAPH */}

      <meta
        property="og:title"
        content="Protocol & Expectations | Mistress Tabitha Thorne"
      />

      <meta
        property="og:description"
        content="Understand the standards of discretion, preparation, conduct and communication expected before a private appointment with Mistress Tabitha Thorne."
      />

      <meta
        property="og:url"
        content="https://www.tabithathorne.co.uk/protocol"
      />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Mistress Tabitha Thorne" />

      <meta property="og:locale" content="en_GB" />

      <meta
        property="og:image"
        content="https://www.tabithathorne.co.uk/preview.jpg"
      />

      {/* TWITTER / X */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Protocol & Expectations | Mistress Tabitha Thorne"
      />

      <meta
        name="twitter:description"
        content="Read the expectations for discretion, preparation, conduct and respectful communication before a private appointment."
      />

      <meta
        name="twitter:image"
        content="https://www.tabithathorne.co.uk/preview.jpg"
      />

      <meta name="twitter:creator" content="@TabithaThorne" />

      {/* =========================
          PAGE
      ========================= */}

      <div className="protocol-page">
        {/* =========================
            HERO
        ========================= */}

        <section
          className="protocol-hero"
          style={{
            backgroundImage: `url(${gallery17})`,
          }}
        >
          <div className="protocol-hero-overlay" />

          <div className="protocol-hero-content">
            <p className="protocol-eyebrow">Private Standards</p>

            <h1>
              <span>P</span>rotocol &amp; <span>E</span>xpectations
            </h1>

            <p className="protocol-hero-quote">
              “Power is rarely taken. More often, it is quietly surrendered.”
            </p>

            <div className="protocol-scroll-line">
              <span />
            </div>
          </div>
        </section>

        {/* =========================
            INTRO
        ========================= */}

        <section className="protocol-intro">
          <p className="protocol-section-eyebrow">The Standard</p>

          <h2>Before The Door Opens</h2>

          <p className="protocol-intro-copy">
            A private appointment begins long before the moment we meet.
            Conduct, communication, preparation and self-awareness shape the
            experience from the first enquiry.
          </p>

          <p className="protocol-intro-copy">
            The standard is simple: arrive with respect, clarity and intention.
          </p>
        </section>

        {/* =========================
            EXPECTATIONS
        ========================= */}

        <section className="protocol-editorial-section">
          <div className="protocol-number">01</div>

          <div className="protocol-editorial-content">
            <p className="protocol-section-eyebrow">Expectations</p>

            <h2>Precision Before Presence</h2>

            <p>
              Discretion is not optional. Communication must remain precise,
              respectful, and controlled. Emotional clarity and personal
              discipline are the baseline.
            </p>

            <p>
              Reliability, hygiene, punctuality, and awareness are not
              preferences — they are prerequisites.
            </p>

            <p className="protocol-accent">
              The standard is established before you arrive.
            </p>
          </div>
        </section>

        {/* =========================
            PRESENCE
        ========================= */}

        <section className="protocol-editorial-section reverse">
          <div className="protocol-number">02</div>

          <div className="protocol-editorial-content">
            <p className="protocol-section-eyebrow">Presence</p>

            <h2>Arrive Composed</h2>

            <p>
              You do not arrive casually. You arrive composed, prepared, and
              aware of the space you enter.
            </p>

            <p>
              Presence is not created through performance. It is reflected in
              awareness, restraint and how you carry yourself.
            </p>

            <p className="protocol-accent">
              Energy is never announced. It is always already felt.
            </p>
          </div>
        </section>

        {/* =========================
            CONDUCT
        ========================= */}

        <section className="protocol-editorial-section">
          <div className="protocol-number">03</div>

          <div className="protocol-editorial-content">
            <p className="protocol-section-eyebrow">Conduct</p>

            <h2>Restraint Over Entitlement</h2>

            <p>
              Entitlement has no place here. Neither does chaos, urgency, or
              performative behaviour.
            </p>

            <p>
              Every interaction is defined by structure, restraint, and
              intentional pacing.
            </p>

            <p className="protocol-accent">
              Quality of presence outweighs frequency of contact.
            </p>
          </div>
        </section>

        {/* =========================
            NON-NEGOTIABLES
        ========================= */}

        <section className="protocol-standards">
          <div className="protocol-standards-heading">
            <p className="protocol-section-eyebrow">Non-Negotiables</p>

            <h2>The Foundation</h2>
          </div>

          <div className="protocol-standards-grid">
            <div className="protocol-standard-item">
              <span className="protocol-standard-number">01</span>

              <h3>Discretion</h3>

              <p>Non-negotiable.</p>
            </div>

            <div className="protocol-standard-item">
              <span className="protocol-standard-number">02</span>

              <h3>Hygiene</h3>

              <p>Expected.</p>
            </div>

            <div className="protocol-standard-item">
              <span className="protocol-standard-number">03</span>

              <h3>Punctuality</h3>

              <p>Essential.</p>
            </div>

            <div className="protocol-standard-item">
              <span className="protocol-standard-number">04</span>

              <h3>Respect</h3>

              <p>Always.</p>
            </div>
          </div>
        </section>

        {/* =========================
            CLOSING
        ========================= */}

        <section className="protocol-closing">
          <div className="protocol-closing-line" />

          <p>
            “Discipline begins
            <br />
            long before the door opens.”
          </p>

          <div className="protocol-closing-line" />
        </section>
      </div>
    </>
  );
}

export default Protocol;
