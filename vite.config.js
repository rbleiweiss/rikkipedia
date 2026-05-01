// theme/vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue()
    ],
    ssr: {
        // This ensures Vue isn't treated as an external CJS module
        noExternal: ['vue']
    },
    server: {
        open: true // Opens browser automatically
    }
});