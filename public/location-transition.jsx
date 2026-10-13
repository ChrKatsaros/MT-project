/* =========================================
   TABITHA THORNE
   LOCATION PAGE TRANSITION
   STABLE VERSION
========================================= */

(function () {
  'use strict';

  const MIN_DISPLAY_TIME = 1100;
  const MAX_WAIT_TIME = 5000;
  const NAVIGATION_FADE_TIME = 250;

  const startedAt = performance.now();

  let isLeaving = false;
  let isFinished = false;

  const loader = document.getElementById('tt-page-loader');

  if (!loader) return;

  /* =========================================
     ALWAYS ALLOW THE LOADER TO FINISH
  ========================================= */

  function hideLoader() {
    if (isFinished || isLeaving) return;

    isFinished = true;

    loader.classList.add('is-hidden');
    loader.setAttribute('aria-hidden', 'true');

    window.setTimeout(() => {
      if (!isLeaving && loader.parentNode) {
        loader.remove();
      }
    }, 650);
  }

  // Independent safety fallback.
  // The loader cannot remain visible forever.
  const emergencyTimer = window.setTimeout(() => {
    hideLoader();
  }, MAX_WAIT_TIME + 500);

  /* =========================================
     PRELOAD A SINGLE IMAGE
  ========================================= */

  function preloadImage(url) {
    return new Promise((resolve) => {
      if (!url) {
        resolve();
        return;
      }

      const image = new Image();

      let settled = false;

      function finish() {
        if (settled) return;

        settled = true;
        resolve();
      }

      image.onload = finish;
      image.onerror = finish;

      image.src = url;

      if (image.complete) {
        finish();
      }
    });
  }

  /* =========================================
     GET HERO BACKGROUND IMAGE
  ========================================= */

  function getHeroBackgroundUrl() {
    const hero = document.querySelector('.location-hero');

    if (!hero) return null;

    const background = window.getComputedStyle(hero).backgroundImage;

    if (!background || background === 'none') {
      return null;
    }

    const match = background.match(/url\(\s*["']?([^"')]+)["']?\s*\)/);

    if (!match) return null;

    try {
      return new URL(match[1], document.baseURI).href;
    } catch {
      return null;
    }
  }

  /* =========================================
     COLLECT IMPORTANT IMAGES
  ========================================= */

  function getImportantImages() {
    const urls = new Set();

    // Hero background image
    const heroUrl = getHeroBackgroundUrl();

    if (heroUrl) {
      urls.add(heroUrl);
    }

    // Only images initially visible in viewport
    const images = document.querySelectorAll('.location-page img');

    images.forEach((img) => {
      const rect = img.getBoundingClientRect();

      const isNearViewport =
        rect.top < window.innerHeight + 200 && rect.bottom > -200;

      if (!isNearViewport) return;

      const url = img.currentSrc || img.src;

      if (url) {
        urls.add(url);
      }
    });

    return [...urls];
  }

  /* =========================================
     PREPARE PAGE
  ========================================= */

  async function preparePage() {
    try {
      // Allow HTML and CSS layout to settle.
      await new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });

      await new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });

      const importantImages = getImportantImages();

      const imagePromises = importantImages.map((url) => preloadImage(url));

      const fontsReady = document.fonts?.ready || Promise.resolve();

      const assetsReady = Promise.allSettled([...imagePromises, fontsReady]);

      // Hard limit on asset waiting
      const timeout = new Promise((resolve) => {
        window.setTimeout(resolve, MAX_WAIT_TIME);
      });

      await Promise.race([assetsReady, timeout]);
    } catch (error) {
      console.warn('Location transition warning:', error);
    } finally {
      // Always respect minimum aesthetic duration.
      const elapsed = performance.now() - startedAt;

      const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

      if (remaining > 0) {
        await new Promise((resolve) => {
          window.setTimeout(resolve, remaining);
        });
      }

      window.clearTimeout(emergencyTimer);

      hideLoader();
    }
  }

  /* =========================================
     TRANSITION BEFORE NAVIGATION
  ========================================= */

  document.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      isLeaving ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = event.target.closest('a[href]');

    if (!link) return;

    if (
      link.hasAttribute('download') ||
      (link.target && link.target !== '_self')
    ) {
      return;
    }

    let destination;

    try {
      destination = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    if (
      destination.origin !== window.location.origin ||
      !['http:', 'https:'].includes(destination.protocol)
    ) {
      return;
    }

    // Do not intercept same-page anchor links.
    if (
      destination.pathname === window.location.pathname &&
      destination.search === window.location.search
    ) {
      return;
    }

    event.preventDefault();

    isLeaving = true;

    // Recreate loader if it was removed.
    // For outgoing navigation, a simple white fade
    // is sufficient before the next page loads.
    const overlay = document.createElement('div');

    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 999999;
      background: #ffffff;
      opacity: 0;
      pointer-events: auto;
      transition: opacity 0.25s ease-in-out;
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });

    window.setTimeout(() => {
      window.location.assign(destination.href);
    }, NAVIGATION_FADE_TIME);
  });

  /* =========================================
     BROWSER BACK / FORWARD
  ========================================= */

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      isLeaving = false;
      isFinished = true;

      loader.classList.add('is-hidden');

      const overlays = document.querySelectorAll(
        'body > div[style*="z-index: 999999"]'
      );

      overlays.forEach((element) => {
        element.remove();
      });
    }
  });

  /* =========================================
     INITIALIZE
  ========================================= */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preparePage, { once: true });
  } else {
    preparePage();
  }
})();
