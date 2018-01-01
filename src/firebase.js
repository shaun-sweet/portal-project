import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = process.env.firebaseConfig
firebase.initializeApp(firebaseConfig)

// https://vuejs.org/v2/guide/plugins.html
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export const firestore = firebase.firestore()
export const VueFirestore = {
  install (Vue, options) {
    Vue.prototype.$firestore = firestore
  },
}

export const auth = firebase.auth()
export const VueAuth = {
  auth,
  install (Vue, options) {
    Vue.prototype.$auth = auth
  },
}
