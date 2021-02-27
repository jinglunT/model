<template>
  <div class="hello">
    <vue-headful title="工具介紹"/>
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
      <div class="ui grid">
       <div class="ui row">
          <div class="eight wide column">
            <img src = "/static/IMG_9836.jpg">
          </div>
          <div class="eight wide column">
              <div class="ui row">
                <router-link to = "/teach1">工具介紹 第一篇</router-link>
              </div>
              <div class="ui row">               
                <p>斜口鉗，筆刀，水砂紙，手鑽，模型膠，噴筆，防毒面具</p>
              </div>
         </div>
       </div>
      </div>
    </div>
    <div class="ui segment container">
      <div class="ui grid">
       <div class="ui row">
          <div class="eight wide column">
            <img src = "/static/IMG_9836.jpg">
          </div>
          <div class="eight wide column">
              <div class="ui row">
                <router-link to = "/teach2">湯口處理</router-link>
              </div>
              <div class="ui row">
                <p> 工具 :</p>               
            <br><p>斜口鉗，筆刀，海綿砂，水砂紙，打磨板</p>
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
                <router-link to = "/teach3">零件做壞了怎麼辦？零件補救教學</router-link>
              </div>
              <div class="ui row">               
                <p>工具 :</p>
            <br><p>AB補土，牙膏補土，黑色瞬間膠，模型膠，海綿砂，水砂紙，打磨板</p>
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
