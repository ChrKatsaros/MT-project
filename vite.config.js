import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],

  // Important: this project now has multiple real HTML pages
  appType: 'mpa',

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
