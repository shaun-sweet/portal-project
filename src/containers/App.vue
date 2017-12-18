<template lang="html">
  <main>
    <p></p>
    <button class="button" @click="login()">Click to disable</button>
    <button>Testing</button>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$firestore
      .collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="sass">
.sup
  color: red
</style>