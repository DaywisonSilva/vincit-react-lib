import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'vincit-react-lib',
      formats: ['es', 'umd'],
      fileName: (format) => `vincit-react-lib.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  }
})
