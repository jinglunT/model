<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<p>先從我開始會握東西的時候開始講,爸媽開始讓我接觸樂高,那時候我只會把樂高抓起來亂咬跟亂丟. 大概到了三.四歲
我開始會學著哥哥開始做一些機器人.交通工具還有槍. 沒多久後,我便喜歡上用我當時覺得與樂高人偶相配的比例做出
一些房間.飛船之類的小東西拿來玩,這就是讓我現在喜歡製作場景的最大原因之一.</p>
  <p>我跟我哥從小就是個星戰迷 (因為爸爸也是) ,所以自然不會漏掉任何一部星際大戰系列的電影,還記得當時在看[帝國大反擊]
時,爸告訴我們電影一開始在雪地中戰鬥的帥氣畫面是用小比例的模型所拍攝出來的時候,便開始有了想要製作模型的欲望
(雖然那時候的一大興趣就是把老爸堆在櫃子裡的爛尾模型拿出來看,但是我一直到看了[帝國大反擊]後才有想 製作模型)
 但是,這個念頭一直留到五年級的某次在瓦城吃飯時,才和哥哥一起告訴爸媽. 當時爸媽問我們要不要從日本幫我們代什麼
東西回來,我跟我哥馬上回答 : 帶星際大戰的模型回來. 我還記得我一直強調要組裝模型,不要完成品, 因為,才小五的我以為
完成品不是模型. </p>
    <div class="ui grid container">
      
      <div class="eight wide column" v-for = "t in tools" v-bind:key = "t.src">
        <div class="content">
          <img class="left floated huge ui image" :src="'/static/' + t.src">
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
