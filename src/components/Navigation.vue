<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      logo here!
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to='/projects' class="navbar-item">Projects</router-link>
        <router-link to='/messages' class="navbar-item">Messages</router-link>
        <router-link to='/profile' class="navbar-item">Profile</router-link>
      </div>
      <div class="navbar-end">
        <router-link to="/signup" v-if="!isAuthed" class="navbar-item">Signup</router-link>
        <router-link to='login' v-if="!isAuthed" class="navbar-item">Login</router-link>
        <a href="#" v-on:click="logout()" v-if="isAuthed" class="navbar-item">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'pp-nav',
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
nav
  margin-top: 0.5em
</style>
