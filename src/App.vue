<template>
  <div id="app">
    <nav id="navbar">
      <router-link to = "/">首頁</router-link>
      <router-link to = "/tools">工具</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import { chatsRef } from './firebase/db'

export default {
  name: 'App',
  firebase: {
    chats: chatsRef
  },
  data () {
    return {
      chats: undefined
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
