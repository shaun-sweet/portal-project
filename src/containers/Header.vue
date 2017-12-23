<template lang="html">
  <header class="level">
    <nav class="level-left">
      <router-link to="/signup" class="nav-link">Signup</router-link>
      <router-link to='login' class="nav-link">Login</router-link>
      <a href="#" v-on:click="logout()" class="nav-link">Logout</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'pp-header',
  methods: {
    logout () {
      this.$auth.signOut()
    },
  },
}
</script>

<style lang="sass" scoped>
.nav-link
  margin: 0.5em
</style>
