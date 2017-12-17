<template lang="html">
  <main>
    <p></p>
    <home-c test='WELCOME'>
      <button class="button">Click to disable</button>
    </home-c>
    <button>Testing this again yay it works that is great</button>
  </main>
</template>

<script>
import HomeC from '@/components/Home.vue'
import { db } from '@/firebase'

export default {
  name: 'app',
  components: {
    HomeC,
  },
  mounted () {
    db
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
}
</script>