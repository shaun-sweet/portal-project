<template lang="html">
  <!-- <div class="container columns"> -->
    <transition-group tag="div" class="container columns" name='fade' mode="out-in">
      <ProjectCard
      class="project-card column is-one-third-tablet is-one-quarter-desktop"
      v-for="(project, id) in projects"
      :project="project"
      :id="id"
      :key="id"
      />
    </transition-group>
  <!-- </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProjectCard from '@/components/ProjectCard'

export default {
  components: {
    ProjectCard,
  },
  mounted () {
    this.getProjectList()
  },
  computed: {
    ...mapGetters({
      projects: 'getFilteredProjectList',
    }),
  },
  methods: {
    ...mapActions([
      'getProjectList',
    ]),
  },
}
</script>

<style lang="sass" scoped>
.project-card

.container
  flex-wrap: wrap

.fade-enter
  opacity: 0
  transform: scale(0)

.fade-enter-active
  transition: all .2s ease-in-out

.fade-leave
  opacity: 1
  transform: scale(1)

.fade-leave-active
  opacity: 0
  transform: scale(0)
  transition: all .2s ease-in-out
</style>
