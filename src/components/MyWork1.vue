<template>
  <div class="hello">
    <vue-headful title="RG EVA 00 新世紀福音戰士 零號機[素組]"/>
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
       <p>今年3月萬代發售RG版本的初號機後,馬上又在6月推出了同規格的零號機。雖然這次的零號機幾乎可以算是初號機的異色版(本體除了頭.胸.肩以外的零件完全與初號機相同),但是DX版附上的陽電子炮也算是夠有誠意了。</p>
    </div>
    <div class="ui grid container">
      <div class="sixteen wide column" v-for = "t in tools" v-bind:key = "t.src">
        <div class="content">
          <div>
            <img class="huge ui image" v-if = "t.src" :src="'./static/' + t.src">
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
      msg: 'RG EVA 00 新世紀福音戰士 零號機[素組]',
      tools: [
        {src: 'unnamed (11).jpg', name: '模型本體', des: '身形的比例抓得很好看,但是拘束器(外甲)底下機械感有點太重,不太符合EVA的"生物感"。'},
        {src: 'unnamed (7).jpg', name: '改造過後', des: '顏色基本上我是整個重新噴過了,身上還加上了一些布料增加真實感。橘色左手是模仿電影《成人世界》中的機器人CHAPPIE。'},
        {src: 'unnamed (5).jpg', name: '頭盔', des: '頭盔的塗裝非常簡單,但是卻也非常耗時;先將頭部透明件取出,之後噴上一層深灰色 ( TAMIYA色號 : XF-24 ) ,等深灰色完全乾燥後,最煩人的部分就來了,畫面中所看到的銀色全部都是一層一層乾掃出來的,而乾掃這個步驟必須要等一層乾了才能進行下一層,所以塗完整顆頭至少會花費掉3~4的時間。'},
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

.ui.image {
  margin: 0 auto;
}
</style>
