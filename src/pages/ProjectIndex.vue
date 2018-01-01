<template lang="html">
  <div>
    <ul v-for="(project, id) in projects">
      <hr>
      <li>name: {{project.name}}</li>
      <li>description: {{project.description}}</li>
      <li>url: {{project.url}}</li>
      <li>id: {{id}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
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
</style>
