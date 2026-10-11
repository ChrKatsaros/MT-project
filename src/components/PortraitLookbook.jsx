import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import gallery27 from '../assets/gallery27.webp';
import gallery28 from '../assets/gallery28.webp';
import gallery29 from '../assets/gallery29.webp';

import './portraitLookbook.css';

const portraits = [
  {
    image: gallery28,
    number: '01',
    eyebrow: 'The Woman Behind The Presence',
    title: 'Composed Authority',
    text: 'A presence built on restraint, observation and deliberate control.',
    position: 'center 22%',
  },
  {
    image: gallery29,
    number: '02',
    eyebrow: 'Closer',
    title: 'Quiet Intensity',
    text: 'Not every expression of authority needs to announce itself.',
    position: 'center 30%',
  },
  {
    image: gallery27,
    number: '03',
    eyebrow: 'Beyond The Persona',
    title: 'A Different Glimpse',
    text: 'A softer portrait, revealing another side of the woman behind the world.',
    position: 'center 25%',
  },
];

const AUTO_PLAY_DELAY = 5200;

function PortraitLookbook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = portraits[currentIndex];

  /* =========================
     AUTO PLAY
  ========================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDirection(1);

      setCurrentIndex((previousIndex) =>
        previousIndex === portraits.length - 1 ? 0 : previousIndex + 1
      );
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentIndex]);

  /* =========================
     NAVIGATION
  ========================= */

  const changeSlide = (newIndex, newDirection) => {
    if (newIndex === currentIndex) {
      return;
    }

    setDirection(newDirection);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const nextIndex =
      currentIndex === portraits.length - 1 ? 0 : currentIndex + 1;

    changeSlide(nextIndex, 1);
  };

  const previousSlide = () => {
    const previousIndex =
      currentIndex === 0 ? portraits.length - 1 : currentIndex - 1;

    changeSlide(previousIndex, -1);
  };

  /* =========================
     SWIPE
  ========================= */

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 65;

    if (info.offset.x < -swipeThreshold) {
      nextSlide();
      return;
    }

    if (info.offset.x > swipeThreshold) {
      previousSlide();
    }
  };

  return (
    <section className="portrait-lookbook">
      {/* =========================
          HEADING
      ========================= */}

      <div className="portrait-lookbook-heading">
        <p className="portrait-lookbook-kicker">Private Portraits</p>

        <h2>Behind The Presence</h2>

        <div className="portrait-lookbook-line" />
      </div>

      {/* =========================
          LOOKBOOK
      ========================= */}

      <div className="portrait-lookbook-frame">
        <div className="portrait-lookbook-counter">
          <span>{current.number}</span>

          <span className="portrait-lookbook-counter-divider">/</span>

          <span>{String(portraits.length).padStart(2, '0')}</span>
        </div>

        {/* =========================
            STAGE
        ========================= */}

        <div className="portrait-lookbook-stage">
          {portraits.map((portrait, index) => {
            const isActive = index === currentIndex;

            return (
              <motion.article
                key={portrait.number}
                className="portrait-lookbook-spread"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.995,
                  x: isActive ? 0 : direction > 0 ? -10 : 10,
                }}
                transition={{
                  opacity: {
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  scale: {
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  x: {
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                style={{
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 2 : 1,
                }}
                aria-hidden={!isActive}
                drag={isActive ? 'x' : false}
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.08}
                onDragEnd={handleDragEnd}
              >
                {/* =========================
                    IMAGE
                ========================= */}

                <div className="portrait-lookbook-image-wrap">
                  <motion.img
                    src={portrait.image}
                    alt={`Portrait of Mistress Tabitha Thorne ${portrait.number}`}
                    className="portrait-lookbook-image"
                    style={{
                      objectPosition: portrait.position,
                    }}
                    animate={{
                      scale: isActive ? 1 : 1.018,
                    }}
                    transition={{
                      duration: 1.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    draggable="false"
                  />
                </div>

                {/* =========================
                    COPY
                ========================= */}

                <motion.div
                  className="portrait-lookbook-copy"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 0.08 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="portrait-lookbook-eyebrow">
                    {portrait.eyebrow}
                  </p>

                  <h3>{portrait.title}</h3>

                  <p className="portrait-lookbook-text">{portrait.text}</p>

                  <p className="portrait-lookbook-swipe">
                    Swipe or use the arrows
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================
            NAVIGATION
        ========================= */}

        <div className="portrait-lookbook-navigation">
          <button
            type="button"
            className="portrait-lookbook-arrow"
            onClick={previousSlide}
            aria-label="Previous portrait"
          >
            ←
          </button>

          <div className="portrait-lookbook-dots">
            {portraits.map((portrait, index) => (
              <button
                key={portrait.number}
                type="button"
                className={`portrait-lookbook-dot ${
                  currentIndex === index ? 'active' : ''
                }`}
                onClick={() =>
                  changeSlide(index, index > currentIndex ? 1 : -1)
                }
                aria-label={`View portrait ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="portrait-lookbook-arrow"
            onClick={nextSlide}
            aria-label="Next portrait"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortraitLookbook;
