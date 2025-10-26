import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@common': path.resolve(__dirname, './src/app/_common'),
      '@styles': path.resolve(__dirname, './src/app/_styles'),
      '@components': path.resolve(__dirname, './src/app/_components'),
      '@layouts': path.resolve(__dirname, './src/app/_layouts'),
      '@library': path.resolve(__dirname, './src/app/_lib'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'import']
      }
    }
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
