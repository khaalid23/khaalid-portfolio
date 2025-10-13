<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
=======
/* This file was moved to backup/original-frontend/vite.config.ts
   The project now uses the Vite config under client/vite.config.ts
*/
export default {}
>>>>>>> 05bc7f5 (modevi the client)
