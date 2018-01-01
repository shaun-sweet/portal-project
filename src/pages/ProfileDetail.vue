<template>
  <div>
    <h1>Profile Details Page</h1>
    <p>User Id {{$route.params.id}}</p>
    <router-link :to="`/profile/${$route.params.id}/edit`" tag="button" type="button" class="button is-primary" name="button">Edit</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
</style>
