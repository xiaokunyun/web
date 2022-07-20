import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
// RouteMeta
// import { isMobileTerminal } from '@/util/flex'
// import pc from './pc'//pc端路由表
// import mobile from './mobile'//移动端路由表
// export  const routes: Array<RouteRecordRaw> = isMobileTerminal.value?pc:mobile
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          requiresAuth: true,
          title: '主页',
        },
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresAuth: true,
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
