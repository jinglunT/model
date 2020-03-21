import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tools from '@/components/Tools'
import Chat from '@/components/Chat'
import MyWork from '@/components/MyWork'
import Out from '@/components/Out'
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
      path: '/out',
      name: 'Out',
      component: Out
    },
    {
      path: '/teach',
      name: 'Teach',
      component: Teach
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
