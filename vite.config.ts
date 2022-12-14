import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/music-docs'
})

// const {
//   defineConfig
// } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/avstpmr/'
//     : '/'

// })
