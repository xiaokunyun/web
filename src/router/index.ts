import { createRouter, createWebHistory ,RouteRecordRaw} from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
import pc from './pc'//pc端路由表
import mobile from './mobile'//移动端路由表
const routes: Array<RouteRecordRaw> = isMobileTerminal.value?pc:mobile
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
