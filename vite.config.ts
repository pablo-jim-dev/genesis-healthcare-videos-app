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
      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        theme_color: "#8936ff",
        background_color: "#424242",
        icons: [
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "icon512_maskable.png",
            type: "image/png"
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "icon512_rounded.png",
            type: "image/png"
          }
        ],
        orientation: "any",
        display: "fullscreen",
        lang: "es-MX",
        name: "Genesis Healthcare Advisers",
        short_name: "Genesis Healthcare Advisers",
        start_url: "/",
        scope: "/",
      },

      workbox: {
        globPatterns: ["**/*"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 80000000,
      },
      includeAssets: [
        "**/*",
      ],

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })
  ],
})
