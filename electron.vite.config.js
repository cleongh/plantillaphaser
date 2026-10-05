import { defineConfig } from 'vite';


import electron from 'vite-plugin-electron/simple'


export default defineConfig({
  build: {
    chunkSizeWarningLimit: 5000,
    outDir: 'dist',
    rolldownOptions: {
      input: 'index.electron.html',
    },
  },
  base: "./",
  plugins: [
    electron({
      main: {
        entry: 'main.js',
      },
      preload: {
        input: 'preload.js',
      },
    }),
  ],
});
