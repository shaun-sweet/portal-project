import Vue from 'vue'
import * as types from './mutation-types'
import initialState from './initialState'

export default {

  [types.SAVE_CURRENT_USER] (state, {
    uid,
    photoURL,
    email,
    emailVerified,
    displayName,
    metadata: {
      creationTime,
      lastSignInTime,
    },
    refreshToken,
    providerData,
  }) {
    state.user = {
      uid,
      photoURL,
      email,
      emailVerified,
      displayName,
      metadata: {
        creationTime,
        lastSignInTime,
      },
      refreshToken,
      providerData,
    }
  },

  [types.RESET_TO_INITIAL_STATE] (state) {
    let reset = initialState()
    for (let k in state) {
      Vue.set(state, k, reset[k])
    }
  },
  [types.SET_PROJECT_LIST] (state, projects) {
    state.projects = { ...state.projects, ...projects }
  },
  [types.ADD_PROJECT_TO_STATE] (state, project) {
    // similar to SET_PROJECT_LIST should we get rid of one?
    state.projects = { ...state.projects, ...project }
  },
  [types.SET_SKILL_LIST] (state, skills) {
    state.skills = [...state.skills, ...skills]
  },
  [types.ADD_SKILL_TO_STATE] (state, skill) {
    // similar to SET_PROJECT_LIST should we get rid of one?
    state.skills = [ ...state.skills, skill ]
  },
  [types.FILTER_PROJECTS_BY_NAME] (state, nameFilter) {
    let filteredProjects = Object.keys(state.projects).filter(projectId => {
      console.log(state.projects[projectId].name.toUpperCase().includes(nameFilter))
      return state.projects[projectId].name.toUpperCase().includes(nameFilter)
    })
    state.filteredProjects = filteredProjects
  },
}
