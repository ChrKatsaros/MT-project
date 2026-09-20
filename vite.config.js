import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],

  /*
   * SPA mode gives React Router a fallback to index.html
   * for clean URLs such as:
   *
   * /about
   * /experiences
   * /application
   *
   * Real static location pages remain separate HTML
   * build entries below.
   */
  appType: 'spa',

  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),

        bournemouth: resolve(
          process.cwd(),
          'dominatrix-bournemouth/index.html'
        ),

        southampton: resolve(
          process.cwd(),
          'dominatrix-southampton/index.html'
        ),

        portsmouth: resolve(process.cwd(), 'dominatrix-portsmouth/index.html'),
      },
    },
  },
});
