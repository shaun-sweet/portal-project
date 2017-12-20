<template lang="html">
  <header class="level">
    <div class="level-left">
      this be the header
      <router-link to="/signup">Signup</router-link>
      <router-link to='login'>Login</router-link>
      <a href="#" v-on:click="logout()">Logout</a>
    </div>
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

<style lang="sass">
</style>
