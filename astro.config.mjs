// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "lib": "/src/lib",
        "types": "/src/types"
      }
    },
    plugins: [tailwindcss()]
  }
});