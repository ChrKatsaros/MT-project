import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';

/* =========================================
   SETTINGS
========================================= */

const MIN_LOGO_TIME = 1100;
const MAX_ASSET_WAIT = 8000;

/* =========================================
   IMAGE HELPERS
========================================= */

function preloadImage(url, srcSet = '', sizes = '') {
  return new Promise((resolve) => {
    if (!url && !srcSet) {
      resolve();
      return;
    }

    const image = new Image();
    let finished = false;

    const finish = async () => {
      if (finished) return;
      finished = true;

      if (image.naturalWidth > 0 && image.decode) {
        try {
          await image.decode();
        } catch {
          // Continue even if decoding fails.
        }
      }

      resolve();
    };

    image.onload = finish;
    image.onerror = finish;

    if (sizes) image.sizes = sizes;
    if (srcSet) image.srcset = srcSet;
    if (url) image.src = url;

    if (image.complete) finish();
  });
}

function getBackgroundUrls(element) {
  const urls = [];

  const styles = [
    getComputedStyle(element),
    getComputedStyle(element, '::before'),
    getComputedStyle(element, '::after'),
  ];

  for (const style of styles) {
    const background = style.backgroundImage;

    if (!background || background === 'none') continue;

    const regex = /url\(\s*(?:"([^"]+)"|'([^']+)'|([^)]*))\s*\)/g;

    let match;

    while ((match = regex.exec(background))) {
      const url = (match[1] || match[2] || match[3] || '').trim();

      if (!url) continue;

      try {
        urls.push(new URL(url, document.baseURI).href);
      } catch {
        // Ignore invalid URLs.
      }
    }
  }

  return urls;
}

function collectPageAssets(root) {
  if (!root) return [];

  const promises = [];
  const seen = new Set();

  // Regular images
  const images = root.querySelectorAll('img');

  images.forEach((img) => {
    const url = img.currentSrc || img.src;
    const srcSet = img.getAttribute('srcset') || '';
    const sizes = img.getAttribute('sizes') || '';
    const key = `${url}|${srcSet}|${sizes}`;

    if (seen.has(key)) return;
    seen.add(key);

    if (img.complete && img.naturalWidth > 0) {
      if (img.decode) {
        promises.push(img.decode().catch(() => {}));
      }
    } else {
      promises.push(preloadImage(url, srcSet, sizes));
    }
  });

  // CSS background images, including hero images
  const elements = [root, ...root.querySelectorAll('*')];

  elements.forEach((element) => {
    getBackgroundUrls(element).forEach((url) => {
      if (seen.has(url)) return;
      seen.add(url);

      promises.push(preloadImage(url));
    });
  });

  return promises;
}

/* =========================================
   PAGE TRANSITION
========================================= */

function PageTransition({ children }) {
  const pageRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let minimumTimer;

    async function preparePage() {
      const start = performance.now();

      // Allow the new React page to mount.
      await new Promise((resolve) => requestAnimationFrame(resolve));

      await new Promise((resolve) => requestAnimationFrame(resolve));

      if (cancelled) return;

      const assets = collectPageAssets(pageRef.current);

      const fonts = document.fonts?.ready || Promise.resolve();

      const allAssets = Promise.allSettled([...assets, fonts]);

      const timeout = new Promise((resolve) => {
        timeoutId = window.setTimeout(resolve, MAX_ASSET_WAIT);
      });

      await Promise.race([allAssets, timeout]);

      window.clearTimeout(timeoutId);

      if (cancelled) return;

      const elapsed = performance.now() - start;

      const remaining = Math.max(0, MIN_LOGO_TIME - elapsed);

      if (remaining > 0) {
        await new Promise((resolve) => {
          minimumTimer = window.setTimeout(resolve, remaining);
        });
      }

      if (!cancelled) {
        setIsReady(true);
      }
    }

    preparePage();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      window.clearTimeout(minimumTimer);
    };
  }, []);

  return (
    <>
      {/* PAGE CONTENT */}
      <motion.div
        ref={pageRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.45,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>

      {/* WHITE LOADING SCREEN */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="page-loader"
            role="status"
            aria-label="Preparing page"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.55,
              ease: 'easeInOut',
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'auto',
            }}
          >
            {/* LOGO */}
            <img
              src={logo}
              alt="Tabitha Thorne"
              style={{
                display: 'block',
                width: 'min(260px, 65vw)',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0)',
              }}
            />

            {/* BURGUNDY LOADING CIRCLE */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.1,
                ease: 'linear',
                repeat: Infinity,
              }}
              style={{
                width: 27,
                height: 27,
                marginTop: 32,
                borderRadius: '50%',
                border: '2px solid rgba(112, 37, 55, 0.14)',
                borderTopColor: '#702537',
                boxSizing: 'border-box',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PageTransition;
