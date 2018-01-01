<template>
  <div>
    <h1>Projects Page</h1>
    <ul>
      <li>
        <router-link tag='button' class="button is-info" :to="{ name: 'ProjectIndex'}">View Projects</router-link>
      </li>
      <li>
        <router-link v-if='isAuthed' tag='button' class="button is-primary" :to="{ name: 'ProjectNew'}">Create Project</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isAuthed',
    ]),
  },

}
</script>

<style lang="sass" scoped>
</style>
