import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tools from '@/components/Tools'
import Tools1 from '@/components/Tools1'
import Tools2 from '@/components/Tools2'
import MyWork from '@/components/MyWork'
import MyWork1 from '@/components/MyWork1'
import MyWork2 from '@/components/MyWork2'
import Teach from '@/components/Teach'
import Teach1 from '@/components/Teach1'
import Teach2 from '@/components/Teach2'
import Teach3 from '@/components/Teach3'

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
      path: '/tools1',
      name: 'Tools1',
      component: Tools1
    },
    {
      path: '/tools2',
      name: 'Tools2',
      component: Tools2
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
    },
    {
      path: '/teach1',
      name: 'Teach1',
      component: Teach1
    },
    {
      path: '/teach2',
      name: 'Teach2',
      component: Teach2
    },
    {
      path: '/teach3',
      name: 'Teach3',
      component: Teach3
    }
  ]
})
