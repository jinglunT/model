<template>
  <div class="hello">
    <vue-headful title="RG 1/144 Gundam Exia[開箱]"/>
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
      <div class="ui grid">
       <div class="ui row">
          <div class="eight wide column">
            <img src = "/static/unnamed (13).jpg">
          </div>
          <div class="eight wide column">
              <div class="ui row">
                <router-link to = "/tools1">RG 1/144 Gundam Exia[開箱]</router-link>
              </div>
              <div class="ui row">               
                <p>製作時間 : 還沒開始做</p>
              </div>
         </div>
       </div>
      </div>
    </div>
     <div class="ui segment container">
      <div class="ui grid">
       <div class="ui row">
          <div class="eight wide column">
            <img src = "/static/unnamed (5).jpg">
          </div>
          <div class="eight wide column">
              <div class="ui row">
                <router-link to = "/tools2">1/12 SHORE TROOPER[改色]</router-link>
              </div>
              <div class="ui row">               
                <p>製作時間 : 2週</p>
            <br><p>油漆色號 : 田宮XF-64，田宮X-12，田宮X-6，田宮XF-72，自調海軍藍，自調棕</p>
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
      msg: '開箱'
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
  margin-top: 2em;
}

img {
  width: 100%;
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

.grid {
  text-align: left
}
</style>
