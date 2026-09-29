import { defineConfig } from 'vite';

import path from 'path';

import electron from 'vite-plugin-electron/simple'


export default defineConfig({
    build: {
      chunkSizeWarningLimit: 5000,
      outDir: 'dist',
      rolldownOptions: {
        input: 'index.electron.html',
      },
    },
    base:  "./",//path.basename(import.meta.dirname),
    plugins: [
    electron({
      main: {
        // Shortcut of `build.lib.entry`
        entry: 'main.js',
      },
      preload: {
        // Shortcut of `build.rolldownOptions.input` (`build.rollupOptions.input` on Vite < 8)
        input: 'preload.js',
      },
    }),
  ],
});
