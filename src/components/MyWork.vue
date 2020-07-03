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
      msg: '1/12 Shore Trooper[改造.改色]',
      tools: [
      {src: 'unnamed (11).jpg', name: '模型本體', des: '這次使用的模型是1/12的Shore Trooper ( 中文直翻該是.....海岸士兵? ) 。'},
      {src: 'unnamed (7).jpg', name: '改造過後', des: '顏色基本上我是整個重新噴過了,身上還加上了一些布料增加真實感。橘色左手是模仿電影《成人世界》中的機器人CHAPPIE。'},
      {src: 'unnamed (5).jpg', name: '頭部', des: '頭部塗裝非常簡單,但是卻也非常耗時;先將頭部透明件取出,之後噴上一層深灰色 ( TAMIYA色號 : XF-24 ) ,等深灰色完全乾燥後,最煩人的部分就來了,畫面中所看到的銀色全部都是一層一層乾掃出來的,而乾掃這個步驟必須要等一層乾了才能進行下一層,所以塗完整顆頭至少會花費掉3~4的時間。'},
      {src: 'unnamed (8).jpg', name: '披肩', des: '披肩的不規則無法直接用剪刀剪出來,用筆刀又不好控制,所以我建議用火燒 ( 用火燒的話一定要用棉質布料,千萬別用人工合成的布來燒 ) 。'}
      


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
