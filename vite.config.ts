import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// GitHub Pages needs a real HTML entry for direct visits to each client route.
// Keep this list in sync with the routes in src/App.tsx.
function staticRouteEntries(): Plugin {
  return {
    name: 'static-route-entries',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const entry = bundle['index.html']
      if (!entry || entry.type !== 'asset') {
        this.error('The production HTML entry was not generated.')
      }

      for (const fileName of [
        'about/index.html',
        'projects/index.html',
        'contact/index.html',
        '404.html',
      ]) {
        this.emitFile({ type: 'asset', fileName, source: entry.source })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), staticRouteEntries()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
})
