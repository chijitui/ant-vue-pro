<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tigger {
  font-size: 18px!important;
  line-height: 64px!important;
  padding: 0 24px!important;
  cursor: pointer!important;
  transition: color .3s!important;
  &:hover {
    color: #1890ff!important;
  }
}
</style>
