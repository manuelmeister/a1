import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        include: ['tippy.js']
    },
    build: {
        sourcemap: false,
    },
});
