// eslint-disable-next-line import/no-unresolved
import { fileURLToPath, URL } from 'node:url';
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  define: {
    CANVAS_RENDERER: JSON.stringify(false),
    WEBGL_RENDERER: JSON.stringify(true),
  },
  build: {
    outDir: '../docs',
    assetsInlineLimit: 0,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
