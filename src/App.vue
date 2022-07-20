<template>
  <router-link to="/"> Home </router-link><br/>
  <router-link to="/profile"> User Profile </router-link><br/>
  <router-link to="/contact"> Contacts </router-link><br/>
  <router-link to="/admin"> Admin Panel </router-link><br/>
  <router-link to="/profile/anil"> Anial Profile </router-link>
  <router-link to="/profile/peter"> Peter atom </router-link>
  <router-link to="/profile.rima"> Rima Tarar </router-link>

  <router-view></router-view>
</template>


<script>

export default {
  name: 'App',
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
