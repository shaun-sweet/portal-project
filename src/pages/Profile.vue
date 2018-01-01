<template>
  <div>
    <h1>Profile Page</h1>
    <router-link :to="`/profile/${currentUser.uid}`">My Profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
}
</script>

<style lang="sass" scoped>
</style>
