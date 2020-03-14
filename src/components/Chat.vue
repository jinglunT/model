<template>
  <div class="chats">
    <ul>
      <li v-for = "c in chats" :key=" c.time">
        {{ c.n }} says: {{ c.t }} -- {{ parseTime(c.time) }}
      </li>
    </ul>
    <h3> {{ msg }}</h3>
    <form>
      <label> 您的大名: </label>
      <input type='text' v-model="myName" />
      <label> Email: </label>
      <input type='email' v-model="myEmail" />
      <label> 請留言: </label>
      <input type='text' v-model="myText" placeholder="您想說什麼？"/>
      <button @click="submit(myName, myEmail, myText)">留言</button>
    </form>
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
      this.$emit('submit', n, email, t)
    },
    parseTime: function (t) {
      return (new Date(t)).toLocaleDateString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
