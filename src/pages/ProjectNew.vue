<template>
  <div>
    <h1>List a project</h1>
    <form @submit.prevent="submitForm">

      <div class="field">
        <label class="label" for="projectName"></label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            v-model="name"
            type="text"
            id="projectName"
            placeholder="Project Name"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label" for="projectDescription"></label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            v-model="description"
            type="text"
            id="projectDescription"
            placeholder="Project Description"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label" for="projectUrl"></label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            v-model="url"
            type="text"
            id="projectUrl"
            placeholder="Project URL"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
      <hr />

      <h6>Skills Required</h6>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="skillsRequired.frontEnd">
            Front End
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="skillsRequired.backEnd">
            Back End
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="skillsRequired.graphicArtist">
            Graphic Artist
          </label>
        </div>
      </div>
      <button type="submit" class="button is-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      url: '',
      skillsRequired: {},
    }
  },
  computed: {
    // get the skills list from firestore
  },
  methods: {
    submitForm () {
      // validate and submit form to firestore via action...
      const skills = Object.keys(this.skillsRequired)
        .filter((skill) => this.skillsRequired[skill])

      this.$firestore.collection('projects').add({
        name: this.name,
        description: this.description,
        url: this.url,
        skillsRequired: skills,
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },

  },
}
</script>

<style lang="sass" scoped>
</style>
