<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Login />
  <CourseDetail />
</template>

<script>
import Login from './components/Login.vue'
import CourseDetail from './components/CourseDetail.vue'

export default {
  name: 'App',
  components: {
    Login,
    CourseDetail
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 16px;
}
</style>
