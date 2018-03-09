<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <new-test></new-test>
    <NewTest/>
    <div class='right'>
      <router-view class="view one"/>
      <router-view class="view two" name="helper"/>
    </div>
  </div>
</template>

<script>
import NewTest from './NewTest'
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your first Page'
    }
  },
  components: {
    NewTest
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
.right {
  width: 800px;
}
</style>
