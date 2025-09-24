import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo_white.png', 'qr/*.png', 'GABO/*.png', 'videos/**'],
      manifest: {
        name: 'Genesis Healthcare Advisers',
        short_name: 'Genesis Healthcare Advisers',
        theme_color: '#8936ff',
        background_color: '#424242',
        display: 'fullscreen',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/icon512_maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: '/icon512_rounded.png', sizes: '512x512', type: 'image/png', purpose: 'any' }
        ]
      },
      workbox: {
        // Solo precachea tipos conocidos y evita capturar TODO
        globPatterns: ['**/*.{js,css,html,svg,png,mp4,webm,ico}'],

        // Asegura que las peticiones a imágenes NO se manden a index.html
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [
          // cualquier archivo con extensión o bajo /qr/
          /\/qr\/.*/, /\.[^/]+$/    // .png, .svg, .ico, etc.
        ],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 80_000_000,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'images' }
          }
        ]
      }
    })
  ],
})
