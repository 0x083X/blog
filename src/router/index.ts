/**
 * 定制路由规则(路由懒加载)
 */
import {createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: () => import('../views/home.vue'), name:'home'},
    {path: '/Article', component: ()=> import('../views/Article.vue'), name:"Article"} ,
    {path: '/About', component: ()=>import('../views/About.vue'), name:"About"},
    {path:'/Project',component:()=>import("../views/Project.vue")}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router


