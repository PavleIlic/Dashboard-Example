<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/home" class="home">Go to project</router-link>
      <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-left: 350px;
  margin-top: 350px;
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
.home {
  margin-left: 550px;
  margin-top: 250px
}

</style>
