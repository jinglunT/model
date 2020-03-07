<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-for = "t in tools" :src="t"> 
     

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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  max-width: 600px;
  margin: 16px auto;
  text-align: left;
  line-height: 1.6;
}
</style>
