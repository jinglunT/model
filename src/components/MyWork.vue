<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
      <p>這是我第一次嘗試將模型整個改色的作品,這件作品的動機是在看完星際大戰系列電影後才出現的。當時我發現,劇中有很多過目即忘的外星人與賞金獵人上的裝甲其實都是用帝國士兵的裝甲改造而成的。於是,我便有了"製作屬於自己的星戰角色"的這個念頭</p>
      <chat :chats = "chatsWork" @submit = "submit" />
    </div>
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
      msg: '我的作品'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 45%;
}

img.small {
}

img.big {
}
</style>
