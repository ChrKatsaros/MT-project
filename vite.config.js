import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],

  appType: 'spa',

  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),

        london: resolve(process.cwd(), 'dominatrix-london/index.html'),

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
