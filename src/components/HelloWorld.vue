<template>
  <div class="hello">
    <vue-headful title="首頁"/>
    <img class = "fat-only" src="/static/首頁背景.JPG"/>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '模型與我'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
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
