import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import path, { join } from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ArcoResolver} from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    VitePWA(),
    WindiCSS(),
    createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    Components({dirs: ['src/components'],dts: true,resolvers: [ArcoResolver()],types: [{ from: 'vue-router',names: ['RouterLink', 'RouterView']}],}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
  server: {
    host: '0.0.0.0',
    // open: true,
    port: 9527,
  }
})
