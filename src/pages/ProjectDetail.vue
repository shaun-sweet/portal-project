<template lang="html">
  <div class="container">
    {{project.name || 'Unknown Project'}} Page
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      id: this.$route.params.id,
    }
  },
  mounted () {
    let project = this.$store.getters.getProjectDetails(this.id)
    if (!project) {
      console.log('run fetch for ', this.id)
      this.fetchProject(this.id)
    }
  },
  computed: {
    project () {
      console.log('in computed')
      return this.$store.getters.getProjectDetails(this.id) || {}
    },
  },
  methods: {
    ...mapActions([
      'fetchProject',
    ]),
  },
}
</script>

<style lang="sass" scoped>
.container
  flex-wrap: wrap
</style>
