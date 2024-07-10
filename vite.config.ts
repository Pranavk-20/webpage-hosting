import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    root: './', // Ensure root is the project directory
    build: {
        outDir: 'dist', // Output directory for build
        rollupOptions: {
            input: './public/index.html', // Specify the input HTML file
        }
    }
});
