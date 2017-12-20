<template>
  <form>

    <div class="field">
      <label class="label" for="email">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="email"
          v-bind:class="{'is-success': isEmailAvailable}"
          v-on:blur="setAvail()"
          type="text" id="email"
          placeholder="email"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span v-if="isEmailAvailable" class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p v-show="isEmailAvailable" class="help is-success">This email is available</p>
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
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>

  </form>
</template>

<script>
export default {
  props: ['formType'],
  data () {
    return {
      email: '',
      password: '',
      isEmailAvailable: false,
      isLoading: false,
    }
  },
  methods: {
    setAvail () {
      this.isEmailAvailable = true
    },
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
  },
}
</script>

<style lang="sass" scoped>
</style>
