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
      <div class="field" v-if="displayFilter">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            v-model="nameFilter"
            type="text"
            id="projectFilter"
            @input="filterByName(nameFilter.trim().toUpperCase())"
            placeholder="Project Name"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
      <router-link
        v-if='isAuthed'
        tag='button'
        class="button is-primary new-project-link"
        :to="{ name: 'ProjectNew'}"
      >
        List Project
      </router-link>
    </div>
    <transition name='slide' mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      nameFilter: '',
    }
  },
  computed: {
    ...mapGetters([
      'isAuthed',
    ]),
    displayFilter () {
      return this.$route.path === '/projects/'
    },
  },
  methods: {
    ...mapActions([
      'filterByName',
    ]),
  },

}
</script>

<style lang="sass" scoped>

.project-nav
  display: flex
  .new-project-link
    margin-left: auto

.slide-enter
  opacity: 0
  transform: translateX(-30px)

.slide-enter-active
  transition: all .15s ease-in-out

.slide-leave
  opacity: 1
  transform: translateX(0)

.slide-leave-active
  opacity: 0
  transform: translateX(30px)
  transition: all .15s ease-in-out
</style>
