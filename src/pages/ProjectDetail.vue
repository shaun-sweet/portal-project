<template lang="html">
  <div class="container">
    <h2 class="title is-2">
      {{project.name || 'Unknown Project'}} Page
    </h2>
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
