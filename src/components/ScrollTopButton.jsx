import React, { useEffect, useRef, useState } from 'react';
import './scrollTopButton.css';

function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    const startPosition = window.scrollY;

    if (startPosition <= 0) {
      return;
    }

    /*
      Adaptive duration:
      short page  -> ~500ms
      long page   -> max 900ms
    */

    const duration = Math.min(900, Math.max(500, startPosition * 0.14));

    const startTime = performance.now();

    /*
      Premium ease-out:
      starts decisively,
      finishes smoothly.
    */

    const easeOutQuint = (progress) => {
      return 1 - Math.pow(1 - progress, 5);
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutQuint(progress);

      const newPosition = startPosition * (1 - easedProgress);

      window.scrollTo(0, newPosition);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0);

        animationFrameRef.current = null;
      }
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  return (
    <button
      type="button"
      className={`scroll-top ${showButton ? 'active' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

export default ScrollTopButton;
