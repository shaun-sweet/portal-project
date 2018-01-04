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
          <textarea
            class="textarea"
            v-model="description"
            rows="6"
            type="text"
            id="projectDescription"
            placeholder="Project Description"
          ></textarea>
          <!-- <span class="icon is-small is-left">
            <i class="fas fa-quote-left"></i>
          </span> -->
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
            <i class="fas fa-link"></i>
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
              <span class="custom__tag tag is-success">
                <span>{{ props.option.name }}</span>
                <span
                  class="custom__remove" @click="props.remove(props.option.name)">
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </span>
              </span>
          </template>
          </multiselect>
        </div>
      </div>
      <div class="field">
        <label class="label" for="addSkill"></label>
        <div class="control skill-group">
          <input
            class="input"
            v-model="addedSkill"
            type="text"
            id="addSkill"
            placeholder="Add a skill to the list"
          >
          <input
          class="button is-primary"
          type="button"
          value="Submit Skill"
          :disabled="!validSkill()"
          @click="handleSkillSubmit"
          >
        </div>
        </div>

      <button type="submit" class="button is-primary">Submit Project</button>
    </form>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      addedSkill: '',
      name: '',
      description: '',
      url: '',
      selectedSkills: null,
    }
  },
  components: { Multiselect },
  computed: {
    // get the skills list from firestore
    ...mapGetters({
      skillOptions: 'fetchSkills',
      currentUser: 'currentUser',
    }),
  },
  mounted () {
    this.getSkills()
  },
  methods: {
    ...mapActions([
      'getSkills',
      'addSkill',
    ]),
    submitForm () {
      // validate and submit form to firestore via action...
      const skills = this.selectedSkills.map((skill) => skill.name)

      this.$firestore.collection('projects').add({
        name: this.name,
        description: this.description,
        createdAt: Date.now(),
        url: this.url,
        owner: this.currentUser.uid,
        skillsRequired: skills,
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    validSkill () {
      if (this.addedSkill.trim() === '') {
        return false
      }
      const submittedSkill = this.addedSkill.trim().toUpperCase()
      const matchedSkills = this.skillOptions.filter((skill) => skill.name.toUpperCase() === submittedSkill)
      return matchedSkills.length === 0
    },
    handleSkillSubmit () {
      this.$firestore.collection('skills').doc(this.addedSkill.toUpperCase()).set({
        name: this.addedSkill,
      })
        .then(() => {
          console.log('Skill written')
          this.addSkill({ name: this.addedSkill })
          this.addedSkill = ''
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },

  },
}
</script>

<style lang="sass" scoped>
.multiselect--active
  z-index: 9999
.custom__remove
  margin-left: .5rem
  cursor: pointer
.custom__tag
  margin-right: 5px
.skill-group
  display: flex
  &.input
    flex: 3
  &.button
    flex: 1
</style>
