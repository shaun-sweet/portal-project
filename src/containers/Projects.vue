<template>
  <div>
    <h1>Projects Page</h1>
    <div class="project-nav">
      <router-link 
        tag='button' 
        class="button is-info" 
        :to="{ name: 'ProjectIndex'}"
      >
        View Projects
      </router-link>
      <router-link 
        v-if='isAuthed' 
        tag='button' 
        class="button is-primary new-project-link" 
        :to="{ name: 'ProjectNew'}"
      >
        List Project
      </router-link>
    </div>
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
.project-nav
  display: flex
  .new-project-link
    margin-left: auto
</style>
