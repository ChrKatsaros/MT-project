import React, { useRef } from 'react';
import './guides.css';
import { Link } from 'react-router-dom';
import GuideNavigator from './GuideNavigator';
import gallery23 from '../assets/gallery23.webp';
import gallery26 from '../assets/gallery26.webp';

function Guides() {
  const chaptersRef = useRef({});

  const scrollToChapter = (id) => {
    const section = chaptersRef.current[id];

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      section.classList.add('chapter-active');

      setTimeout(() => {
        section.classList.remove('chapter-active');
      }, 1200);
    }
  };

  const contents = [
    {
      id: 'chapter-01',
      number: '01',
      title: 'What to Expect During Your First BDSM Session',
    },
    {
      id: 'chapter-02',
      number: '02',
      title: 'How to Prepare for Your First BDSM Session',
    },
    {
      id: 'chapter-03',
      number: '03',
      title: 'Understanding Consent, Communication and Boundaries in BDSM',
    },
    {
      id: 'chapter-04',
      number: '04',
      title: 'Common BDSM Myths Explained',
    },
    {
      id: 'chapter-05',
      number: '05',
      title: 'The Psychology of Dominance and Submission',
    },
    {
      id: 'chapter-06',
      number: '06',
      title: 'What Makes a Professional Dominatrix Different?',
    },
    {
      id: 'chapter-07',
      number: '07',
      title: 'How to Choose the Right Professional Dominatrix',
    },
    {
      id: 'chapter-08',
      number: '08',
      title: 'Why Every BDSM Session Should Be Tailored To The Individual',
    },
    {
      id: 'chapter-09',
      number: '09',
      title: 'How Long Should My First BDSM Session Be?',
    },
    {
      id: 'chapter-10',
      number: '10',
      title: 'Why Aftercare Matters In BDSM',
    },
    {
      id: 'chapter-11',
      number: '11',
      title: 'Psychological Domination Explained',
    },
    {
      id: 'chapter-12',
      number: '12',
      title: 'Roleplay In BDSM: More Than Just Acting',
    },
    {
      id: 'chapter-13',
      number: '13',
      title: 'Frequently Asked Questions',
    },
  ];

  return (
    <div className="guides-page">
      {/* =========================
          HERO
      ========================= */}
      <section
        className="guides-hero"
        style={{
          backgroundImage: `url(${gallery23})`,
        }}
      >
        <div className="guides-overlay"></div>

        <div className="guides-hero-content">
          <h1>
            The Tabitha
            <br />
            Thorne Guides
          </h1>

          <p className="guides-tagline">
            Communication • Connection • Consent • Care
          </p>

          <p className="guides-description">
            A thoughtful introduction to professional BDSM, designed to provide
            understanding, confidence and preparation before entering a
            professional dynamic.
          </p>

          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </section>
      {/* =========================
          INTRO
      ========================= */}
      <section className="guides-intro">
        <div className="guides-intro-image">
          <img src={gallery26} alt="The Tabitha Thorne Guides" />
        </div>

        <div className="guides-intro-content">
          <h2>Every Exceptional Experience Begins With Understanding</h2>

          <p>
            Taking your first steps into BDSM can feel exciting, unfamiliar and
            sometimes intimidating. These guides have been created to answer
            common questions, explain expectations and provide insight into
            professional domination.
          </p>

          <p>
            A meaningful experience is built on communication, trust and mutual
            respect. Understanding boundaries, consent and preparation allows
            every interaction to begin with confidence.
          </p>

          <p>
            Whether you are completely new or already familiar with BDSM,
            education creates the foundation for a more considered and rewarding
            experience.
          </p>
        </div>
      </section>
      {/* =========================
          CONTENTS
      ========================= */}
      <section className="checklist-section">
        <p className="section-eyebrow">CONTENTS</p>

        <h2>The Tabitha Thorne Guides</h2>

        <div className="checklist">
          {contents.map((item) => (
            <div
              key={item.id}
              className="check-item"
              onClick={() => scrollToChapter(item.id)}
            >
              <span>{item.number}</span>

              {' — '}

              {item.title}
            </div>
          ))}
        </div>
      </section>
      {/* =========================
          CHAPTER 01
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-01'] = el)}
        id="chapter-01"
        className="guide-chapter"
      >
        <p className="chapter-number">01</p>

        <h2>What to Expect During Your First BDSM Session</h2>

        <p>
          Taking your first step into BDSM can feel exciting and intimidating.
          You may worry about saying the wrong thing, not knowing the etiquette
          or feeling out of your depth. None of that is expected of you.
        </p>

        <p>
          A professional session should feel carefully considered, welcoming and
          built around clear communication.
        </p>

        <h3>Before We Meet</h3>

        <p>
          Your experience begins with your enquiry. I will ask about your
          preferred date, location and session length, along with your
          experience, interests and limits. This helps create an understanding
          of what you are hoping for and whether we are well matched.
        </p>

        <h3>The Consultation</h3>

        <p>
          Before the dynamic begins, we will discuss interests, boundaries and
          expectations. Communication creates the foundation for a comfortable
          and respectful experience.
        </p>

        <h3>During The Session</h3>

        <p>
          Once boundaries are understood, the focus becomes the shared dynamic.
          Every experience is approached with awareness and attention.
        </p>
      </section>{' '}
      {/* =========================
          CHAPTER 02
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-02'] = el)}
        id="chapter-02"
        className="guide-chapter"
      >
        <p className="chapter-number">02</p>

        <h2>How to Prepare for Your First BDSM Session</h2>

        <p>
          Preparing for your first session does not need to be complicated. You
          are not expected to know every BDSM term or arrive with a complete
          script.
        </p>

        <h3>Consider Your Interests And Boundaries</h3>

        <p>
          Think about what has drawn you towards BDSM. It may be authority,
          surrender, roleplay, discipline, service, verbal control or simply the
          opportunity to explore a personal interest.
        </p>

        <p>
          You do not need all the answers. Curiosity and honest communication
          are enough.
        </p>

        <h3>Practical Preparation</h3>

        <p>
          Arrive freshly showered and in clean comfortable clothing. Allow
          enough travel time so you do not arrive stressed or rushed. Avoid
          anything that could affect clear communication and consent.
        </p>

        <h3>Come As You Are</h3>

        <p>
          Nerves are completely normal. There is no pressure to perform, impress
          or pretend to have more experience than you do.
        </p>

        <p>
          Honest communication will always be more valuable than memorising
          rules before arriving.
        </p>
      </section>
      {/* =========================
          CHAPTER 03
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-03'] = el)}
        id="chapter-03"
        className="guide-chapter"
      >
        <p className="chapter-number">03</p>

        <h2>Understanding Consent, Communication and Boundaries in BDSM</h2>

        <p>
          The strongest BDSM experiences are built on trust rather than
          intensity alone. Consent, communication and respect create the
          security needed for a meaningful power exchange.
        </p>

        <h3>Consent Is Informed And Ongoing</h3>

        <p>
          Consent is an agreement between adults about what will and will not
          happen. It begins before the session and continues throughout it.
        </p>

        <h3>Hard And Soft Limits</h3>

        <p>
          A hard limit is something completely off the table. A soft limit is
          something that may require discussion and careful consideration.
        </p>

        <h3>Communication Protects The Experience</h3>

        <p>
          Discussing interests, expectations and boundaries creates clarity.
          Communication remains important before, during and after a session.
        </p>

        <h3>Respect Works Both Ways</h3>

        <p>
          Confidentiality, dignity and boundaries are essential. Professional
          boundaries, time and arrangements should also always be respected.
        </p>
      </section>
      {/* =========================
          CHAPTER 04
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-04'] = el)}
        id="chapter-04"
        className="guide-chapter"
      >
        <p className="chapter-number">04</p>

        <h2>Common BDSM Myths Explained</h2>

        <p>
          BDSM is often misunderstood through stereotypes. In reality,
          professional domination is a thoughtful and individual experience.
        </p>

        <h3>Myth: BDSM Is All About Pain</h3>

        <p>
          Pain can be one element, but BDSM can also involve psychology,
          anticipation, ritual, service, roleplay and emotional connection.
        </p>

        <h3>Myth: You Need Experience</h3>

        <p>
          You do not need specialist knowledge before your first session.
          Honesty and communication matter more than experience.
        </p>

        <h3>Myth: Submission Is Weakness</h3>

        <p>
          Submission can require awareness, trust and confidence. It is a
          conscious choice rather than a lack of control.
        </p>

        <h3>What Professional BDSM Really Looks Like</h3>

        <p>
          At its best, BDSM is a collaborative exploration built around
          communication, imagination and mutual respect.
        </p>
      </section>
      {/* =========================
          CHAPTER 05
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-05'] = el)}
        id="chapter-05"
        className="guide-chapter"
      >
        <p className="chapter-number">05</p>

        <h2>The Psychology of Dominance and Submission</h2>

        <p>
          Dominance and submission are often described as opposites, yet both
          require trust, attention and emotional awareness.
        </p>

        <h3>The Parts Of Ourselves We Keep Hidden</h3>

        <p>
          Many people explore feelings they rarely express: the desire to
          surrender responsibility, receive guidance or discover a different
          side of themselves.
        </p>

        <h3>Presence Matters More Than Performance</h3>

        <p>
          Authentic dominance is based on observation and understanding. Small
          details such as tone, timing and communication can create meaningful
          psychological experiences.
        </p>

        <h3>Different Qualities Of Dominance</h3>

        <p>
          Dominance may include authority, curiosity, confidence, challenge and
          compassion. Care can strengthen trust rather than reduce control.
        </p>
      </section>
      {/* =========================
          CHAPTER 06
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-06'] = el)}
        id="chapter-06"
        className="guide-chapter"
      >
        <p className="chapter-number">06</p>

        <h2>What Makes a Professional Dominatrix Different?</h2>

        <p>
          A professional Dominatrix offers more than appearance or a persona.
          The difference lies in judgement, communication and creating a
          responsible dynamic.
        </p>

        <h3>The Session Is Built Around The Person</h3>

        <p>
          Every individual has different interests, expectations and comfort
          levels. Understanding the person creates a more authentic experience.
        </p>

        <h3>Communication Comes First</h3>

        <p>
          Clear discussion about boundaries, expectations and experience is
          essential before any session begins.
        </p>

        <h3>Professionalism Beyond The Persona</h3>

        <p>
          Discretion, reliability, hygiene and respect are fundamental parts of
          professionalism.
        </p>
      </section>{' '}
      {/* =========================
          CHAPTER 07
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-07'] = el)}
        id="chapter-07"
        className="guide-chapter"
      >
        <p className="chapter-number">07</p>

        <h2>How To Choose The Right Professional Dominatrix</h2>

        <p>
          Choosing the right professional is a personal decision. Compatibility,
          communication and trust matter more than appearance alone.
        </p>

        <h3>Read Beyond The Gallery</h3>

        <p>
          Images may show style, but written information reveals approach,
          professionalism and values.
        </p>

        <h3>Look For Professional Standards</h3>

        <ul className="guide-list">
          <li>Clear communication</li>

          <li>Respect for consent and boundaries</li>

          <li>Transparent booking arrangements</li>

          <li>Attention to discretion and hygiene</li>
        </ul>
      </section>
      {/* =========================
          CHAPTER 08
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-08'] = el)}
        id="chapter-08"
        className="guide-chapter"
      >
        <p className="chapter-number">08</p>

        <h2>Why Every BDSM Session Should Be Tailored To The Individual</h2>

        <p>
          Two people may request similar interests while looking for completely
          different emotional experiences.
        </p>

        <h3>Understanding Motivation</h3>

        <p>
          The reason behind a desire often shapes the atmosphere, pace and
          structure of the session.
        </p>

        <h3>Listening Creates Authenticity</h3>

        <p>
          A personalised experience comes from communication, observation and
          adapting naturally within agreed boundaries.
        </p>
      </section>
      {/* =========================
          CHAPTER 09
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-09'] = el)}
        id="chapter-09"
        className="guide-chapter"
      >
        <p className="chapter-number">09</p>

        <h2>How Long Should My First BDSM Session Be?</h2>

        <p>
          For a first appointment, I generally recommend between 1½ and 2 hours.
          This allows enough time without feeling rushed.
        </p>

        <h3>Why More Time Helps</h3>

        <p>
          A session includes consultation, preparation, connection, the
          experience itself and a calm transition afterwards.
        </p>

        <h3>Quality Over Quantity</h3>

        <p>More time allows the dynamic to develop naturally.</p>
      </section>
      {/* =========================
          CHAPTER 10
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-10'] = el)}
        id="chapter-10"
        className="guide-chapter"
      >
        <p className="chapter-number">10</p>

        <h2>Why Aftercare Matters In BDSM</h2>

        <p>How an experience ends can be just as important as how it begins.</p>

        <h3>A Thoughtful Transition</h3>

        <p>
          Aftercare may include conversation, quiet time, hydration or simply
          allowing space to return to everyday life.
        </p>

        <h3>Every Client Is Different</h3>

        <p>
          Some people prefer discussion while others need silence. Aftercare
          should respect the individual.
        </p>
      </section>
      {/* =========================
          CHAPTER 11
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-11'] = el)}
        id="chapter-11"
        className="guide-chapter"
      >
        <p className="chapter-number">11</p>

        <h2>Psychological Domination Explained</h2>

        <p>
          Psychological domination focuses on authority, anticipation, attention
          and the emotional experience of surrender.
        </p>

        <p>
          Voice, eye contact, silence, ritual and carefully chosen words can
          create powerful dynamics built on trust.
        </p>
      </section>
      {/* =========================
          CHAPTER 12
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-12'] = el)}
        id="chapter-12"
        className="guide-chapter"
      >
        <p className="chapter-number">12</p>

        <h2>Roleplay In BDSM: More Than Just Acting</h2>

        <p>
          Roleplay is not simply performance. It creates a focused environment
          where imagination, psychology and connection combine.
        </p>

        <p>
          The strongest scenarios are personal, discussed clearly and built
          around communication.
        </p>
      </section>
      {/* =========================
          CHAPTER 13
      ========================= */}
      <section
        ref={(el) => (chaptersRef.current['chapter-13'] = el)}
        id="chapter-13"
        className="guide-chapter faq"
      >
        <p className="chapter-number">13</p>

        <h2>Frequently Asked Questions</h2>

        <h3>Do I need previous BDSM experience?</h3>

        <p>
          No. Many clients are completely new. Honest communication is what
          matters most.
        </p>

        <h3>Is everything confidential?</h3>

        <p>
          Yes. Discretion and respect are fundamental parts of every
          professional interaction.
        </p>

        <h3>How do I book?</h3>

        <p>
          Complete the application form with your details, interests and
          expectations so compatibility can be established.
        </p>

        <h3>Can I ask questions before booking?</h3>

        <p>
          Of course. Relevant questions are welcome and often help establish
          whether we are compatible.
        </p>
      </section>
      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="guides-cta">
        <p className="section-eyebrow">NEXT STEP</p>

        <h2>Ready To Begin?</h2>

        <p>
          Every meaningful experience begins with understanding, communication
          and trust.
        </p>

        <Link to="/application" className="guides-button">
          Submit Application
        </Link>
      </section>
      <GuideNavigator
        onOpenContents={() => {
          const chapters = document.querySelector('.checklist-section');

          if (chapters) {
            chapters.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
      />
    </div>
  );
}

export default Guides;
