<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      logo here!
      <button
        class="button navbar-burger"
        v-bind:class="{ 'is-active': mobileMenu.active }"
        @click="toggleMobileMenu()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div
      class="navbar-menu"
      v-bind:class="{ 'is-active': mobileMenu.active }"
    >
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
  data () {
    return {
      mobileMenu: {
        active: false,
      },
    }
  },
  methods: {
    logout () {
      this.$auth.signOut()
    },
    toggleMobileMenu () {
      this.mobileMenu.active = !this.mobileMenu.active
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
</style>
