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
        {src: 'unnamed (12).jpg', name: '模型本體', des: '身形的比例抓得很好看,但是拘束器(外甲)底下機械感有點太重,不太符合EVA原始設定的"生物感"。'},
        {src: 'unnamed (7).jpg', name: '頭部透明件', des: '頭部的綠色透明件是直接裝在黃色零件上面的,透過透明綠看到的黃色感覺非常廉價,所以建議在會被透明綠蓋住的白色部分上一層銀色,效果會好很多'},
        {src: 'unnamed (7).jpg', name: '可動性', des: '這款套件提供了兩種型態的零號機來做零件上的替換,分別是"零號機"跟"零號機改",兩者的差異就只有在胸口跟肩膀而已。"零號機改"的肩部可動性會因為被煙囪狀的拘束器干涉而變得沒那麼優異。但是"修改前"的零號機就不一樣了,少了肩部拘束器的干涉,零號機可以做出大部分人體做的出來的動作 ( 距離JoJo立還有一段差距,但還是擺的出幾個的 ) ,此外,'}
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
