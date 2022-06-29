import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
// import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // Pages({
    //   dirs: 'src/pages',
    // }),
    VitePWA(),
    AutoImport({ 
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue','vue-router'],
      // resolvers: [
      //   /* ... */
      // ],
     }),
  ],
  // base: '/web/' // 为/仓库名/
})
