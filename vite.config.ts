import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 1. Ku dar kan sare

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            // 2. hier Verbinden sr inuu u taagan yahay src/
            '@': path.resolve(__dirname, './src'),
        },
    },
})
