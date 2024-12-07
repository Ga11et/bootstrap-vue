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
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                  }
              }
          }
      }
  },
  plugins: [vue()],
  base: `/${ASSET_URL}/`
});
