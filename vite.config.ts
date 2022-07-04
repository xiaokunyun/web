import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ArcoResolver} from 'unplugin-vue-components/resolvers'

import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    VitePWA(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
    }),
    Components({ dts: true,   resolvers: [ArcoResolver()],types: [{ from: 'vue-router',names: ['RouterLink', 'RouterView']}],dirs: ['src/components'],}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
  server: {
    host: '0.0.0.0',
    open: true,
  }
})
