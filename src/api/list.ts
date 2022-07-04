import api from "./index";

// 频道菜单
export function navList() {
    return api({
        url: '/navList',
        method: 'get',
    })
}
export function videosList() {
    return api({
        url: '/videosList',
        method: 'get',
    })
}