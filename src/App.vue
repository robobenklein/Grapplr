<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Grapplr'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
html, body {
  margin: 0;
  height: 100%;
}
</style>
