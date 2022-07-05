import { createRouter, createWebHistory ,RouteRecordRaw,RouteMeta } from 'vue-router'
// import { isMobileTerminal } from '@/util/flex'
// import pc from './pc'//pc端路由表
// import mobile from './mobile'//移动端路由表
// export  const routes: Array<RouteRecordRaw> = isMobileTerminal.value?pc:mobile
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
        title: '主页',
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/home/index.vue'),
      },
    ]
},
{
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
    },
    component: () => import('@/views/login/index.vue')
},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
