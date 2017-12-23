<template>
  <div class="content">
    <p>
    this be a signup page!
    </p>
    <AuthForm :formType="formType"/>
    <p v-if="!isAuthed">Already have an account? <router-link to="/login">Go to Login</router-link></p>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      formType: 'signup',
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
