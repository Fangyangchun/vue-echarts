<template>
  <div id="app">
    <div class='content'>
      <div class='nav'>
        <router-link to="/echarts">echarts 地图制作</router-link>
        <br>
        <router-link to="/settings/map">chinaMap</router-link>
        <br>
        <router-link to="/settings/profile">profile</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0 0 0 1px;
  width: calc(100% - 1px);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex; 
}
.content {
  width: calc(100% - 6px);
  border: 1px solid green;
  display: flex;
  height: 800px;
}
.nav {
  width: 200px;
  border-right: 1px solid green;
}
</style>
