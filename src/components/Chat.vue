<template>
  <div class="ui container left aligned">
    <hr/>
    <router-link to="/">回首頁</router-link>
    <hr/>
    <div class="ui comments">
      <h3> {{ msg }}</h3>
        <div class="comment" v-for = "c in chats" :key=" c.time">
          <i class ="user icon"/> {{ c.n }} says: {{ c.t }} -- {{ parseTime(c.time) }}
        </div>
      <hr/>
      <form class="ui form">
        <label> 您的大名: </label>
        <input type='text' v-model="myName" />
        <label> Email: </label>
        <input type='email' v-model="myEmail" />
        <label> 請留言: </label>
        <input type='text' v-model="myText" placeholder="您想說什麼？"/>
        <button class="ui huge green button" @click="submit(myName, myEmail, myText)">留言</button>
      </form>
    </div>
  </div>

</template>
<script>

export default {
  name: 'Chat',
  props: ['chats'],
  data () {
    return {
      msg: '留言版',
      'myName': '訪客',
      'myEmail': '',
      'myText': ''
    }
  },
  methods: {
    submit: function (n, email, t) {
      this.myName = '訪客'
      this.myEmail = ''
      this.myText = ''
      this.$emit('submit', n, email, t) // 對上層元件說'submit', 並傳n, email, t給它
    },
    parseTime: function (t) {
      return (new Date(t)).toLocaleDateString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* css code here <---  */

</style>
