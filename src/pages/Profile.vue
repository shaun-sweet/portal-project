<template>
  <div>
    <h1>Profile Page</h1>
    <router-link :to="'/profile/' + $auth.currentUser.uid ">My Profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
</style>
