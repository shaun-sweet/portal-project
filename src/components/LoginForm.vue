<template>
  <div>

    <div class="field">
      <label class="label" for="username">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" id="username" placeholder="username">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>

    <div class="field">
      <label class="label" for="password">Password</label>
      <div class="control">
        <input class="input" type="password" placeholder="password" id="password">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style lang="sass" scoped>
</style>