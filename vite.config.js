import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({
  mode
}) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    },
    base: process.env.VITE_BASE_URL ?? ''
  };
});