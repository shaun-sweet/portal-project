<template>
  <div class="content">
    <p>
    this be a signup page
    </p>
    <SignupForm/>
    <p>Already have an account? <router-link to="/login">Go to Login</router-link></p>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm'
export default {
  components: {
    SignupForm,
  },
}
</script>

<style lang="sass" scoped>
</style>
