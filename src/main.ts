import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import 'virtual:windi.css'
import '@/mock/index'

// import '@/util/rem';
const app=createApp(App)
app.use(ArcoVue)
app.use(createPinia())
app.use(router)
app.mount('#app')
