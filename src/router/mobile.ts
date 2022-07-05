export default [
    {
        path: '/',
        name: 'home',
        title: '主页',
        component: () => import('../layout/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: () => import('@/views/login/index.vue')
    },
]