<template lang="html">
  <div class="app-wrapper">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/containers/Header'
import Footer from '@/containers/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="sass">
.app-wrapper
  display: flex
  flex-flow: column
  height: 100%

#main
  display: flex
  flex: 1
  justify-content: center
</style>