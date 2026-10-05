import { defineConfig } from 'vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  build: { chunkSizeWarningLimit: 5000 },
  base: repositoryName ? `/${repositoryName}/` : '/',
});