import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

const AUTO_PLAY_DELAY = 6000;

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

  /* =========================
     PREMIUM TRANSITIONS
  ========================= */

  const spreadVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 18 : -18,
      scale: 0.995,
    }),

    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },

    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -14 : 14,
      scale: 1.003,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.025,
      opacity: 0.75,
    },

    center: {
      scale: 1,
      opacity: 1,
    },

    exit: {
      scale: 1.01,
      opacity: 0.82,
    },
  };

  const copyVariants = {
    enter: (dir) => ({
      opacity: 0,
      y: 12,
      x: dir > 0 ? 8 : -8,
    }),

    center: {
      opacity: 1,
      y: 0,
      x: 0,
    },

    exit: {
      opacity: 0,
      y: -6,
    },
  };

  return (
    <section className="portrait-lookbook">
      {/* HEADING */}

      <div className="portrait-lookbook-heading">
        <p className="portrait-lookbook-kicker">Private Portraits</p>

        <h2>Behind The Presence</h2>

        <div className="portrait-lookbook-line" />
      </div>

      {/* LOOKBOOK */}

      <div className="portrait-lookbook-frame">
        <div className="portrait-lookbook-counter">
          <span>{current.number}</span>

          <span className="portrait-lookbook-counter-divider">/</span>

          <span>{String(portraits.length).padStart(2, '0')}</span>
        </div>

        <div className="portrait-lookbook-stage">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={currentIndex}
              className="portrait-lookbook-spread"
              custom={direction}
              variants={spreadVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}
            >
              {/* IMAGE */}

              <div className="portrait-lookbook-image-wrap">
                <motion.img
                  src={current.image}
                  alt={`Portrait of Mistress Tabitha Thorne ${current.number}`}
                  className="portrait-lookbook-image"
                  style={{
                    objectPosition: current.position,
                  }}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 1.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  draggable="false"
                />
              </div>

              {/* COPY */}

              <motion.div
                className="portrait-lookbook-copy"
                custom={direction}
                variants={copyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.75,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="portrait-lookbook-eyebrow">{current.eyebrow}</p>

                <h3>{current.title}</h3>

                <p className="portrait-lookbook-text">{current.text}</p>

                <p className="portrait-lookbook-swipe">
                  Swipe or use the arrows
                </p>
              </motion.div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* NAVIGATION */}

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
