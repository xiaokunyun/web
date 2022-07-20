export default [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '主页',
        },
        component: () => import('../layout/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '主页',
        },
        component: () => import('../layout/index.vue')
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