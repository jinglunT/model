import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tools from '@/components/Tools'
import MyWork from '@/components/MyWork'
import MyWork1 from '@/components/MyWork1'
import MyWork2 from '@/components/MyWork2'
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
      path: '/mywork1',
      name: 'MyWork1',
      component: MyWork1
    },
    {
      path: '/mywork2',
      name: 'MyWork2',
      component: MyWork2
    },
    {
      path: '/teach',
      name: 'Teach',
      component: Teach
    }
  ]
})
