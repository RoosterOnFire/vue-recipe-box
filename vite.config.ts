import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

export default defineConfig({
  base: '/vue-recipe-box/',
  resolve: {
    alias: {
      '@component': resolve(__dirname, './src/components'),
      '@composable': resolve(__dirname, './src/composables'),
      '@type': resolve(__dirname, './src/types/type.ts'),
    },
  },
  plugins: [vue()],
});
