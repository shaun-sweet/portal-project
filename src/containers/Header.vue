<template lang="html">
  <header class="container">
    <Navigation />
  </header>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'pp-header',
  components: {
    Navigation,
  },
}
</script>

<style lang="sass" scoped>
.navbar-item
  margin: 0.5em
</style>
