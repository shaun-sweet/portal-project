<template lang='pug'>
  HomeC(test='hello :)')
</template>

<script>
import HomeC from '@/components/Home'
import { db } from '@/firebase'
export default {
  name: 'app',
  components: {
    HomeC
  },
  mounted () {
    db
      .collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  }
}
</script>
