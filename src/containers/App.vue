<template lang="html">
  <div class="app-wrapper">
    <div class="inner-app-wrapper">
      <Header />
      <main class="container">
        <transition name='slide' mode="out-in">
          <router-view />
        </transition>
      </main>
    </div>
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

<style lang="sass" scoped>
.app-wrapper
  display: flex
  flex-flow: column
  height: 100%

.inner-app-wrapper
  flex: 1
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
