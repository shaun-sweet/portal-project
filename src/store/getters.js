import get from 'lodash/get'
export default {

  isAuthed (state) {
    return Boolean(get(state, 'user.uid', false))
  },

  currentUser (state) {
    return get(state, 'user', null)
  },

}
