import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { AppContent } from './App.jsx';

/* =========================================
   STATIC / SERVER RENDER ENTRY

   Used only during the prerender build.

   The normal website continues to use
   BrowserRouter through App.jsx.
========================================= */

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}
