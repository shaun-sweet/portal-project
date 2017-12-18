<template>
  <form>

    <div class="field">
      <label class="label" for="username">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input 
          class="input" 
          v-model="username"
          v-bind:class="{'is-success': isUsernameAvailable}" 
          v-on:blur="setAvail()"
          type="text" id="username" 
          placeholder="username"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span v-if="isUsernameAvailable" class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p v-show="isUsernameAvailable" class="help is-success">This username is available</p>
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
          v-on:click="attemptLogin()"
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
      username: '',
      password: '',
      isUsernameAvailable: false,
      isLoading: false,
    }
  },
  methods: {
    setAvail () {
      this.isUsernameAvailable = true
    },
    attemptLogin () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
  },
}
</script>

<style lang="sass" scoped>
</style>