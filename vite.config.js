/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../docs',
    assetsInlineLimit: 0,
    minify: 'terser',
  },
  plugins: [],
});
