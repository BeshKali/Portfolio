import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  server: {
    port: 5174,          // Set the port to 5173
    strictPort: true,    // Prevent switching to another port if 5173 is in use
  },
});
