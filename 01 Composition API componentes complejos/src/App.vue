<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Courses />
</template>

<script>
import Courses from './components/Courses/index.vue'

export default {
  name: 'App',
  components: {
    Courses
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
