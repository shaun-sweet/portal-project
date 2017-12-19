<template>
  <div class="content">
    <p>
    this be a login page
    </p>
    <LoginForm/>
    <p>Need an account? <router-link to="/signup">Go to Signup</router-link></p>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  components: {
    LoginForm,
  },
}
</script>

<style lang="sass" scoped>
</style>
