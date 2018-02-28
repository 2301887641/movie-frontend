import Vue from 'vue'
import Router from 'vue-router'
import Iview from 'iview'
// 使用 iview CSS
import 'iview/dist/styles/iview.css'
import index from '@/components/index/index.vue'

Vue.use(Router)
Vue.use(Iview)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
