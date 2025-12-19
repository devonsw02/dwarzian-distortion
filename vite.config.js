import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    /**
     * Use './' (Relative Base) instead of '/cardgame_website/'
     * This ensures that paths look like "assets/logo.png" instead of "/assets/logo.png"
     * It is the most compatible setting for GitHub Pages sub-folders.
     */
    base: './',

    plugins: [
        vue()
    ],

    resolve: {
        alias: {
            // Allows you to use @/assets/images/logo.png in your code
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },

    build: {
        // Prevents small images from being turned into long text strings (Base64)
        // This ensures every image stays as a physical file in your dist/assets folder
        assetsInlineLimit: 0,

        rollupOptions: {
            output: {
                // Keeps the naming convention clean for your bundled files
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            }
        }
    }
})
