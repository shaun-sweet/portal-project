<template lang="html">
  <div class="container columns">
    <ProjectCard
      class="project-card column is-one-third-tablet is-one-quarter-desktop"
      v-for="(project, id) in projects"
      :project="project"
      :key="id"
    />
  </div>
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
      projects: 'getProjectList',
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
</style>
