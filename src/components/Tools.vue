<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for = "t in tools" v-bind:key = "t.src">
        <h3>{{ t.name }}:</h3>
        <img :src="'/static/' + t.src"/>
        <p v-if="t.des">{{ t.des }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '常用模型工具',
      tools: [
        {src: 'IMG_9836.JPG', name: '常用工具', des: '我的常用工具'},
        {src: 'IMG_9840.JPG', name: '模型膠', des: '是一種高濃度的溶劑,可藉由溶解塑膠來黏合模型'},
        {src: 'IMG_9843.JPG', name: '斜口鉗'},
        {src: 'IMG_9848.JPG', name: '筆刀'},
        {src: 'IMG_9851.JPG', name: '手鑽'},
        {src: 'IMG_9856.JPG', name: '鑷子'},
        {src: 'IMG_9857.JPG', name: '噴筆'},
        {src: 'IMG_9859.JPG', name: '防毒面具'}

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 45%;
}
</style>
