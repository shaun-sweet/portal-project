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
}
