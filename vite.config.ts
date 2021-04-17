import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@type': resolve(__dirname, './src/types/type.ts'),
    },
  },
  plugins: [vue()],
});
