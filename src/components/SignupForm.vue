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
          v-on:click="attemptSignupWithPassword()"
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
  data () {
    return {
      email: '',
      password: '',
      isEmailAvailable: false,
      isLoading: false,
      uid: '',
    }
  },
  methods: {
    setAvail () {
      this.isEmailAvailable = true
    },
    attemptSignupWithPassword () {
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          this.uid = user.uid
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="sass" scoped>
</style>
