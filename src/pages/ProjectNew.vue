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
      <!-- <div class="field">
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
      </div> -->
      <div class="field">
        <div class="control">
          <multiselect
            v-model="selectedSkills"
            :options="skillOptions"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :hide-selected="true"
            :preserve-search="true"
            placeholder="Pick some"
            label="name"
            track-by="name"
          >
            <template slot="tag" slot-scope="props">
              <!-- style the tags here -->
              <span class="custom__tag">
                <span>{{ props.option.name }}</span>
                <span
                  class="custom__remove" @click="props.remove(props.option.name)">❌
                </span>
              </span>
          </template>
          </multiselect>
        </div>
      </div>

      <button type="submit" class="button is-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  data () {
    return {
      name: '',
      description: '',
      url: '',
      // skillsRequired: {},
      selectedSkills: null,
      skillOptions: [
        // test data switch to computed model once skills defined
        { name: 'Front End' },
        { name: 'Back End' },
        { name: 'Graphic Artist' },
      ],
    }
  },
  components: { Multiselect },
  computed: {
    // get the skills list from firestore
  },
  methods: {
    submitForm () {
      // validate and submit form to firestore via action...
      // const skills = Object.keys(this.skillsRequired)
      //   .filter((skill) => this.skillsRequired[skill])
      const skills = this.selectedSkills.map((skill) => skill.name)

      this.$firestore.collection('projects').add({
        name: this.name,
        description: this.description,
        createdAt: Date.now(),
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
