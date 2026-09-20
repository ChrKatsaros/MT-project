import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';

/* =========================================
   LEGACY HASH URL MIGRATION

   Old URLs:
   /#/about
   /#/experiences
   /#/application?location=Bournemouth

   Become:
   /about
   /experiences
   /application?location=Bournemouth
========================================= */

const legacyHash = window.location.hash;

if (legacyHash.startsWith('#/')) {
  const cleanPath = legacyHash.slice(1);

  window.history.replaceState(null, '', cleanPath);
}

/* =========================================
   APP
========================================= */

const rootElement = document.getElementById('root');

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

/*
 * If the HTML was prerendered during the build,
 * React hydrates the existing markup.
 *
 * During normal Vite development, #root is empty,
 * so React creates the application normally.
 */

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
