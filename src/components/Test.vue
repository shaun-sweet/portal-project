<template lang="html">
  <main>



    <p></p>
    <home-c test='WELCOME'>



      <button class="button">Click to disable</button>
    </home-c>
    <button>Test</button>
    <p></p>



    <home-c test='WELCOME'>
      <button class="button">Click to disable</button>


    </home-c>
    <button>Test</button>
    <p></p>
    <home-c test='WELCOME'>
      <button class="button">Click to disable</button>
    </home-c>


    <button>Test</button>
    <p></p>
    <home-c test='WELCOME'>


      
      <button class="button">Click to disable</button>
    </home-c>
    <button>Test</button>
  </main>
</template>

<script>
export default { props: [ 'test' ] }
</script>

<style lang="sass" scoped>
</style>