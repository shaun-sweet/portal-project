<template lang='pug'>
  div
    p this is a test {{ test }}
</template>

<script>
  export default {
    props: [
      'test'
    ]
  }
</script>