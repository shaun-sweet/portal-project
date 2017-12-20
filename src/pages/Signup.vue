<template>
  <div class="content">
    <p>
    this be a signup page
    </p>
    <AuthForm :formType="formType"/>
    <p>Already have an account? <router-link to="/login">Go to Login</router-link></p>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {
  data () {
    return {
      formType: 'signup',
    }
  },
  components: {
    AuthForm,
  },
}
</script>

<style lang="sass" scoped>
</style>
