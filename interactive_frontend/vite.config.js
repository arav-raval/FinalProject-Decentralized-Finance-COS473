import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        bot: './bot.html'
      },
    },
    outDir: 'dist',
  },
  plugins: [react()],
})

