import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // simulates a broswer enviroment in node js
    enviroment: 'jsdom',
    // Allows you to use describe, it, expect globally without importing them everytime
    globals: true, 
    setupFiles: './src/tests/setup.js'
  }
})
