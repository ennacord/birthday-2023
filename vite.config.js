/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  define: {
    CANVAS_RENDERER: JSON.stringify(true),
    WEBGL_RENDERER: JSON.stringify(true),
  },
  build: {
    outDir: '../docs',
    assetsInlineLimit: 0,
    minify: 'terser',
  },
  plugins: [],
});
