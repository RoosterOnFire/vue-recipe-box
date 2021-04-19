import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-recipe-box-v2/',
  resolve: {
    alias: {
      '@component': resolve(__dirname, './src/components'),
      '@type': resolve(__dirname, './src/types/type.ts'),
    },
  },
  plugins: [vue()],
});
