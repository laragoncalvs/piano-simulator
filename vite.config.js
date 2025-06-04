import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/piano-simulator/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        game: resolve(__dirname, 'game.html'),
      },
    },
  },
});
