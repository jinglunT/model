<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="ui cards">
      <div class="card" v-for = "t in tools" v-bind:key = "t.src">
        <div class="content">
          <img class="right floated medium ui image" :src="'/static/' + t.src">
          <div class="header">{{ t.name }}</div>
          <div class="description" v-if="t.des">{{ t.des }}</div>
        </div>
      </div>
    </div>
    <chat :chats = "chatsTool" @submit = "submit" />
  </div>
</template>

<script>

import Chat from './Chat'

export default {
  name: 'HelloWorld',
  props: ['chatsTool'],
  components: { Chat },
  methods: {
    submit: function (n, email, t) {
      console.log(n)
      this.$emit('submit', n, email, t, 'chatsTool') // 對上層元件說'submit', 並傳n, email, t, 'chatsTool'給它
    }
  },
  data () {
    return {
      msg: 'RG 1/144 Gundam Exia[開箱]',
      tools: [
        {src: 'IMG_0867.JPG', name: '盒繪', des: '一如往常的RG盒繪'},
        {src: 'IMG_0868.JPG', name: '板件', des: '一共只有9片框架,以RG來說算是偏少的,其中包含一片電鍍板件'},
        {src: 'IMG_0869.JPG', name: '電鍍板件', des: '雖然說電鍍是為了增添整個模型的質感,但是在C20與C21零件上卻造成了反效果,讓這2個零件充滿滿滿的玩具感'},
        {src: 'IMG_9848.JPG', name: '說明書', des: '也是跟以往的RG風格一樣,簡潔乾淨'},
        

      ]
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
  width: 45%;
}

img.small {
}

img.big {
}
</style>
