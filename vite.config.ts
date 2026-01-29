import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base path cho GitHub Pages
  // Nếu repo name là 'username.github.io', đặt base: '/'
  // Nếu repo name khác (ví dụ: 'introduction'), đặt base: '/introduction/'
  base: '/introduction/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
