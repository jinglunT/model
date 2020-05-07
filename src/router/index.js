import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Out from '@/components/Tools'
import MyWork from '@/components/MyWork'
import Teach from '@/components/Teach'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/mywork',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/teach',
      name: 'Teach',
      component: Teach
    }
  ]
})
