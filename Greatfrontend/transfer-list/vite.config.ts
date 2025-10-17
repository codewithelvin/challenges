import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    host: '0.0.0.0', // listen on all interfaces (important inside container)
    port: 3000, // exposed in docker-compose
    strictPort: true,
    allowedHosts: ['live.ide.codewithelvin.com'], // your public dev domain

    // Tell Vite HMR client to connect via the public domain and HTTPS
    hmr: {
      protocol: 'wss',
      host: 'live.ide.codewithelvin.com',
      port: 443,
    },
  },
});
