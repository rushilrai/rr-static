import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "http://localhost:4321",
    outDir: './build',
    prefetch: {
        prefetchAll: true
    },
    vite: {
        plugins: [tailwindcss()]
    }
});