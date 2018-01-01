import { firestore } from '@/firebase'
import { SET_PROJECT_LIST } from '@/store/mutation-types'
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
}
