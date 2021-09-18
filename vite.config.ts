import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/vue-recipe-box/',
  resolve: {
    alias: [{ find: '@', replacement: resolve('src') }],
  },
  plugins: [vue()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
