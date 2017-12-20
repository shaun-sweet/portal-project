<template>
  <form>

    <div class="field">
      <label class="label" for="email">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="email"
          type="text" id="email"
          placeholder="email"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label" for="password">Password</label>
      <div class="control">
        <input
          class="input"
          v-model="password"
          type="password"
          placeholder="password"
          id="password"
        >
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button
          class="button is-link"
          v-bind:class="{'is-loading': isLoading}"
          v-on:click="handleSubmit()"
        >
          Submit
        </button>
        <button
          class="button google-auth"
          v-bind:class="{'is-loading': isLoading}"
          v-on:click="handleGoogleAuth()"
        >
          Sign in with Google
        </button>
        <button
          class="button github-auth"
          v-bind:class="{'is-loading': isLoading}"
          v-on:click="handleGithubAuth()"
        >
          Sign in with GitHub
        </button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>

  </form>
</template>

<script>
import { googleAuthProvider, githubAuthProvider } from '@/firebase'

export default {
  props: ['formType'],
  data () {
    return {
      email: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    attemptLogin () {
      return this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    attemptSignupWithPassword () {
      return this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    handleSubmit () {
      this.isLoading = true
      if (this.formType === 'signup') {
        this.attemptSignupWithPassword().then(() => { this.isLoading = false })
      } else {
        this.attemptLogin().then(() => { this.isLoading = false })
      }
    },
    handleGoogleAuth () {
      // may turn this into action
      this.$auth.signInWithPopup(googleAuthProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          this.$store.commit('SAVE_CURRENT_USER', user)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    handleGithubAuth () {
      // may turn this into action
      this.$auth.signInWithPopup(githubAuthProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          this.$store.commit('SAVE_CURRENT_USER', user)
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>

<style lang="sass" scoped>
  .google-auth
    background-color: #dd4b39
    color: #fff
  .github-auth
    background-color: #686868
    color: #fff
</style>
