import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";

const ASSET_URL = 'bootstrap_5'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // lodash: ['lodash']
        }
      }
    },
  },
  plugins: [vue()],
   base: `/${ASSET_URL}/`
});
