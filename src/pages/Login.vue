<template>
  <div class="content">
    <AuthForm :formType='formType'/>
    <p v-if="!isAuthed">Need an account? <router-link to="/signup">Go to Signup</router-link></p>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      formType: 'login',
    }
  },
  components: {
    AuthForm,
  },
  computed: {
    ...mapGetters([
      'isAuthed',
    ]),
  },
}
</script>

<style lang="sass" scoped>
</style>
