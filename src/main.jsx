import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
