import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import router2 from '@/components/router2'
import zhilin from '@/components/zhilin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hellow',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/router2',
      name: 'router2',
      component: router2
    },
    {
      path: '/zhilin',
      name: 'zhilin',
      component:zhilin
    }
  ]
})
