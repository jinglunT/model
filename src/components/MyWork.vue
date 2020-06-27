<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
      <p>這是我第一次嘗試將模型整個改色的作品,這件作品的動機是在看完星際大戰系列電影後才出現的。當時我發現,劇中有很多過目即忘的外星人與賞金獵人上的裝甲其實都是用帝國士兵的裝甲改造而成的。於是,我便有了"製作屬於自己的星戰角色"的這個念頭。</p>
    </div>
    <div class="ui grid container">
      <div class="sixteen wide column" v-for = "t in tools" v-bind:key = "t.src">
        <div class="content">
          <div>
            <img class="huge ui image" v-if = "t.src" :src="'/static/' + t.src">
          </div>
          <div class="ui header">{{ t.name }}</div>
          <div class="description" v-if="t.des">{{ t.des }}</div>
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
      msg: '1/12 Shore Trooper[改造]',
      tools: [
      {src: 'unnamed (11).JPG', name: '盒繪', des: '一張大臉加上本體,一如往常的RG盒繪,印刷技術也棒的無話可說。'}




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
