<template>
  <div id="app">
    <nav id="navbar">
      <router-link to = "/">首頁</router-link>
      <router-link to = "/tools">工具</router-link>
      <router-link to = "/chat">留言板</router-link>
      <router-link to = "/mywork">作品分享</router-link>
      <router-link to = "/out">開箱</router-link>
      <router-link to = "/teach">教學</router-link>
    </nav>
    <router-view :chats = "chats" @submit = "submit" />
    <!-- :chats = "chats" 是把 chats 送進 子元件裡 -->
    <!-- @submit = "submit" 是聽 submit 事件時，運作submit函式 -->
  </div>
</template>

<script>

import { chatsRef } from './firebase/db'

export default {
  name: 'App',
  firebase: {
    chats: chatsRef // 以firebase的chatRef 來構造chats(類似物件的串列)
  },
  data () {
    return {
      chats: undefined
    }
  },
  methods: {
    submit: function (n, email, t) {
      var o = {
        n: n,
        email: email,
        t: t,
        time: (new Date()).getTime()
      }
      if (t) {
        this.$firebaseRefs.chats.push(o) // 在firebase上新增一筆資料
        window.alert('留言已送出')
      } else {
        window.alert('請輸入留言')
      }
    }
  }
}
</script>

<style>

html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei', /*  中文字型 */
                'Microsoft YaHei', /*  中文字型 */
                'STHeiti', /*  中文字型 */
                'Apple LiGothic Medium'; /*  中文字型 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #ccc;
  padding: 1em;
}

nav a {
  margin: 0 1em;
  cursor: pointer;
  text-decoration: none;
}

nav a:hover {
  color: blue;
  text-decoration: underline;
}

nav a:visited {
  color: blue;
}

.router-link-exact-active.router-link-active {
  color: red;
}

</style>
