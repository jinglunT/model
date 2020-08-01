<template>
  <div class="hello">
    <vue-headful title="常用工具"/>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for = "t in teachs" v-bind:key = "t.src">
        <h3>{{ t.name }}:</h3>
        <img :src="'./static/' + t.src"/>
        <br>
        <p v-if="t.des">{{ t.des }}</p>
      </li>
    </ul>
    <chat :chats = "chatsTeach" @submit = "submit" />
  </div>
</template>

<script>

import Chat from './Chat'

export default {
  name: 'Teach',
  props: ['chatsTeach'],
  components: { Chat },
  methods: {
    submit: function (n, email, t) {
      console.log(n)
      this.$emit('submit', n, email, t, 'chatsTeach') // 對上層元件說'submit', 並傳n, email, t, 'chatsTool'給它
    }
  },
  data () {
    return {
      msg: '常用模型工具',
      teachs: [
        {src: 'IMG_9836.JPG', name: '常用工具', des: '我的常用工具'},
        {src: 'IMG_9840.JPG', name: '模型膠', des: '是一種高濃度的溶劑,可藉由溶解塑膠來黏合模型,圖中分別為"高流動型"(綠蓋)以及"一般型"(白蓋),高流動型的濃度較低,揮發速度較快,一般型則相反'},
        {src: 'IMG_9843.JPG', name: '斜口鉗', des: '再把零件從框架上剪下來時一定會用到,斜口鉗同時也可以對模型做初步的修剪'},
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
