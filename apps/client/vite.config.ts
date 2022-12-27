import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import appConfig from './app.config'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${appConfig.baseUrlName}/`,
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: `./dist/${appConfig.baseUrlName}/`
  },
  server: {
    proxy: {
      '/eco-system-server-biz': {
        target: 'http://192.168.164.247:2022/',
        changeOrigin: true,
      },
    }
    // proxy: {
    //   '/': {
    //     target: 'http://eco.dameng.com',
    //     changeOrigin: true,
    //   }
    // }
  }
});
