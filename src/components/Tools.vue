<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui segment container">
      <p>其實我個人對鋼彈的認知只有限於U.C宇宙(一年戰爭.逆襲的夏亞.星塵回憶與機動戰士鋼彈UC之類的作品)跟鐵血孤兒而已,所以,我對00這個系列是完全陌生的,會想製作這組模型也只是想要接觸其他類型的鋼彈而已,但是,這組RG能天使意外的讓我對00系列產生了感情,同時也開出了一個填不滿的大坑............</p>
    </div>
    <div class="ui grid container">
      <div class="sixteen wide column" v-for = "t in tools" v-bind:key = "t.src">
        <div class="content">
          <div>
            <img class="huge ui image" :src="'/static/' + t.src">
          </div>
          <div class="ui header">{{ t.name }}</div>
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
        {src: 'IMG_0867.JPG', name: '盒繪', des: '一張大臉加上本體,一如往常的RG盒繪,印刷技術也棒的無話可說。'},
        {src: 'IMG_0868.JPG', name: '板件', des: '一共只有9片框架,藍色與白色的成型色本身就很好看了,而且在這兩種顏色上還有做個別的深淺分色處裡,讓模型顯得更有層次感。'},
        {src: 'IMG_0869.JPG', name: '電鍍板件', des: '雖然說電鍍是為了增添整個模型的質感,但是在C20與C21零件上卻造成了反效果,讓這2個零件充滿滿滿的玩具感,所以之後一定會洗掉從噴。'},
        {src: 'IMG_9848.JPG', name: '說明書', des: '也是跟以往的RG風格一樣,簡潔乾淨。'}
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
