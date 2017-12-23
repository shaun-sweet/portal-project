<template>
  <div class="content">
    <AuthForm :formType='formType'/>
    <p>Need an account? <router-link to="/signup">Go to Signup</router-link></p>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {
  data () {
    return {
      formType: 'login',
    }
  },
  components: {
    AuthForm,
  },
}
</script>

<style lang="sass" scoped>
</style>
