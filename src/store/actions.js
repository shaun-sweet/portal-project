import { firestore } from '@/firebase'
import {
  SET_PROJECT_LIST,
  ADD_PROJECT_TO_STATE,
  SET_SKILL_LIST,
  ADD_SKILL_TO_STATE
} from '@/store/mutation-types'
export default {
  getProjectList ({ commit }) {
    firestore.collection('projects').get()
      .then((snap) => {
        let projects = {}
        snap.docs.forEach((project) => {
          projects[project.id] = project.data()
        })
        commit(SET_PROJECT_LIST, projects)
      })
  },
  fetchProject ({ commit }, id) {
    let project = {}
    firestore.collection('projects').doc(id).get()
      .then((snap) => {
        project[id] = snap.data()

        commit(ADD_PROJECT_TO_STATE, project)
      })
  },
  getSkills ({ commit }) {
    firestore.collection('skills').get()
      .then((snap) => {
        let skills = []
        snap.docs.forEach((skill) => {
          skills.push(skill.data())
        })
        commit(SET_SKILL_LIST, skills)
      })
  },
  addSkill ({ commit }, skill) {
    commit(ADD_SKILL_TO_STATE, skill)
  },
}
