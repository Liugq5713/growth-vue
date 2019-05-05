import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout.vue'
import Home from './views/Home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Layout,
      children: [{ path: '', component: Home }]
    },
    {
      path: '/vfor',
      name: "v-for can't get dom element",
      component: Layout,
      children: [{ path: '', component: () => import('./views/VFor') }]
    },
    {
      path: '/jsonform',
      name: '生成表单',
      component: Layout,
      children: [
        { path: '', component: () => import('./views/JsonForm/index.vue') }
      ]
    },
    {
      path: '/bubble',
      name: '泡泡',
      component: Layout,
      children: [
        { path: '', component: () => import('./views/Bubble/index.vue') }
      ]
    },
    {
      path: '/reactive',
      name: 'watch vs computed',
      component: Layout,
      children: [
        { path: '', component: () => import('./views/Reactive/index.vue') }
      ]
    }
  ]
})
