<template>
  <form>
    <h2>{{ formType.toUpperCase() }}</h2>
    <div v-if="errorMsg" class="notification is-danger">
      {{ errorMsg }}
    </div>
    <div class="field">
      <label class="label" for="email">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="email"
          v-bind:class="{'is-danger': emailErrorMsg}"
          type="text" id="email"
          placeholder="email"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="has-text-danger" v-if="emailErrorMsg">{{ emailErrorMsg }}</span>
      </div>
    </div>

    <div class="field">
      <label class="label" for="password">Password</label>
      <div class="control has-icons-left">
        <input
          class="input"
          v-bind:class="{'is-danger': passwordErrorMsg}"
          v-model="password"
          type="password"
          placeholder="password"
          id="password"
        >
        <span class="icon is-small is-left"><i class="fas fa-lock"></i></span>
        <span class="has-text-danger" v-if="passwordErrorMsg">{{ passwordErrorMsg }}</span>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button
          class="button is-link submit-btn"
          v-bind:class="{'is-loading': isLoading}"
          v-on:click="handleSubmit()"
        >
          Submit
        </button>
        <br />
        <button
          class="button google-auth"
          v-bind:class="{'is-loading': isLoading}"
          v-on:click="handleGoogleAuth()"
        >
          <i class="fab fa-google-plus-g google-plus-icon"></i>
          Sign&nbsp;<span v-if="formType === 'signup'">up </span><span v-else> in </span>&nbsp;with Google
        </button>
        <button
          class="button github-auth"
          v-bind:class="{'is-loading': isLoading}"
          v-on:click="handleGithubAuth()"
        >
          <i class="github-icon fab fa-github"></i>
          Sign&nbsp;<span v-if="formType === 'signup'">up</span><span v-else>in</span>&nbsp;with GitHub
        </button>
      </div>
    </div>

  </form>
</template>

<script>
import { googleAuthProvider, githubAuthProvider } from '@/firebase'
import { SAVE_CURRENT_USER } from '@/store/mutation-types'

export default {
  props: ['formType'],
  data () {
    return {
      email: '',
      password: '',
      isLoading: false,
      emailErrorMsg: '',
      passwordErrorMsg: '',
      errorMsg: '',
    }
  },
  methods: {
    handleError (err) {
      if (err.code === 'auth/email-already-in-use' || err.code === 'auth/invalid-email') {
        this.emailErrorMsg = err.message
      } else if (err.code === 'auth/weak-password') {
        this.passwordErrorMsg = err.message
      } else if (err.code === 'auth/popup-closed-by-user') {
        this.errorMsg = 'You must authenticate before continuing'
      }
    },
    resetErrors () {
      this.emailErrorMsg = ''
      this.passwordErrorMsg = ''
      this.errorMsg = ''
    },
    attemptLogin () {
      return this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((err) => {
          console.error(err.code, err.message)
          this.handleError(err)
        })
    },
    attemptSignupWithPassword () {
      return this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((err) => {
          console.error(err.code, err.message)
          this.handleError(err)
        })
    },
    handleSubmit () {
      this.resetErrors()
      this.isLoading = true
      if (this.formType === 'signup') {
        this.attemptSignupWithPassword().then(() => { this.isLoading = false })
      } else {
        this.attemptLogin().then(() => { this.isLoading = false })
      }
    },
    handleGoogleAuth () {
      // may turn this into action
      this.resetErrors()
      this.$auth.signInWithPopup(googleAuthProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          this.$store.commit(SAVE_CURRENT_USER, user)
        })
        .catch((err) => {
          console.error(err.code, err.message)
          this.handleError(err)
        })
    },
    handleGithubAuth () {
      // may turn this into action
      this.resetErrors()
      this.$auth.signInWithPopup(githubAuthProvider)
        .then((result) => {
          const user = result.user
          console.log(user)
          this.$store.commit(SAVE_CURRENT_USER, user)
        })
        .catch((err) => {
          console.error(err.code, err.message)
          this.handleError(err)
        })
    },
  },
}
</script>

<style lang="sass" scoped>
  .submit-btn
    margin-bottom: 0.3em
  .button-container
    display: flex
    flex-flow: column
  .google-auth
    background-color: #dd4b39
    color: #fff

  .github-icon, .google-plus-icon
    margin-right: 0.5em
    font-size: $auth-form-icon-size
</style>
