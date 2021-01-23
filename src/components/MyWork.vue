<template>
  <div class="hello">
    <vue-headful title="1/12 Shore Trooper[改造.改色]"/>
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
      <div class="ui grid">
       <div class="ui row">
          <router-link to = "/mywork1">RG EVA新世紀福音戰士 零號機</router-link>
       </div>
      </div>
    </div>
     <div class="ui segment container">
      <div class="ui grid">
       <div class="ui row">
          <div class="column">
            <img src = "/static/unnamed (5).jpg">
              <div class="ui row">
                <router-link to = "/mywork2">1/12 SHORE TROOPER[改色]</router-link>
              </div>
              <div class="ui row">
                <p>製作時間 : 2週</p>
              </div>
          </div>
       </div>
      </div>
    </div>
    <chat :chats = "chatsWork" @submit = "submit" />
  </div>
</template>

<script>
import Chat from './Chat'

export default {
  name: 'HelloWorld',
  props: ['chatsWork'],
  components: { Chat },
  methods: {
    submit: function (n, email, t) {
      console.log(n)
      this.$emit('submit', n, email, t, 'chatsWork') // 對上層元件說'submit', 並傳n, email, t, 'chatsTool'給它
    }
  },
  data () {
    return {
      msg: '我的作品集'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  display: inline-block;
  max-width: 600px;
  text-align: left;
}

img {
  width: 33%;
}

img.small {
}

img.big {
}

.row a {
  margin-left: 100px;
  font-size: 22px;
  color: hsla(169, 60%, 50%, 1);
}
</style>
