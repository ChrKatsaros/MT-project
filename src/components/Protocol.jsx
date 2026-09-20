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
        {/* HERO */}

        <section className="protocol-hero">
          <h1>
            <span>P</span>rotocol & <span>E</span>xpectations
          </h1>

          <p className="quote">
            “Power is rarely taken. More often, it is quietly surrendered.”
          </p>
        </section>

        {/* CONTENT */}

        <section className="chapter">
          <h2>Protocol</h2>

          <h3>Expectations</h3>

          <p>
            Discretion is not optional. Communication must remain precise,
            respectful, and controlled. Emotional clarity and personal
            discipline are the baseline.
          </p>

          <p>
            Reliability, hygiene, punctuality, and awareness are not preferences
            — they are prerequisites.
          </p>

          <h3>Presence</h3>

          <p>
            You do not arrive casually. You arrive composed, prepared, and aware
            of the space you enter.
          </p>

          <p className="accent">
            Energy is never announced. It is always already felt.
          </p>

          <h3>Conduct</h3>

          <p>
            Entitlement has no place here. Neither does chaos, urgency, or
            performative behaviour.
          </p>

          <p>
            Every interaction is defined by structure, restraint, and
            intentional pacing.
          </p>

          <p className="accent">
            Quality of presence outweighs frequency of contact.
          </p>
        </section>

        {/* DIVIDER */}

        <div
          className="divider-image"
          style={{
            backgroundImage: `url(${gallery17})`,
          }}
        >
          <div className="divider-overlay" />

          <div className="divider-quote">
            <p>“Discipline begins long before the door opens.”</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Protocol;
