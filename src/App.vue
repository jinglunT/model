<template>
  <div id="app">
    <nav id="navbar">
      <router-link to = "/"><i class="home icon"></i>首頁</router-link>
      <router-link to = "/tools">開箱</router-link>
      <router-link to = "/mywork">作品分享</router-link>
      <router-link to = "/teach">教學</router-link>
    </nav>
    <image-uploader
      :debug="1"
      :maxWidth="512"
      :quality="0.7"
      :autoRotate=true
      outputFormat="verbose"
      :preview=false
      :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
      :capture="false"
      accept="video/*,image/*"
      doNotResize="['gif', 'svg']"
      @input="setImage"
    ></image-uploader>
    <router-view :chatsTool = "chatsTool" :chatsWork = "chatsWork" :chatsTeach = "chatsTeach" @submit = "submit"/>

    <!-- :chats = "chats" 是把 chats 送進 子元件裡 -->
    <!-- @submit = "submit" 是聽 submit 事件時，運作submit函式 -->

  </div>
</template>

<script>

import { chatsToolRef, chatsWorkRef, chatsTeachRef, db2 } from './firebase/db'

export default {
  name: 'App',
  firebase: {
    chatsTool: chatsToolRef,
    chatsWork: chatsWorkRef,
    chatsTeach: chatsTeachRef // 以firebase的chatRef 來構造chats
  },
  data () {
    return {
      hasImage: false,
      chatsTool: undefined,
      chatsWork: undefined,
      chatsTeach: undefined
    }
  },
  methods: {
    setImage: function(output) {
      this.hasImage = true
      // console.log(output.dataUrl)
      this.upload(output.dataUrl)
    },
    submit: function (n, email, t, refName) {
      var o = {
        n: n,
        email: email,
        t: t,
        time: (new Date()).getTime()
      }
      if (t) {
        this.$firebaseRefs[refName].push(o) // 在firebase上新增一筆資料
        window.alert('留言已送出')
      } else {
        window.alert('請輸入留言')
      }
    },
    upload: function (file) {
      // Create a root reference
      var storageRef = db2.ref();

      const date = new Date().toString()

      // Create a reference to 'mountains.jpg'
      var mountainsRef = storageRef.child(date + '.png');

      mountainsRef.putString(file, 'data_url').then(() => {
        console.log('Uploaded a blob or file!');
      });
    }
  }
}
</script>

<style>

a:hover {
  color: blue;
  text-decoration: underline;
}

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
  background-color: hsla(0, 0%, 16%, 1);
  padding: 2.3em;
}

nav a {
  margin: 0 1em;
  cursor: pointer;
  text-decoration: none;
  color: white;
}

nav a:hover {
  color: blue;
  text-decoration: underline;
}

nav a:visited {
  color: white;
}

.router-link-exact-active.router-link-active {
  color: hsla(166, 100%, 54%, 1);
}

@media screen and (min-width: 421px) {
  .thin-only {
    display: none !important;
  }
}

@media screen and (max-width: 420px) {
  .fat-only {
    display: none !important;
  }
  nav {
    padding: 0;
  }
  nav a {
    margin: 0 2px;
  }
}

</style>
