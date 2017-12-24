<template lang="html">
  <header class="level">
    <nav class="level-left">
      <router-link to="/signup" v-if="!isAuthed" class="nav-link">Signup</router-link>
      <router-link to='login' v-if="!isAuthed" class="nav-link">Login</router-link>
      <a href="#" v-on:click="logout()" v-if="isAuthed" class="nav-link">Logout</a>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'pp-header',
  methods: {
    logout () {
      this.$auth.signOut()
    },
  },
  computed: {
    ...mapGetters([
      'isAuthed',
    ]),
  },
}
</script>

<style lang="sass" scoped>
.nav-link
  margin: 0.5em
</style>
