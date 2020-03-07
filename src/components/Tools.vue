<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for = "t in tools" v-bind:key = "t.src">
        <img :src="'/static/' + t.src"/>
        <h3>{{ t.name }}</h3>
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
        {src: 'IMG_9836.JPG', name: '常用工具'},
        {src: 'IMG_9840.JPG', name: '模型膠'},
        {src: 'IMG_9843.JPG', name: '斜口鉗'}
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
