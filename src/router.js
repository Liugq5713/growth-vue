import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home
    },
    {
      path: '/treetable',
      name: '树表',
      component: () => import('./views/treeTable/index.vue')
    },
    {
      path: '/jsonform',
      name: '生成表单',
      component: () => import('./views/JsonForm/index.vue')
    },
    {
      path:'/bubble',
      name:'泡泡',
      component:()=>import('./views/Bubble/index.vue')
    }
  ]
})
