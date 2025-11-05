import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://localhost:7289', // <-- stavi tvoj backend URL/port iz launchSettings.json
        changeOrigin: true,
        secure: false
      }
    }
  }
})
