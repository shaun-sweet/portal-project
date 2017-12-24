import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = process.env.firebaseConfig
firebase.initializeApp(firebaseConfig)

// https://vuejs.org/v2/guide/plugins.html
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export const Firestore = {
  firestore: firebase.firestore(),
  install (Vue, options) {
    Vue.prototype.$firestore = this.firestore
  },
}

export const Auth = {
  auth: firebase.auth(),
  install (Vue, options) {
    Vue.prototype.$auth = this.auth
  },
}
