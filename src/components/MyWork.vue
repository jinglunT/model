<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui container">
      <p>先從我開始會握東西的時候開始講,爸媽開始讓我接觸樂高,那時候我只會把樂高抓起來亂咬跟亂丟. 大概到了三.四歲
  我開始會學著哥哥開始做一些機器人.交通工具還有槍. 沒多久後,我便喜歡上用我當時覺得與樂高人偶相配的比例做出
  一些房間.飛船之類的小東西拿來玩,這就是讓我現在喜歡製作場景的最大原因之一.</p>
    <p>我跟我哥從小就是個星戰迷 (因為爸爸也是) ,所以自然不會漏掉任何一部星際大戰系列的電影,還記得當時在看[帝國大反擊]
  時,爸告訴我們電影一開始在雪地中戰鬥的帥氣畫面是用小比例的模型所拍攝出來的時候,便開始有了想要製作模型的欲望
  (雖然那時候的一大興趣就是把老爸堆在櫃子裡的爛尾模型拿出來看,但是我一直到看了[帝國大反擊]後才有想 製作模型)
   但是,這個念頭一直留到五年級的某次在瓦城吃飯時,才和哥哥一起告訴爸媽. 當時爸媽問我們要不要從日本幫我們代什麼
  東西回來,我跟我哥馬上回答 : 帶星際大戰的模型回來. 我還記得我一直強調要組裝模型,不要完成品, 因為,才小五的我以為
  完成品不是模型. </p>

      <p>萬代1/12的賞金獵人波巴 費特,是我做的第一組模型,當時我很開心地在兩天內就把它組完了,雖然組得很爛,但我還是非常的樂在其中. 從小五到小六之間,我都是素組(純粹組裝,不改裝不上漆)一些萬代出品的星際大戰或是鋼彈,一直到了六年級
  後期,媽媽跟告訴我不要被模型的模子給框住,做一些改造和背景. 這時候的我才開始製作模型場景.</p>
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
