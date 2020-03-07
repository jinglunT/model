<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for = "t in tools">
        <img :src="'/static/' + t"> 
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
      tools: ['IMG_9836.JPG', 'IMG_9840.JPG', 'IMG_9843.JPG']
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
