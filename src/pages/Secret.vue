<template lang="html">
  <div>
    <h1>This is only accessable if authenticated</h1>
  </div>
</template>

<script>
export default {
  props: [ 'test' ],
}
</script>

<style lang="sass" scoped>
.test
  border: 1px solid
#ok
  color: red
</style>
