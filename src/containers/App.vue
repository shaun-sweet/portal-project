<template lang="html">
  <div class="app-wrapper">
    <Header />
    <main id="main">
      <transition name='slide' mode="out-in">
        <router-view />
      </transition>
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

.slide-enter
  opacity: 0
  transform: translateX(-30px)

.slide-enter-active
  transition: all .5s ease-in-out

.slide-leave
  opacity: 1
  transform: translateX(0)

.slide-leave-active
  opacity: 0
  transform: translateX(30px)
  transition: all .5s ease-in-out

</style>
