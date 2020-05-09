<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="ui cards">
      <div class="card" v-for = "t in tools" v-bind:key = "t.src">
        <div class="content">
          <img class="right floated mini ui image" :src="'/static/' + t.src">
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
        {src: 'IMG_9836.JPG', name: '盒繪', des: '一如往常的RG盒繪'},
        {src: 'IMG_9840.JPG', name: '板件', des: '一共只有9片框架,以RG來說算是偏少的,其中包含一片電鍍板件'},
        {src: 'IMG_9843.JPG', name: '電鍍板件', des: '雖然說電鍍是為了增添整個模型的質感,但是在C20'},
        {src: 'IMG_9848.JPG', name: '筆刀', des: '修剪水口(湯口)必要的工具,但是因為操作起來較為耗時,所以近年來以普遍被"神之手斜口鉗"取代'},
        {src: 'IMG_9851.JPG', name: '手鑽'},
        {src: 'IMG_9856.JPG', name: '鑷子'},
        {src: 'IMG_9857.JPG', name: '噴筆', des: '不用多說,噴漆時一定會用到它,還有,因為環保的關係,非常不建議各位使用噴罐'},
        {src: 'IMG_9859.JPG', name: '防毒面具', des: '噴漆時請務必戴上,因為,抽風機並沒有辦法完全避免我們吸入有害物質,還有,不要以為油漆散發出的氣味沒什麼(油性水性都一樣),長期吸入這些東西真的會對人體造成非常大的損害'}

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
